import mongoose from 'mongoose';
import ProductModel from '../models/ProductModel.js';

export const getProductById = async (req, res) => {
	const { id } = req.params;
	try {
		const product = await ProductModel.findById(id);
		res.status(200).json(product);
	} catch (error) {
		res.status(404).json({ message: 'Product Not Found!' });
	}
};

export const getProducts = async (req, res) => {
	const { page } = req.query;
	try {
		const LIMIT = 10;
		// get the starting index of every page
		const startIndex = (Number(page) - 1) * LIMIT;

		const total = await ProductModel.countDocuments({});
		const products = await ProductModel.find()
			.sort({ _id: -1 })
			.limit(LIMIT)
			.skip(startIndex);

		res.json({
			data: products,
			currentPage: Number(page),
			numberOfPages: Math.ceil(total / LIMIT),
		});
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
};

export const createProduct = async (req, res) => {
	const product = req.body;

	const newProduct = new ProductModel({
		...product,
		createdAt: new Date().toISOString(),
	});

	try {
		await newProduct.save();
		res.status(201).json(newProduct);
	} catch (error) {
		res.status(409).json(error.message);
	}
};

export const updateProduct = async (req, res) => {
	const { id: _id } = req.params;
	const product = req.body;

	if (!mongoose.Types.ObjectId.isValid(_id))
		return res.status(404).send('No Product with that id');

	const updatedProduct = await ProductModel.findByIdAndUpdate(
		_id,
		{ ...product, _id },
		{ new: true }
	);

	res.json(updatedProduct);
};

export const deleteProduct = async (req, res) => {
	const { id } = req.params;

	if (!mongoose.Types.ObjectId.isValid(id))
		return res.status(404).send('No Product with that id');

	await ProductModel.findByIdAndRemove(id);

	res.json({ message: 'Product deleted successfully' });
};

export const getProductsByUser = async (req, res) => {
	
	const { searchQuery } = req.query;
	try {
		const products = await ProductModel.find({
			creator: searchQuery,
		});
        console.log("🚀 ~ file: products.js ~ line 87 ~ getProductsByUser ~ products", products)
		res.json({ data: products });
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
};
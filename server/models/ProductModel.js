import mongoose from 'mongoose';

const ProductSchema = mongoose.Schema({
	title: String,
	img: String,
	price: Number,
	desc: String,
	qty: Number,
	creator: { 
		type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
	},
	createdAt: {
		type: Date,
		default: new Date(),
	},
});

const ProductModel = mongoose.model('ProductModel', ProductSchema);
export default ProductModel;

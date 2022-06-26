import express from 'express';
import {
    getProductById,
	getProducts,
	createProduct,
	updateProduct,
	deleteProduct,
	getProductsByUser
} from '../controllers/products.js';

const router = express.Router();

router.get('/user', getProductsByUser);
router.get('/list', getProducts);
router.get('/:id', getProductById);
router.post('/', createProduct);
router.patch('/:id', updateProduct);
router.delete('/:id', deleteProduct);

export default router;

import express from 'express';
import {
    getClientById,
	getClients,
	createClient,
	updateClient,
	deleteClient,
	getClientsByUser,
} from '../controllers/clients.js';

const router = express.Router();

router.get('/list', getClients);
router.get('/user', getClientsByUser);
router.get('/:id', getClientById);
router.post('/', createClient);
router.patch('/:id', updateClient);
router.delete('/:id', deleteClient);

export default router;

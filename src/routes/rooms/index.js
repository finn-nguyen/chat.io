import express from 'express';
import roomController from 'controllers/rooms';
import roomValidator from 'validators/room';

const router = express.Router();

router.post('/', roomValidator.create, roomController.create);
router.get('/', roomController.list);
router.get('/:id', roomValidator.get, roomController.get);

export default router;

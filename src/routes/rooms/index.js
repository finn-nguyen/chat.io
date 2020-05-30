import express from 'express';
import roomController from 'controllers/rooms';
import roomValidator from 'validators/room';
import messageRouter from 'routes/messages';
import useParam from 'middleware/use-param';

const router = express.Router();

router.post('/', roomValidator.create, roomController.create);
router.get('/', roomController.list);
router.get('/:id', roomValidator.get, roomController.get);

router.use('/:id/messages', useParam('id', 'roomId', Number), messageRouter);

export default router;

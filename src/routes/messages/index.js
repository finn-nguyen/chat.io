import express from 'express';
import messageController from 'controllers/messages';

const router = express.Router();

router.get('/', messageController.get);
router.post('/', messageController.create);

export default router;

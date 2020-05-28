import express from 'express';
import authController from 'controllers/auth';
import authValidator from 'validators/auth';

const router = express.Router();

router.post('/register', authValidator.register, authController.register);
router.post('/login', authValidator.login, authController.login);

export default router;

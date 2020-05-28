import express from 'express';
import authController from 'controllers/auth';
import authValidator from 'validators/auth';
import authenticate from 'middleware/authenticate';

const router = express.Router();

router.post('/register', authValidator.register, authController.register);
router.post('/login', authValidator.login, authController.login);
router.get('/authenticate', authenticate, (req, res, next) => {
  res.send('Authenticated');
});

export default router;

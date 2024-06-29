import express from 'express'
import { signin, signup } from '../controllers/userController.js';

const router = express.Router();

router.route('/signup', signup )
router.route('/signin', signin )

export default router;
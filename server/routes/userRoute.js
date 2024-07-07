import express from 'express'
import { signin, signup } from '../controllers/userController.js';
import { isAuthenticated } from '../middlewares/isAuthenticated.js';
import { isAuthorized } from '../middlewares/isAuthorized.js';

const router = express.Router();

router.route('/signup').post(signup)

router.route('/signin').post(signin)

// router.get('/admin', isAuthenticated, isAuthorized('admin'), (req, res) => {
//     res.send('Welcome, admin user!');
//   });

export default router;
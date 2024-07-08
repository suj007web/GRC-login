import express from 'express'
import { googleVerify, signin, signup } from '../controllers/userController.js';
import { isAuthenticated } from '../middlewares/isAuthenticated.js';
import { isAuthorized } from '../middlewares/isAuthorized.js';
import passport from 'passport';

const router = express.Router();

router.route('/signup').post(signup)

router.route('/signin').post(signin)

// router.get('/admin', isAuthenticated, isAuthorized('admin'), (req, res) => {
//     res.send('Welcome, admin user!');
//   });

// router.route('/googleLogin').post(googleVerify)

router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }), googleVerify);

router.get('/google/callback',
  passport.authenticate('google', { failureRedirect: '/' }),
  (req, res) => {
    res.redirect('http://localhost:5173/dashboard');
    // console.log("email"+ guser.email);
    // localStorage.setItem('guseremail', guser.email);
  }, googleVerify
);

router.get('/getMe', (req, res) => {
    res.send(req.user);
  });

export default router;
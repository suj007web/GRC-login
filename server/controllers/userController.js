import User from '../models/userModel.js'
import bcrypt from 'bcrypt'
import axios from 'axios'
import jwt from 'jsonwebtoken'

// const secretKey = process.env.CAPTCHA_SERVER_SITE_KEY;
const secretKey = '6Le9DQEqAAAAAJfvvgKU0ZAhAkqOU0f6y9rfJb97'

export const signup = async (req, res) => {
  const { email, password, recaptchValue } = req.body
  try {
    const verifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${recaptchValue}`
    const response = await axios.post(verifyUrl)
    // console.log(verifyUrl);
    if (!response.data.success) {
      return res.status(400).json({ error: 'Failed reCAPTCHA verification' })
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const newUser = new User({ email, password: hashedPassword })
    await newUser.save()
    res
      .status(201)
      .json({ success: true, message: 'User registered successfully' })
  } catch (err) {
    res.status(500).json({ success: false, error: 'Error creating user' })
  }
}

export const signin = async (req, res) => {
  const { email, password } = req.body

  try {
    const user = await User.findOne({ email })
    if (!user) {
      return res.status(400).json({ error: 'User not found' })
    }
    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) {
      return res.status(400).json({ error: 'Invalid password' })
    }
    const token = jwt.sign(
      { id: user._id, email: user.email, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    )
    // console.log("token: " + token)
    res
      .status(200)
      .json({ user: user, token: token, success: true, message: 'User signed in successfully' })
  } catch (error) {
    res.status(500).json({ error: 'Error signing in user' })
  }
}

export const googleVerify = async (req, res) => {
  const { email } = req.user;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ success: false, error: 'User not found. Please sign up first.' });
    }
    console.log(user);
    res.status(200).json({ success: true, user: user });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Failed to verify Google login token' });
  }
};

import User from '../models/userModel.js'
import bcrypt from 'bcrypt'
import axios from 'axios'

const secretKey = process.env.CAPTCHA_SERVER_SITE_KEY

export const signup = async (req, res) => {
  const { email, password, recaptchValue } = req.body
  try {
    const verifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${recaptchValue}`
    const response = await axios.post(verifyUrl)
    if (!response.data.success) {
      return res.status(400).json({ error: 'Failed reCAPTCHA verification' })
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const newUser = new User({ email, password: hashedPassword })
    await newUser.save()
    res.status(201).json({ message: 'User registered successfully' })
  } catch (err) {
    res.status(500).json({ error: 'Error creating user' })
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
    res.status(200).json({ message: 'User signed in successfully' })
  } catch (error) {
    res.status(500).json({ error: 'Error signing in user' })
  }
}

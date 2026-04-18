import { body } from 'express-validator'

export const contactValidators = [
  body('name')
    .isString()
    .trim()
    .isLength({ min: 2, max: 80 })
    .withMessage('Please enter your name.'),
  body('email')
    .isString()
    .trim()
    .isEmail()
    .withMessage('Please enter a valid email address.')
    .normalizeEmail(),
  body('message')
    .isString()
    .trim()
    .isLength({ min: 10, max: 2000 })
    .withMessage('Please enter a message (min 10 characters).')
]

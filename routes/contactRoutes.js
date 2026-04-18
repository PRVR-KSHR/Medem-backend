import express from 'express'
import { contactValidators } from '../middleware/validators/contactValidators.js'
import { validateRequest } from '../middleware/validateRequest.js'
import { submitContact } from '../controllers/contactController.js'

const router = express.Router()

router.post('/', contactValidators, validateRequest, submitContact)

export default router

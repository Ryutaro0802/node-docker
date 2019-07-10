import express from 'express'
import * as index from '../controllers/testController'
import * as auth from '../controllers/authController'

const router = express.Router()

router.get('/api', index.index)
router.get('/api/auth', auth.googleAuth)

export default router

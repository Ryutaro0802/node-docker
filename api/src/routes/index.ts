import express from 'express'
import * as index from '../controllers/testController'

const router = express.Router()

router.get('/api', index.index)

export default router

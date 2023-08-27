import { Router } from 'express'

import { auth } from '../controllers'

const router = Router()

router.get('/sign-up', auth.signUp)

export default router

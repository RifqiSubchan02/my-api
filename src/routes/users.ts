import { Router } from 'express'

const router = Router()

router.get('/', () => console.log('get user'))

export default router

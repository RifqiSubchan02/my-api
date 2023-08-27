import { Request, Response } from 'express'

import { myResponse } from '../utils'

const { successResponse } = myResponse

function signUp(req: Request, res: Response) {
  // const { email, password } = req.body

  successResponse({ req, res, message: 'Success sign up', status: 200 })
}

export default { signUp }

import 'dotenv/config'
import express, { Request, Response } from 'express'
import createError from 'http-errors'
import bodyParser from 'body-parser'
import cors from 'cors'

import { usersRoute, authRoute } from './routes'

const app = express()

app.use(bodyParser.json())
app.use(cors())

app.use('/api/auth', authRoute)
app.use('/api/users', usersRoute)

app.get('/api', (req: Request, res: Response) => res.send('Welcome to My API'))

app.use((req: Request, res: Response, next: Function) => {
  next(createError(404))
})

app.listen(process.env.PORT, () =>
  console.log(`⚡️ Server is running at https://localhost:${process.env.PORT}`)
)

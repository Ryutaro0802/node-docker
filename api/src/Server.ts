import cookieParser from 'cookie-parser'
import logger from 'morgan'
import express from 'express'
import passport from 'passport'
import index from './routes/index'
import { Request, Response, NextFunction } from 'express'

const app = express()

app.use((req: Request, res: Response, next: NextFunction) => {
    res.header('Access-Control-Allow-Origin', '*')
    next()
})
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(passport.initialize())
app.use('/', index)

export default app

import { Request, Response } from 'express'
import passport from 'passport'

export const googleAuth = (req: Request, res: Response) => {
    passport.authenticate('google', { session: false }, (req: Request, res: Response) => {

    })
}
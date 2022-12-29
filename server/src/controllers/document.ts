import { Request, Response } from "express"

export const getDoc = (req: Request, res: Response) => {
    console.log('You got access')
    res.json({ msg: "hello"})
}
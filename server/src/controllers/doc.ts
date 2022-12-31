import { Request, Response } from "express";
import Doc from "../models/doc";

export const getDoc = (req: Request, res: Response) => {
    console.log('You got access')
    res.json({ msg: "hello"})
};
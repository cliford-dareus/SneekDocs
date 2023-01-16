import { Request, Response } from "express";
import Doc from "../models/doc";

export const getDoc = (req: Request, res: Response) => {
    console.log('You got access')
    res.json({ msg: "hello"})
};

export const createDoc =async (req: Request, res: Response) => {
    const { name, content } = req.body;
    const { userId } = res.locals.jwtPayLoad;
    
    if(!content){
        console.log('Add some text')
        return
    } 

    const doc = await Doc.create({
        name,
        content,
        user: userId
    });

    res.status(201).json({ doc, msg: `Document saved`});
};
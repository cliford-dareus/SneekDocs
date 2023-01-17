import { Request, Response } from "express";
import Doc from "../models/doc";

export const getDoc = async (req: Request, res: Response) => {
    const { userId } = res.locals.jwtPayLoad;

    const docs = await Doc.find({
        user: userId
    });
    
    res.status(200).json(docs);
};

export const createDoc =async (req: Request, res: Response) => {
    const { name, content } = req.body;
    const { userId } = res.locals.jwtPayLoad;
    
    if(!content){
        console.log('Add some text')
        return
    };

    const doc = await Doc.create({
        name,
        content,
        user: userId
    });

    res.status(201).json({ doc, msg: `Document saved`});
};

export const updateDoc = async (req: Request, res: Response) => {
    const { name, content, id } = req.body;
    
    const doc = await Doc.findOneAndUpdate({ _id: id }, {
        name,
        content
    });

    res.status(200).json( doc );
};
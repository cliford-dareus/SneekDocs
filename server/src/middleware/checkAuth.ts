import { NextFunction, Request, Response } from "express";
import jwt from 'jsonwebtoken';



export const checkAuth = ( req: Request, res: Response, next: NextFunction) => {
    const token = <string>req.headers["auth"];
    let jwtPayload;

    try {
        jwtPayload = <any>jwt.verify(token, process.env.JWT_SECRET!);
        res.locals.jwtPayload = jwtPayload;
    } catch (error) {
        res.status(401).send();
    }

    const { userId, name } = jwtPayload;

    const newToken = jwt.sign({ userId, name }, process.env.JWT_SECRET!, {
    expiresIn: "1h"
  });
    res.setHeader("token", newToken);

  //Call the next middleware or controller
    next();
};
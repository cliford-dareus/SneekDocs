import { application, Request, Response } from "express";
import User from "../models/user";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';

const registerUser = async ( req:Request, res: Response ) => {
    const { name, email, password } = req.body;
    const isAlreadyExist =  await User.find({ email: email });
    
    if(isAlreadyExist.length > 0){
        throw Error('Email alredy exists');
    };
    
    const salt =  await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password, salt);

    const user = await User.create({
        name,
        email,
        password: hashPassword
    });

    res.status(200).json({ user });
};

const login = async ( req:Request, res: Response ) => {
    const { email, password} = req.body;

    
    if(!email || !password ) {
        throw Error("Please Provide an Email and Password")
    };

    const user = await User.findOne({ email: email });

    if(!user){
        throw Error("Invalid Credential")
    };

    const checkPassword = user.password;

    const isPasswordCorrect = bcrypt.compare(password, checkPassword!);

    if(!isPasswordCorrect){
        throw Error('Invalid Credentials');
    }

    const token = jwt.sign({ userId: user._id, name: user.name }, process.env.JWT_SECRET!)
    
    res.send(token)
}

export { registerUser, login };
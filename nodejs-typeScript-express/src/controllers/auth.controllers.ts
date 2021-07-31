import { Request, Response } from 'express';
import { getRepository } from 'typeorm';


export const signup = (req: Request, res: Response) => {
    return res.send('Welcome to nankim first app')
}

export const signin = () => {
    
}

export const profile = () => {
    
}
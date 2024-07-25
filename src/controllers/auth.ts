import type { Request, Response } from 'express';

export function login(req: Request, res: Response) {
    res.json({ message: "Login" })
}
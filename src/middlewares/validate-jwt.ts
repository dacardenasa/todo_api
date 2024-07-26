import type { NextFunction, Request, Response } from "express";
import jwt, { Secret } from "jsonwebtoken";

import User from "@models/user";

export async function validateJWT(req: Request, res: Response, next: NextFunction) {
    const token = req.header("x-token");
    if (!token) {
        return res.status(401).json({
            msg: "AuthToken is required"
        })
    }

    try {
        const uid = jwt.verify(token, process.env.SECRETORPRIVATEKEY as Secret);
        const authUser = await User.findById(uid);

        if (!authUser) {
            return res.status(401).json({
                msg: "user does not exist!"
            })
        }

        req.authUser = authUser;
        next();
    } catch(error) {
        console.log(error);
        return res.status(401).json({
            msg: "AuthToken is invalid"
        })
    }
}
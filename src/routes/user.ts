import Router from "express";
import { check } from "express-validator";

import { validateFields } from "@middlewares/validate-fields";
import { isUserAlreadyRegistered } from "@middlewares/validate-user";
import { register } from "@controllers/user";

const router = Router();

router.post(
  "/register",
  [
    check("username", "The username is required").notEmpty(),
    check("password", "The password is required").notEmpty(),
    isUserAlreadyRegistered,
    validateFields
  ],
  register
);

export default router;

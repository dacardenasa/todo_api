import Router from "express";
import { check } from "express-validator";

import { login } from "@controllers/auth";
import { validateFields } from "@middlewares/validate-fields";
import { hasUserAccount } from "@middlewares/validate-user";
import { isAuthenticated } from "@middlewares/validate-auth";

const router = Router();

router.post(
  "/login",
  [
    check("username", "The username is required").notEmpty(),
    check("password", "The password is required").notEmpty(),
    hasUserAccount,
    validateFields
  ],
  login
);

export default router;

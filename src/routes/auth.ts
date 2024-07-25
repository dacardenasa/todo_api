import { login } from "@controllers/auth";
import Router from "express";

const router = Router();

router.get("/login", [], login);

module.exports = router;

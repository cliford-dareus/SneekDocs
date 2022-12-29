import express from "express";
import { getDoc } from "../controllers/document";
import { checkAuth } from "../middleware/checkAuth";

const router = express.Router();

router.get('/doc', checkAuth, getDoc);

export default router;
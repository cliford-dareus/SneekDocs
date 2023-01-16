import express from "express";
import { createDoc, getDoc } from "../controllers/doc";
import { checkAuth } from "../middleware/checkAuth";

const router = express.Router();

router.route('/create').post( checkAuth, createDoc);

export default router;
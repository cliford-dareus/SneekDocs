import express from "express";
import { createDoc, getDoc, updateDoc } from "../controllers/doc";
import { checkAuth } from "../middleware/checkAuth";

const router = express.Router();

router.route('/create').post( checkAuth, createDoc);
router.route('/').get( checkAuth, getDoc);
router.route('/edit').patch( checkAuth, updateDoc );

export default router;
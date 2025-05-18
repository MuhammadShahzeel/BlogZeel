import express from "express";
import { getResources, createResource } from "../controllers/resource.controller.js";

const router = express.Router();

router.get("/", getResources);
router.post("/", createResource);

export default router;

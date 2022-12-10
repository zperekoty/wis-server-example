import { Router } from "express";

import { sendMessage } from "../controllers";

const router = Router();

router.post("/api/sendMessage", sendMessage);

export default router;

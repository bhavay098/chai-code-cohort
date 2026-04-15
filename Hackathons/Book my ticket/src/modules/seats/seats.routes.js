import express from "express";
import { fetchSeats, book } from "./seats.controller.js";
import { auth } from "../../common/middleware/auth.middleware.js";

const router = express.Router();

router.get("/seats", fetchSeats);
router.put("/:id/:name", auth, book);

export default router;
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

import authRoutes from "./modules/auth/auth.routes.js";
import seatRoutes from "./modules/seats/seats.routes.js";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(cors());
app.use(express.json());

app.use("/", authRoutes);
app.use("/", seatRoutes);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../index.html"));
});

app.listen(8080, () => console.log("Server running on 8080"));
import express, { json } from "express";
import cors from "cors";
import router from "./routes/routes.js";
import "dotenv/config";
const app = express();
app.use(cors());
app.use(json());
app.use("/api/v1", router);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`API running on port ${PORT}`));

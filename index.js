import express, { json } from "express";
import cors from "cors";
import router from "./routes/routes.js";
import "dotenv/config";
import path from "path";

const app = express();
app.use(cors());
app.use(json());
// Serve API docs HTML page
app.get("/", (req, res) => {
  res.sendFile(path.resolve(process.cwd(), "./public/api-docs.html"));
});

//api endpoints
app.use("/api/v1", router);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`API running on port ${PORT}`));

import { charSet, charToToken, tokenToChar } from "../constants/charSet.js";
import express from "express";
const router = express.Router();

// Text to token
router.post("/text-to-token", (req, res) => {
  const { text } = req.body;
  if (typeof text !== "string")
    return res.status(400).json({ error: "Invalid text input." });
  try {
    const tokens = Array.from(text).map((c) => charToToken[c] ?? null);
    if (tokens.includes(null))
      return res.status(400).json({ error: "Unsupported character detected." });
    res.json({ tokens });
  } catch (e) {
    res.status(500).json({ error: "Tokenization failed." });
  }
});

// Token to text
router.post("/token-to-text", (req, res) => {
  const { tokens } = req.body;
  if (!Array.isArray(tokens))
    return res.status(400).json({ error: "Invalid tokens input." });
  try {
    const text = tokens.map((t) => tokenToChar[t] ?? "").join("");
    res.json({ text });
  } catch (e) {
    res.status(500).json({ error: "Decoding failed." });
  }
});

// Character mapping viewer
router.get("/char-mapping", (req, res) => {
  res.json({ mapping: charSet.map((c, i) => ({ char: c, token: i })) });
});

// Export tokens/text
router.post("/export", (req, res) => {
  const { type, data } = req.body;
  if (!["text", "tokens"].includes(type))
    return res.status(400).json({ error: "Invalid export type." });
  let content;
  if (type === "text") content = data;
  else if (type === "tokens") content = JSON.stringify(data);
  res.setHeader(
    "Content-Disposition",
    `attachment; filename=export.${type === "text" ? "txt" : "json"}`
  );
  res.send(content);
});

export default router;

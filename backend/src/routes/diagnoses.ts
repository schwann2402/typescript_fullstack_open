import express from "express";
import DiagnosisService from "../services/diagnoses";

const router = express.Router();

router.get("/", (_req, res) => {
  res.send(DiagnosisService.getAll());
});

export default router;

/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import express from "express";
import patientService from "../services/patients";
import { toNewPatient } from "../utils";

const router = express.Router();

router.get("/", (_req, res) => {
  res.send(patientService.getNonSensitiveData());
});

router.get("/:id", (req, res) => {
  console.log(req.params);
  const patient = patientService.getSpecificPatient(req.params.id);
  console.log(patient);
  res.send(patient);
});

router.post("/", (req, res) => {
  try {
    const newPatient = toNewPatient(req.body);

    const addedPatient = patientService.addPatient(newPatient);
    res.json(addedPatient);
  } catch (error: unknown) {
    let errorMessage = "Something went wrong.";
    if (error instanceof Error) {
      errorMessage += "Error: " + error.message;
    }
    res.status(400).send(errorMessage);
  }
});
export default router;

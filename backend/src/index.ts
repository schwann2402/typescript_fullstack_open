import express from "express";
import cors from "cors";
import DiagnoseRouter from "./routes/diagnoses";
import PatientRouter from "./routes/patients";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/api/ping", (_req, res) => {
  res.send("pong");
});

app.use("/api/diagnoses", DiagnoseRouter);
app.use("/api/patients", PatientRouter);
const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

/* eslint-disable react-hooks/exhaustive-deps */
import { useParams } from "react-router-dom";
import patientService from "../../services/patients";
import { Diagnosis, Patient } from "../../types";
import { useEffect, useState } from "react";
import FemaleIcon from "@mui/icons-material/Female";
import MaleIcon from "@mui/icons-material/Male";
import EntryDetails from "../Entry/EntryDetails";

const SinglePatient = () => {
  const [patient, setPatient] = useState<Patient>();
  const [diagnoses, setDiagnoses] = useState<Diagnosis[]>();
  const id = useParams().id;

  useEffect(() => {
    (async () => {
      const data = await patientService.getPatient(id);
      setPatient(data);
    })();
    (async () => {
      const data = await patientService.getDiagnoses();
      setDiagnoses(data);
    })();
  }, []);

  if (patient) {
    return (
      <div>
        <h2>Patient information</h2>
        <h2>
          <b>{patient.name}</b>
          {patient.gender === "male" ? <MaleIcon /> : <FemaleIcon />}
        </h2>
        <div> Ssn: {patient.ssn}</div>
        <div> Occupation: {patient.occupation}</div>
        <br />
        {patient.entries.map((entry) => {
          console.log(entry);
          return (
            <div key={entry.id}>
              <div>
                <b>{entry.date}</b> <i>{entry.description}</i>
              </div>
              <div>
                <ul>
                  {entry.diagnosisCodes?.map((d) => (
                    <li key={d}>
                      {d} {diagnoses?.find((diag) => diag.code === d)?.name}
                    </li>
                  ))}
                </ul>
                <EntryDetails entry={entry} />
              </div>
            </div>
          );
        })}
      </div>
    );
  }

  return null;
};

export default SinglePatient;

/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { NewPatient, NonSensitivePatientInfo, Patient } from "../types";
import patients from "../../data/patients";
import { v1 as uuid } from "uuid";
// eslint-disable-next-line @typescript-eslint/no-unsafe-call
const id = uuid();

const getNonSensitiveData = (): NonSensitivePatientInfo[] => {
  return patients.map(
    ({ id, name, dateOfBirth, gender, occupation, entries }) => {
      return {
        id,
        name,
        dateOfBirth,
        gender,
        occupation,
        entries,
      };
    }
  );
};

const addPatient = (patient: NewPatient): Patient => {
  const newPatient = {
    id,
    ...patient,
  };

  patients.push(newPatient);
  return newPatient;
};

const getSpecificPatient = (id: string): Patient | null => {
  const patient = patients.find((p) => p.id === id);
  if (patient) {
    return patient;
  }
  return null;
};

export default {
  getNonSensitiveData,
  getSpecificPatient,
  addPatient,
};

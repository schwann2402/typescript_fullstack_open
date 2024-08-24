/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { Gender, NewPatient } from "./types";

export const toNewPatient = (object: unknown): NewPatient => {
  if (!object || typeof object !== "object") {
    throw new Error("Incorrect or missing data");
  }

  if (
    "name" in object &&
    "dateOfBirth" in object &&
    "ssn" in object &&
    "gender" in object &&
    "occupation" in object
  ) {
    const newPatient: NewPatient = {
      name: parseName(object.name),
      dateOfBirth: parseDateOfBirth(object.dateOfBirth),
      ssn: parseSsn(object.ssn),
      gender: parseGender(object.gender),
      occupation: parseOccupation(object.occupation),
      entries: [],
    };

    return newPatient;
  }

  throw new Error("Incorrect data: some fields are missing");
};

const isString = (text: unknown): text is string => {
  return typeof text === "string" || text instanceof String;
};

const isName = (name: unknown): name is string => {
  return typeof name === "string";
};

const parseName = (name: unknown): string => {
  if (!isString(name) || !isName(name)) {
    throw new Error("Name is invalid: " + name);
  }

  return name;
};

const isDateOfBirth = (date: string): boolean => {
  return Boolean(Date.parse(date));
};

const parseDateOfBirth = (date: unknown): string => {
  if (!isString(date) || !isDateOfBirth(date)) {
    throw new Error("Date is invalid: " + date);
  }
  return date;
};

const isSsn = (ssn: unknown): ssn is string => {
  return typeof ssn === "string";
};

const parseSsn = (ssn: unknown): string => {
  if (!isString(ssn) || !isSsn(ssn)) {
    throw new Error("Invalid ssn :" + ssn);
  }
  return ssn;
};

const isGender = (gender: string): gender is Gender => {
  return Object.values(Gender)
    .map((g) => g.toString())
    .includes(gender);
};

const parseGender = (gender: unknown): Gender => {
  if (!isString(gender) || !isGender(gender)) {
    throw new Error("Invalid gender : " + gender);
  }
  return gender;
};

const isOccupation = (occupation: unknown): occupation is string => {
  return typeof occupation === "string";
};

const parseOccupation = (occupation: unknown): string => {
  if (!isString(occupation) || !isOccupation(occupation)) {
    throw new Error("Invalid occupation :" + occupation);
  }
  return occupation;
};

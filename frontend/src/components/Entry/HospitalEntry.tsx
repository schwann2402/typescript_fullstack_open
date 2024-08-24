interface HospitalEntry {
  discharge: Discharge;
}

interface Discharge {
  date: string;
  criteria: string;
}

const HospitalEntry: React.FC<{ entry: HospitalEntry }> = ({ entry }) => {
  return (
    <div>
      <b>Discharge: </b>
      <br />
      Criteria: {entry.discharge.criteria}
      <br />
      Date: {entry.discharge.date}
    </div>
  );
};

export default HospitalEntry;

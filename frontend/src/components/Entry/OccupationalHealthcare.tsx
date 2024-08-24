interface SickLeave {
  startDate: string;
  endDate: string;
}

interface OccupationalHealthcareEntry {
  employerName: string;
  sickLeave?: SickLeave;
}

const OccupationalHealthcare: React.FC<{
  entry: OccupationalHealthcareEntry;
}> = ({ entry }) => {
  return (
    <div>
      <div>Employer: {entry.employerName}</div>
      <div>
        <b>Sick Leave</b>
        <br />
        <b>From: </b>
        {entry.sickLeave?.startDate} <b>To: </b>
        {entry.sickLeave?.endDate}
      </div>
    </div>
  );
};

export default OccupationalHealthcare;

enum HealthCheckRating {
  "Healthy" = 0,
  "LowRisk" = 1,
  "HighRisk" = 2,
  "CriticalRisk" = 3,
}

interface HospitalEntry {
  healthCheckRating: HealthCheckRating;
}

const HealthCheck: React.FC<{ entry: HospitalEntry }> = ({ entry }) => {
  return <div>Health Rating: {entry.healthCheckRating}</div>;
};

export default HealthCheck;

export interface Diagnosis {
  code: string;
  name: string;
  latin?: string;
}

export enum Gender {
  Male = "male",
  Female = "female",
  Other = "other"
}

export interface Patient {
  id: string;
  name: string;
  occupation: string;
  gender: Gender;
  ssn?: string;
  dateOfBirth?: string;
}

export type PatientFormValues = Omit<Patient, "id">;

//--

interface BaseDiagnosisEntry {
  id: string;
  description: string;
  date: string;
  specialist: string;
  diagnosisCodes?: Array<Diagnosis['code']>; 
  // the diagnosis code is based on the `code` attribute
  // from the Diagnosis type
}
interface Hospital extends BaseDiagnosisEntry {
  type: 'Hospital';
  discharge?: {
    date: string;
    criteria: string;
  };
}

interface OccupationalHealthcare extends BaseDiagnosisEntry {
  type: 'OccupationalHealthcare';
  employerName: string;
  sickLeave?: {
    startDate: string;
    endDate: string;
  };
}

interface HealthCheck extends BaseDiagnosisEntry {
  type: 'HealthCheck';
  healthCheckRating: HealthCheckRating;
}

export enum HealthCheckRating{
  "Healthy" = 0,
  "LowRisk" = 1,
  "HighRisk" = 2,
  "CriticalRisk" = 3
}

export type DiagnosisEntry = Hospital | OccupationalHealthcare| HealthCheck;
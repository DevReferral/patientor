import React from 'react';
import { DiagnosisEntry } from '../../../types';
import { assertNever } from '../../../utils';
import HealthCheckEntry from './HealthCheckEntry';
import HospitalEntry from './HospitalEntry';
import OccupationalHealthCareEntry from './OccupationalHealthCareEntry';

interface PropTypes{
  entryType :DiagnosisEntry['type'],
  formEntry:Partial<DiagnosisEntry>,
  setFormEntry:React.Dispatch<React.SetStateAction<Partial<DiagnosisEntry>>>
}
const OptionalDiagnosisEntry = ({entryType,formEntry,setFormEntry}:PropTypes) => {
  
  const OptionalEntry =null
   
    switch (entryType) {
      case 'HealthCheck':
        return <HealthCheckEntry formEntry={formEntry} setFormEntry={setFormEntry} />;
      case 'Hospital':
        return <HospitalEntry formEntry={formEntry} setFormEntry={setFormEntry} />;
      case 'OccupationalHealthcare':
        return <OccupationalHealthCareEntry formEntry={formEntry} setFormEntry={setFormEntry} />;
      default:
        assertNever(entryType);
    }

  return (
   OptionalEntry
  )
}

export default OptionalDiagnosisEntry
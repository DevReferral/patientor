import React from 'react';
import { assertNever } from '../../../utils';
import HealthCheckEntry from './HealthCheckEntry';
import HospitalEntry from './HospitalEntry';
import OccupationalHealthCareEntry from './OccupationalHealthCareEntry';

const OptionalDiagnosisEntry = ({entryType,entry,setEntry}) => {
  
  const optionalEntry =null
   
    switch (entryType) {
      case 'HealthCheck':
        return <HealthCheckEntry entry={entry} setEntry={setEntry} />;
      case 'Hospital':
        return <HospitalEntry entry={entry} setEntry={setEntry} />;
      case 'OccupationalHealthcare':
        return <OccupationalHealthCareEntry entry={entry} setEntry={setEntry} />;
      default:
        return assertNever(entryType);
    }

  return (
   optionalEntry
  )
}

export default OptionalDiagnosisEntry
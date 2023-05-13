
import { DiagnosisEntry } from '../../types';
import { assertNever } from '../../utils';
import CommonDiagnosisEntry from './CommonDiagnosisEntry';

const EntryDetails = ({entry}:{entry:DiagnosisEntry}) => {
   
   let details =null

   switch (entry.type) {

    case "HealthCheck":
      details =<>
       <div> Health Check Rating :{entry.healthCheckRating}</div>
      </>
    break;
    case "Hospital":
      details = <>
       {entry.discharge && (<>
          <div>Date of Discharge :{entry.discharge.date}</div>
          <div>Criteria for Discharge :{entry.discharge.criteria}</div>
       </>)}
      </>
      break;
    case "OccupationalHealthcare":
      details = <> 
      
      <div>Employer : {entry.employerName}</div>
      {entry.sickLeave && 
       <div>
         start date: {entry.sickLeave.startDate} <br/>
         end date: {entry.sickLeave.endDate}
        </div>
        }
  
      </>
      break;
    default:
     return  assertNever(entry)
   }
  
  return (
    <>
       <CommonDiagnosisEntry entry={entry}/>
       {details}
       <hr/>
    </>
  )
}

export default EntryDetails
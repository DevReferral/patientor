
import { DiagnosisEntry } from '../../types';
import { assertNever } from '../../utils';
import CommonDiagnosisEntry from './CommonDiagnosisEntry';

const EntryDetails = ({entry}:{entry:DiagnosisEntry}) => {
   
  let details =null
  
  try{
     
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
      <div style={{ borderRadius:"1rem",border:"black solid 0.2rem",padding:"1rem",margin:"1rem"}}>
        <CommonDiagnosisEntry entry={entry}/>
        {details}
      </div>
    )
  }
  catch(err) {
      let errorMessage="Error : "
      if(err instanceof Error ) 
        errorMessage+=err.message;
      else 
        errorMessage+=" Unknown Error : "+JSON.stringify(err,null,2);
    console.log(`Error: ${errorMessage}`)
      return (
        <li>
          <h2 style={{border:"red 0.4rem solid"}}>
            Entries Cannot Be Displayed Right Now
          </h2>
        </li>
      );
    }

}

export default EntryDetails
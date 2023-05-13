
import { DiagnosisEntry } from '../../types';
import { assertNever } from '../../utils';
import CommonDiagnosisEntry from './CommonDiagnosisEntry';

const EntryDetails = ({entry}:{entry:DiagnosisEntry}) => {
   
   let details =null

   switch (entry.type) {

    case "HealthCheck":
      details =<>
      
      </>
    break;
    case "Hospital":
      details = <> </>
      break;
    case "OccupationalHealthcare":
      details = <> </>
      break;
    default:
     return  assertNever(entry)
   }
  
  return (
    <>
       <CommonDiagnosisEntry entry={entry}/>
       {details}
    </>
  )
}

export default EntryDetails
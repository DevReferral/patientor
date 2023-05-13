
import { DiagnosisEntry } from '../../types';
import CommonDiagnosisEntry from './CommonDiagnosisEntry';

const EntryDetails = ({entry}:{entry:DiagnosisEntry}) => {
   
   let details =null
  
  return (
    <>
       <CommonDiagnosisEntry entry={entry}/>
       {details}
    </>
  )
}

export default EntryDetails
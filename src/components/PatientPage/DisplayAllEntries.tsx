import { DiagnosisEntry } from '../../types';
import EntryDetails from './EntryDetails';

const DisplayAllEntries = ({entries}:{entries:DiagnosisEntry[]}) => {
  if(entries.length === 0) return <></>
  
  return (
      <> 
        <h3 style={{fontFamily:"sans-serif"}}>Entries:</h3>
        {entries.map(e =><EntryDetails entry={e}/>)}
      </>
  )
}

export default DisplayAllEntries
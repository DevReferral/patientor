import React from 'react';
import { BaseDiagnosisEntryWithoutId, DiagnosisEntry } from '../../../types';
interface PropTypes{
  
  formEntry:Partial<BaseDiagnosisEntryWithoutId>,
  setFormEntry:React.Dispatch<React.SetStateAction<Partial<DiagnosisEntry>>>
}
const CommonEntry = ({formEntry,setFormEntry}:PropTypes) => {
   
 console.log("The form entry is ",JSON.stringify(formEntry,null,2));

 const styles={
  
  inputForm:{ width:"50%", 
  display: 'grid',
   gridTemplateColumns: '0.5fr 1fr', 
   gap: '1rem', 
   alignItems:'flex-start' 
  }

 }

  return (
 <div style={styles.inputForm}>
  <label htmlFor='description'>Description:</label>
  <input
    type='text'
    id='description'
    value={formEntry.description}
    onChange={({ target }) => {
      setFormEntry(state => ({ ...state, description: target.value }))
    }}
  />
  <label htmlFor='date'>Date:</label>
  <input type='date' id='date' defaultValue={new Date().toISOString().slice(0, 10)} />
</div>
  )
}

export default CommonEntry
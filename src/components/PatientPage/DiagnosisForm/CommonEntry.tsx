import React from 'react';
import { BaseDiagnosisEntryWithoutId, DiagnosisEntry } from '../../../types';
interface PropTypes{
  
  formEntry:Partial<BaseDiagnosisEntryWithoutId>,
  setFormEntry:React.Dispatch<React.SetStateAction<Partial<DiagnosisEntry>>>
}
const CommonEntry = ({formEntry,setFormEntry}:PropTypes) => {
   
 console.log("The form entry is ",JSON.stringify(formEntry,null,2));

 const styles={
  
  inputForm:{ width:"40%", 
  display: 'grid',
   gridTemplateColumns: '0.5fr 1fr', 
   gap: '1rem', 
   alignItems:'flex-start' 
  }

 }


function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
  const { name, value } = event.target;
  setFormEntry(prevForm =>({...prevForm, [name]:value}));
}

return(
  <div style={styles.inputForm} onChange={handleInputChange}>
      <label htmlFor='description'>Description:</label>
      <input
        type='text'
        id='description'
        name='description'
        value={formEntry.description}
      />
      <label htmlFor='date'>Date:</label>
      <input name="date" type='date' id='date' defaultValue={new Date().toISOString().slice(0, 10)} />

      <label htmlFor='specialist'>Specialist : </label>
      <input name="specialist" id="specialist" type="text" value={formEntry.specialist}/>
  </div>
)
}

export default CommonEntry
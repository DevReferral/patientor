import React from 'react';
import { BaseDiagnosisEntryWithoutId, DiagnosisEntry } from '../../../types';
interface PropTypes{
  
  formEntry:Partial<BaseDiagnosisEntryWithoutId>,
  setFormEntry:React.Dispatch<React.SetStateAction<Partial<DiagnosisEntry>>>
}
const CommonEntry = ({formEntry,setFormEntry}:PropTypes) => {
   
 console.log("The form entry is ",JSON.stringify(formEntry,null,2));

  return (
   <>
  <label htmlFor='description' >Description:</label>  
  <input type='text' 
    id='description'
    value={formEntry.description} 
    onChange={({target})=>{setFormEntry(state => ({...state,description:target.value}))}}/>
  <hr/>
   </>
  )
}

export default CommonEntry
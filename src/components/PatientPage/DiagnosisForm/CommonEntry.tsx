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
    <input type='text' 
    value={formEntry.description} 
    onChange={({target})=>{setFormEntry(state => ({...state,description:target.value}))}}/>
   
   </>
  )
}

export default CommonEntry
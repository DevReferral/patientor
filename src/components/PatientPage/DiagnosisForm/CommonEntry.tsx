import React from 'react';
import { DiagnosisEntry, DiagnosisEntryWithoutId } from '../../../types';
interface PropTypes{
  
  formEntry:Partial<DiagnosisEntryWithoutId>,
  setFormEntry:React.Dispatch<React.SetStateAction<Partial<DiagnosisEntry>>>
}
const CommonEntry = ({formEntry,setFormEntry}:PropTypes) => {
  return (
    <div>CommonEntry</div>
  )
}

export default CommonEntry
import React from 'react';
import { DiagnosisEntry } from '../../../types';
interface PropTypes{
  
  formEntry:Partial<DiagnosisEntry>,
  setFormEntry:React.Dispatch<React.SetStateAction<Partial<DiagnosisEntry>>>
}
const CommonEntry = ({formEntry,setFormEntry}:PropTypes) => {
  return (
    <div>CommonEntry</div>
  )
}

export default CommonEntry
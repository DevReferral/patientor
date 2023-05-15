import React from 'react'
import { DiagnosisEntry } from '../../../types'
interface PropTypes{
   
   formEntry: Partial<DiagnosisEntry>,
   setFormEntry: React.Dispatch<React.SetStateAction<Partial<DiagnosisEntry>>>

}
const OccupationalHealthCareEntry = ({formEntry,setFormEntry}:PropTypes) => {
  return (
    <div>OccupationalHealthCareEntry</div>
  )
}

export default OccupationalHealthCareEntry
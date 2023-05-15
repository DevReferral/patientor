import React from 'react'
import { DiagnosisEntry } from '../../../types'
interface PropTypes{
   
   formEntry: Partial<DiagnosisEntry>,
   setFormEntry: React.Dispatch<React.SetStateAction<Partial<DiagnosisEntry>>>

}
const HospitalEntry = ({formEntry,setFormEntry}:PropTypes) => {
  return (
    <div>HospitalEntry</div>
  )
}

export default HospitalEntry
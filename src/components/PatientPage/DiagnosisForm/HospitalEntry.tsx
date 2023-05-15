import React from 'react'
import { DiagnosisEntry } from '../../../types'
interface PropTypes{
   
   entry: Partial<DiagnosisEntry>,
   setEntry: React.Dispatch<React.SetStateAction<Partial<DiagnosisEntry>>>

}
const HospitalEntry = ({entry,setEntry}:PropTypes) => {
  return (
    <div>HospitalEntry</div>
  )
}

export default HospitalEntry
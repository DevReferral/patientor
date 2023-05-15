import React from 'react'
import { DiagnosisEntry } from '../../../types'
interface PropTypes{
   
   entry: Partial<DiagnosisEntry>,
   setEntry: React.Dispatch<React.SetStateAction<Partial<DiagnosisEntry>>>

}
const OccupationalHealthCareEntry = ({entry,setEntry}:PropTypes) => {
  return (
    <div>OccupationalHealthCareEntry</div>
  )
}

export default OccupationalHealthCareEntry
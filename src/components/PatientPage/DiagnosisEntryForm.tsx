import React, { useState } from 'react'
import { DiagnosisEntry } from '../../types'

const DiagnosisEntryForm = () => {

  const [entryType,setEntryType] =useState<DiagnosisEntry['type']>("HealthCheck")
  
  const types:DiagnosisEntry['type'][] = ['HealthCheck','Hospital','OccupationalHealthcare']
  
  return (
    <div style={{border:"0.2rem black dashed",padding:"1rem"}}>
     <h2>New {entryType} Entry</h2>

      {


      }

    </div>
  )
}

export default DiagnosisEntryForm
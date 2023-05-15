import React, { useState } from 'react'
import { DiagnosisEntry } from '../../types'

const DiagnosisEntryForm = () => {

  const [entryType,setEntryType] =useState<DiagnosisEntry['type']>("HealthCheck")
  
  const types:DiagnosisEntry['type'][] = ['HealthCheck','Hospital','OccupationalHealthcare']
  
  return (
    <div>
     <h2>New {entryType} Entry</h2>


    </div>
  )
}

export default DiagnosisEntryForm
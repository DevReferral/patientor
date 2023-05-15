import React, { useState } from 'react'
import { DiagnosisEntry } from '../../types'

const DiagnosisEntryForm = () => {

  const [entryType,setEntryType] =useState<DiagnosisEntry>()

  return (
    <div>
     <h2>New {} Entry</h2>


    </div>
  )
}

export default DiagnosisEntryForm
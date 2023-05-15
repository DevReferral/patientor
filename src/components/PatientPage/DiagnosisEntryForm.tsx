import { Box, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material'
import React, { useState } from 'react'
import { DiagnosisEntry } from '../../types'

const DiagnosisEntryForm = () => {

  const [entryType,setEntryType] =useState<DiagnosisEntry['type']>("HealthCheck")
  
  const types:DiagnosisEntry['type'][] = ['HealthCheck','Hospital','OccupationalHealthcare']
  
 const handleChange = (event: SelectChangeEvent) => {
  
    console.log(event.target.value);
  };
  
  return (
    <div style={{border:"0.2rem black dashed",padding:"1rem"}}>
      <div>
           <InputLabel id="demo-simple-select-label">Select Entry Type</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={entryType}
          label="DiagnosisType"
          onChange={handleChange}
        >

           {types.map((type) => (<MenuItem value={type}>{type}</MenuItem>))}
        
        </Select>

      </div>
     <h2>New {entryType} Entry</h2>



    </div>
  )
}

export default DiagnosisEntryForm
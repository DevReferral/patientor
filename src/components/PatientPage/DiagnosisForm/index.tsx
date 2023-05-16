import { InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material'
import { FormEvent, useState } from 'react'
import { DiagnosisEntry } from '../../../types'
import CommonEntry from './CommonEntry'

import OptionalDiagnosisEntry from './OptionalDiagnosisEntry'

const DiagnosisEntryForm = () => {

  const [entryType,setEntryType] =useState<DiagnosisEntry['type']>("HealthCheck")
  
  const types:DiagnosisEntry['type'][] = ['HealthCheck','Hospital','OccupationalHealthcare']
  
  const handleChange = (event: SelectChangeEvent) =>setEntryType(event.target.value as DiagnosisEntry['type'])
  
  const [formEntry,setFormEntry] = useState<Partial<DiagnosisEntry>>({});
      
  const onFormSubmit = (event: FormEvent) =>{
     event.preventDefault();
     console.log("Form to Submit : ",JSON.stringify(formEntry, null, 2));
  }

  return (
    <>
    <form onSubmit={onFormSubmit} >
      <div style={{margin:"1rem 1rem 0 0 "}}>
            <InputLabel id="demo-simple-select-label">Select Entry Type</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={entryType}
            onChange={handleChange}
          >
            {types.map((type) => (<MenuItem key={type} value={type}>{type}</MenuItem>))}       
          </Select>
        </div>
        <hr/>
      <div style={{border:"0.2rem black dashed",padding:"1rem"}}>
      
      <h2>New {entryType} Entry</h2>
      <CommonEntry  
        formEntry={formEntry} 
        setFormEntry={setFormEntry}/>
        
      <OptionalDiagnosisEntry
        entryType={entryType} 
        formEntry={formEntry} 
        setFormEntry={setFormEntry}
        />

      </div>
    </form>
    </>
  )
}



export default DiagnosisEntryForm
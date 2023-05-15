import { InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material'
import { useCallback, useMemo, useState } from 'react'
import { DiagnosisEntry, DiagnosisEntryWithoutId } from '../../../types'
import { assertNever } from '../../../utils'
import CommonEntry from './CommonEntry'
import HealthCheckEntry from './HealthCheckEntry'
import HospitalEntry from './HospitalEntry'
import OccupationalHealthCareEntry from './OccupationalHealthCareEntry'

const DiagnosisEntryForm = () => {

  const [entryType,setEntryType] =useState<DiagnosisEntry['type']>("HealthCheck")
  
  const types:DiagnosisEntry['type'][] = ['HealthCheck','Hospital','OccupationalHealthcare']
  
  const handleChange = (event: SelectChangeEvent) =>setEntryType(event.target.value as DiagnosisEntry['type'])
  
  const [diagnosisFormEntry,setDiagnosisFormEntry] = useState<Partial<DiagnosisEntry>>({});
  
  const getDiagnosisEntry = useCallback((type: DiagnosisEntry['type']) => {
  switch (type) {
    case 'HealthCheck':
      return <HealthCheckEntry entry={diagnosisFormEntry} setEntry={setDiagnosisFormEntry} />;
    case 'Hospital':
      return <HospitalEntry entry={diagnosisFormEntry} setEntry={setDiagnosisFormEntry} />;
    case 'OccupationalHealthcare':
      return <OccupationalHealthCareEntry entry={diagnosisFormEntry} setEntry={setDiagnosisFormEntry} />;
    default:
      return assertNever(type);
  }
}, [diagnosisFormEntry]);

  return (
    <>
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
     <CommonEntry/>
     {
       getDiagnosisEntry(entryType)
     }
     {/* {entryType==='HealthCheck' ? <HealthCheckEntry entry={diagnosisFormEntry} setEntry={setDiagnosisFormEntry}/>:''}
     {entryType==='Hospital' ?<HospitalEntry entry={diagnosisFormEntry} setEntry={setDiagnosisFormEntry}/>:''}
     {entryType==='OccupationalHealthcare'?<OccupationalHealthCareEntry entry={diagnosisFormEntry} setEntry={setDiagnosisFormEntry}/>:''} */}
    </div>
    </>
  )
}



export default DiagnosisEntryForm
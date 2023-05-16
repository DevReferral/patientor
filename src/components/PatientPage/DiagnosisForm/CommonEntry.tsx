import { Checkbox, InputLabel, ListItemText, MenuItem, OutlinedInput, Select } from '@mui/material';
import React from 'react';
import { BaseDiagnosisEntryWithoutId } from '../../../types';
interface PropTypes{
  
  formEntry:Partial<BaseDiagnosisEntryWithoutId>,
  handleInputChange:(event: React.ChangeEvent<HTMLInputElement>)=>void;
}
const CommonEntry = ({formEntry,handleInputChange}:PropTypes) => {
   
 console.log("The form entry is ",JSON.stringify(formEntry,null,2));

 const styles={
  
  inputForm:{ width:"40%", 
  display: 'grid',
   gridTemplateColumns: '0.5fr 1fr', 
   gap: '1rem', 
   alignItems:'flex-start' 
  }

 }

return(
  <div style={styles.inputForm} onChange={handleInputChange}>
      <label htmlFor='description'>Description:</label>
      <input
        type='text'
        id='description'
        name='description'
        value={formEntry.description}
      />
      <label htmlFor='date'>Date:</label>
      <input name="date" type='date' id='date' defaultValue={new Date().toISOString().slice(0, 10)} />

      <label htmlFor='specialist'>Specialist : </label>
      <input name="specialist" id="specialist" type="text" value={formEntry.specialist}/>

       <InputLabel id="demo-multiple-checkbox-label">Tag</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={formEntry.diagnosisCodes??[]}
          input={<OutlinedInput label="Tag" />}
          renderValue={(selected) => selected.join(', ')}
        >
          {/* {names.map((name) => (
            <MenuItem key={name} value={name}>
              <Checkbox 
              checked={ formEntry.diagnosisCodes ? formEntry.diagnosisCodes.indexOf(name) > -1:false} 
              />
              <ListItemText primary={name} />
            </MenuItem>
          ))} */}
        </Select> 
  </div>
)
}

export default CommonEntry

import FemaleIcon from '@mui/icons-material/Female';
import MaleIcon from '@mui/icons-material/Male';
import { Patient } from "../../types";
import EntryDetails from './EntryDetails';
interface PropTypes{
  patient:Patient|null
}

const PatientDetails = ({patient}:PropTypes) => {
   
  if(patient===null) return <></>;

  return (
    <>
      <h2>{patient.name} {patient.gender==='male'?<MaleIcon/>:<FemaleIcon/>}</h2>

      {patient.ssn ? <h3>{`ssn : ${patient.ssn}`}</h3>:'' }
        <h3>Occupation : {patient.occupation}</h3>  
      <hr/>
      <h3 style={{fontFamily:"sans-serif"}}>Entries:</h3>
      {patient.entries.map(e =><EntryDetails entry={e}/>)}
    </>
  )

}

export default PatientDetails
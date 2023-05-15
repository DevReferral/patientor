
import FemaleIcon from '@mui/icons-material/Female';
import MaleIcon from '@mui/icons-material/Male';
import { Patient } from "../../types";
import DiagnosisEntryForm from './DiagnosisForm';
import DisplayAllEntries from './DisplayAllEntries';
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
       <DiagnosisEntryForm/>
      <hr/>
      <DisplayAllEntries entries={patient.entries} /> 
    </>
  )

}

export default PatientDetails

import FemaleIcon from '@mui/icons-material/Female';
import MaleIcon from '@mui/icons-material/Male';
import { Patient } from "../../types";
interface PropTypes{
  patient:Patient
}

const PatientDetails = ({patient}:PropTypes) => {

  
  return (
    <>
      <h2>{patient.name} {patient.gender==='male'?<MaleIcon/>:<FemaleIcon/>}</h2>

      {patient.ssn ? <h3>{`ssn : ${patient.ssn}`}</h3>:'' }
        <h3>Occupation : {patient.occupation}</h3>  

    </>
  )

}

export default PatientDetails
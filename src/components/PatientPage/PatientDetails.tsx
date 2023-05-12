
import { Patient } from "../../types"

interface PropTypes{
  patient:Patient|null
}

const PatientDetails = ({patient}:PropTypes) => {

  
  if(!patient) return<h2> No Patient Information Present </h2>
  
  return (
    <>
      <h2>{patient.name} {patient.gender==='male'?<></>:<></>}</h2>

      {patient.ssn ? <h3>{`ssn : ${patient.ssn}`}</h3>:'' }
        <h3>Occupation : {patient.occupation}</h3>  

    </>
  )

}

export default PatientDetails

import { Patient } from "../../types"

interface PropTypes{
  patient:Patient|null
}

const PatientDetails = ({patient}:PropTypes) => {

  
  if(!patient) return<h2> No Patient Information Present </h2>
  
  return (
    <>
      <h2>{patient.name}</h2>

      {patient.ssn ? <h3>`ssh:${patient.ssn}`</h3>:'' }
        <h3>Occupation : {patient.occupation}</h3>  

    </>
  )

}

export default PatientDetails
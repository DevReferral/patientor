import { Patient } from "../../types"

const PatientDetails = (patient:Patient) => {
  
  
  return (
    <>
      <h2>{patient.name}</h2>

      {patient.ssn ? <h3>`ssh:${patient.ssn}`</h3>:'' }
        <h3>Occupation : {patient.occupation}</h3>  

    </>
  )

}

export default PatientDetails
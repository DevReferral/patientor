
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import patients from '../../services/patients'
import { Patient } from '../../types'
import { getErrorMessage } from '../../utils'
import PatientDetails from './PatientDetails'

const PatientPage = () => {
   
  const {id} = useParams()
  
  const[patient,setPatient] = useState<Patient|null>(null)

  const [error,setError] = useState('')
  
  const setErrorMessageWithTimeout = (errorMessage: string, timeout_in_ms: number) => {
 
    setError(errorMessage);

  setTimeout(() => {
    setError('');
  }, timeout_in_ms);
};

  useEffect(() => {
    
    //if id is present , set patient in component load

    if(id) {

        patients.getOne(id)
        .then(data => setPatient(data))
        .catch((err) => {
          
          const errorMsg = getErrorMessage(err);
          setErrorMessageWithTimeout(errorMsg,2000)
          
        })
    }

  },[id])
   
  return (
    <>
     {error && <div style={{border:"1rem red solid"}}>{error}</div>}
     
     {patient ? <PatientDetails patient={patient}/>:<div>Loading...</div> }
     
     
    </>
  )
}

export default PatientPage
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import patients from '../../services/patients'
import { Patient } from '../../types'
import PatientDetails from './PatientDetails'

const PatientPage = () => {
   
  const {id} = useParams()
  
  const[patient,setPatient] = useState<Patient|null>(null)

  const [error,setError] = useState('')
  
  useEffect(() => {
    
    //if id is present , set patient in component load

    if(id) {

        patients.getOne(id)
        .then(data => setPatient(data))
        .catch((err) =>{
            
          if(axios.isAxiosError(err)) {


          }


        
        })
    }

  },[])
   
  return (
    <>
     <PatientDetails patient={patient}/>
    </>
  )
}

export default PatientPage
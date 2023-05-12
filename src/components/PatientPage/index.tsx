import React, { useState } from 'react'
import { Patient } from '../../types'
import PatientDetails from './PatientDetails'

const PatientPage = () => {
   
  const[patient,setPatient] = useState<Patient|null>(null)

   
  return (
    <>
     <PatientDetails patient={patient}/>
    </>
  )
}

export default PatientPage
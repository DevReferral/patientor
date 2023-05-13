import { useEffect, useState } from "react";
import diagnosisService from '../../services/diagnosis';
import { BaseDiagnosisEntry, Diagnosis } from "../../types";
const CommonDiagnosisEntry = ({entry}:{entry:BaseDiagnosisEntry}) => {
  
    const[diagnosis,setDiagnosis] =useState<Diagnosis[]>([]);

  
    useEffect(() => {
      
       diagnosisService
       .getAll()
       .then((data) =>  setDiagnosis(data))
       .catch((error) =>  console.error("Count not fetch diagnosis codes : "+error.message));
      
    })
  
 
  return (
    <div>
    
      <div>date: {entry.date}</div>
      <div>description: {entry.description} </div>
      <div>specialist: {entry.specialist}</div> 
      <ul>
      {entry.diagnosisCodes?.map(code =>
     
      <li key={code}>{code} : { 
      <DisplayDiagnosisDescription code={code} diagnosis={diagnosis}/>}</li> )
      }
     
      </ul>
    </div>
  )

}

export default CommonDiagnosisEntry;


const DisplayDiagnosisDescription =({code,diagnosis}:{code:Diagnosis['code'],diagnosis:Diagnosis[]})=>{
  
  if(!code || !diagnosis.length)return<></>

  const diagnosisDescription=diagnosis.find( d => d.code===code);

  return (<span>{diagnosisDescription?diagnosisDescription.name:''}</span>)
}
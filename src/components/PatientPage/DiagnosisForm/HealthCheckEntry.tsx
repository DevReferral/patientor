import { DiagnosisEntry } from "../../../types";

interface PropTypes{
   
   formEntry: Partial<DiagnosisEntry>,
   setFormEntry: React.Dispatch<React.SetStateAction<Partial<DiagnosisEntry>>>

}
const HealthCheckEntry = ({formEntry,setFormEntry}:PropTypes) => {
  return (
    <div>HealthCheckEntry</div>
  )
}

export default HealthCheckEntry
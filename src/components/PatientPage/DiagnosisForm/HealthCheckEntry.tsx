import { DiagnosisEntry } from "../../../types";

interface PropTypes{
   
   entry: Partial<DiagnosisEntry>,
   setEntry: React.Dispatch<React.SetStateAction<Partial<DiagnosisEntry>>>

}
const HealthCheckEntry = ({entry,setEntry}:PropTypes) => {
  return (
    <div>HealthCheckEntry</div>
  )
}

export default HealthCheckEntry
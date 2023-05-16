import axios from "axios";
import { DiagnosisEntryWithoutId, Patient, PatientFormValues } from "../types";

import { apiBaseUrl } from "../constants";

const getAll = async () => {
  const { data } = await axios.get<Patient[]>(
    `${apiBaseUrl}/patients`
  );

  return data;
};

const getOne= async (id:string) =>{
   const {data} = await axios.get<Patient>(
    `${apiBaseUrl}/patients/${id}`
    );

   return data;
}

const create = async (object: PatientFormValues) => {
  const { data } = await axios.post<Patient>(
    `${apiBaseUrl}/patients`,
    object
  );

  return data;
};

const createDiagnosisEntry = async (id:string,object: DiagnosisEntryWithoutId) => {

    const { data } = await axios.post<Patient>(
    `${apiBaseUrl}/patients/${id}/entries`,
    object
  );

  return data;
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getAll, 
  getOne,
  create,
  createDiagnosisEntry
};


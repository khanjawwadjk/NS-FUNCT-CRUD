import axios from "axios";

const URL = "http://127.0.0.1:4001/details";

export const getData = async() =>{
    return await axios.get(URL);
}

export const postData = async(data) =>{
    return await axios.post(URL, data);

}

export const delRecordAPI = async(id) =>{
    await axios.delete(`${URL}/${id}`);
}
export const getDataByIdAPI = async(id) =>{
    return await axios.get(`${URL}/${id}`);
}

export const putData = async(id,data) =>{
    return await axios.put(`${URL}/${id}`, data);
}
import request from "supertest";
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjAwMzlhMjkwLTM4NzUtNDg2Yy1hNDI2LTBlM2RmNDNlNjZkOCIsImNvbXBhbnlJZCI6IjM3NTY2MDQ4LTA5ZTgtNGI3NS1iYmZjLTBhZTUwZmVjNzYwZSIsImlhdCI6MTcwODYwOTc0Nn0.4ufGVr01QsRNRpprqXMkfLWqYfTURciu_CxQ9wlrSq4"
import { baseUrl } from "../../data/config.js";


async function getCustomersAll(){
    const response = await request(baseUrl)
    .get("/customers")
    .set('Authorization', `Bearer ${token}`)
    return (await response)
}

async function getCustomersbyID(parameterID){
    const response = await request(baseUrl)
    .get(`/customers/`+ `${parameterID}`)
    .set('Authorization', `Bearer ${token}`)
    return (await response)
}

async function getCustomersByWrongID(wrongparameterID){
    const response = await request(baseUrl)
    .get(`/customers/`+ `${wrongparameterID}`)
    .set('Authorization', `Bearer ${token}`)
    return (await response)
}

export const getCustomers = {
    all : getCustomersAll,
    trueID : getCustomersbyID,
    wrongID : getCustomersByWrongID
}
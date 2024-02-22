import request from "supertest";
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjAwMzlhMjkwLTM4NzUtNDg2Yy1hNDI2LTBlM2RmNDNlNjZkOCIsImNvbXBhbnlJZCI6IjM3NTY2MDQ4LTA5ZTgtNGI3NS1iYmZjLTBhZTUwZmVjNzYwZSIsImlhdCI6MTcwODYwOTc0Nn0.4ufGVr01QsRNRpprqXMkfLWqYfTURciu_CxQ9wlrSq4"
import { baseUrl } from "../../data/config.js";

async function updateID(parameterID,payload){
    const response = await request(baseUrl)
    .put(`/units/`+ parameterID )
    .set('Authorization', `Bearer ${token}`)
    .send(payload)            
    return (await response)
}


export const updateUnits = {
    update : updateID,
}
import request from "supertest";
import { baseUrl } from "../../data/config.js";
const token =  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjAwMzlhMjkwLTM4NzUtNDg2Yy1hNDI2LTBlM2RmNDNlNjZkOCIsImNvbXBhbnlJZCI6IjM3NTY2MDQ4LTA5ZTgtNGI3NS1iYmZjLTBhZTUwZmVjNzYwZSIsImlhdCI6MTcwODYwOTc0Nn0.4ufGVr01QsRNRpprqXMkfLWqYfTURciu_CxQ9wlrSq4"

async function createID(payload){
    const response = await request(baseUrl)
    .post("/customers")
    .set('Authorization', `Bearer ${token}`)
    .send(payload)            
    return (await response)
}


export const createCustomers = {
    create : createID,
}
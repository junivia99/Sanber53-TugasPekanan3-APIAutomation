import request from "supertest";
import {expect} from "chai";

const baseUrl = "https://kasir-api.belajarqa.com";
let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjAwMzlhMjkwLTM4NzUtNDg2Yy1hNDI2LTBlM2RmNDNlNjZkOCIsImNvbXBhbnlJZCI6IjM3NTY2MDQ4LTA5ZTgtNGI3NS1iYmZjLTBhZTUwZmVjNzYwZSIsImlhdCI6MTcwODUxNTk4Mn0.qJQ3L31rPEJJf-Gp4jmw3-mv40G_VFbRGOOEzZ2PI-8";
const parameterID ="bd3d4286-8a43-4c39-8656-1d19f7b909a7"


describe("Update Customers", () => {

it('Positive - success update customer',async() => {
    const payload = {
        "name": "sabilla",
        "phone": "081234567890",
        "address": "Tuban",
        "description": "Sabilla anak Bambang"
    }         
        const response = await request(baseUrl)
        
    
        expect((await response).status).to.equal(200)
        console.log((await response).body)
})

it('Negative -  failed update customer',async() => {
    const payload = {
        "name": "",
        "phone": "081234567890",
        "address": "Surabaya",
        "description": ""
    }         
        const response = await request(baseUrl)
        .put(`/customers/`+ `${parameterID}`)
        .set('Authorization', `Bearer ${token}`)
        .send(payload)            
    
        expect((await response).status).to.equal(400)
        console.log((await response).body)
})
})
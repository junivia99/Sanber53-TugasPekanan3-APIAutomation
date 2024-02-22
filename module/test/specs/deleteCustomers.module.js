import request from "supertest";
import {expect} from "chai";

const baseUrl = "https://kasir-api.belajarqa.com";
let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjAwMzlhMjkwLTM4NzUtNDg2Yy1hNDI2LTBlM2RmNDNlNjZkOCIsImNvbXBhbnlJZCI6IjM3NTY2MDQ4LTA5ZTgtNGI3NS1iYmZjLTBhZTUwZmVjNzYwZSIsImlhdCI6MTcwODUxNTk4Mn0.qJQ3L31rPEJJf-Gp4jmw3-mv40G_VFbRGOOEzZ2PI-8";
const parameterID ="bd3d4286-8a43-4c39-8656-1d19f7b909a7";
const wrongparameterID ="bd3d4286"


describe("Delete Customers", () => {

it('Positive -  success delete customer',async() => {       
        
        const response = await request(baseUrl)
        .delete(`/customers/`+ `${parameterID}`)
        .set('Authorization', `Bearer ${token}`)         
    
        expect((await response).status).to.equal(200)
        console.log((await response).body)
})

it('Negative -  failed delete customer',async() => {

        const response = await request(baseUrl)
        .delete(`/customers/`+ `${wrongparameterID}`)
        .set('Authorization', `Bearer ${token}`)           
    
        expect((await response).status).to.equal(404)
        console.log((await response).body)
})
})
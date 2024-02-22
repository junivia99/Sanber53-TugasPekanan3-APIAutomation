import request from "supertest";
import {expect} from "chai";

const baseUrl = "https://kasir-api.belajarqa.com";
let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjAwMzlhMjkwLTM4NzUtNDg2Yy1hNDI2LTBlM2RmNDNlNjZkOCIsImNvbXBhbnlJZCI6IjM3NTY2MDQ4LTA5ZTgtNGI3NS1iYmZjLTBhZTUwZmVjNzYwZSIsImlhdCI6MTcwODUxNTk4Mn0.qJQ3L31rPEJJf-Gp4jmw3-mv40G_VFbRGOOEzZ2PI-8";



describe("Create New Customers", () => {

it('Positive - success create customer',async() => {
    const payload = {
        "name": "lisa",
        "phone": "081234567890",
        "address": "Surabaya",
        "description": "Lisa Blackpink"
    }         
        const response = await request(baseUrl)
        .post("/customers")
        .set('Authorization', `Bearer ${token}`)
        .send(payload)            
    
        expect((await response).status).to.equal(201)
        console.log((await response).body)
})

it('Negative -  failed create customer',async() => {
    const payload = {
        "name": "",
        "phone": "081234567890",
        "address": "Surabaya",
        "description": ""
    }         
        const response = await request(baseUrl)
        .post("/customers")
        .set('Authorization', `Bearer ${token}`)
        .send(payload)            
    
        expect((await response).status).to.equal(400)
        console.log((await response).body)
})
})
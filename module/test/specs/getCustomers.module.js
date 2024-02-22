import request from "supertest";
import {expect} from "chai";
import { createToken } from "../function/createToken.spec.js";
import { getCustomers } from "../function/getCustomers.spec.js";
import { baseUrl } from "../../data/config.js";

const parameterID ="a781e748-baba-4f7f-acfc-855cb1cda470";
const wrongparameterID ="1239370ae8bc";
const parameterName = "Budi";
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjAwMzlhMjkwLTM4NzUtNDg2Yy1hNDI2LTBlM2RmNDNlNjZkOCIsImNvbXBhbnlJZCI6IjM3NTY2MDQ4LTA5ZTgtNGI3NS1iYmZjLTBhZTUwZmVjNzYwZSIsImlhdCI6MTcwODUyMjc1MX0.LyzBLh3sIQ8ebV9uxzpo6pzLiSNkUnxr9DmsHHRtSzU"

describe("CRUD Endpoint Customers", () => {

it('Positive - success get all customers',async() => {
    const response = await getCustomers.all()
    console.log((await response).body)
    
    expect((await response).status).to.equal(200)
    console.log((await response).body)
        })
    
it('Positive - success get customers with parameter',async() => {
    const response = await getCustomers.trueID(parameterID)
    console.log((await response).body)
        
    expect((await response).status).to.equal(200)
    console.log((await response).body)
    })
it('Negative - success get customers with wrong parameter',async() => {
    const response = await getCustomers.wrongID(wrongparameterID)
    console.log((await response).body)

    expect((await response).status).to.equal(404)
    console.log((await response).body)
    })

})
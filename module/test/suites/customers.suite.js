import request from "supertest";
import {expect} from "chai";
import { getCustomers } from "../function/getCustomers.spec.js";
import { updateCustomers } from "../function/updateCustomers.spec.js";
import { createCustomers } from "../function/createCustomers.spec.js";
import { deleteCustomers } from "../function/deleteCustomers.spec.js";

describe("End to End - Customers", () => {

it('Positive - success create customer',async() => {
    const payload = {
        "name": "lisa",
        "phone": "081234567890",
        "address": "Surabaya",
        "description": "Lisa Blackpink"
    }           
    const response = await createCustomers.create(payload)
    console.log((await response).body)
                
    expect((await response).status).to.equal(201)
    console.log((await response).body)
})

it('Negative - failed create customer',async() => {
    const payload = {
        "name": "",
        "phone": "081234567890",
        "address": "Surabaya",
        "description": ""
    }           
    const response = await createCustomers.create(payload)
    console.log((await response).body)
                
    expect((await response).status).to.equal(400)
    console.log((await response).body)
})

it('Positive - success get all customers',async() => {
    const response = await getCustomers.all()
    console.log((await response).body)
    
    expect((await response).status).to.equal(200)
    console.log((await response).body)
        })
    
it('Positive - success get customers with parameter',async() => {
    const parameterID ="17f70f9e-9619-4fbb-b297-960c76cca782";
    const response = await getCustomers.trueID(parameterID)
    console.log((await response).body)
        
    expect((await response).status).to.equal(200)
    console.log((await response).body)
    })
it('Negative - success get customers with wrong parameter',async() => {
    const wrongparameterID ="1239370ae8bc";
    const response = await getCustomers.wrongID(wrongparameterID)
    console.log((await response).body)

    expect((await response).status).to.equal(404)
    console.log((await response).body)
    })
it('Positive - success update customer',async() => {
    const payload = {
        "name": "sabilla",
        "phone": "081234567890",
        "address": "Tuban",
        "description": "Sabilla anak Bambang"
    }         
    const parameterID ="a781e748-baba-4f7f-acfc-855cb1cda470";
    const response = await updateCustomers.update(parameterID,payload)
    console.log((await response).body)
            
    expect((await response).status).to.equal(200)
    console.log((await response).body)
    })
it('Negative - failed update customer',async() => {
    const payload = {
        "name": "",
        "phone": "081234567890",
        "address": "Surabaya",
        "description": ""
    }         
    const parameterID ="a781e748-baba-4f7f-acfc-855cb1cda470";
    const response = await updateCustomers.update(parameterID,payload)
    console.log((await response).body)
            
    expect((await response).status).to.equal(400)
    console.log((await response).body)
    })

it('Positive - success delete customer',async() => {
        
    const parameterID ="a781e748-baba-4f7f-acfc-855cb1cda470";
    const response = await deleteCustomers.delete(parameterID)
    console.log((await response).body)
            
    expect((await response).status).to.equal(200)
    console.log((await response).body)
    })

it('Negative - failed delete customer',async() => {
        
    const parameterID ="a781e748";
    const response = await deleteCustomers.delete(parameterID)
    console.log((await response).body)
                
    expect((await response).status).to.equal(404)
    console.log((await response).body)
})

})
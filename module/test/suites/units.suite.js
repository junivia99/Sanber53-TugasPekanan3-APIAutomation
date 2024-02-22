import request from "supertest";
import {expect} from "chai";
import { createUnit } from "../function/createUnits.spec.js";
import { getUnits } from "../function/getUnits.spec.js";
import { updateUnits } from "../function/updateUnits.spec.js";
import { deleteUnits } from "../function/deleteUnits.spec.js";

describe("End to End - Units", () => {

it('Positive - success create units',async() => {
    const payload = {
        "name": "gram",
        "description": "weight measurement"
     }
     
     
    const response = await createUnit.create(payload)
    console.log((await response).body)
                
    expect((await response).status).to.equal(201)
    console.log((await response).body)
})

it('Negative - failed create units',async() => {
    const payload = {
        "name": "",
        "description": "weight measurement"
     }
     
     const response = await createUnit.create(payload)
    console.log((await response).body)
                
    expect((await response).status).to.equal(400)
    console.log((await response).body)
})

it('Positive - success get all units',async() => {
    const response = await getUnits.getall()
    console.log((await response).body)
    
    expect((await response).status).to.equal(200)
    console.log((await response).body)
        })
    
it('Positive - success get units with parameter',async() => {
    const parameterID ="0c98498e-92c2-4013-b0b8-c6ad243af6c0";
    const response = await getUnits.getID(parameterID)
    console.log((await response).body)
        
    expect((await response).status).to.equal(200)
    console.log((await response).body)
    })
it('Negative - success get units with wrong parameter',async() => {
    const wrongparameterID ="1239370ae8bc";
    const response = await getUnits.getID(wrongparameterID)
    console.log((await response).body)

    expect((await response).status).to.equal(404)
    console.log((await response).body)
    })
it('Positive - success update units',async() => {
    const payload = {
        "name": "gram",
        "description": "desc weight measurement"
     }     
    const parameterID ="ce73cf4c-1a46-43e1-87b1-f775c8da6fe3";
    const response = await updateUnits.update(parameterID,payload)
    console.log((await response).body)
            
    expect((await response).status).to.equal(200)
    console.log((await response).body)
    })
it('Negative - failed update units',async() => {
    const payload = {
        "name": "gram",
        "description": "desc weight measurement"
     }        
    const parameterID ="a781e748";
    const response = await updateUnits.update(parameterID.payload)
    console.log((await response).body)
            
    expect((await response).status).to.equal(400)
    console.log((await response).body)
    })

it('Positive - success delete units',async() => {
        
    const parameterID ="ce73cf4c-1a46-43e1-87b1-f775c8da6fe3";
    const response = await deleteUnits.delete(parameterID)
    console.log((await response).body)
            
    expect((await response).status).to.equal(200)
    console.log((await response).body)
    })

it('Negative - failed delete units',async() => {
        
    const parameterID ="a781e748";
    const response = await deleteUnits.delete(parameterID)
    console.log((await response).body)
                
    expect((await response).status).to.equal(404)
    console.log((await response).body)
})

})
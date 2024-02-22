import request from "supertest";
import {expect} from "chai";
import { createUser } from "../function/createUsers.spec.js";
import { getUsers } from "../function/getUsers.spec.js";
import { updateUsers } from "../function/updateUsers.spec.js";
import { deleteUsers } from "../function/deleteUsers.spec.js";

describe("End to End - Users", () => {

it('Positive - success create users',async() => {
    const payload = {
        "name": "kasir-serbaguna",
        "email": "user@example.com",
        "password": "jiasda2321@"
     }
     
    const response = await createUser.create(payload)
    console.log((await response).body)
                
    expect((await response).status).to.equal(201)
    console.log((await response).body)
})

it('Negative - failed create users',async() => {
    const payload = {
        "name": "",
        "email": "user@example.com",
        "password": ""
     }
     
    const response = await createUser.create(payload)
    console.log((await response).body)
                
    expect((await response).status).to.equal(400)
    console.log((await response).body)
})

it('Positive - success get all users',async() => {
    const response = await getUsers.getall()
    console.log((await response).body)
    
    expect((await response).status).to.equal(200)
    console.log((await response).body)
        })
    
it('Positive - success get users with parameter',async() => {
    const parameterID ="34b6d02d-8400-45ed-ad49-bcbf0695d416";
    const response = await getUsers.getID(parameterID)
    console.log((await response).body)
        
    expect((await response).status).to.equal(200)
    console.log((await response).body)
    })
it('Negative - success get users with wrong parameter',async() => {
    const wrongparameterID ="1239370ae8bc";
    const response = await getUsers.getID(wrongparameterID)
    console.log((await response).body)

    expect((await response).status).to.equal(404)
    console.log((await response).body)
    })
it('Positive - success update users',async() => {
    const payload = {
        "name": "via",
        "email": "viar@example.com",
        "password": "27861"
     }       
    const parameterID ="e6effb9a-8582-4c2b-bc36-d0c48307de0d";
    const response = await updateUsers.update(parameterID,payload)
    console.log((await response).body)
            
    expect((await response).status).to.equal(200)
    console.log((await response).body)
    })
it('Negative - failed update users',async() => {
    const payload = {
        "name": "via",
        "email": "viar@example.com",
        "password": "27861"
     }          
    const parameterID ="a781e748";
    const response = await updateUsers.update(parameterID,payload)
    console.log((await response).body)
            
    expect((await response).status).to.equal(404)
    console.log((await response).body)
    })

it('Positive - success delete users',async() => {
        
    const parameterID ="e6effb9a-8582-4c2b-bc36-d0c48307de0d";
    const response = await deleteUsers.delete(parameterID)
    console.log((await response).body)
            
    expect((await response).status).to.equal(200)
    console.log((await response).body)
    })

it('Negative - failed delete users',async() => {
        
    const parameterID ="a781e748";
    const response = await deleteUsers.delete(parameterID)
    console.log((await response).body)
                
    expect((await response).status).to.equal(404)
    console.log((await response).body)
})

})
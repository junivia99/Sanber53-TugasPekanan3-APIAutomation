import request from "supertest";
import {expect} from "chai";
import { createProduct } from "../function/createProducts.spec.js";
import { getProducts } from "../function/getProducts.spec.js";
import { updateProducts } from "../function/updateProducts.spec.js";
import { deleteProducts } from "../function/deleteProducts.spec.js";

describe("End to End - Products", () => {

it('Positive - success create products',async() => {
    const payload = {
        "category_id" : "811f547e-a24e-4f94-bfe1-b7ed7d11c03f",
        "code": "A314ASDDFIER3432",
        "name": "taro",
        "price": "3500",
        "cost": "3000",
        "stock": "5"
     }     
     
    const response = await createProduct.create(payload)
    console.log((await response).body)
                
    expect((await response).status).to.equal(201)
    console.log((await response).body)
})

it('Negative - failed create products',async() => {
    const payload = {
        "category_id" : "",
        "code": "",
        "name": "taro",
        "price": "3500",
        "cost": "3000",
        "stock": "5"
     }  
     
     const response = await createProduct.create(payload)
    console.log((await response).body)
                
    expect((await response).status).to.equal(400)
    console.log((await response).body)
})

it('Positive - success get all products',async() => {
    const response = await getProducts.getall()
    console.log((await response).body)
    
    expect((await response).status).to.equal(200)
    console.log((await response).body)
        })
    
it('Positive - success get products with parameter',async() => {
    const parameterID ="b6067edd-7274-4ca4-bdb9-aaf0faafffe7";
    const response = await getProducts.getID(parameterID)
    console.log((await response).body)
        
    expect((await response).status).to.equal(200)
    console.log((await response).body)
    })
it('Negative - success get products with wrong parameter',async() => {
    const wrongparameterID ="1239370ae8bc";
    const response = await getProducts.getID(wrongparameterID)
    console.log((await response).body)

    expect((await response).status).to.equal(404)
    console.log((await response).body)
    })
it('Positive - success update products',async() => {
    const payload = {
        "category_id" : "811f547e-a24e-4f94-bfe1-b7ed7d11c03f",
        "code": "A314ASDDFIER3432",
        "name": "taro matcha",
        "price": "35000",
        "cost": "30000",
        "stock": "10"
     }      
    const parameterID ="0b05cd0f-c5fe-4810-bfb0-5c26c7b7225c";
    const response = await updateProducts.update(parameterID,payload)
    console.log((await response).body)
            
    expect((await response).status).to.equal(200)
    console.log((await response).body)
    })
it('Negative - failed update products',async() => {
    const payload = {
        "category_id" : "",
        "code": "",
        "name": "taro matcha",
        "price": "35000",
        "cost": "30000",
        "stock": "10"
     }       
    const parameterID ="a781e748";
    const response = await updateProducts.update(parameterID,payload)
    console.log((await response).body)
            
    expect((await response).status).to.equal(400)
    console.log((await response).body)
    })

it('Positive - success delete products',async() => {
        
    const parameterID ="0b05cd0f-c5fe-4810-bfb0-5c26c7b7225c";
    const response = await deleteProducts.delete(parameterID)
    console.log((await response).body)
            
    expect((await response).status).to.equal(200)
    console.log((await response).body)
    })

it('Negative - failed delete products',async() => {
        
    const parameterID ="a781e748";
    const response = await deleteProducts.delete(parameterID)
    console.log((await response).body)
                
    expect((await response).status).to.equal(404)
    console.log((await response).body)
})

})
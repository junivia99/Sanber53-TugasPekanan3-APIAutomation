import request from "supertest";
import {expect} from "chai";

const baseUrl = "https://kasir-api.belajarqa.com";
let token;

describe("Get Token", () => {
it('Positive - success get token',async() => {
    const payload = {
        "email": "sample@ex.com",
        "password": "123adsfadf@",
    }
    
    const response = await request(baseUrl)
        .post("/authentications")
        .send(payload)
        .set("Content-type","application/json")

    expect((await response).status).to.equal(201)
    token = console.log((await response).body)
    console.log(await token)
    
    })
})
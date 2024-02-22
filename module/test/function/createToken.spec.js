import request from "supertest";
import { baseUrl } from "../../data/config.js";

export async function createToken(){
    const payload = {
        "email": "sample@ex.com",
        "password": "123adsfadf@",
    }
    
    const response = await request(baseUrl)
        .post("/authentications")
        .send(payload)
        .set("Content-type","application/json")

    token = console.log((await response).body.accessToken)
    expect((await response).status).to.equal(201)
    return token
}
const request = require("supertest");
const {expect} = require("chai");

const baseUrl = "https://kasir-api.belajarqa.com";


describe("Get All User", () => {
it('Positive - success get all customers',() => {
    const response = request(baseUrl)
        .get("/customers")

    expect(response.status).to.equal(200)
    })
})
/// <reference types="cypress" />

import { usersRoute } from "../../api/routes";
import { usersPayload } from "../../api/payloads/usersPayload";
import { usersResponse } from "../../api/responses/usersResponse";
import {
    excludeFieldsCreateUser,
    excludeFieldsUpdateUser
} from "../../api/constants"
import { usersSchema } from "../../api/schemas/usersSchema";

describe("create a user ", () => {
    it('should validate the response of the Create Users endpoint', () => {
        cy.postRequest(usersRoute(), usersPayload("create")).then(response => {
            expect(response.status).to.equal(201);
            expect(response.body).excludingEvery(excludeFieldsCreateUser()).to.deep.equal(usersResponse("create"))
            expect(response.body).to.be.jsonSchema(usersSchema("create"));
        });
    });
});

describe("update a user", () => {
    it('should validate the response of the Update Users endpoint', () => {
        cy.postRequest(usersRoute(), usersPayload("create")).then(user => {
            expect(user.status).to.equal(201);                              //create a new user
            let userId = user.body.id                                       //get the user id of the previous created user 
            cy.putRequest(`${usersRoute()}/${userId}`, usersPayload("update")).then(response => {   // modify the user with a put
                expect(response.status).to.equal(200);                      //assert status
                expect(response.body).excludingEvery(excludeFieldsUpdateUser()).to.deep.equal(usersResponse("update")); //assert all parmaeters
                expect(response.body).to.be.jsonSchema(usersSchema("create"));   //assert the schema
            })
        });
    });
});
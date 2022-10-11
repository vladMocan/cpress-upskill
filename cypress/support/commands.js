
const BASE_API_URL = Cypress.config("baseApiUrl");

//cretes a get request
Cypress.Commands.add("getRequest", (endpoint) => {
    const props = {
        method: 'GET',
        url: BASE_API_URL + endpoint,
    };

    cy.request(props);
});

//create a post request
Cypress.Commands.add("postRequest", (endpoint, payload) => {
    const props = {
        method: 'POST',
        url: BASE_API_URL + endpoint,
        body: payload
    };

    cy.request(props);

});

//create a put request
Cypress.Commands.add("putRequest", (endpoint, payload) => {
    const props = {
        method: 'PUT',
        url: BASE_API_URL + endpoint,
        body: payload
    };

    cy.request(props);
});

//create deleteRequest
Cypress.Commands.add("deleteRequest", (endpoint) => {
    const props = {
        method: 'DELETE',
        url: BASE_API_URL + endpoint,
        failOnStatusCode: false,
    };

    cy.request(props);
});
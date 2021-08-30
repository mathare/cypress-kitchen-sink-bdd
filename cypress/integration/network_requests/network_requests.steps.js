import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import NetworkRequestsPage from "../../pages/network_requests_page";

Given(/^I (?:have made|make) a "(.*)" request to the "(.*)" endpoint$/, (verb, endpoint) => {
    NetworkRequestsPage.makeRequest(verb, endpoint);
});

Given('I have set up an intercept on a {string} request to the {string} endpoint', (verb, endpoint) => {
    NetworkRequestsPage.setupIntercept(verb, endpoint);
});

Given('I have stubbed a response to a {string} request to the {string} endpoint', (verb, endpoint) => {
    NetworkRequestsPage.stubResponse(verb, endpoint);
});

When('I make a {string} request to the {string} endpoint with the following query parameters', (verb, endpoint, params) => {
    NetworkRequestsPage.makeRequestWithQueryParams(verb, endpoint, params);
});

When('I make a {string} request to the {string} endpoint with the following body', (verb, endpoint, body) => {
    NetworkRequestsPage.makeRequestWithBody(verb, endpoint, body);
});

When('I click the {string} button', (button) => {
    NetworkRequestsPage.clickButton(button);
});

Then('the response status code is {int}', (code) => {
    NetworkRequestsPage.verifyResponseStatusCode(code);
});

Then('the response body has a length of {int}', (length) => {
    NetworkRequestsPage.verifyResponseBodyLength(length);
});

Then('the response has the following properties', (props) => {
    NetworkRequestsPage.verifyResponseProperties(props);
});

Then(/^the (\d+).{2} element should contain the following$/, (index, values) => {
    NetworkRequestsPage.verifyResponseElementValues(index, values);
});

Then('the response body contains the following', (body) => {
    NetworkRequestsPage.verifyResponseBodyContents(body);
});

Then('the intercepted response status code is {int}', (statusCode) => {
    NetworkRequestsPage.verifyInterceptedResponseStatusCode(statusCode);
});

Then('the intercepted request headers have a {string} property', (prop) => {
    NetworkRequestsPage.verifyInterceptedRequestHeader(prop);
});
        
Then('the intercepted request body includes {string}', (expected) => {
    NetworkRequestsPage.verifyInterceptedRequestBody(expected);
});

Then('the intercepted response body has a {string} property with a value of {string}', (prop, value) => {
    NetworkRequestsPage.verifyInterceptedResponseBody(prop, value);
});

Then('the response contains {string}', (message) => {
    NetworkRequestsPage.verifyStubbedResponse(message);
});
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import CypressAPIPage from "../../pages/cypress_api.page";

Given('I have enabled cookie debugging', () => {
    CypressAPIPage.enableCookieDebugging();
});

Given('I have disabled cookie debugging', () => {
    CypressAPIPage.disableCookieDebugging();
});

Given('I have set a cookie with a name of {string} and a value of {string}', (name, value) => {
    CypressAPIPage.setCookie(name, value);
});

Given('I have defaulted cookies with a name {string} to be preserved', (name) => {
    CypressAPIPage.preserveCookieByDefault(name);
});

Given('I have set the {string} property to {int}', (property, value) => {
    CypressAPIPage.setCypressConfigPropertyValue(property, value);
});

Given('I have set environment variables as follows', (envVars) => {
    CypressAPIPage.setEnvVars(envVars);
});

When('I set a cookie with a name of {string} and a value of {string}', (name, value) => {
    CypressAPIPage.setCookie(name, value);
});

When('I clear the {string} cookie', (name) => {
    CypressAPIPage.clearCookie(name);
});

When('I preserve the {string} cookie', (name) => {
    CypressAPIPage.preserveCookie(name);
});

When('I set the {string} environment variable to {string}', (key, value) => {
    CypressAPIPage.setEnvVar(key, value);
});

Then('there is no {string} cookie', (name) => {
    CypressAPIPage.verifyCookieDoesNotExist(name);
});

Then('a cookie with a name of {string} exists', (name) => {
    CypressAPIPage.verifyCookieExists(name);
});

Then('the {string} cookie has a value of {string}', (cookie, value) => {
    CypressAPIPage.verifyCookieValue(cookie, value);
});

Then('the CPU architecture is one of the following', (archs) => {
    CypressAPIPage.verifyCPUArchitecture(archs);
});

Then('the Cypress config has a(n) {string} property with a value of {}', (property, value) => {
    console.log('int')
    if (value.match(/^\d/)) {
        value = parseInt(value);
    } else if (value === "true" || value === "false") {
        value  = value === "true"
    }
    CypressAPIPage.verifyCypressConfigPropertyValue(property, value);
});

Then(/^the (hidden|visible) paragraph element should be (hidden|visible)$/, (element, state) => {
    CypressAPIPage.verifyDOMElementHiddenState(element, state);
});

Then('the {string} environment variable has a value of {string}', (key, value) => {
    CypressAPIPage.verifyEnvVarValue(key, value);
});

Then('the following environment variables are set', (envVars) => {
    CypressAPIPage.verifyEnvVarValues(envVars);
});

Then('the OS platform name is one of the following', (platforms) => {
    CypressAPIPage.verifyOSPlatformName(platforms);
});

Then('the Cypress version is {string} or greater', (vernum) => {
    CypressAPIPage.verifyCypressVersion(vernum);
});

Then('the current feature has the following properties', (props) => {
    CypressAPIPage.verifySpecKeys(props);
});

Then('the current feature {string} is {string}', (key, value) => {
    CypressAPIPage.verifySpecPropertyValue(key, value);
});
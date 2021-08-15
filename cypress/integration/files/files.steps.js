import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import FilesPage from "../../pages/files_page";

Given('I have set up an intercept on a {string} request to the {string} endpoint using the {string} file as the response body', (verb, endpoint, filename) => {
    FilesPage.configureIntercept(verb, endpoint, filename);
});

Given('I have written the response from the {string} endpoint to a file', (endpoint) => {
    FilesPage.writeAPIResponseToFile(endpoint);
});

Given('I have written the following data to a {string} fixture file', (filename, data) => {
    FilesPage.writeCustomDataToFixtureFile(filename, data);
});

When('I click the \'Get Comment\' button', () => {
    FilesPage.clickGetCommentButton();
});

Then('the response body has the following properties', (props) => {
    FilesPage.verifyAPIResponseBody(props);
});

Then('the {string} file contains an object', (filename) => {
    FilesPage.verifyFileContainsObject(filename);
});

Then('the {string} file contains {int} objects', (filename, numObjects) => {
    FilesPage.verifyResponseBodyFile(filename, numObjects);
});

Then('the {string} property has a value of {string}', (property, value) => {
    FilesPage.verifyPropertyValueInFile(property, value);
});
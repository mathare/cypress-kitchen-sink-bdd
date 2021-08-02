import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import AssertionsPage from "../../pages/assertions_page";

Given('I am using the Chai assertion library', () => {
    // This is a syntactic sugar step that does nothing except make the BDD scenario easier to read
});

Given('I have defined an object of {string}', (object) => {
    // This is a mad way to do things and not my normal style but I am attempting a BDD port of the
    // default Cypress tests, many of which have to be crowbarred into the BDD style, including this one
    AssertionsPage.declareChaiObject(JSON.parse(object));
});

Given('I find an element with a class name starting with {string}', (classRegex) => {
    AssertionsPage.findElementUsingClassNameRegex(classRegex);
});

Given('I expect a custom error to be thrown when more than 0 matching elements are found', () => {
    AssertionsPage.expectErrorMessage();
});

Given('I have declared a \'person\' object with the following key-value pairs', (keyValuePairs) => {
    AssertionsPage.declareObject(keyValuePairs);
});

When('a find elements call returns 1 matching element', () => {
    AssertionsPage.throwCustomError();
});

Then('the last row in the table should be green', () => {
    AssertionsPage.verifyLastRowIsGreen();
});

Then('the first cell on the last row should read {string}', (text) => {
    AssertionsPage.verifyFirstCellLastRowText(text);
});

Then('the first cell on the last row should contain {string}', (text) => {
    AssertionsPage.verifyFirstCellLastRowContains(text);
});

Then('the first cell on the last row should have {string} as the HTML Text', (text) => {
    AssertionsPage.verifyFirstCellLastRowHTML(text);
});

Then('the first cell on the last row should use the {string} HTML tag', (tag) => {
    AssertionsPage.verifyFirstCellLastRowTag(tag);
});

Then('the first cell on the last row should match a regex of {string} if we ignore the case', (regex) => {
    AssertionsPage.verifyFirstCellLastRowMatchesRegexIgnoringCase(regex);
});

Then('the \'Cypress Docs\' link is active and points to a URL that includes {string}', (partialUrl) => {
    AssertionsPage.verifyLinkInMultipleWays(partialUrl);
});

Then('I can assert {string} is true', (value) => {
    value = value == 'true'
    AssertionsPage.chaiAssertTrue(value)
});

Then('I can assert the object equals itself', () => {
    AssertionsPage.chaiAssertObjectEqualsItself();
});

Then('I can assert the object deeply equals {string}', (object) => {
    AssertionsPage.chaiAssertObjectDeeplyEquals(JSON.parse(object));
});

Then('I can assert {string} ends with {string} using a regex to ignore the case', (value, regex) => {
    AssertionsPage.chaiAssertValueEndsWithRegex(value, regex);
});

Then('I can pass a callback function to \'should\' to assert a block of text has 3 paragraphs', () => {
    AssertionsPage.shouldWithCallbackFunction();
});

Then('the element text is {string}', (expectedText) => {
    AssertionsPage.verifyDivText(expectedText);
});

Then('my custom error is thrown', () => {
    // This is a syntactic sugar step that does nothing except make the BDD scenario easier to read
    // The assertion is done in the When step because it's not at all easy to break into a separate Then step
});

Then('the {string} and {string} elements match ignoring case and whitespace', (element1, element2) => {
    AssertionsPage.verifyElementsMatchIgnoringCaseAndWhiteSpace(element1, element2);
});

Then('I can assert \'person\' is an object', (objectName) => {
    AssertionsPage.verifyIsObject(objectName);
})

Then('the random number will be between {int} and {int}', (min, max) => {
    AssertionsPage.verifyRandomNumberInRange(min, max) 
});

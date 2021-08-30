import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import QueryingPage from "../../pages/querying_page";

When('I get the button using a selector of {string}', selector => {
    QueryingPage.getElementBySelector(selector);
});

When('I get the div element by data attribute', () => {
    QueryingPage.getDivByDataAttribute();
});

Then('the button text should be {string}', (text) => {
    QueryingPage.verifyButtonText(text);
});

Then('it has a class of {string}', className => {
    QueryingPage.verifyDivClass(className);
});

Then('a {string} attribute of {string}', (attr, value) => {
    QueryingPage.verifyDivAttribute(attr, value);
});

Then('a CSS {string} property with a value of {string}', (prop, value) => {
    QueryingPage.verifyDivProperty(prop, value);
});

Then('the {string} element in the query list should have a class of {string}', (text, className) => {
    QueryingPage.verifyQueryListElementClass(text, className);
});

Then('the {string} element with text {string} has a class of {string}', (selector, text, className) => {
    QueryingPage.verifyClassOfElementContainingText(selector, text, className);
});

Then('the button with text {string} should have a class of {string}', (text, className) => {
    QueryingPage.verifyButtonClassNameByText(text, className);
});
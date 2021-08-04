import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import ConnectorsPage from "../../pages/connectors_page";

Given('the div element is hidden', () => {
    ConnectorsPage.verifyDivElementVisibility(false);
});

Given('I have an array of', (elements) => {
    ConnectorsPage.setupArray(elements);
});

When('I invoke the show method on it', () => {
    ConnectorsPage.showDivElement();
});

When('I spread the array into individual arguments', () => {
    //Syntactic sugar step that does nothing except make the BDD read better
});

Then('the names in the first array are', (names) => {
    ConnectorsPage.verifyNamesInFirstArray(names);
});

Then('the second array has a length greater than {int}', (length) => {
    ConnectorsPage.verifySecondArrayLength(length);
});

Then('it should be visible', () => {
    ConnectorsPage.verifyDivElementVisibility(true);
});

Then(/^the (foo|bar|baz) argument equals "(.*)"$/, (arg, expected) => {
    ConnectorsPage.verifySpreadArrayArgument(arg, expected);
});

Then('the connectors list has {int} elements', (numElements) => {
    ConnectorsPage.verifyConnectorsListLength(numElements);
});

Then(/^the (\d+).{2} element is "(.*)"$/, (index, expected) => {
    ConnectorsPage.verifyConnectorsListElement(index - 1, expected);
});

Then('I can return a value from one \'\.then\' call to the next command', () => {
    ConnectorsPage.returnFromThenToNextCommand();
});

Then('the original value is passed to the next command if there is no return in the \'\.then\' call', () => {
    ConnectorsPage.passOriginalValueToNextCommand();
});

Then('the result of the last Cypress command within the \'\.then\' call is passed to the next command', () => {
    ConnectorsPage.passLastCypressCommandResultToNextCommand();
});
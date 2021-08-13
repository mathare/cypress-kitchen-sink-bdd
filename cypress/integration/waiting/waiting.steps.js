import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import WaitingPage from "../../pages/waiting_page";

Given('I have configured an intercept on a {string} request to the {string} endpoint', (verb, endpoint) => {
    WaitingPage.createIntercept(verb, endpoint);
});

When(/^I enter "(.*)" in the (\d+).{2} input$/, (text, index) => {
    WaitingPage.enterTextInInput(index, text);
});

When('I wait for {int}ms', (time) => {
    WaitingPage.waitForSpecifiedTime(time);
});

When('I click the \'Get Comment\' button', () => {
    WaitingPage.clickGetCommentButton();
});

Then('the response status code is {int}', (code) => {
    WaitingPage.verifyResponseStatusCode(code);
});
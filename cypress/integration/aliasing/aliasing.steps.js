import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import AliasingPage from "../../pages/aliasing_page";

Given('I have created an alias for the first button in the table', () => {
    AliasingPage.createButtonAlias();
});

Given('I have created an alias for the comments endpoint', () => {
    AliasingPage.createRouteAlias();
});

When('I click the aliased button', () => {
    AliasingPage.clickAliasedButton();
});

When('I click the \'Get Comment\' button', () => {
    AliasingPage.clickGetCommentButton();
});

Then('the button turns green', () => {
    AliasingPage.verifyAliasedButtonHasSuccessClass();
});

Then('the button text updates to {string}', (text) => {
    AliasingPage.verifyAliasedButtonText(text);
});

Then('the response status code is {int}', (code) => {
    AliasingPage.verifyResponseStatusCode(code);
})
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import CookiesPage from "../../pages/cookies_page";

Given('I have enabled cookie debugging', () => {
    CookiesPage.enableCookieDebugging();
});

Given(/^(?:I have cleared|I clear all the) cookies$/, () => {
    CookiesPage.clearCookies();
});

Given('there are no browser cookies', () => {
    CookiesPage.verifyNoCookies();
});

Given('there is no {string} cookie', (name) => {
    CookiesPage.verifyCookieDoesNotExist(name);
})

When('I click the \'Set Cookie\' button in the {string} section', (sectionName) => {
    CookiesPage.clickSetCookieButton(sectionName);
});

When('I set a cookie with a name of {string} and a value of {string}', (name, value) => {
    CookiesPage.setCookie(name, value);
});

When('I clear the {string} cookie', (name) => {
    CookiesPage.clearCookie(name);
});

Then('the {string} cookie should have a value of {string}', (cookie, value) => {
    CookiesPage.verifyCookieValue(cookie, value);
});

Then(/^(\d+) cookie(?:|s) (?:is|are) created$/, (numCookies) => {
    CookiesPage.verifyNumCookies(numCookies);
});

Then('the cookie has the following properties', (props) => {
    CookiesPage.verifyCookiePropertyValues(props);
});
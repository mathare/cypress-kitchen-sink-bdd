import { Given, When, Then } from "cypress-cucumber-preprocessor/steps"
import NavigationPage from "../../pages/navigation_page"

Given('I have navigated to the {string} page', (pageName) => {
    NavigationPage.navigateToPage(pageName);
});

Given(/^I (?:have gone|go) back in the browser history$/, () => {
    NavigationPage.goBackInBrowserHistory();
});

Given(/^I (?:am|should be) on the "(.*)" page$/, (pageName) => {
    NavigationPage.verifyCurrentPage(pageName);
});

When('I go forward in the browser history', () => {
    NavigationPage.goForwardInBrowserHistory();
});

When(/^I go (\d+) page(?:|s) (back|forward) in the browser history$/, (numPages, direction) => {
    if (direction === 'back') numPages = -numPages;
    NavigationPage.goXPagesInBrowserHistory(numPages);
});

When('I navigate to {string}', (url) => {
    NavigationPage.navigateToUrl(url);
});

Then('I can reload the page', () => {
    NavigationPage.reloadPage();
});

Then('I can reload the page without the cache', () => {
    NavigationPage.reloadPage(true);
});
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import AssertionsPage from "../../pages/assertions_page";

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
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import UtilitiesPage from "../../pages/utilities_page";

Given('I have made a GET request to the {string} endpoint', (endpoint) => {
    UtilitiesPage.makeRequest(endpoint);
});

Given('I have declared a jQuery selector for the first list element', () => {
    UtilitiesPage.declarejQuerySelector();
});

Given(/^the first list element (does not have|has) the "(.*)" class$/, (has_class, className) => {
    if (has_class === 'has') {
        UtilitiesPage.verifyListElementHasClass(true, className);
    } else {
        UtilitiesPage.verifyListElementHasClass(false, className);
    }
});

Given('I have created an <img> element with a src of a dataUrl', () => {
    UtilitiesPage.createImgFromDataUrl();
});

When('I use lodash methods to create an array of the first {int} IDs', (num) => {
    UtilitiesPage.createIDsArrayWithLodash(num);
});

When('I click the first list element', () => {
    UtilitiesPage.clickListElement();
});

When('I click the image', () => {
    UtilitiesPage.clickBlobImage();
});

When('I compare {string} and {string} with a matchBase of {string}', (exp1, exp2, base) => {
    UtilitiesPage.compareStrings(exp1, exp2, base);
});

Then('the array should equal {string}', (arr) => {
    UtilitiesPage.verifyIDsArray(arr);
});

Then('the image has a src attribute equal to the dataUrl', () => {
    UtilitiesPage.verifyBlobImageSourceAttribute();
});

Then(/^the result of the comparison is (true|false)$/, (result) => {
    UtilitiesPage.verifyStringComparison(result);
})
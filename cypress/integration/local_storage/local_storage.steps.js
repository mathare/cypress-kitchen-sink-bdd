import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import LocalStoragePage from "../../pages/local_storage_page";

Given(/^(?:I have clicked|I click) the 'Populate Local Storage' button$/, () => {
    LocalStoragePage.clickPopulateLocalStorageButton();
});

When('I clear the local storage', () => {
    LocalStoragePage.clearLocalStorage();
});

When('I clear the {string} key in local storage', (key) => {
    LocalStoragePage.clearLocalStorageByKey(key);
});

When('I clear the local storage keys matching a regex of {string}', (regex) => {
    LocalStoragePage.clearLocalStorageByRegex(regex);
})

Then('the local storage should contain the following', (storedInfo) => {
    LocalStoragePage.verifyLocalStorage(storedInfo);
})
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import MiscPage from "../../pages/misc_page";

Given('I have set the following default screenshot config options', (options) => {
    MiscPage.configureScreenshotDefaults(options);
}); 

Given('I have wrapped the following object', (obj) => {
    //Technically this step doesn't wrap the object - that's done in the verification step
    //but this keeps the BDD a bit neater, albeit somewhat artificial
    MiscPage.createObject(obj);
});

When('I echo {string} to the command line', (text) => {
    MiscPage.echoString(text);
});

When('I output the contents of {string} to the command line', (filename) => {
    MiscPage.outputFileContents(filename);
});

When('I print the current working directory', () => {
    MiscPage.printCurrentWorkingDirectory();
});

When('I click the form element with an ID of {string}', (id) => {
    MiscPage.clickFormElement(id);
});

When('I take a screenshot with a name of {string}', (imageName) => {
    MiscPage.takeScreenshot(imageName);
});

Then('the command line stdout contains {string}', (text) => {
    MiscPage.verifyCommandLineOutput('stdout', text);
});

Then('the command line stderr is empty', () => {
    MiscPage.verifyCommandLineOutput('stderr', '');
});

Then('the command line exit code is {string}', (code) => {
    MiscPage.verifyCommandLineOutput('code', code);
});

Then('the focused element should have an ID of {string}', (id) => {
    MiscPage.verifyFocusedElementID(id);
});

Then('{string} is created in the screenshots folder', (filename) => {
    MiscPage.verifyScreenshotExists(filename);
});

Then('the object has a key of {string} with a value of {string}', (key, value) => {
    MiscPage.verifyObjValues(key, value);
});

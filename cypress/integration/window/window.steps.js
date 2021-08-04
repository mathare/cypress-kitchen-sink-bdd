import { Given, When, Then } from "cypress-cucumber-preprocessor/steps"
import WindowPage from "../../pages/window_page"

Then('the window should have the following properties', (properties) => {
    WindowPage.verifyWindowProperties(properties);
});

Then('the document has the following properties', (properties) => {
    WindowPage.verifyDocumentProperties(properties);
});

Then('the title includes {string}', (title) => {
    WindowPage.verifyTitle(title);
});
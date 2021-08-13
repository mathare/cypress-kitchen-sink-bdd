import { Then } from "cypress-cucumber-preprocessor/steps";
import LocationPage from "../../pages/location_page";

Then('the current URL hash is empty', () => {
    LocationPage.verifyCurrentHashIsEmpty();
})

Then('the location object has the following properties and values', (props) => {
    LocationPage.verifyLocationProperties(props);
})

Then('the current URL is {string}', (url) => {
    LocationPage.verifyCurrentUrl(url);
})
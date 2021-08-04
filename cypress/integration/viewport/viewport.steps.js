import { Given, When, Then } from "cypress-cucumber-preprocessor/steps"
import ViewportPage from "../../pages/viewport_page"

Given('the navbar is visible', () => {
    ViewportPage.navbarIsVisible();
});

When('I change the viewport size to {int} x {int}', (width, height) => {
    ViewportPage.setViewportSize(width, height);
});

When('I click the navbar toggle', () => {
    ViewportPage.clickNavbarToggle();
});

When('I set the viewport to the {string} preset', (device) => {
    ViewportPage.selectDevicePreset(device);
});

When('I set the viewport to the {string} preset with an orientation of {string}', (device, orientation) => {
    ViewportPage.selectDevicePreset(device, orientation);
});

Then('the navbar should not be visible', () => {
    ViewportPage.navbarIsVisible(false);
});

Then('the viewport size is {int} x {int}', (width, height) => {
    ViewportPage.verifyViewportSize(width, height);
});
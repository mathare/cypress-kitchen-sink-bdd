import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import SpiesStubsClocksPage from "../../pages/spies_stubs_clocks_page";

Given('I have created an empty method "foo"', () => {
    // This step is syntatic sugar to make the scenario read easier
});

Given('a method "foo" that takes a single parameter "x"', () => {
    // This step is syntatic sugar to make the scenario read easier
});

Given('a method "foo" that takes parameters "a" and "b"', () => {
    // This step is syntatic sugar to make the scenario read easier
});

Given('I have wrapped "foo" in a spy', () => {
    SpiesStubsClocksPage.wrapInSpy();
});

Given('I have stubbed "foo"', () => {
    SpiesStubsClocksPage.stubMethod();
});

Given('I have set the time to be {string} on {string}', (time, date) => {
    SpiesStubsClocksPage.setDateTime(date, time)
});
        
When('I call {string}', () => {
    SpiesStubsClocksPage.obj.foo();
});

When('I call "foo" with an argument of {string} and a timeout of {int}', (arg, timeout) => {
    setTimeout(() => {
        SpiesStubsClocksPage.obj.foo(arg);
    }, timeout);   
});

When('I call "foo" with arguments of {string} and {string}', (arg1, arg2) => {
    SpiesStubsClocksPage.obj.foo(arg1, arg2);
});

When(/^I click on the (clock|tick) display element$/, (element) => {
    SpiesStubsClocksPage.clickElement(element);
});

When('I advance the clock {int} seconds', (interval) => {
    SpiesStubsClocksPage.advanceClock(interval);
});

Then('the spy shows the method was called', () => {
    SpiesStubsClocksPage.verifySpyCalled();
});

Then('the spy shows the method was called twice', () => {
    SpiesStubsClocksPage.verifySpyCalledTwice();
});

Then('the stubbed method was called', () => {
    SpiesStubsClocksPage.verifyStubCalled();
});

Then('the displayed epoch time is {string}', (time) => {
    SpiesStubsClocksPage.verifyDisplayedEpochTime(time);
});

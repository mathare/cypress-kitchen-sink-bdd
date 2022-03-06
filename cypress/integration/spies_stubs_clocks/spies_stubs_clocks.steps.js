import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import SpiesStubsClocksPage from "../../pages/spies_stubs_clocks_page";

let sum

Given('I have created an empty method "foo"', () => {
    // This step is syntatic sugar to make the scenario read easier
});

Given('a method "foo" that takes a single parameter "x"', () => {
    // This step is syntatic sugar to make the scenario read easier
});

Given('a method "foo" that takes parameters "a" and "b"', () => {
    // This step is syntatic sugar to make the scenario read easier
});

Given('I have wrapped {string} in a spy', (method) => {
    SpiesStubsClocksPage.wrapInSpy(method);
});

Given('I have stubbed "foo"', () => {
    SpiesStubsClocksPage.stubMethod();
});

Given('I have set the time to be {string} on {string}', (time, date) => {
    SpiesStubsClocksPage.setDateTime(date, time)
});

Given('a "greet" function that takes a "name" parameter', () => {
    // This step is syntatic sugar to make the scenario read easier
});

Given('I have stubbed "greet" such that it returns {string} for string arguments and throws an {string} error for number arguments', (retVal, errMsg) => {
    SpiesStubsClocksPage.stubGreeterMethod(retVal, errMsg)
});

Given('an "add" function that takes parameters "a" and "b"', () => {
    // This step is syntatic sugar to make the scenario read easier
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

When('I call "add" with values of {int} and {int}', (a, b) => {
    sum = SpiesStubsClocksPage.calculator.add(a, b)
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

Then('calling "greet" with a name of {string} returns {string}', (name, retVal) =>{
    SpiesStubsClocksPage.verifyReturnFromGreetWithString(name, retVal);
});

Then('calling "greet" with a name of {int} throws an {string} error', (name, errMsg) => {
    SpiesStubsClocksPage.verifyReturnFromGreetWithNumber(name, errMsg);
});

Then('the stubbed method has been called twice', () => {
    SpiesStubsClocksPage.verifyStubbedMethodCalledTwice()
});

Then('calling "greet" without a name argument returns {string}', (errMsg) => {
    SpiesStubsClocksPage.verifyReturnFromGreetNoArgs(errMsg);
});

Then('"add" returns {int}', (retVal) => {
    SpiesStubsClocksPage.verifySum(sum, retVal);
});

Then('the spy was called with arguments of {int} and {int}', (a, b) => {
    SpiesStubsClocksPage.verifySpyArgumentsExact(a, b);
});

Then('the spy was called with two number arguments', () => {
    SpiesStubsClocksPage.verifySpyArgumentsNumeric();
});

Then('the spy was called with arguments matching {int} and {int}', (a, b) => {
    SpiesStubsClocksPage.verifySpyArgumentsMatchExact(a, b);
});

Then('the spy was called with an argument matching \'any\' and an argument of {int}', (b) => {
    SpiesStubsClocksPage.verifySpyArgumentsAnyAndExact(b);
});

Then('the spy was called with one of {string} and an argument of {int}', (a, b) => {
    SpiesStubsClocksPage.verifySpyArgumentsListAndExact(a, b);
});

Then('the spy was called with an even argument and an argument of {int}', (b) => {
    SpiesStubsClocksPage.verifySpyArgumentsEvenAndExact(b);
});

Then('the spy was called with a number and an argument between {int} and {int}', (b_lower, b_upper) => {
    SpiesStubsClocksPage.verifySpyArgumentsGreaterThanAndLessThan(b_lower, b_upper);
});

Then('the spy was called with a number and an argument greater than {int} or exactly {int}', (b_lower, b_exact) => {
    SpiesStubsClocksPage.verifySpyArgumentsOrMatch(b_lower, b_exact);
});

Then('the spy was called with a number and an argument of {int}', (b) => {
    SpiesStubsClocksPage.verifySpyArgumentsUsingBDDAssertions(b);
});
        
Then('the spy was called with an argument of {int} and a number', (a) => {
    SpiesStubsClocksPage.verifySpyArgumentsUsingAliases(a);
});
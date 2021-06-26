import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import ToDoAppPage from "../../pages/todo_page";

Given('I have opened the to-do app', () => {
    ToDoAppPage.open();
});

Given('I have checked the {string} todo item', (item) => {
    ToDoAppPage.completeToDoItem(item);
});

When('I add {string} as a new todo item', (newItem) => {
    ToDoAppPage.addToDoItem(newItem);
});

When('I check the {string} todo item', (item) => {
    ToDoAppPage.completeToDoItem(item);
});

When('I click on the {string} button', (buttonText) => {
    ToDoAppPage.clickButton(buttonText);
});

Then(/^(\d+) todo item(?:|s) (?:is|are) displayed$/, (numItems) => {
    ToDoAppPage.verifyNumToDoItems(numItems);
});

Then(/^the (\d+)(?:st|nd|rd|th) todo item is "(.*)"$/, (index, expectedText) => {
    ToDoAppPage.verifyToDoItemText(index - 1, expectedText);
});

Then('the {string} item is marked as completed', (item) => {
    ToDoAppPage.verifyItemCompleted(item);
});

Then('the todo list does not include {string}', (item) => {
    ToDoAppPage.verifyElementNotPresent(item);
});

Then('the {string} button is no longer displayed', (buttonText) => {
    ToDoAppPage.verifyElementNotPresent(buttonText);
});
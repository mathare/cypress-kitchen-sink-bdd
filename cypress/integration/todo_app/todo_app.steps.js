import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import ToDoAppPage from "../../pages/todo_page";

Given('I have opened the to-do app', () => {
    ToDoAppPage.open();
});

Then('{int} todo items are displayed', (numItems) => {
    ToDoAppPage.verifyNumToDoItems(numItems);
});

Then(/^the (\d+)(?:st|nd|rd|th) todo item is "(.*)"$/, (index, expectedText) => {
    console.log(index)
    console.log(expectedText)
    ToDoAppPage.verifyToDoItemText(index - 1, expectedText);
})
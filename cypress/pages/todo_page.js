const TODO_ITEM = '.todo-list li';
const ADD_NEW_ITEM = '[data-test=new-todo]';
const CHECKBOX = 'input[type=checkbox]';

class ToDoAppPage {

  static open() {
    cy.visit('/todo');
  }

  static verifyNumToDoItems(numItems) {
    cy.get(TODO_ITEM).should('have.length', numItems);
  }

  static verifyToDoItemText(index, expectedText) {
    cy.get(TODO_ITEM).eq(index).should('have.text', expectedText);
  }

  static addToDoItem(newItem) {
    cy.get(ADD_NEW_ITEM).type(`${newItem}{enter}`);
  }

  static completeToDoItem(item) {
    cy.contains(item).parent().find(CHECKBOX).check();
  }

  static verifyItemCompleted(item) {
    cy.contains(item).parents(TODO_ITEM).should('have.class', 'completed');
  }

  static clickButton(buttonText) {
    cy.contains(buttonText).click();
  }

  static verifyElementNotPresent(elementText) {
    cy.contains(elementText).should('not.exist')
  }
}

export default ToDoAppPage;
Feature: Cypress Example ToDo Page
  Tests for https://example.cypress.io/todo

  Background: Open example to-do app
    Given I have opened the to-do app

  Scenario: Two todo items displayed by default
    Then 2 todo items are displayed
    And the 1st todo item is "Pay electric bill"
    And the 2nd todo item is "Walk the dog"

  Scenario: New todo items can be added
    When I add "Feed the cat" as a new todo item
    Then 3 todo items are displayed
    And the 3rd todo item is "Feed the cat"

  Scenario: Check off completed todo item
    When I check the "Pay electric bill" todo item
    Then the "Pay electric bill" item is marked as completed

  Scenario: Filter for outstanding tasks
    Given I have checked the "Pay electric bill" todo item
    When I click on the "Active" button
    Then 1 todo item is displayed
    And the 1st todo item is "Walk the dog"
    And the todo list does not include "Pay electric bill"

  Scenario: Filter for completed tasks
    Given I have checked the "Pay electric bill" todo item
    When I click on the "Completed" button
    Then 1 todo item is displayed
    And the 1st todo item is "Pay electric bill"
    And the todo list does not include "Walk the dog"

  Scenario: Delete all completed tasks
    Given I have checked the "Pay electric bill" todo item
    When I click on the "Clear completed" button
    Then 1 todo item is displayed
    And the 1st todo item is "Walk the dog"
    And the todo list does not include "Pay electric bill"
    And the "Clear completed" button is no longer displayed
Feature: Cypress Example ToDo Page

    Background: Open example to-do app
        Given I have opened the to-do app

    Scenario: Two todo items displayed by default
        Then 2 todo items are displayed
        And the 1st todo item is "Pay electric bill"
        And the 2nd todo item is "Walk the dog"

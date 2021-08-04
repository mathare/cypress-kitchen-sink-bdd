Feature: Cypress Example Connectors Page
    Tests for https://example.cypress.io/commands/connectors

    Background: Open example connectors page
        Given I have opened the "Connectors" page

    Scenario: Iterate over array of elements with .each()
        Then the names in the first array are
            | Lara Williams  |
            | William Grey   |
            | Monica Pharrel |

    Scenario: Get properties on current subject with .its()
        Then the second array has a length greater than 2

    Scenario: Use .invoke() to call a function on the current subject
        Given the div element is hidden
        When I invoke the show method on it
        Then it should be visible

    Scenario: Use .spread() to spread an array as individual args to callback function
        Given I have an array of
            | foo |
            | bar |
            | baz |
        When I spread the array into individual arguments
        Then the foo argument equals "foo"
        And the bar argument equals "bar"
        And the baz argument equals "baz"

    Scenario: .then() invokes a callback function with the current subject
        Then the connectors list has 3 elements
        And the 1st element is "Walk the dog"
        And the 2nd element is "Feed the cat"
        And the 3rd element is "Write JavaScript"

    Scenario: .then() yields the returned value to the next command
        Then I can return a value from one '.then' call to the next command

    Scenario: If there is no return, .then() yields the original subject
        Then the original value is passed to the next command if there is no return in the '.then' call

    Scenario: .then() yields result of last Cypress command
        Then the result of the last Cypress command within the '.then' call is passed to the next command
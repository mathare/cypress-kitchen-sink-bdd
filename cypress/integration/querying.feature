Feature: Cypress Example Querying Page
    Tests for https://example.cypress.io/commands/querying

    Background: Open example querying page
        Given I have opened the "Querying" page

    Scenario Outline: Get element by <selector type>
        When I get the button using a selector of "<selector>"
        Then the button text should be "Button"
        Examples:
            | selector type | selector                     |
            | id            | #query-btn                   |
            | class         | .query-btn                   |
            | css           | #querying .well>button:first |

    Scenario: Get element by data attribute
        When I get the div element by data attribute
        Then it has a class of "example"
        And a "data-test-id" attribute of "test-example"
        And a CSS "position" property with a value of "static"

    Scenario Outline: Query DOM elements with matching content via cy.contains()
        Then the "<text>" element in the query list should have a class of "<className>"
        Examples:
            | text        | className |
            | bananas     | third     |
            | apples      | first     |
            | more apples | fourth    |
            | oranges     | second    |

    Scenario: Can use a regexp in cy.contains()
        Then the "/^b\w+/" element in the query list should have a class of "third"

    Scenario: Passing a selector to cy.contains() yields element containing the text
        Then the "ul" element with text "oranges" has a class of "query-list"

    Scenario: Get element by text
        Then the button with text "Save Form" should have a class of "btn"

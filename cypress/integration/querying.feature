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

    Scenario: Query DOM elements within a specific element with .within()
        Then the "first" input within the form should have placeholder text of "Email"
        And the "last" input within the form should have placeholder text of "Password"

    Scenario: Query the root DOM element with cy.root()
        Then the root matches "html"

    Scenario: Use cy.root() to obtain DOM element
        Then the 'query-ul' element has class "query-ul"

    Scenario Outline: Interacting with elements via different selector types - <type>
        Then I can click the element found using the "<type>" selector of "<selector>"
        Examples:
            | type             | selector           | Cypress comments (for info)                                                         |
            | tag              | button             | Worst - too generic, no context                                                     |
            | class            | .btn.btn-large     | Bad. Coupled to styling. Highly subject to change                                   |
            | name             | [name=submission]  | Average. Coupled to the `name` attribute which has HTML semantics                   |
            | ID               | #main              | Better. But still coupled to styling or JS event listeners                          |
            | ID + attribute   | #main[role=button] | Slightly better. Uses an ID but also ensures the element has an ARIA role attribute |
            | text             | Submit             | Much better. But still coupled to text content that may change                      |
            | custom attribute | [data-cy=submit]   | Best. Insulated from all changes                                                    |
Feature: Cypress Example Assertions Page
    Tests for https://example.cypress.io/commands/assertions

    Background: Open example assertions page
        Given I have opened the "Assertions" page

    Scenario: Assert table style and values are correct
        Then the last row in the table should be green
        And the first cell on the last row should read "Column content"
        And the first cell on the last row should contain "Column content"
        And the first cell on the last row should have "Column content" as the HTML Text
        And the first cell on the last row should use the "td" HTML tag
        And the first cell on the last row should match a regex of "column content" if we ignore the case

    Scenario: Chain multiple assertions together
    # This is not how I would normally write a BDD test, with multiple assertions in one step but
    # as this is a Cucumber implementation of the default Cypress tests I am sticking to the style
    # of the original tests as much as possible
        Then the 'Cypress Docs' link is active and points to a URL that includes "cypress.io"
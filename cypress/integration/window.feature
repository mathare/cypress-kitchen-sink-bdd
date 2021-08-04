Feature: Cypress Example Window Page
    Tests for https://example.cypress.io/commands/window

    Background: Open example window page
        Given I have opened the "Window" page

    Scenario: cy.window() - get the global window object
        Then the window should have the following properties
            |top|

    Scenario: cy.document() - get the document object
        Then the document has the following properties
            |charset|UTF-8|

    Scenario: cy.title() - get the title
        Then the title includes "Kitchen Sink"
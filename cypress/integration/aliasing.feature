Feature: Cypress Example Aliasing Page
    Tests for https://example.cypress.io/commands/aliasing

    Background: Open example aliasing page
        Given I have opened the "Aliasing" page

    Scenario: Alias DOM element for later use
        Given I have created an alias for the first button in the table
        When I click the aliased button
        Then the button turns green
        And the button text updates to "Changed"

    Scenario: Alias a route for later use
        Given I have created an alias for the comments endpoint
        When I click the 'Get Comment' button
        Then the response status code is 200
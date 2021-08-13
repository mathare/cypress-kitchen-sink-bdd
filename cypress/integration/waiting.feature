Feature: Cypress Example Waiting Page
    Tests for https://example.cypress.io/commands/waiting

    Background: Open example waiting page
        Given I have opened the "Waiting" page

    Scenario: Wait for a specific amount of time
        When I enter "Wait 500ms after typing" in the 1st input
        And I wait for 500ms
        And I enter "Wait 1000ms after typing" in the 2nd input
        And I wait for 1000ms
        And I enter "Wait 1500ms after typing" in the 3rd input
        And I wait for 1500ms

    Scenario: Wait for an API response
        Given I have configured an intercept on a "GET" request to the "comments" endpoint
        When I click the 'Get Comment' button
        Then the response status code is 200
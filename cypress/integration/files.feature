Feature: Cypress Example Files Page
    Tests for https://example.cypress.io/commands/files

    Background: Open example files page
        Given I have opened the "Files" page

    Scenario: Use fixture file as response to intercepted API call
        Given I have set up an intercept on a "GET" request to the "comments" endpoint using the "example.json" file as the response body
        When I click the 'Get Comment' button
        Then the response body has the following properties
            | Property | Value                                                         |
            | name     | Using fixtures to represent data                              |
            | email    | hello@cypress.io                                              |
            | body     | Fixtures are a great way to mock data for responses to routes |

    # The original test spec has a test that shows an example of fixture files being loaded in via the cy.fixture() and require() methods
    # then compared to demonstrate equality but this is really hard to crowbar into the BDD Given-When-Then format so I have skipped that test

    Scenario: Read file contents
        Then the "cypress.json" file contains an object

    Scenario: Write API response to a file
        Given I have written the response from the "users" endpoint to a file
        Then the "users" file contains 10 objects
    # TODO Verify JSON schema & spot-check contents?

    Scenario: Write custom data to file
        Given I have written the following data to a "profile.json" fixture file
            | Key   | Value            |
            | id    | 8739             |
            | name  | Jane             |
            | email | jane@example.com |
        Then the "name" property has a value of "Jane"
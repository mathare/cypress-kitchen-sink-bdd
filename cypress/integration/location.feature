Feature: Cypress Example Location Page
    Tests for https://example.cypress.io/commands/location

    Background: Open example location page
        Given I have opened the "Location" page

    Scenario: Current URL hash is empty
        Then the current URL hash is empty

    Scenario: Location properties
        Then the location object has the following properties and values
            | Property | Value                                        |
            | hash     |                                              |
            | href     | https://example.cypress.io/commands/location |
            | host     | example.cypress.io                           |
            | hostname | example.cypress.io                           |
            | origin   | https://example.cypress.io                   |
            | pathname | /commands/location                           |
            | port     |                                              |
            | protocol | https:                                       |
            | search   |                                              |

    Scenario: Verify URL
        Then the current URL is "https://example.cypress.io/commands/location"
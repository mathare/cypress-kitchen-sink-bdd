Feature: Cypress Example Navigation Page
    Tests for https://example.cypress.io/commands/navigation

    Background: Open example navigation page
        Given I have opened the "Home" page
        And I have navigated to the "Navigation" page

    Scenario: Go back in browser history
        When I go back in the browser history
        Then I should be on the "Home" page

    Scenario: Go forward in browser history
        Given I have gone back in the browser history
        And I am on the "Home" page
        When I go forward in the browser history
        Then I should be on the "Navigation" page

    Scenario: Go back in browser history by index
        When I go 1 page back in the browser history
        Then I should be on the "Home" page

    Scenario: Go forward in browser history by index
        Given I have gone back in the browser history
        And I am on the "Home" page
        When I go 1 page forward in the browser history
        Then I should be on the "Navigation" page

    Scenario: Reload page
        Then I can reload the page
        And I can reload the page without the cache

    Scenario: Specify a full URL to the visit() method
        When I navigate to "https://example.cypress.io/commands/actions"
        Then I should be on the "Actions" page
    
    # The original test spec has a test that shows an example of options being passed to the cy.visit() command
    # but this is really hard to crowbar into the BDD Given-When-Then format so I have skipped that test 

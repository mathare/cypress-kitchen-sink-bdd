Feature: Cypress Example Cookies Page
    Tests for https://example.cypress.io/commands/cookies

    Background: Open example cookies page
        Given I have enabled cooking debugging
        And I have opened the "Cookies" page
        And I have cleared cookies

    Scenario: Get a cookie
        When I click the 'Set Cookie' button in the "getCookie" section
        Then the "token" cookie should have a value of "123ABC"

    Scenario: Get all browser cookies
        Given there are no browser cookies
        When I click the 'Set Cookie' button in the "getCookies" section
        Then 1 cookie is created
        And the cookie has the following properties
            | Property | Value              |
            | name     | token              |
            | value    | 123ABC             |
            | httpOnly | false              |
            | secure   | false              |
            | domain   | example.cypress.io |
            | path     | /commands          |

    Scenario: Set a cookie
        Given there are no browser cookies
        When I set a cookie with a name of "foo" and a value of "bar"
        Then the "foo" cookie should have a value of "bar"

    Scenario: Clear a cookie
        Given there is no "token" cookie
        When I click the 'Set Cookie' button in the "clearCookie" section
        Then the "token" cookie should have a value of "123ABC"
        When I clear the "token" cookie
        Then there is no "token" cookie

    Scenario: Clear all cookies
        Given there are no browser cookies
        When I click the 'Set Cookie' button in the "clearCookies" section
        Then 1 cookie is created
        When I clear all the cookies
        Then there are no browser cookies
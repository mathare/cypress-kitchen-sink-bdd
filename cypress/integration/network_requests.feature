Feature: Cypress Example Network Requests Page
    Tests for https://example.cypress.io/commands/network-requests

    Background: Open example network requests page
        Given I have opened the "Network Requests" page

    Scenario: Make an XHR request
        When I make a "GET" request to the "comments" endpoint
        Then the response status code is 200
        And the response body has a length of 500
        And the response has the following properties
            | allRequestResponses |
            | body                |
            | duration            |
            | headers             |
            | isOkStatusCode      |
            | requestHeaders      |
            | status              |
            | statusText          |

    Scenario: Make request with query parameters
        When I make a "GET" request to the "comments" endpoint with the following query parameters
            | postId | 1 |
            | id     | 3 |
        Then the response body has a length of 1
        And the 1st element should contain the following
            | Key    | Value |
            | postId | 1     |
            | id     | 3     |


    Scenario: Pass result from one request to another
        Given I have made a "GET" request to the "users" endpoint
        When I make a "POST" request to the "posts" endpoint with the following body
            | Key    | Value                                                                |
            | userId | <1st user ID>                                                        |
            | title  | Cypress Test Runner                                                  |
            | body   | Fast, easy and reliable testing for anything that runs in a browser. |
        Then the response status code is 201
        And the response body contains the following
            | Key    | Value                                                                |
            | userId | 1                                                                    |
            | title  | Cypress Test Runner                                                  |
            | body   | Fast, easy and reliable testing for anything that runs in a browser. |
            | id     | 101                                                                  |

    Scenario: Intercept response to GET request with cy.intercept()
        Given I have set up an intercept on a "GET" request to the "comments" endpoint
        When I click the "Get Comment" button
        Then the intercepted response status code is 200

    Scenario: Intercept response to POST request with cy.intercept()
        Given I have set up an intercept on a "POST" request to the "comments" endpoint
        When I click the "Post Comment" button
        Then the intercepted request headers have a "content-type" property
        And the intercepted request body includes "email"
        And the intercepted response body has a "name" property with a value of "Using POST in cy.intercept()"

    Scenario: Stub PUT request with cy.intercept()
        Given I have stubbed a response to a "PUT" request to the "comments" endpoint
        When I click the "Update Comment" button
        Then the response contains "whoa, this comment does not exist"
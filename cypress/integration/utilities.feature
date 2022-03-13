Feature: Cypress Example Utilities Page
    Tests for https://example.cypress.io/utilities

    Background: Open example utilities page
        Given I have opened the "Utilities" page


    Scenario: Call a lodash method - Cypress._
        Given I have made a GET request to the "users" endpoint
        When I use lodash methods to create an array of the first 3 IDs
        Then the array should equal "[1, 2, 3]"

    Scenario: Call a jQuery method - Cypress.$
        Given I have declared a jQuery selector for the first list element
        And the first list element does not have the "active" class
        When I click the first list element
        Then the first list element has the "active" class

    Scenario: Blob utilities and base64 string conversion - Cypress.Blob
        Given I have created an <img> element with a src of a dataUrl
        When I click the image
        Then the image has a src attribute equal to the dataUrl

    Scenario Outline: Test out glob patterns against strings - Cypress.minimatch
        When I compare "<expression 1>" and "<expression 2>" with a matchBase of "<base>"
        Then the result of the comparison is <result>
        Examples:
            | expression 1                  | expression 2      | base  | result | description                                     |
            | /users/1/comments             | /users/*/comments | true  | true   | wildcard match                                  |
            | /users/1/comments/2           | /users/*/comments | true  | false  | wildcard match                                  |
            | /foo/bar/baz/123/quux?a=b&c=2 | /foo/**           | true  | true   | ** matches against all downstream path segments |
            | /foo/bar/baz/123/quux?a=b&c=2 | /foo/*            | false | false  | * match next path segment only                  |

    # The original test spec has a test for Cypress.Promise instantiating a bluebird promise but it is a bit tricky to fit that test
    # into a BDD style so I have omitted that particular test, for now at least
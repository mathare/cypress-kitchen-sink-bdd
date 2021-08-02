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

    Scenario: Boolean Chai assertions
        Given I am using the Chai assertion library
        Then I can assert "true" is true

    Scenario: Object Chai assertions
        Given I am using the Chai assertion library
        And I have defined an object of "{\"foo\": \"bar\"}"
        Then I can assert the object equals itself
        And I can assert the object deeply equals "{\"foo\": \"bar\"}"

    Scenario: Regex Chai assertions
        Given I am using the Chai assertion library
        Then I can assert "FooBar" ends with "bar" using a regex to ignore the case

    Scenario: Use custom callback function in should() assertion
        # This is another test that is difficult to layer BDD on top of, making it very artificial
        # A custom callback function containing explicit assertions is passed as parameter to the
        # should() assertion method, which then runs the callback method
        Then I can pass a callback function to 'should' to assert a block of text has 3 paragraphs

    Scenario: Find element by class name regex
        Given I find an element with a class name starting with "heading-"
        Then the element text is "Introduction"

    Scenario: Can throw own errors
        # Yet another test that doesn't really fit into the BDD style so is quite artificial.
        # It's not easy to split the functionality across multiple steps but for the test to be
        # meaningful BDD it really should have multiple steps
        Given I expect a custom error to be thrown when more than 0 matching elements are found
        When a find elements call returns 1 matching element
        Then my custom error is thrown

    Scenario: Manipulate text before comparison
        Then the "Foo Bar" and "foo b a r" elements match ignoring case and whitespace

    Scenario: Object verification
        Given I have declared a 'person' object with the following key-value pairs
            | Key  | Value |
            | name | Joe   |
            | age  | 20    |
        Then I can assert 'person' is an object

    Scenario: Callback function in 'should()' retried until assertions pass
        Then the random number will be between 1 and 10
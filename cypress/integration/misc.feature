Feature: Cypress Example Misc Page
    Tests for https://example.cypress.io/commands/misc

    Background: Open example misc page
        Given I have opened the "Misc" page

    # Scenario: End the command chain - .end()
    # This test doesn't really fit well into the BDD style due to the nature of the .end() command.
    # Splitting it into multiple steps to work with the Gherkin style would create separate command
    # chains for each step negating the need for the .end() command so I have omitted this test

    Scenario: Execute a system command - cy.exec() (1)
        When I echo "Jane Lane" to the command line
        Then the command line stdout contains "Jane Lane"

    Scenario: Execute a system command - cy.exec() (2)
        When I output the contents of "cypress.json" to the command line
        Then the command line stderr is empty

    Scenario: Execute a system command - cy.exec() (3)
        When I print the current working directory
        Then the command line exit code is "0"

    Scenario: Get the DOM element that has focus - cy.focused()
        When I click the form element with an ID of "name"
        Then the focused element should have an ID of "name"
        When I click the form element with an ID of "description"
        Then the focused element should have an ID of "description"


    Scenario: Take a screenshot - cy.screenshot()
        When I take a screenshot with a name of "my-image"
        Then "my-image.png" is created in the screenshots folder

    Scenario: Change default config of screenshot - Cypress.Screenshot.defaults()
        # I haven't quite figured out how best to verify the screenshot image size so have omitted
        # that from this test at this stage. I have also omitted the setting of the empty promises
        # for onBeforeScreenshot and onAfterScreenshot
        Given I have set the following default screenshot config options
            | blackout                   | .misc-form |
            | capture                    | viewport   |
            | clip x                     | 0          |
            | clip y                     | 0          |
            | clip width                 | 200        |
            | clip height                | 200        |
            | scale                      | false      |
            | disableTimersAndAnimations | true       |
            | screenshotOnRunFailure     | true       |
            | overwrite                  | true       |
        When I take a screenshot with a name of "screenshot-config"
        Then "screenshot-config.png" is created in the screenshots folder

    Scenario: Wrap an object - cy.wrap()
        Given I have wrapped the following object
            | key | value |
            | foo | bar   |
        Then the object has a key of "foo" with a value of "bar"
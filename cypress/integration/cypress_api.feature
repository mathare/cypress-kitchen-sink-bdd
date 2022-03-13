Feature: Cypress Example API Page
    Tests for https://example.cypress.io/cypress-api

    Background: Open Cypress API page
        Given I have opened the "Cypress API" page

    # The original test spec has a test of creating custom commands, such as a command to log the method subject to the console but as there
    # is no way to automatically verify the method has had the desired effect when called I have chosen not to implement this test, especially
    # as I can't imagine many scenarios when one would need to create a custom command within a test itself.

    Scenario: Enable debugging - Cypress.Cookies.debug(true)
        # This scenario is very artificial as it has no verification of the results - one can check the logs manually to show whether or not
        # the cookie details are logged but that's not easy to do automatically during the test
        Given I have enabled cookie debugging
        When I set a cookie with a name of "fakeCookie" and a value of "123ABC"
        #Then the Cypress log shows the cookie has been set
        When I clear the "fakeCookie" cookie
    #Then the Cypress log shows the cookie has been cleared

    Scenario: Disable debugging - Cypress.Cookies.debug(false)
        # This scenario is very artificial as it has no verification of the results - one can check the logs manually to show whether or not
        # the cookie details are logged but that's not easy to do automatically during the test
        Given I have disabled cookie debugging
        When I set a cookie with a name of "fakeCookie" and a value of "123ABC"
        #Then the Cypress log doesn't show the cookie has been set
        When I clear the "fakeCookie" cookie
    #Then the Cypress log doesn't show the cookie has been cleared

    Scenario: Cookies are normally reset between tests
        # This is not an explicit test in the original spec but is part of the .preserveOnce() test. However, it makes sense for it to be separate here
        Then there is no "fakeCookie" cookie

    Scenario: Preserve cookies by key - .preserveOnce() (pt1)
        # This is another test that is quite artificial as it has no verification - this test preserves a cookie making it available in later
        # tests so the verification is in effect another test, that is dependent on this one having been run first. That is very poor test
        # design as all tests should be independent and able to run in any order but as a way of demonstrating the preservation of cookies I
        # have written dependent tests. If one is preserving cookies it should really be done as part of before/after hooks rather than during
        # individual tests
        Given I have set a cookie with a name of "lastCookie" and a value of "789XYZ"
        When I preserve the "lastCookie" cookie

    Scenario: Preserve cookies by key - .preserveOnce() (pt2)
        #This scenario is the verification for the above scenario, making it dependent on the previous test
        Then a cookie with a name of "lastCookie" exists
        And the "lastCookie" cookie has a value of "789XYZ"

    Scenario: Set defaults for all cookies - .defaults() (pt1)
        # As with the above tests for preserving cookies, this scenario is not very well suited to BDD (or automated in testing in general, one
        # could argue) as it requires a separate test for the assertion, thus creating dependent tests
        Given I have defaulted cookies with a name "session_id" to be preserved
        And I have set a cookie with a name of "session_id" and a value of "123456"

    Scenario: Set defaults for all cookies - .defaults() (pt2)
        Then a cookie with a name of "session_id" exists
        And the "session_id" cookie has a value of "123456"

    Scenario: Get CPU architecture name of underlying OS - Cypress.arch
        # This is a beefed up version of the original test which only checks the command returns something
        # rather than validating the return value is as expected
        Then the CPU architecture is one of the following
            | x64    |
            | ia32   |
            | arm    |
            | arm64  |
            | mips   |
            | mipsel |
            | ppc    |
            | ppc64  |
            | s390   |
            | s390x  |

    Scenario: Get configuration options
        # My own Cypress config is different to the default in some places so this test has been updated to use my values rather than
        # those specified in the original test
        Then the Cypress config has an "animationDistanceThreshold" property with a value of 5
        And the Cypress config has a "baseUrl" property with a value of https://example.cypress.io
        And the Cypress config has a "defaultCommandTimeout" property with a value of 4000
        And the Cypress config has a "requestTimeout" property with a value of 5000
        And the Cypress config has a "responseTimeout" property with a value of 30000
        And the Cypress config has a "viewportHeight" property with a value of 1080
        And the Cypress config has a "viewportWidth" property with a value of 1920
        And the Cypress config has a "pageLoadTimeout" property with a value of 60000
        And the Cypress config has a "waitForAnimations" property with a value of true

    Scenario: Set configuration options
        Given I have set the "pageLoadTimeout" property to 20000
        Then the Cypress config has a "pageLoadTimeout" property with a value of 20000

    Scenario: Determine if a DOM element is hidden - Cypress.dom.isHidden()
        # Sometimes it is hard to write meaningful BDD for simple assertions, and this is a good example of that
        Then the hidden paragraph element should be hidden
        And the visible paragraph element should be visible

    Scenario: Get and set environment variables - Cypress.env()
        # This test doesn't really fit the BDD style that well as it is demonstrating various ways of doing the same thing. It could have
        # broken into a number of separate scenarios but it doesn't seem worth it really
        Given I have set environment variables as follows
            | key        | value                     |
            | host       | veronica.dev.local        |
            | api_server | http://localhost:8888/v1/ |
        Then the "host" environment variable has a value of "veronica.dev.local"
        When I set the "api_server" environment variable to "http://localhost:8888/v2/"
        Then the "api_server" environment variable has a value of "http://localhost:8888/v2/"
        And the following environment variables are set
            | key        | value                     |
            | host       | veronica.dev.local        |
            | api_server | http://localhost:8888/v2/ |

    # The original test spec has a blank test for the command log at this point. The test does nothing, it is just a reference to the docs for the command log.
    # As such there is no test for me to implement as BDD

    Scenario: Get underlying OS name - Cypress.platform()
        # This is a beefed up version of the original test which only checks the command returns something
        # rather than validating the return value is as expected
        Then the OS platform name is one of the following
            | aix     |
            | darwin  |
            | freebsd |
            | linux   |
            | openbsd |
            | sunos   |
            | win32   |

    Scenario: Get the current version of Cypress being run - Cypress.version
        # This is another beefed up version of the original test which only checks the command returns something
        # rather than validating the return value is as expected
        Then the Cypress version is "9.5.0" or greater

    Scenario: Get current spec (feature) information - Cypress.spec
        Then the current feature has the following properties
        |name|
        |relative|
        |absolute|
        And the current feature "name" is "cypress_api.feature"
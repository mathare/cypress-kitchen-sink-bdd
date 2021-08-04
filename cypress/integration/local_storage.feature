Feature: Cypress Example Local Storage Page
    Tests for https://example.cypress.io/commands/local-storage

    Although local storage is automatically cleared in between tests to maintain a clean state,
    sometimes we need to clear the local storage manually

    Background: Open example local storage page
        Given I have opened the "Local Storage" page

    Scenario: Verify data in local storage
        When I click the 'Populate Local Storage' button
        Then the local storage should contain the following
            | Item  | Value   |
            | prop1 | red     |
            | prop2 | blue    |
            | prop3 | magenta |

    Scenario: Clear local storage
        Given I have clicked the 'Populate Local Storage' button
        When I clear the local storage
        Then the local storage should contain the following
            | Item  | Value |
            | prop1 | null  |
            | prop2 | null  |
            | prop3 | null  |

    Scenario: Clear key matching string in local storage
        Given I have clicked the 'Populate Local Storage' button
        When I clear the "prop1" key in local storage
        Then the local storage should contain the following
            | Item  | Value   |
            | prop1 | null    |
            | prop2 | blue    |
            | prop3 | magenta |

    Scenario: Clear keys matching regex in local storage
        Given I have clicked the 'Populate Local Storage' button
        When I clear the local storage keys matching a regex of "prop(1|2)"
        Then the local storage should contain the following
            | Item  | Value   |
            | prop1 | null    |
            | prop2 | null    |
            | prop3 | magenta |
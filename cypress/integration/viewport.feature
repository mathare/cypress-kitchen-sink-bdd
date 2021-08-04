Feature: Cypress Example Viewport Page
    Tests for https://example.cypress.io/commands/viewport

    Background: Open example viewport page
        Given I have opened the "Viewport" page

    Scenario: Navbar collapses for small viewports
        Given the navbar is visible
        When I change the viewport size to 320 x 480
        Then the navbar should not be visible
        When I click the navbar toggle
        Then the navbar is visible

    Scenario Outline: Preset dimensions - <device>
        When I set the viewport to the "<device>" preset
        Then the viewport size is <width> x <height>
        Examples:
            | device        | width | height |
            | MacBook-16    | 1536  | 960    |
            | MacBook-15    | 1440  | 900    |
            | MacBook-13    | 1280  | 800    |
            | MacBook-11    | 1366  | 768    |
            | MacBook-11    | 1366  | 768    |
            | iPad-2        | 768   | 1024   |
            | iPad-Mini     | 768   | 1024   |
            | iPhone-SE2    | 375   | 667    |
            | iPhone-XR     | 414   | 896    |
            | iPhone-X      | 375   | 812    |
            | iPhone-8      | 375   | 667    |
            | iPhone-7      | 375   | 667    |
            | iPhone-6+     | 414   | 736    |
            | iPhone-6      | 375   | 667    |
            | iPhone-5      | 320   | 568    |
            | iPhone-4      | 320   | 480    |
            | iPhone-3      | 320   | 480    |
            | Samsung-Note9 | 414   | 846    |
            | Samsung-S10   | 360   | 760    |

    Scenario Outline: Specify device orientation - <orientation>
        When I set the viewport to the "iPad-2" preset with an orientation of "<orientation>"
        Then the viewport size is <width> x <height>
        Examples:
            | orientation | width | height |
            | portrait    | 768   | 1024   |
            | landscape   | 1024  | 768    |
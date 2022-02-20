Feature: Cypress Example Traversal Page
    Tests for https://example.cypress.io/commands/traversal

    Background: Open example traversal page
        Given I have opened the "Traversal" page

    Scenario: Get child DOM elements - .children()
        Given there is a breadcrumb element
        Then the children should contain "Data"

    Scenario: Get closest ancestor DOM element - .closest()
        Given there is a list element with badges
        Then the closest "ul" element has a class of "list-group"

    Scenario Outline: Get a DOM element with a specific index - .eq()
        Given there is a list element
        Then the list item with index <index> should contain "<text>"
        Examples:
            | index | text    |
            | 0     | tabby   |
            | 1     | siamese |
            | 2     | persian |
            | 3     | sphynx  |
            | 4     | burmese |

    Scenario: Get DOM elements that match a selector - .filter()
        Given there is a nav element
        Then the active item should contain "About"

    Scenario: Get descendant DOM elements of selector - .find()
        Given there is a pagination element
        Then there should be 7 "a" elements within "li" elements 

    Scenario: Get first DOM element - .first()
        Given there is a table element
        Then the first item should contain "1"

    Scenario: Get last DOM element - .last()
        Given there is a set of buttons
        Then the text of the last button should contain "Submit"

    Scenario: Get next sibling DOM element - .next()
        Given there is a short list of fruits
        And the list contains "apples"
        Then the next item in the list is "oranges"

    Scenario: Get all next sibling DOM elements - .nextAll()
        # This test uses a different list element to the original test as the list used is duplicated on the page
        # This simplifies the BDD by allowing a step to be re-used for the similar .prevAll() test
        Given there is a list of fruits
        Then there are 3 items in the list after "oranges"

    Scenario: Get next sibling DOM elements until next el - .nextUntil()
        Given there is a list of healthy foods
        Then there are 3 items between "veggies" and "nuts"

    Scenario: Remove DOM elements from set of DOM elements - .not()
        Given one of a set of buttons is disabled
        Then excluding the disabled button, none of the buttons have text of "Disabled"

    Scenario: Get parent DOM element - .parent()
        # NB .parent() only looks at the immediate parent element
        Given there is a highlight in some text
        Then the parent element has text containing "Morbi leo risus"

    Scenario: Get parent/ancestor DOM elements - .parents()
        # NB .parents() travels multiple levels up the DOM tree to find a matching element whereas .parent() only goes up one level
        Given there is a citation
        Then there is a blockquote ancestor element

    Scenario: Get parent/ancestor DOM elements until el - .parentsUntil()
        Given there is a clothes nav list
        Then the clothes nav is 2 ancestors above the active element

    Scenario: Get previous sibling DOM element - .prev()
        Given there is a list of birds
        Then the item before the active one should contain "Lorikeets"

    Scenario: Get all previous sibling DOM elements - .prevAll()
        # This is a somewhat artificial example and not great Gherkin but it shows the point of the .prevAll() function
        Given there is a list of fruits
        Then there are 2 items before the third item in the list

    Scenario: Get all previous sibling elements until el - .prevUntil()
        # This is another test that uses a duplicate list to allow re-use of an existing step
        # This doesn't affect the functionality of the test at all
        Given there is a list of healthy foods
        Then there are 3 previous items between "nuts" and "veggies"

    Scenario: Get all sibling DOM elements - .siblings()
        Given there is a set of pill buttons
        Then the active button has 2 siblings

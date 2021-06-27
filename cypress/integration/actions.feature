Feature: Cypress Example Actions Page
  Tests for https://example.cypress.io/commands/actions

  Background: Open example actions page
    Given I have opened the "Actions" page

  Scenario: Typing into input fields
    When I enter "fake@email.com" in the email address field
    Then "fake@email.com" is displayed in the email address field
    And I can use all the arrow keys to navigate through the text in the email address field
    And I can delete the email address field contents by selecting all the text and pressing backspace

  Scenario Outline: Type using key modifiers - <modifier>
    Then I can type in the email address field using the "<modifier>" key
    Examples:
      | modifier |
      | alt      |
      | option   |
      | ctrl     |
      | control  |
      | meta     |
      | command  |
      | cmd      |
      | shift    |

  Scenario: Keypresses can be delayed
    When I enter "slow.typing@email.com" in the email address field with a keypress delay of 100 milliseconds
    Then "slow.typing@email.com" is displayed in the email address field

  Scenario: Can type in disabled fields by force
    When I disable error checking in the disabled input field and enter "disabled error checking"
    Then "disabled error checking" is displayed in the disabled input field

  Scenario: Focus on an element
    When I focus on the Password field
    Then the Password field is outlined in orange

  Scenario: Blur off an element
    Given I have entered "About to blur" in the Full Name field
    When I blur the Full Name field
    Then the Full Name field is outlined in red

  Scenario: Clear an input/textarea
    Given I have entered "Clear this text" in the Describe field
    Then "Clear this text" is displayed in the Describe field
    When I clear the Describe field
    Then the Describe field is blank

  Scenario: Submit a form
    Given I have entered a coupon code of "HALFOFF"
    When I submit the form
    Then a message confirms the form has been submitted

  Scenario: Click button
    When I click the 'Click to toggle popover' button
    Then a popover is displayed
    And the popover has a title of "Popover"
    And the popover has a body of "This popover shows up on click"
    When I click the 'Click to toggle popover' button
    Then the popover is no longer displayed

  # This scenario has no verification that the selected point is indeed clicked - need to work out how to check what is displayed on canvas
  Scenario: Click on predefined points in canvas
    Then I can click on the canvas at each of the following predefined positions
      | position    |
      | center      |
      | topLeft     |
      | top         |
      | topRight    |
      | left        |
      | right       |
      | bottomLeft  |
      | bottom      |
      | bottomRight |

  # This scenario has no verification that the selected point is indeed clicked - need to work out how to check what is displayed on canvas
  Scenario: Click on variable (x,y) points in canvas
    Then I can click on the canvas at each of the following x,y positions
      | x   | y   |
      | 80  | 75  |
      | 170 | 75  |
      | 80  | 165 |
      | 100 | 185 |
      | 125 | 190 |
      | 150 | 185 |
      | 170 | 165 |

  Scenario: Can click multiple buttons at once
    When I click multiple buttons at once
    Then each button shows a "clicked" popover

  Scenario: Force click on obscured button
    Then I can force a click on an obscured button

  Scenario: Double-click to make field editable
    When I double-click on the relevant control
    Then the field becomes editable

  Scenario: Right-click to make field editable
    When I right-click on the relevant control
    Then the field becomes editable

  Scenario: Check all enabled checkboxes in turn
    When I check on all enabled checkboxes
    Then the checkboxes have the following states
      | label                                | state     |
      | Checkbox one has value "checkbox1"   | checked   |
      | Checkbox two is disabled             | unchecked |
      | Checkbox three has value "checkbox3" | checked   |

  Scenario: Select radio buttons
    Given I have selected the 1st radio button
    When I select the 2nd radio button
    Then the 1st radio button is no longer selected
    When I select the radio button with a value of "radio1"
    Then the 2nd radio button is no longer selected

  Scenario: Check on multiple checkboxes
    When I check on the following checkboxes
      | checkbox1 |
      | checkbox2 |
    Then the checkboxes have the following states
      | label                                | state     |
      | Checkbox one has value "checkbox1"   | checked   |
      | Checkbox two has value "checkbox2"   | checked   |
      | Checkbox three has value "checkbox3" | unchecked |

  Scenario: Can force click on disabled checkboxes/radio buttons
    When I force a click on the disabled checkbox
    Then the checkboxes have the following states
      | label                                | state     |
      | Checkbox one has value "checkbox1"   | unchecked |
      | Checkbox two is disabled             | checked   |
      | Checkbox three has value "checkbox3" | unchecked |
    When I force a click on the disabled radio button
    Then the 3rd radio button is selected
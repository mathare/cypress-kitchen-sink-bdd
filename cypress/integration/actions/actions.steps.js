import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import ActionsPage from "../../pages/actions_page";

let control, section, scroll;

Given('I have entered {string} in the Full Name field', (text) => {
  ActionsPage.enterFullName(text);
});

Given('I have entered {string} in the Describe field', (text) => {
  ActionsPage.enterDescribeText(text);
});

Given('I have entered a coupon code of {string}', (code) => {
  ActionsPage.enterCouponCode(code);
});

Given(/^I have selected the (\d+).{2} radio button$/, (index) => {
  ActionsPage.selectRadioButtonByIndex(index - 1)
});

Given('the button in the {string} scroll pane is not initially visible', (scrollType) => {
  ActionsPage.verifyButtonIsVisible(scrollType, false);
  scroll = scrollType;
});

When('I enter {string} in the email address field', (email) => {
  ActionsPage.enterEmailAddress(email);
});

When('I enter {string} in the email address field with a keypress delay of {int} milliseconds', (email, delay) => {
  ActionsPage.enterEmailAddressWithDelay(email, delay);
});

When('I disable error checking in the disabled input field and enter {string}', (text) => {
  ActionsPage.forceTypingInDisabledField(text);
});

When('I focus on the Password field', () => {
  ActionsPage.focusOnPasswordField();
});

When('I blur the Full Name field', () => {
  ActionsPage.blurFullNameInput();
});

When('I clear the Describe field', () => {
  ActionsPage.clearDescribeInput();
});

When('I submit the form', () => {
  ActionsPage.submitCouponCodeForm();
});

When('I click the \'Click to toggle popover\' button', () => {
  ActionsPage.clickPopoverToggleButton();
});

When('I click multiple buttons at once', () => {
  ActionsPage.clickMultipleButtons();
});

When('I double-click on the relevant control', () => {
  ActionsPage.doubleClickToEnableEditing();
  control = 'dblClick';
});

When('I right-click on the relevant control', () => {
  ActionsPage.rightClickToEnableEditing();
  control = 'rightClick';
});

When('I check on all enabled checkboxes', () => {
  ActionsPage.checkAllEnabledCheckboxes();
  section = 'checkboxes';
});

When(/^I select the (\d+).{2} radio button$/, (index) => {
  ActionsPage.selectRadioButtonByIndex(index - 1);
});

When('I select the radio button with a value of {string}', (value) => {
  ActionsPage.selectRadioButtonByValue(value);
});

When('I check on the following checkboxes', (checkboxList) => {
  let checkboxes = [];
  checkboxList.raw().forEach(checkbox => {
    checkboxes.push(checkbox[0]);
  });
  ActionsPage.checkCheckboxesByValue(checkboxes);
  section = 'multiple checkboxes';
})

When('I force a check on of the disabled checkbox', () => {
  ActionsPage.forceCheckDisabledCheckbox();
  section = 'checkboxes';
});

When('I force a click on the disabled radio button', () => {
  ActionsPage.forceClickOnDisabledRadioButton();
})

When('I uncheck all enabled checkboxes', () => {
  ActionsPage.uncheckAllEnabledCheckboxes();
  section = 'uncheck';
});

When('I uncheck the {string} checkbox', (checkboxValue) => {
  const checkboxList = [checkboxValue];
  ActionsPage.uncheckCheckboxesByValue(checkboxList);
  section = 'uncheck';
});

When('I uncheck the following checkboxes', (checkboxList) => {
  let checkboxes = [];
  checkboxList.raw().forEach(checkbox => {
    checkboxes.push(checkbox[0]);
  });
  ActionsPage.uncheckCheckboxesByValue(checkboxes);
  section = 'uncheck';
});

When('I force unchecking of the disabled checkbox', () => {
  ActionsPage.forceUncheckDisabledCheckbox();
  section = 'uncheck';
});

When('I select {string} from the single fruit select list', (fruit) => {
  ActionsPage.selectOptions('single', fruit);
});

When('I select {string} from the multiple fruit select list', (fruits) => {
  ActionsPage.selectOptions('multiple', fruits.split(', '));
});

When('I scroll the button into view', () => {
  ActionsPage.scrollButtonIntoView(scroll);
});

When('I set the slider value to {int}', (value) => {
  ActionsPage.setSliderValue(value);
});

Then('{string} is displayed in the email address field', (email) => {
  ActionsPage.verifyEmailAddress(email);
});

Then('I can use all the arrow keys to navigate through the text in the email address field', () => {
  ActionsPage.navigateAroundEmailAddress();
});

Then('I can delete the email address field contents by selecting all the text and pressing backspace', () => {
  ActionsPage.deleteEmailAddress();
  ActionsPage.verifyEmailAddress('');
});

Then('I can type in the email address field using the {string} key', (modifier) => {
  ActionsPage.enterEmailAddress('{' + modifier + '}');
});

Then('{string} is displayed in the disabled input field', (expectedText) => {
  ActionsPage.verifyDisabledInputText(expectedText);
});

Then('the Password field is outlined in orange', () => {
  ActionsPage.verifyPasswordFieldHasFocus();
});

Then('the Full Name field is outlined in red', () => {
  ActionsPage.verifyFullNameInputBlurred();
});

Then('{string} is displayed in the Describe field', (text) => {
  ActionsPage.verifyDescribeInputText(text);
});

Then('the Describe field is blank', () => {
  ActionsPage.verifyDescribeInputText('');
});

Then('a message confirms the form has been submitted', () => {
  ActionsPage.verifyCouponCodeFormSubmitted();
});

Then('a popover is displayed', () => {
  ActionsPage.verifyPopoverDisplayed(true);
});

Then('the popover has a title of {string}', (title) => {
  ActionsPage.verifyPopoverTitle(title);
});

Then('the popover has a body of {string}', (body) => {
  ActionsPage.verifyPopoverContent(body);
});

Then('the popover is no longer displayed', () => {
  ActionsPage.verifyPopoverDisplayed(false);
});

Then('I can click on the canvas at each of the following predefined positions', (positions) => {
  positions.rows().forEach(position => {
    ActionsPage.clickOnPredefinedCanvasPosition(position[0]);
  })
});

Then('I can click on the canvas at each of the following x,y positions', (positions) => {
  positions.rows().forEach(position => {
    ActionsPage.clickOnXYCanvasPosition(parseInt(position[0]), parseInt(position[1]));
  })
});

Then('each button shows a {string} popover', (expectedText) => {
  ActionsPage.verifyButtonsShowPopover(expectedText);
})

Then('I can force a click on an obscured button', () => {
  ActionsPage.clickObscuredButton();
});

Then('the field becomes editable', () => {
  control === 'dblClick' ? ActionsPage.verifyDblClickFieldEditable() : ActionsPage.verifyRightClickFieldEditable();
});

Then('the checkboxes have the following states', (checkboxes) => {
  checkboxes.rows().forEach(checkbox => {
    ActionsPage.verifyCheckboxCheckState(section, checkbox[0], checkbox[1]);
  })
});

Then(/^the (\d+).{2} radio button is no longer selected$/, (index) => {
  ActionsPage.verifyRadioButtonState(index - 1, "not selected");
})

Then(/^the (\d+).{2} radio button is selected$/, (index) => {
  ActionsPage.verifyRadioButtonState(index - 1, "selected");
})

Then('the single fruit select list has a default value of {string}', (value) => {
  ActionsPage.verifySingleSelectedOption(value);
});

Then('the single fruit select list shows {string} is selected', (fruit) => {
  //Select list values are prefixed with 'fr-'
  ActionsPage.verifySingleSelectedOption(fruit);
});

Then('the multiple fruit select list shows the following are selected', (fruits) => {
  //Select list values are prefixed with 'fr-'
  let options = [];
  fruits.raw().forEach(fruit => {
    options.push('fr-' + fruit);
  })
  ActionsPage.verifyMultipleSelectedOptions(options);  
});

Then('the selected values in the multiple fruit select list include {string}', (fruit) => {
  ActionsPage.verifySelectedOptionsInclude(fruit);
});

Then('the button is now visible', () => {
  ActionsPage.verifyButtonIsVisible(scroll, true);
});

Then('the slider label has a value of {string}', (value) => {
  ActionsPage.verifySliderValue(value);
});

Then('I can scroll the window to the {string}', (position) => {
  ActionsPage.scrollWholeWindow(position);
});

Then('I can scroll the {string} scroll pane to the {string}', (scrollpane, position) => {
  if (position === 'centre') position = 'center';
  ActionsPage.scrollScrollPaneInDirection(scrollpane, position);
});

Then('I can scroll the {string} scroll pane to {int}, {int}', (scrollpane, xPos, yPos) => {
  ActionsPage.scrollScrollPaneToPosition(scrollpane, xPos, yPos);
});

Then('I can scroll the {string} scroll pane to {int}%, {int}%', (scrollpane, xPos, yPos) => {
  ActionsPage.scrollScrollPaneToPosition(scrollpane, xPos + '%', yPos + '%');
});

Then('I can scroll the {string} scroll pane to the {string} smoothly', (scrollpane, position) => {
  ActionsPage.scrollScrollPaneSmoothly(scrollpane, position);
});

Then('I can scroll the {string} scroll pane to the {string} slowly', (scrollpane, position) => {
  ActionsPage.scrollScrollPaneSlowly(scrollpane, position);
});
const EMAIL_ADDRESS_INPUT = '.action-email';
const DISABLED_INPUT = '.action-disabled';
const FOCUSABLE_INPUT = '.action-focus';
const BLURRABLE_INPUT = '.action-blur';
const DESCRIBE_INPUT = '.action-clear';
const COUPON_CODE_FORM = '.action-form';
const TEXT_FIELD = '[type="text"]';
const POPOVER_TOGGLE_BUTTON = '.action-btn';
const POPOVER = '.popover';
const POPOVER_TITLE = '.popover-title';
const POPOVER_BODY = '.popover-content';
const CANVAS = '#action-canvas';
const MULTPLE_LABELS = '.action-labels>.label';
const OBSCURED_BUTTON = '.action-opacity>.btn';
const DBL_CLICK_EDIT = '.action-div';
const DBL_CLICK_HIDDEN_INPUT = '.action-input-hidden';
const RIGHT_CLICK_EDIT = '.rightclick-action-div';
const RIGHT_CLICK_HIDDEN_INPUT = '.rightclick-action-input-hidden';
const CHECKBOXES_SECTION = '.action-checkboxes';
const RADIO_BUTTONS_SECTION = '.action-radios';
const DISABLED = '[disabled]';
const MULTIPLE_CHECKBOXES_SECTION = '.action-multiple-checkboxes';
const UNCHECK_SECTION = '.action-check';
const CHECKBOX = '[type="checkbox"]';
const RADIO_BUTTON = ' [type="radio"]';
const SELECT = '.action-select';
const MULTI_SELECT = '.action-select-multiple';
const HORIZONTAL_SCROLL = '#scroll-horizontal';
const VERTICAL_SCROLL = '#scroll-vertical';
const BOTH_SCROLL = '#scroll-both';
const BUTTON = 'button';
const SLIDER = '.trigger-input-range';
const SCROLLABLE_HORIZONTAL = '#scrollable-horizontal';
const SCROLLABLE_VERTICAL = '#scrollable-vertical';
const SCROLLABLE_BOTH = '#scrollable-both';

class ActionsPage {

  static enterEmailAddress(email) {
    cy.get(EMAIL_ADDRESS_INPUT).type(email);
  }

  static enterEmailAddressWithDelay(email, delay) {
    cy.get(EMAIL_ADDRESS_INPUT).type(email, { delay: delay });
  }

  static verifyEmailAddress(email) {
    cy.get(EMAIL_ADDRESS_INPUT).should('have.value', email);
  }

  static navigateAroundEmailAddress() {
    cy.get(EMAIL_ADDRESS_INPUT).type('{leftarrow}{rightarrow}{uparrow}{downarrow}');
  }

  static deleteEmailAddress() {
    cy.get(EMAIL_ADDRESS_INPUT).type('{del}{selectall}{backspace}');
  }

  static forceTypingInDisabledField(text) {
    cy.get(DISABLED_INPUT).type(text, { force: true });
  }

  static verifyDisabledInputText(text) {
    cy.get(DISABLED_INPUT).should('have.value', text);
  }

  static focusOnPasswordField() {
    cy.get(FOCUSABLE_INPUT).focus();
  }

  static verifyPasswordFieldHasFocus() {
    cy.get(FOCUSABLE_INPUT)
      .should('have.class', 'focus')
      .prev().should('have.attr', 'style', 'color: orange;');
  }

  static enterFullName(text) {
    cy.get(BLURRABLE_INPUT).type(text);
  }

  static blurFullNameInput() {
    cy.get(BLURRABLE_INPUT).blur();
  }

  static verifyFullNameInputBlurred() {
    cy.get(BLURRABLE_INPUT)
      .should('have.class', 'error')
      .prev().should('have.attr', 'style', 'color: red;')
  }

  static enterDescribeText(text) {
    cy.get(DESCRIBE_INPUT).type(text);
  }

  static verifyDescribeInputText(expectedText) {
    cy.get(DESCRIBE_INPUT).should('have.value', expectedText);
  }

  static clearDescribeInput() {
    cy.get(DESCRIBE_INPUT).clear();
  }

  static enterCouponCode(code) {
    cy.get(COUPON_CODE_FORM).find(TEXT_FIELD).type(code);
  }

  static submitCouponCodeForm() {
    cy.get(COUPON_CODE_FORM).submit();
  }

  static verifyCouponCodeFormSubmitted() {
    cy.get(COUPON_CODE_FORM).next().should('contain', 'Your form has been submitted!');
  }

  static clickPopoverToggleButton() {
    cy.get(POPOVER_TOGGLE_BUTTON).click();
  }

  static verifyPopoverDisplayed(isDisplayed) {
    isDisplayed ? cy.get(POPOVER).should('be.visible') : cy.get(POPOVER).should('not.exist');
  }

  static verifyPopoverTitle(expectedText) {
    cy.get(POPOVER_TITLE).should('have.text', expectedText);
  }

  static verifyPopoverContent(expectedText) {
    cy.get(POPOVER_BODY).should('have.text', expectedText);
  }

  static clickOnPredefinedCanvasPosition(position) {
    cy.get(CANVAS).click(position);
  }

  static clickOnXYCanvasPosition(x, y) {
    cy.get(CANVAS).click(x, y);
  }

  static clickMultipleButtons() {
    cy.get(MULTPLE_LABELS).click({ multiple: true });
  }

  static verifyButtonsShowPopover(expectedText) {
    cy.get(MULTPLE_LABELS).its('length').then(numButtons => {
      cy.get(POPOVER).should('have.length', numButtons)
        .each(popover => {
          cy.get(popover).should('have.text', expectedText);
        })
    })
  }

  static clickObscuredButton() {
    cy.get(OBSCURED_BUTTON).click({ force: true });
  }

  static doubleClickToEnableEditing() {
    cy.get(DBL_CLICK_EDIT).dblclick();
  }

  static verifyDblClickFieldEditable() {
    cy.get(DBL_CLICK_EDIT).should('not.be.visible');
    cy.get(DBL_CLICK_HIDDEN_INPUT).should('be.visible');
  }

  static rightClickToEnableEditing() {
    cy.get(RIGHT_CLICK_EDIT).rightclick();
  }

  static verifyRightClickFieldEditable() {
    cy.get(RIGHT_CLICK_EDIT).should('not.be.visible');
    cy.get(RIGHT_CLICK_HIDDEN_INPUT).should('be.visible');
  }

  static checkAllEnabledCheckboxes() {
    cy.get(CHECKBOXES_SECTION + ' ' + CHECKBOX).not(DISABLED).check();
  }

  static verifyCheckboxCheckState(sectionName, label, state) {
    let matched = false;
    let section;
    switch (sectionName) {
      case 'checkboxes':
        section = CHECKBOXES_SECTION;
        break;
      case 'multiple checkboxes':
        section = MULTIPLE_CHECKBOXES_SECTION;
        break;
      case 'uncheck':
        section = UNCHECK_SECTION;
        break;
    }
    // const section = sectionName === "checkboxes" ? CHECKBOXES_SECTION : MULTIPLE_CHECKBOXES_SECTION;
    cy.get(section).find(CHECKBOX).each(checkbox => {
      cy.get(checkbox).parent().invoke('text').then(actualText => {
        if (actualText.trim() === label) {
          state === 'checked' ? cy.get(checkbox).should('be.checked') : cy.get(checkbox).should('not.be.checked');
          matched = true;
        }
      })
    });
    cy.then(() => {
      expect(matched).to.be.true;
    });
  }

  static selectRadioButtonByIndex(index) {
    cy.get(RADIO_BUTTONS_SECTION + ' ' + RADIO_BUTTON).eq(index).check();
  }

  static selectRadioButtonByValue(value) {
    cy.get(RADIO_BUTTONS_SECTION + ' ' + RADIO_BUTTON).check(value);
  }

  static verifyRadioButtonState(index, state) {
    state === 'selected' ? cy.get(RADIO_BUTTONS_SECTION + ' ' + RADIO_BUTTON).eq(index).should('be.checked')
      : cy.get(RADIO_BUTTONS_SECTION + ' ' + RADIO_BUTTON).eq(index).should('not.be.checked');
  }

  static checkCheckboxesByValue(checkboxes) {
    cy.get(MULTIPLE_CHECKBOXES_SECTION + ' ' + CHECKBOX).check(checkboxes);
  }

  static forceCheckDisabledCheckbox() {
    cy.get(CHECKBOXES_SECTION + ' ' + DISABLED).check({ force: true });
  }

  static forceClickOnDisabledRadioButton() {
    cy.get(RADIO_BUTTONS_SECTION + ' ' + DISABLED).check({ force: true });
  }

  static uncheckAllEnabledCheckboxes() {
    cy.get(UNCHECK_SECTION + ' ' + CHECKBOX).not(DISABLED).uncheck();
  }

  static uncheckCheckboxesByValue(checkboxes) {
    cy.get(UNCHECK_SECTION + ' ' + CHECKBOX).uncheck(checkboxes);
  }

  static forceUncheckDisabledCheckbox() {
    cy.get(UNCHECK_SECTION + ' ' + DISABLED).uncheck({ force: true });
  }

  static selectOptions(type, options) {
    //Can select by text or value using the same call
    const control = type === 'single' ? SELECT : MULTI_SELECT;
    cy.get(control).select(options);
  }

  static verifySingleSelectedOption(option) {
    if (!option.startsWith('--')) option = 'fr-' + option;
    cy.get(SELECT).should('have.value', option);
  }

  static verifyMultipleSelectedOptions(options) {
    cy.get(MULTI_SELECT).invoke('val').should('deep.equal', options)
  }

  static verifySelectedOptionsInclude(option) {
    cy.get(MULTI_SELECT).invoke('val').should('include', 'fr-' + option);
  }

  static verifyButtonIsVisible(scrollType, visible) {
    const button = this.#getScrollControl(scrollType) + ' ' + BUTTON
    visible ? cy.get(button).should('be.visible') : cy.get(button).should('not.be.visible')
  }

  static scrollButtonIntoView(scrollType) {
    cy.get(this.#getScrollControl(scrollType) + ' ' + BUTTON).scrollIntoView();
  }

  static setSliderValue(value) {
    cy.get(SLIDER).invoke('val', value).trigger('change');
  }

  static verifySliderValue(value) {
    cy.get(SLIDER).siblings('p').should('have.text', value);
  }

  static scrollWholeWindow(position) {
    position = this.#validateScrollPosition(position);
    cy.scrollTo(position);
  }

  static scrollScrollPaneInDirection(scrollType, position) {
    position = this.#validateScrollPosition(position);
    cy.get(this.#getScrollableControl(scrollType)).scrollTo(position);
  }

  static scrollScrollPaneToPosition(scrollType, xPos, yPos) {
    //Can be absolute (pixel) position or percentage position
    cy.get(this.#getScrollableControl(scrollType)).scrollTo(xPos, yPos);
  }

  static scrollScrollPaneSmoothly(scrollType, position) {
    position = this.#validateScrollPosition(position);
    cy.get(this.#getScrollableControl(scrollType)).scrollTo(position, {easing: 'linear'});
  }

  static scrollScrollPaneSlowly(scrollType, position) {
    position = this.#validateScrollPosition(position);
    cy.get(this.#getScrollableControl(scrollType)).scrollTo(position, {duration: 2000});
  }

  static #getScrollControl(scrollType) {
    if (scrollType === 'horizontal') return HORIZONTAL_SCROLL;
    if (scrollType === 'vertical') return VERTICAL_SCROLL;
    if (scrollType === 'main') return BOTH_SCROLL;
  }

  static #getScrollableControl(scrollType) {
    if (scrollType === 'horizontal') return SCROLLABLE_HORIZONTAL;
    if (scrollType === 'vertical') return SCROLLABLE_VERTICAL;
    if (scrollType === 'main') return SCROLLABLE_BOTH;
  }

  static #validateScrollPosition(position) {
    return position === 'centre' ? 'center' : position;
  }

}

export default ActionsPage;
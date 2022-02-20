import { Given, Then } from "cypress-cucumber-preprocessor/steps";
import TraversalPage from "../../pages/traversal_page";

Given('there is a breadcrumb element', () => {
    TraversalPage.verifyBreadcrumbExists();
});

Given('there is a list element with badges', () => {
    TraversalPage.verifyBadgeListExists();
});

Given('there is a list element', () => {
    TraversalPage.verifyListExists();
});

Given('there is a nav element', () => {
    TraversalPage.verifyNavExists();
});

Given('there is a pagination element', () => {
    TraversalPage.verifyPaginationExists();
});

Given('there is a table element', () => {
    TraversalPage.verifyTableExists();
});

Given('there is a set of buttons', () => {
    TraversalPage.verifyButtonsExist();
});

Given('there is a short list of fruits', () => {
    TraversalPage.verifyShortListExists();
});

Given('the list contains {string}', (text) => {
    TraversalPage.verifyShortListContains(text);
});

Given('there is a list of fruits', () => {
    TraversalPage.verifyFruitsListExists();
});

Given('there is a list of healthy foods', () => {
    TraversalPage.verifyHealthyFoodsListExists();
});

Given('one of a set of buttons is disabled', () => {
    TraversalPage.verifyDisabledButtonSetExists();
});

Given('there is a highlight in some text', () => {
    TraversalPage.verifyHighlightExists()
});

Given('there is a citation', () => {
    TraversalPage.verifyCitationExists();
});

Given('there is a clothes nav list', () => {
    TraversalPage.verifyClothesNavListExists();
});

Given('there is a list of birds', () => {
    TraversalPage.verifyBirdsListExists();
});

Given('there is a set of pill buttons', () => {
    TraversalPage.verifyPillButtonsExist();
});
        
Then('the children should contain {string}', (text) => {
    TraversalPage.verifyChildElementText(text);
});

Then('the closest {string} element has a class of {string}', (selector, className) => {
    TraversalPage.verifyClosestElementClass(selector, className);
});

Then('the list item with index {int} should contain {string}', (index, text) => {
    TraversalPage.verifyListElementTextByIndex(index, text);
});

Then('the active item should contain {string}', (text) => {
    TraversalPage.verifyActiveNavItemText(text);
});

Then('there should be {int} {string} elements within {string} elements', (numElements, selector2, selector1) => {
    TraversalPage.verifyNumNestedElements(selector1, selector2, numElements);
});

Then('the first item should contain {string}', (text) => {
    TraversalPage.verifyTableFirstItemText(text);
});

Then('the text of the last button should contain {string}', (text) => {
    TraversalPage.verifyLastButtonText(text);
});

Then('the next item in the list is {string}', (item) => {
    TraversalPage.verifyNextItemInList(item);
});

Then('there are {int} items in the list after {string}', (num, item) => {
    TraversalPage.verifyNumFollowingItemsInList(item, num);
});

Then('there are {int} items between {string} and {string}', (items, item1, item2) => {
    TraversalPage.verifyNumItemsBetweenListItems(item1, item2, items);
});

Then('excluding the disabled button, none of the buttons have text of {string}', (text) => {
    TraversalPage.verifyNoDisabledButton(text);
});

Then('the parent element has text containing {string}', (text) => {
    TraversalPage.verifyHighlightParentText(text);
});

Then('there is a blockquote ancestor element', () => {
    TraversalPage.verifyCitationAncestorIsBlockquote();
});

Then('the clothes nav is {int} ancestors above the active element', (num) => {
    TraversalPage.verifyNumAncestorsFromActiveToClothesNav(num);
});

Then('the item before the active one should contain {string}', (text) => {
    TraversalPage.verifyPreviousItemText(text);
});

Then('there are {int} items before the third item in the list', (num) => {
    TraversalPage.verifyNumItemsInListBeforeThirdItem(num);
});

Then('there are {int} previous items between {string} and {string}', (items, item1, item2) => {
    TraversalPage.verifyNumItemsBetweenListItems(item1, item2, items, 'back');
});

Then('the active button has {int} siblings', (num) => {
    TraversalPage.verifyNumPillButtonSiblings(num);
});
const BREADCRUMB = '.traversal-breadcrumb'
const ACTIVE = '.active'
const BADGE = '.traversal-badge'
const LIST_ITEM = '.traversal-list > li'
const NAV = '.traversal-nav > li'
const PAGINATION = '.traversal-pagination'
const TABLE = '.traversal-table'
const TABLE_CELL = 'td'
const BUTTONS = '.traversal-buttons'
const BUTTON = '.btn'
const SHORT_LIST = '.traversal-ul'
const FRUITS_LIST = '.fruits-list'
const HEALTHY_FOODS_LIST = '.healthy-foods'
const DISABLED_BUTTON_SET = '.traversal-disabled'
const DISABLED_BUTTON = '[disabled]'
const HIGHLIGHT = '.traversal-mark'
const CITATION = '.traversal-cite'
const BLOCKQUOTE = 'blockquote'
const CLOTHES_NAV = '.clothes-nav'
const BIRDS_LIST = '.birds'
const THIRD_ITEM = '.third'
const PILL_BUTTONS = '.traversal-pills'

let selectedItem

class TraversalPage {

    static verifyElementExistsAndIsVisible(selector) {
        cy.get(selector).should('exist').and('be.visible');
    }

    static verifyBreadcrumbExists() {
        this.verifyElementExistsAndIsVisible(BREADCRUMB);
    }

    static verifyChildElementText(text) {
        cy.get(BREADCRUMB).children().should('contain', text);
    }

    static verifyBadgeListExists() {
        this.verifyElementExistsAndIsVisible(BADGE);
    }

    static verifyClosestElementClass(selector, className) {
        cy.get(BADGE).closest(selector).should('have.class', className);
    }

    static verifyListExists() {
        this.verifyElementExistsAndIsVisible(LIST_ITEM);
    }

    static verifyListElementTextByIndex(index, text) {
        cy.get(LIST_ITEM).eq(index).should('contain', text);
    }

    static verifyNavExists() {
        this.verifyElementExistsAndIsVisible(NAV);
    }

    static verifyActiveNavItemText(text) {
        cy.get(NAV).filter(ACTIVE).should('contain', text);
    }

    static verifyPaginationExists() {
        this.verifyElementExistsAndIsVisible(PAGINATION);
    }

    static verifyNumNestedElements(selector1, selector2, numElements) {
        cy.get(PAGINATION).find(selector1).find(selector2).should('have.length', numElements);
    }

    static verifyTableExists() {
        this.verifyElementExistsAndIsVisible(TABLE);
    }

    static verifyTableFirstItemText(text) {
        cy.get(TABLE).find(TABLE_CELL).first().should('contain', text);
    }

    static verifyButtonsExist() {
        this.verifyElementExistsAndIsVisible(BUTTONS);
    }

    static verifyLastButtonText(text) {
        cy.get(BUTTONS).find(BUTTON).last().should('contain', text);
    }

    static verifyShortListExists() {
        this.verifyElementExistsAndIsVisible(SHORT_LIST);
    }

    static verifyShortListContains(text) {
        selectedItem = text;
        cy.get(SHORT_LIST).should('contain', text);
    }

    static verifyNextItemInList(text) {
        cy.get(SHORT_LIST).contains(selectedItem).next().should('contain', text);
    }

    static verifyFruitsListExists() {
        this.verifyElementExistsAndIsVisible(FRUITS_LIST);
    }

    static verifyNumFollowingItemsInList(item, num) {
        cy.get(FRUITS_LIST).contains(item).nextAll().should('have.length', num);
    }

    static verifyHealthyFoodsListExists() {
        this.verifyElementExistsAndIsVisible(HEALTHY_FOODS_LIST);
    }

    static verifyNumItemsBetweenListItems(item1, item2, num, direction = 'fwd') {
        if (direction === 'fwd') {
            cy.get(HEALTHY_FOODS_LIST).find('#' + item1).nextUntil('#' + item2).should('have.length', num);
        } else {
            cy.get(HEALTHY_FOODS_LIST).find('#' + item1).prevUntil('#' + item2).should('have.length', num);
        }
    }

    static verifyDisabledButtonSetExists() {
        this.verifyElementExistsAndIsVisible(DISABLED_BUTTON_SET);
    }

    static verifyNoDisabledButton(text) {
        cy.get(DISABLED_BUTTON_SET).find(BUTTON).not(DISABLED_BUTTON).should('not.contain', text)
    }

    static verifyHighlightExists() {
        this.verifyElementExistsAndIsVisible(HIGHLIGHT);
    }

    static verifyHighlightParentText(text) {
        cy.get(HIGHLIGHT).parent().should('contain', text);
    }

    static verifyCitationExists() {
        this.verifyElementExistsAndIsVisible(CITATION);
    }

    static verifyCitationAncestorIsBlockquote() {
        cy.get(CITATION).parents().should('match', BLOCKQUOTE);
    }

    static verifyClothesNavListExists() {
        this.verifyElementExistsAndIsVisible(CLOTHES_NAV)
    }

    static verifyNumAncestorsFromActiveToClothesNav(num) {
        cy.get(CLOTHES_NAV).find(ACTIVE).parentsUntil(CLOTHES_NAV).should('have.length', num);
    }

    static verifyBirdsListExists() {
        this.verifyElementExistsAndIsVisible(BIRDS_LIST);
    }

    static verifyPreviousItemText(text) {
        cy.get(BIRDS_LIST).find(ACTIVE).prev().should('contain', text);
    }

    static verifyNumItemsInListBeforeThirdItem(num) {
        cy.get(FRUITS_LIST).find(THIRD_ITEM).prevAll().should('have.length', num);
    }

    static verifyPillButtonsExist() {
        this.verifyElementExistsAndIsVisible(PILL_BUTTONS);
    }

    static verifyNumPillButtonSiblings(num) {
        cy.get(PILL_BUTTONS).find(ACTIVE).siblings().should('have.length', num);
    }
}

export default TraversalPage;
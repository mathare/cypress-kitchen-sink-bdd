const TABLE = '.as-table';
const TABLE_ROW = 'tbody>tr';
const TABLE_DATA_CELL = 'td';
const BUTTON = 'button';
const FIRST_BUTTON_ALIAS = 'firstBtn'
const INTERCEPT_URL = '**/comments/*'
const ROUTE_ALIAS = 'getComment'
const GET_COMMENT_BUTTON = '.network-btn'

class AliasingPage {

    static createButtonAlias() {
        cy.get(TABLE).find(TABLE_ROW).first().find(TABLE_DATA_CELL).first().find(BUTTON).as(FIRST_BUTTON_ALIAS);
    }

    static clickAliasedButton() {
        cy.get('@' + FIRST_BUTTON_ALIAS).click()
    }

    static verifyAliasedButtonHasSuccessClass() {
        cy.get('@' + FIRST_BUTTON_ALIAS).should('have.class', 'btn-success');
    }

    static verifyAliasedButtonText(text) {
        cy.get('@' + FIRST_BUTTON_ALIAS).should('have.text', text);
    }

    static createRouteAlias() {
        cy.intercept('GET', INTERCEPT_URL).as(ROUTE_ALIAS);
    }

    static clickGetCommentButton() {
        cy.get(GET_COMMENT_BUTTON).click();
    }

    static verifyResponseStatusCode(code) {
        cy.wait('@' + ROUTE_ALIAS).its('response.statusCode').should('eq', code);
    }
}

export default AliasingPage;  
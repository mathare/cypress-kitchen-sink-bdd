const TABLE = '.assertion-table'
const LAST_ROW = 'tbody tr:last'
const DATA_CELL = 'td'
const LINK = '.assertions-link'

class AssertionsPage {

    static #getLastRow() {
        return cy.get(TABLE).find(LAST_ROW);
    }

    static #getFirstCellLastRow() {
        return this.#getLastRow().find(DATA_CELL).first();
    }

    static verifyLastRowIsGreen() {
        this.#getLastRow().should('have.class', 'success');
    }

    static verifyFirstCellLastRowText(text) {
        this.#getFirstCellLastRow().should('have.text', text);
    }

    static verifyFirstCellLastRowContains(text) {
        this.#getFirstCellLastRow().should('contain', text);
    }

    static verifyFirstCellLastRowHTML(text) {
        this.#getFirstCellLastRow().should('have.html', text);
    }

    static verifyFirstCellLastRowTag(tag) {
        this.#getFirstCellLastRow().should('match', tag);
    }

    static verifyFirstCellLastRowMatchesRegexIgnoringCase(regex) {
        let re = new RegExp(regex, 'i');
        this.#getFirstCellLastRow().invoke('text').should('match', re);
        //Check using a different method
        this.#getLastRow().contains(DATA_CELL, re).should('be.visible');
    }

    static verifyLinkInMultipleWays(partialUrl) {
        cy.get(LINK).should('have.class', 'active').and('have.attr', 'href').and('include', partialUrl);
    }

}

export default AssertionsPage;

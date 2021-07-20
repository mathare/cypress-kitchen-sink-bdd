const TABLE = '.assertion-table'
const LAST_ROW = 'tbody tr:last'
const DATA_CELL = 'td'
const LINK = '.assertions-link'
const TEXT_BLOCK = '.assertions-p'
const PARAGRAPH = 'p'

let chaiObject

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

    static chaiAssertTrue(value) {
        expect(value).to.be.true
    }

    static declareChaiObject(object) {
        chaiObject = object;
    }

    static chaiAssertObjectEqualsItself() {
        expect(chaiObject).to.equal(chaiObject);
    }

    static chaiAssertObjectDeeplyEquals(expectedObject) {
        expect(chaiObject).to.deep.equal(expectedObject);
    }

    static chaiAssertValueEndsWithRegex(value, regex) {
        const re = new RegExp(regex + '$', 'i');
        expect(value).to.match(re);
    }

    static shouldWithCallbackFunction() {
        cy.get(TEXT_BLOCK).find(PARAGRAPH).should(($p) => {
            //Get the text block as an JQuery array of paragraphs
            const texts = $p.map((i, el) => Cypress.$(el).text());
            //Convert to a simple array
            const paragraphs = texts.get();
            expect(paragraphs, 'has 3 paragraphs').to.have.length(3);
            expect(paragraphs, 'has expected text in each paragraph').to.deep.eq([
                'Some text from first p',
                'More text from second p',
                'And even more text from third p',
            ]);
        });
    }

}

export default AssertionsPage;


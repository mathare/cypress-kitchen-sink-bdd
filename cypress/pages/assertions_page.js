const TABLE = '.assertion-table'
const LAST_ROW = 'tbody tr:last'
const DATA_CELL = 'td'
const LINK = '.assertions-link'
const TEXT_BLOCK = '.assertions-p'
const PARAGRAPH = 'p'
const DOCS_HEADER = '.docs-header'
const DIV = 'div'
const TOO_MANY_ELEMENTS_ERROR = 'Found more than 0 elements'
const TWO_ELEMENTS = '.two-elements'
const FIRST = '.first'
const SECOND = '.second'
const RANDOM_NUMBER = '#random-number'

let chaiObject, person = {}

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

    static findElementUsingClassNameRegex(regex) {
        cy.get(DOCS_HEADER).find(DIV).as('regexDiv').should(($div) => {
            expect($div).to.have.length(1);
            const className = $div[0].className;
            expect(className).to.match(new RegExp(regex));
        });
    }

    static verifyDivText(expectedText) {
        cy.get('@regexDiv').should('have.text', expectedText);
    }

    static expectErrorMessage() {
        cy.on('fail', (e) => {
            if (!e.message.includes(TOO_MANY_ELEMENTS_ERROR)) {
                throw e;
            }
        });
    }

    static throwCustomError() {
        cy.get(DOCS_HEADER).find(DIV).should(($div) => {
            if ($div.length !== 0) {
                throw new Error(TOO_MANY_ELEMENTS_ERROR);
            }
        });
    }

    static #normaliseText(text) {
        return text.replace(/\s/g, '').toLowerCase();
    }

    static verifyElementsMatchIgnoringCaseAndWhiteSpace(expected1, expected2) {
        let text;
        cy.get(TWO_ELEMENTS).find(FIRST)
            .should('have.text', expected1)
            .then($first => {
                text = this.#normaliseText($first.text());
            });
        cy.get(TWO_ELEMENTS).find(SECOND)
            .should('have.text', expected2)
            .then($second => {
                const secondText = this.#normaliseText($second.text());
                expect(secondText).to.eq(text);
            });
    }

    static declareObject(details) {
        person = {};
        const headers = ['Key', 'Value'];
        expect(details.raw()[0]).to.deep.eq(headers);
        details.rows().forEach(keyValuePair => {
            person[keyValuePair[0]] = keyValuePair[1];
        })
        cy.then(() => {});
    }

    static verifyIsObject() {
        assert.isObject(person);
    }

    static verifyRandomNumberInRange(min, max) {
        //Random number will be NaN for a short while so retry until it is a valid number
        cy.get(RANDOM_NUMBER).should($div => {
            const n = parseFloat($div.text());
            expect(n).to.be.gte(min).and.be.lte(max);
        });
    }

}

export default AssertionsPage;
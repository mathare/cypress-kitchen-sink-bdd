const FIRST_ARRAY_ELEMENT = '.connectors-each-ul>li'
const SECOND_ARRAY_ELEMENT = '.connectors-each-ul>li'
const DIV = '.connectors-div'
const CONNECTORS_LIST_ELEMENT = '.connectors-list > li'

let array = [];

class ConnectorsPage {

    static verifyNamesInFirstArray(names) {
        cy.get(FIRST_ARRAY_ELEMENT).each(($el, index, $list) => {
            cy.get($el).should('have.text', names.raw()[index][0])
        });
    }

    static verifySecondArrayLength(minLength) {
        cy.get(SECOND_ARRAY_ELEMENT).its('length').should('be.above', minLength);
    }

    static verifyDivElementVisibility(visible) {
        const assertion = visible ? 'be.visible' : 'be.hidden';
        cy.get(DIV).should(assertion);
    }

    static showDivElement() {
        cy.get(DIV).invoke('show');
    }

    static setupArray(elements) {
        elements.raw().forEach(element => {
            array.push(element);
        });
    }

    static #spreadArray(arg) {
        cy.wrap(array).spread((foo, bar, baz) => {
        })
        return arg;
    }

    static verifySpreadArrayArgument(arg, expected) {
        expect(this.#spreadArray(arg)).to.eq(expected);
    }

    static verifyConnectorsListLength(expectedLength) {
        cy.get(CONNECTORS_LIST_ELEMENT).then($els => {
            expect($els).to.have.length(expectedLength);
        });
    }

    static verifyConnectorsListElement(index, expected) {
        cy.get(CONNECTORS_LIST_ELEMENT).then($els => {
            expect($els.eq(index)).to.contain(expected);
        });
    }

    static returnFromThenToNextCommand() {
        cy.wrap(1).then((num) => {
            expect(num).to.equal(1);
            return 2;
        }).then((num) => {
            expect(num).to.equal(2);
        });
    }

    static passOriginalValueToNextCommand() {
        cy.wrap(1).then((num) => {
            expect(num).to.equal(1);
            // nothing is returned from this callback
        }).then((num) => {
            // this callback receives the original unchanged value 1
            expect(num).to.equal(1);
        });
    }

    static passLastCypressCommandResultToNextCommand() {
        cy.wrap(1).then((num) => {
            expect(num).to.equal(1);
            // the result yielded by this Cypress command will be passed to the second ".then"
            cy.wrap(2);
        }).then((num) => {
            // this callback receives the value yielded by "cy.wrap(2)"
            expect(num).to.equal(2);
        });
    }
}

export default ConnectorsPage;
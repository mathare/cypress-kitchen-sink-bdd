const MAIN_DIV = '#querying'
const DIV_DATA_ATTR = '[data-test-id="test-example"]'
const QUERY_LIST = '.query-list'
const QUERY_BTN = '.query-button'
const WITHIN_FORM = '.query-form'
const UNORDERED_LIST = '.query-ul'
const SELECTORS_DIV = '[data-cy=best-practices-selecting-elements]'

let element;

class QueryingPage {

    //Candidate for custom command passing in selector
    static getElementBySelector(selector) {
        cy.get(selector).then((el) => {
            return el;
        }).then((el) => {
            element = el;
        });
    }

    static verifyButtonText(text) {
        expect(element).to.contain(text);
    }

    static getDivByDataAttribute() {
        this.getElementBySelector(DIV_DATA_ATTR);
    }

    static verifyDivClass(className) {
        expect(element).to.have.class(className);
    }

    static verifyDivAttribute(attr, value) {
        expect(element).to.have.attr(attr, value);
    }

    static verifyDivProperty(prop, value) {
        expect(element).to.have.css(prop, value);
    }

    static verifyQueryListElementClass(text, className) {
        if (text.startsWith('/^')) {
            text = new RegExp(text.replaceAll('/', ''));
        }
        cy.get(QUERY_LIST).contains(text).should('have.class', className);
    }

    static verifyClassOfElementContainingText(selector, text, className) {
        cy.get(MAIN_DIV).contains(selector, text).should('have.class', className);
    }

    static verifyButtonClassNameByText(text, className) {
        cy.get(QUERY_BTN).contains(text).should('have.class', className);
    }

    static verifyInputPlaceholderText(index, placeholder) {
        cy.get(WITHIN_FORM).within(() => {
            cy.get('input:' + index).should('have.attr', 'placeholder', placeholder);
        })
    }

    static verifyRootMatches(expected) {
        cy.root().should('match', expected);
    }

    static verifyQueryULRootClassName(className) {
        cy.get(UNORDERED_LIST).within(() => {
            // In this within, the root is now the ul DOM element
            cy.root().should('have.class', className);
        })
    }

    static clickElementFoundBySelector(type, selector) {
        if (type === 'text') {
            cy.get(SELECTORS_DIV).within(() => {
                cy.contains(selector).click();
            })
        } else {
            cy.get(SELECTORS_DIV).within(() => {
                cy.get(selector).click();
            })
        }
    }
}

export default QueryingPage;
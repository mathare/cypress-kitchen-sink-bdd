const INPUT1 = '.wait-input1';
const INPUT2 = '.wait-input2';
const INPUT3 = '.wait-input3';
const GET_COMMENT_BUTTON = '.network-btn';

let alias;

class WaitingPage {

    static enterTextInInput(index, text) {
        let element = '';
        if (index === 1) {
            element = INPUT1;
        } else if (index === 2) {
            element = INPUT2;
        } else if (index === 3) {
            element = INPUT3;
        } 
        cy.get(element).type(text);
    }

    static waitForSpecifiedTime(time) {
        cy.wait(time);
    }

    static createIntercept(verb, endpoint) {
        alias = verb.toLowerCase() + '_' + endpoint
        cy.intercept(verb, '**/' + endpoint + '/*').as(alias);
    }

    static clickGetCommentButton() {
        cy.get(GET_COMMENT_BUTTON).click();
    }

    static verifyResponseStatusCode(code) {
        cy.wait('@' + alias).its('response.statusCode').should('eq', code);
    }
}

export default WaitingPage;
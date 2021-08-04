class CookiesPage {

    static enableCookieDebugging() {
        Cypress.Cookies.debug(true);
    }

    static clearCookies() {
        cy.clearCookies();
    }

    static clickSetCookieButton(sectionName) {
        cy.get('#' + sectionName + ' .set-a-cookie').click();
    }

    static verifyCookieValue(cookie, expected) {
        cy.getCookie(cookie).should('have.property', 'value', expected);
    }

    static verifyNoCookies() {
        cy.getCookies().should('be.empty');
    }

    static verifyNumCookies(expected) {
        cy.getCookies().should('have.length', expected);
    }

    static verifyCookiePropertyValues(details) {
        const headers = ['Property', 'Value'];
        expect(details.raw()[0]).to.deep.equal(headers);
        cy.getCookies().should(cookies => {
            details.rows().forEach(row => {
                if (row[1] === 'false') {
                    expect(cookies[0]).to.have.property(row[0], false);
                } else {
                    expect(cookies[0]).to.have.property(row[0], row[1]);
                };
            });
        });
    }

    static setCookie(name, value) {
        cy.setCookie(name, value);
    }

    static verifyCookieDoesNotExist(name) {
        cy.getCookie(name).should('be.null');
    }

    static clearCookie(name) {
        cy.clearCookie(name);
    }

}

export default CookiesPage;
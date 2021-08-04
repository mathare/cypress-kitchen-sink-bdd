class WindowPage {

    static verifyWindowProperties(properties) {
        properties.raw().forEach(property => {
            cy.window().should('have.property', property[0])
        });
    }

    static verifyDocumentProperties(properties) {
        properties.raw().forEach(property => {
            cy.document().should('have.property', property[0]).and('eq', property[1]);
        });
    }

    static verifyTitle(title) {
        cy.title().should('include', title);
    }

}

export default WindowPage;
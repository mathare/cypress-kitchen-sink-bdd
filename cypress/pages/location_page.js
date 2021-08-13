class LocationPage {

    static verifyCurrentHashIsEmpty() {
        cy.hash().should('be.empty');
    }

    static #verifyLocationProperty(property, value) {
        const validProperties = ['hash', 'href', 'host', 'hostname', 'origin', 'pathname', 'port', 'protocol', 'search', 'toString'];
        expect(validProperties).to.include(property);
        cy.location().should((location) => {
            if (value === undefined) {3
                expect(location[property]).to.be.empty;
            } else {
                expect(location[property]).to.eq(value);
            }
        });
    }

    static verifyLocationProperties(props) {
        const headers = ['Property', 'Value'];
        expect(props.raw()[0]).to.deep.equal(headers);
        props.rows().forEach(row => {
            this.#verifyLocationProperty(row[0], row[1]);
        });
    }

    static verifyCurrentUrl(url) {
        cy.url().should('eq', url)
    }
}

export default LocationPage;
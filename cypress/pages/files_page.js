const GET_COMMENT_BUTTON = '.fixture-btn';
let alias, fixtureFile;

class FilesPage {

    static configureIntercept(verb, endpoint, bodyFile) {
        alias = verb.toLowerCase() + '_' + endpoint;
        cy.intercept(verb, '**/' + endpoint + '/*', { fixture: bodyFile }).as(alias);
    }

    static clickGetCommentButton() {
        cy.get(GET_COMMENT_BUTTON).click();
    }

    static verifyAPIResponseBody(props) {
        const headers = ['Property', 'Value'];
        expect(props.raw()[0]).to.deep.equal(headers);
        cy.wait('@' + alias).its('response.body').then(body => {
            props.rows().forEach(row => {
                expect(body).to.have.property(row[0]);
                expect(body[row[0]]).to.equal(row[1]);
            })
        });
    }

    static verifyFileContainsObject(filename) {
        cy.readFile(filename).then((json) => {
            expect(json).to.be.an('object')
        })
    }

    static writeAPIResponseToFile(endpoint) {
        cy.request('https://jsonplaceholder.cypress.io/' + endpoint).then(response => {
            cy.writeFile('cypress/fixtures/' + endpoint + '.json', response.body);
        });
    }

    static verifyResponseBodyFile(filename, numObjects) {
        cy.fixture(filename).then(file => {
            expect(file).to.have.length(numObjects);
        })
    }

    static writeCustomDataToFixtureFile(filename, data) {
        const headers = ['Key', 'Value'];
        expect(data.raw()[0]).to.deep.equal(headers);
        let obj = {};
        data.rows().forEach(row => {
            obj[row[0]] = row[1];
        })
        cy.writeFile('cypress/fixtures/' + filename, obj);
        fixtureFile = filename;
    }

    static verifyPropertyValueInFile(property, value) {
        cy.fixture(fixtureFile).then(file => {
            expect(file[property]).to.eq(value);
        })
    }

}

export default FilesPage;
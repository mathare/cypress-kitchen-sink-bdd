const BASE_URL = 'https://jsonplaceholder.cypress.io/'
const BLOB = '.utility-blob'

let response, ids, imgSrc, matching;

class UtilitiesPage {

    static makeRequest(endpoint) {
        cy.request(BASE_URL + endpoint).then(res => {
            return res;
        }).then(res => {
            response = res;
        });
    }

    static createIDsArrayWithLodash(num_ids) {
        ids = Cypress._.chain(response.body).map('id').take(num_ids).value();
    }

    static verifyIDsArray(expected) {
        let exp_arr = expected.replace('[', '').replace(']', '').split(", ").map(Number);
        expect(ids).to.deep.eq(exp_arr);
    }

    static declarejQuerySelector () {
        let $li = Cypress.$('.utility-jquery li:first');
        cy.wrap($li).as('list_el');
    }

    static verifyListElementHasClass(has_class, className) {
        if (has_class) {
            cy.get('@list_el').should('have.class', className);
        } else {
            cy.get('@list_el').should('not.have.class', className);
        }
    }

    static clickListElement() {
        cy.get('@list_el').click();
    }

    static createImgFromDataUrl() {
        cy.get(BLOB).then(($div) => {
            return Cypress.Blob.imgSrcToDataURL('https://example.cypress.io/assets/img/javascript-logo.png', undefined, 'anonymous')
            .then((dataUrl) => {
                imgSrc = dataUrl
                let img = Cypress.$('<img />', { src: dataUrl })
                $div.append(img)
            })
        })    
    }

    static clickBlobImage() {
        cy.get(BLOB + ' img').click().as('blobImg');
    }

    static verifyBlobImageSourceAttribute() {
        cy.get('@blobImg').should('have.attr', 'src', imgSrc);
    }

    static compareStrings(exp1, exp2, base) {
        matching = Cypress.minimatch(exp1, exp2, {matchBase: base});
    }

    static verifyStringComparison(expected) {
        if (expected === 'true') {
            expect(matching).to.be.true;
        } else {
            expect(matching).to.be.false;
        }
    }
}

export default UtilitiesPage;
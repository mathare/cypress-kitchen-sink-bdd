const BASE_URL = 'https://jsonplaceholder.cypress.io/'
const GET_COMMENT_BTN = '.network-btn'
const POST_COMMENT_BTN = '.network-post'
const PUT_COMMENT_BTN = '.network-put'
const PUT_COMMENT = '.network-put-comment'

let response, alias, intercepted;

class NetworkRequestsPage {

    static makeRequest(verb, endpoint) {
        cy.request(verb, BASE_URL + endpoint).then(res => {
            return res;
        }).then(res => {
            response = res;
        });
    }

    static makeRequestWithQueryParams(verb, endpoint, params) {
        let paramsObj = {};
        params.raw().forEach(row => {
            paramsObj[row[0]] = row[1];
        }); 
        cy.request({method: verb, url: BASE_URL + endpoint, qs: paramsObj}).then(res => {
            return res;
        }).then(res => {
            response = res;
        });
    }

    static makeRequestWithBody(verb, endpoint, body) {
        const headers = ['Key', 'Value'];
        expect(body.raw()[0]).to.deep.equal(headers);
        let bodyObj = {};
        body.rows().forEach(row => {
            if (row[1].startsWith('<') && row[1].endsWith('>')){
                //Get user index from table value
                const words = row[1].split(' ');
                const index = parseInt(words[0].substr(1, words[0].length-1))
                bodyObj[row[0]] = response.body[index-1]['id'];
            } else {
                bodyObj[row[0]] = row[1];
            }
        });
        cy.request(verb, BASE_URL + endpoint, bodyObj).then(res => {
            return res;
        }).then(res => {
            response = res;
        });
    }

    static verifyResponseStatusCode(code) {
        expect(response.status).to.eq(code);
    }

    static verifyResponseBodyLength(length) {
        expect(response.body).to.be.an('array');
        expect(response.body).to.have.property('length').and.eq(length);
    }

    static verifyResponseProperties(props) {
        props.raw().forEach(row => {
            expect(response).to.have.property(row[0]);
        });
        expect(response).to.include.keys(props.raw());
    }

    static verifyResponseElementValues(index, vals) {
        const headers = ['Key', 'Value']
        expect(vals.raw()[0]).to.deep.equal(headers);
        vals.rows().forEach(row => {
            expect(response.body[index-1]).to.have.property(row[0])
            //Convert actual value to string for easier comparison with expected value
            expect(response.body[index-1][row[0]].toString()).to.eq(row[1]);
        });
    }

    static verifyResponseBodyContents(data) {
        const headers = ['Key', 'Value']
        expect(data.raw()[0]).to.deep.equal(headers);
        data.rows().forEach(row => {
            expect(response.body).to.have.property(row[0])
            //Convert actual value to string for easier comparison with expected value
            expect(response.body[row[0]].toString()).to.eq(row[1]);
        });
    }

    static setupIntercept(verb, endpoint) {
        alias = (verb + '_' + endpoint).toLowerCase();
        let url = '**/' + endpoint;
        if (verb === 'GET') {
            url = url + '/*';
        }
        cy.intercept(verb, url).as(alias);
    }

    static clickButton(button) {
        if (button === 'Get Comment') {
            cy.get(GET_COMMENT_BTN).click();
        } else if (button === 'Post Comment') {
            cy.get(POST_COMMENT_BTN).click();
        } else if (button === 'Update Comment') {
            cy.get(PUT_COMMENT_BTN).click();
        }
        cy.wait('@' + alias).then(res => {
                return res;
        }).then(res => {
            intercepted = res;
        });
    }

    static verifyInterceptedResponseStatusCode(expected) {
        expect(intercepted.response.statusCode).to.equal(expected);
    }

    static verifyInterceptedRequestHeader(property) {
        expect(intercepted.request.headers).to.have.property(property);
    }

    static verifyInterceptedRequestBody(expected) {
        expect(intercepted.request.body).to.include(expected);
    }

    static verifyInterceptedResponseBody(prop, value) {
        expect(intercepted.response && intercepted.response.body).to.have.property(prop, value);
    }

    static stubResponse(verb, endpoint) {
        alias = (verb + '_' + endpoint).toLowerCase();
        cy.intercept(verb, '**/' + endpoint + '/*', {
            statusCode: 404,
            body: { error: 'whoa, this comment does not exist' },
            headers: { 'access-control-allow-origin': '*' },
            delayMs: 500,
        }).as(alias);
    }

    static verifyStubbedResponse(message) {
        cy.get(PUT_COMMENT).should('contain', message)
    }

}

export default NetworkRequestsPage;
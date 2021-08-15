const BASE_URL = 'https://jsonplaceholder.cypress.io/'

let response;

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

}

export default NetworkRequestsPage;

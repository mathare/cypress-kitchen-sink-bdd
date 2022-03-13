const semver = require('semver')

let HIDDEN_PARA = '.dom-p p.hidden'
let VISIBLE_PARA = '.dom-p p.visible'

class CypressAPIPage {

    static enableCookieDebugging() {
        Cypress.Cookies.debug(true);
    }

    static disableCookieDebugging() {
        Cypress.Cookies.debug(false);
    }

    static setCookie(name, value) {
        cy.setCookie(name, value);
    }

    static clearCookie(name) {
        cy.clearCookie(name);
    }

    static verifyCookieDoesNotExist(name) {
        cy.getCookie(name).should('not.be.ok');
    }

    static preserveCookie(name) {
        Cypress.Cookies.preserveOnce(name);
    }

    static verifyCookieExists(name) {
        cy.getCookie(name).should('exist');
    }

    static verifyCookieValue(cookie, expected) {
        cy.getCookie(cookie).should('have.property', 'value', expected);
    }

    static preserveCookieByDefault(name) {
        Cypress.Cookies.defaults({preserve: name});
    }

    static verifyCPUArchitecture(archs) {
        let cpus = []
        archs.raw().forEach(arch => {
            cpus.push(arch[0]);
        });
        expect(Cypress.arch).to.be.oneOf(cpus);
    }

    static verifyCypressConfigPropertyValue(prop, value) {
        expect(Cypress.config()).to.have.property(prop, value);
    }

    static setCypressConfigPropertyValue(prop, value) {
        Cypress.config(prop, value);
    }

    static verifyDOMElementHiddenState(element, state) {
        let el = element === 'hidden' ? Cypress.$(HIDDEN_PARA).get(0) : Cypress.$(VISIBLE_PARA).get(0);
        if (state === 'hidden') {
            expect(Cypress.dom.isHidden(el)).to.be.true;
        } else {
            expect(Cypress.dom.isHidden(el)).to.be.false;
        }
    }

    static setEnvVars(envVars) {
        Cypress.env(Object.fromEntries(envVars.rows()));
    }

    static verifyEnvVarValue(key, value) {
        expect(Cypress.env(key)).to.eq(value);
    }

    static setEnvVar(key, value) {
        Cypress.env(key, value);
    }

    static verifyEnvVarValues(envVars) {
        envVars.rows().forEach(row => {
            expect(Cypress.env()).to.have.property(row[0], row[1]);
        })
    }

    static verifyOSPlatformName(platforms) {
        let platformNames = []
        platforms.raw().forEach(platform => {
            platformNames.push(platform[0]);
        });
        expect(Cypress.platform).to.be.oneOf(platformNames);
    }

    static verifyCypressVersion(vernum) {
        expect(semver.gte(Cypress.version, '9.5.0')).to.be.true;
    }

    static verifySpecKeys(props) {
        cy.wrap(Cypress.spec).should('include.keys', props.raw());
    }

    static verifySpecPropertyValue(prop, value) {
        cy.wrap(Cypress.spec).should('have.property', prop, value);
    }
}

export default CypressAPIPage
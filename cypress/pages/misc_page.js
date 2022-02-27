const FORM = '.misc-form'

const EXEC_OUTPUTS = ['code', 'stderr', 'stdout']
let command, optionsObj = {}, wrapObj = {}

class MiscPage {

    static echoString(text) {
        cy.exec('echo ' + text).then((cmd) => {
            return cmd;
        }).then((cmd) => {
            command = cmd;
        });
    }

    static outputFileContents(filename) {
        cy.exec('cat ' + filename).then((cmd) => {
            return cmd;
        }).then((cmd) => {
            command = cmd;
        });
    }

    static printCurrentWorkingDirectory() {
        cy.exec('pwd').then((cmd) => {
            return cmd;
        }).then((cmd) => {
            command = cmd;
        });
    }

    static verifyCommandLineOutput(option, text) {
        expect(EXEC_OUTPUTS).to.include(option);
        if (option === 'stdout') {
            expect(command.stdout).equal(text);
        } else if (option === 'stderr') {
            expect(command.stderr).equal(text);
        } else if (option === 'code') {
            expect(command.code).equal(parseInt(text));
        }
    }

    static clickFormElement(id) {
        cy.get(FORM).find('#' + id).click();
    }

    static verifyFocusedElementID(id) {
        cy.focused().should('have.id', id);
    }

    static takeScreenshot(filename) {
        if (optionsObj) {
            Cypress.Screenshot.defaults(optionsObj)
        }
        cy.screenshot(filename)
    }

    static verifyScreenshotExists(filename) {
        cy.readFile('cypress/screenshots/' + Cypress.spec.name + '/' + filename);
    }

    static configureScreenshotDefaults(options) {
        let clipObj = {}
        options.raw().forEach(row => {
            if (row[0] === 'blackout') {
                optionsObj[row[0]] = Array.of(row[1])
            } else if (row[0] === 'capture') {
                optionsObj[row[0]] = row[1];
            } else if (row[0].startsWith('clip')) {                
                clipObj[row[0].split(' ')[1]]=parseInt(row[1]);
            }
            else{
                optionsObj[row[0]] = !!row[1];
            }
        });
        optionsObj['clip'] = clipObj;
    }

    static createObject(obj) {
        obj.rows().forEach(row => {
            wrapObj[row[0]] = row[1];
        });
    }

    static verifyObjValues(key, value) {
        cy.wrap(wrapObj).should('have.property', key).and('include', value);
    }

}

export default MiscPage;
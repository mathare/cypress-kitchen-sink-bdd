const BUTTON = '.ls-btn'
class LocalStoragePage {

    static clickPopulateLocalStorageButton() {
        cy.get(BUTTON).click();
    }

    static verifyLocalStorage(storedInfo) {
        const headers = ['Item', 'Value'];
        expect(storedInfo.raw()[0]).to.deep.equal(headers);
        storedInfo.rows().forEach(row => {
            if (row[1] === 'null') {
                expect(localStorage.getItem(row[0])).to.eq(null);
            } else {
                expect(localStorage.getItem(row[0])).to.eq(row[1]);
            }
        });
    }

    static clearLocalStorage() {
        cy.clearLocalStorage();
    }

    static clearLocalStorageByKey(key) {
        cy.clearLocalStorage(key);
    }

    static clearLocalStorageByRegex(regex) {
        cy.clearLocalStorage(new RegExp(regex));
    }

}

export default LocalStoragePage;
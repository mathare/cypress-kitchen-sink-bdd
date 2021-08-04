const NAVBAR = '.navbar-nav'
const DROPDOWN_MENU = '.dropdown-menu'

let oldPage, newPage

class NavigationPage {

    static navigateToPage(pageName) {
        cy.get(NAVBAR).contains('Commands').click()
        cy.get(DROPDOWN_MENU).contains(pageName).click()
        this.verifyCurrentPage(pageName);
    }

    static goBackInBrowserHistory() {
        cy.go('back');
    }

    static goForwardInBrowserHistory() {
        cy.go('forward');
    }

    static verifyCurrentPage(pageName) {
        if (pageName === 'Home') {
            cy.location('pathname').should('eq', '/');
        } else {
            cy.location('pathname').should('include', pageName.toLowerCase());
        }
    }

    static goXPagesInBrowserHistory(numPages) {
        cy.go(numPages);
    }

    static reloadPage(hardRefresh = false) {
        cy.reload(hardRefresh);
    }

    static verifyPageReloaded() {
        let perfEntries = performance.getEntriesByType("navigation");
        console.log(perfEntries);
    }

    static navigateToUrl(url) {
        cy.visit(url);
    }

}

export default NavigationPage;
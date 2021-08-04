const NAVBAR = '#navbar'
const NAVBAR_TOGGLE = '.navbar-toggle'
const NAV = '.nav'
const ANCHOR = 'a'

class ViewportPage {

    static navbarIsVisible(visible = true) {
        if (visible) {
            cy.get(NAVBAR).should('be.visible');
            cy.get(NAV).find(ANCHOR).should('be.visible');
        } else {
            cy.get(NAVBAR).should('not.be.visible');
        }
    }

    static setViewportSize(width, height) {
        cy.viewport(width, height);
    }

    static clickNavbarToggle() {
        cy.get(NAVBAR_TOGGLE).click();
    }

    static selectDevicePreset(device, orientation='') {
        if (orientation === '') {
            cy.viewport(device.toLowerCase());
        } else {
            cy.viewport(device.toLowerCase(), orientation);
        }
    }

    static verifyViewportSize(width, height) {
        cy.window({log:false}).then(win => {
            expect(win.innerWidth).to.eq(width);
            expect(win.innerHeight).to.eq(height);
        });
    }
}

export default ViewportPage;
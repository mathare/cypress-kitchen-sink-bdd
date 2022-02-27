const CLOCK_DIV = '#clock-div'
const TICK_DIV = '#tick-div'

let spy, stub, epochTime

class SpiesStubsClocksPage {

    static obj  = {
        foo () {},
        foo (x) {
            console.log('obj.foo called with', x)
        },
        foo (a, b) {
            console.log('a', a, 'b', b)
        },
    } 

    static wrapInSpy() {
        spy = cy.spy(this.obj, 'foo').as('mySpy')
    }

    static verifySpyCalled() {
        expect(spy).to.be.called
    }

    static verifySpyCalledTwice() {
        cy.get('@mySpy').should('have.been.calledTwice')
    }

    static stubMethod() {
        stub = cy.stub(this.obj, 'foo').as('myStub')
    }

    static verifyStubCalled() {
        expect(stub).to.be.called
    }

    static setDateTime(dateStr, timeStr) {
        epochTime = Date.parse(dateStr + ' ' + timeStr + ' UTC')
        cy.clock(epochTime)
    }

    static clickElement(element) {
        if (element === 'clock') {
            cy.get(CLOCK_DIV).click().as('element')
        } else if (element === 'tick') {
            cy.get(TICK_DIV).click().as('element')
        }
    }

    static verifyDisplayedEpochTime(time) {
        cy.get('@element').should('have.text', time)
    }

    static advanceClock(interval) {
        cy.tick(interval * 1000);
    }

}

export default SpiesStubsClocksPage

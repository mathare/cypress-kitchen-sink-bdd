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
    
    static greeter = {
        greet(name) {
            return `Hello, ${name}!`
        }
    }

    static calculator = {
        add (a, b) {
            return a + b
        }
    }

    static wrapInSpy(method) {
        if (method === 'foo') {
            spy = cy.spy(this.obj, 'foo').as('mySpy');
        } else if (method === 'add') {
            spy = cy.spy(this.calculator, 'add').as('mySpy');
        } else {
            throw new Error('Unknown method');
        }
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

    static stubGreeterMethod(retVal, errMsg) {
        stub = cy.stub(this.greeter, 'greet')
            .callThrough() // if you want non-matched calls to call the real method
            .withArgs(Cypress.sinon.match.string).returns('Hi')
            .withArgs(Cypress.sinon.match.number).throws(new Error(errMsg))
            .as('myStub')
    }

    static verifyReturnFromGreetWithString(name, retVal) {
        expect(this.greeter.greet(name)).to.equal(retVal);
    }


    static verifyReturnFromGreetWithNumber(name, errMsg) {
        expect(() => this.greeter.greet(name)).to.throw(errMsg);
    }

    static verifyReturnFromGreetNoArgs(retVal) {
        expect(this.greeter.greet()).to.equal(retVal);
    }

    static verifyStubbedMethodCalledTwice() {
        expect(this.greeter.greet).to.have.been.calledTwice;
    }

    static verifySum(sum, retVal) {
        expect(sum).to.equal(retVal);
    }

    static verifySpyArgumentsExact(a, b) {
        expect(spy).to.be.calledWith(a, b);
    }

    static verifySpyArgumentsNumeric() {
        expect(spy).to.be.calledWith(Cypress.sinon.match.number, Cypress.sinon.match.number);
    }

    static verifySpyArgumentsMatchExact(a, b) {
        expect(spy).to.be.calledWith(Cypress.sinon.match(a), Cypress.sinon.match(b));
    }

    static verifySpyArgumentsAnyAndExact(b) {
        expect(spy).to.be.calledWith(Cypress.sinon.match.any, b);
    }

    static verifySpyArgumentsListAndExact(a, b) {
        const a_arr = a.replace('[', '').replace(']', '').split(", ").map(Number);
        expect(spy).to.be.calledWith(Cypress.sinon.match.in(a_arr), b);
    }

    static verifySpyArgumentsEvenAndExact(b) {
        const isEven = (x) => x % 2 === 0;
        expect(spy).to.be.calledWith(Cypress.sinon.match(isEven, 'Argument is not even'), b);
    }

    static verifySpyArgumentsGreaterThanAndLessThan(b_lower, b_upper) {
        const isGreaterThan = (limit) => (x) => x > limit;
        const isLessThan = (limit) => (x) => x < limit;
        expect(spy).to.be.calledWith(
            Cypress.sinon.match.number,
            Cypress.sinon.match(isGreaterThan(b_lower), 'Argument is not > ' + b_lower).and(Cypress.sinon.match(isLessThan(b_upper), 'Argument is not < ' + b_upper))
        );
    }

    static verifySpyArgumentsOrMatch(b_lower, b_exact) {
        const isGreaterThan = (limit) => (x) => x > limit;
        expect(spy).to.be.calledWith(
            Cypress.sinon.match.number,
            Cypress.sinon.match(isGreaterThan(b_lower), 'Argument is not > ' + b_lower).or(Cypress.sinon.match(b_exact)),
        );
    }

    static verifySpyArgumentsUsingBDDAssertions(b) {
        cy.get('@mySpy').should('have.been.calledWith', Cypress.sinon.match.number, Cypress.sinon.match(b));
    }

    static verifySpyArgumentsUsingAliases(a) {
        const { match: M } = Cypress.sinon
        cy.get('@mySpy').should('have.been.calledWith', M(a), M.number)
    }

}

export default SpiesStubsClocksPage

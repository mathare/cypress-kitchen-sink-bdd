Feature: Cypress Example Spies, Stubs & Clocks Page
    Tests for https://example.cypress.io/commands/spies-stubs-clocks

    Scenario: Wrap a method in a spy - cy.spy()
        #Wrap a method in a spy  in order to record calls to and arguments of the function
        Given I have created an empty method "foo"
        And I have wrapped "foo" in a spy
        When I call "foo"
        Then the spy shows the method was called

    Scenario: cy.spy() retries until assertions pass
        Given a method "foo" that takes a single parameter "x"
        And I have wrapped "foo" in a spy
        When I call "foo" with an argument of "first" and a timeout of 500
        And I call "foo" with an argument of "second" and a timeout of 2500
        Then the spy shows the method was called twice

    Scenario: Create a stub and/or replace a function with stub - cy.stub()
        Given a method "foo" that takes parameters "a" and "b"
        And I have stubbed "foo"
        When I call "foo" with arguments of "foo" and "bar"
        Then the stubbed method was called

    Scenario: Control time in the browser - cy.clock()
        Given I have set the time to be "00:00:00" on "27 February 2022"
        When I open the "Spies, Stubs & Clocks" page
        And I click on the clock display element
        Then the displayed epoch time is "1645920000"

    Scenario: Move time in the browser - cy.tick()
        Given I have set the time to be "15:30:00" on "11 August 1986"
        When I open the "Spies, Stubs & Clocks" page
        And I click on the tick display element
        Then the displayed epoch time is "524158200"
        When I advance the clock 10 seconds
        And I click on the tick display element
        Then the displayed epoch time is "524158210"

    Scenario: cy.stub() matches depending on arguments
        Given a "greet" function that takes a "name" parameter
        And I have stubbed "greet" such that it returns "Hi" for string arguments and throws an "Invalid name" error for number arguments
        Then calling "greet" with a name of "World" returns "Hi"
        Then calling "greet" with a name of 42 throws an "Invalid name" error
        And the stubbed method has been called twice
        Then calling "greet" without a name argument returns "Hello, undefined!"

    Scenario: Match call arguments using Sinon matchers
        Given an "add" function that takes parameters "a" and "b"
        And I have wrapped "add" in a spy
        When I call "add" with values of 2 and 3
        Then "add" returns 5
        And the spy was called with arguments of 2 and 3
        And the spy was called with two number arguments
        And the spy was called with arguments matching 2 and 3
        And the spy was called with an argument matching 'any' and an argument of 3
        And the spy was called with one of "[1, 2, 3]" and an argument of 3
        And the spy was called with an even argument and an argument of 3
        And the spy was called with a number and an argument between 2 and 4
        And the spy was called with a number and an argument greater than 200 or exactly 3
        And the spy was called with a number and an argument of 3
        And the spy was called with an argument of 2 and a number
import {Given} from "cypress-cucumber-preprocessor/steps"

const PAGE_URLS = new Map([
    ['Home', '/'],
    ['Actions', '/commands/actions'],
    ['Aliasing', '/commands/aliasing'],
    ['Assertions', '/commands/assertions'],
    ['Connectors', '/commands/connectors'],
    ['Cookies', '/commands/cookies'],
    ['Cypress API', '/cypress-api'],
    ['Files', '/commands/files'],
    ['Local Storage', '/commands/local-storage'],
    ['Location', '/commands/location'],
    ['Misc', '/commands/misc'],
    ['Network Requests', '/commands/network-requests'],
    ['Querying', '/commands/querying'],
    ['Spies, Stubs & Clocks', '/commands/spies-stubs-clocks'],
    ['Traversal', '/commands/traversal'],
    ['Utilities', '/utilities'],
    ['Viewport', '/commands/viewport'],
    ['Waiting', '/commands/waiting'],
    ['Window', '/commands/window']
]);

Given(/^(?:I have opened|I open) the "(\D+)" page$/, (pageName) => {
    cy.visit(PAGE_URLS.get(pageName));
});
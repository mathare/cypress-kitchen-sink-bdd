import {Given} from "cypress-cucumber-preprocessor/steps"

const PAGE_URLS = new Map([
    ['Home', '/'],
    ['Actions', '/commands/actions'],
    ['Aliasing', '/commands/aliasing'],
    ['Assertions', '/commands/assertions'],
    ['Connectors', '/commands/connectors'],
    ['Cookies', '/commands/cookies'],
    ['Files', '/commands/files'],
    ['Local Storage', '/commands/local-storage'],
    ['Location', '/commands/location'],
    ['Misc', '/commands/misc'],
    ['Network Requests', '/commands/network-requests'],
    ['Querying', '/commands/querying'],
    ['Traversal', '/commands/traversal'],
    ['Viewport', '/commands/viewport'],
    ['Waiting', '/commands/waiting'],
    ['Window', '/commands/window']
]);

Given('I have opened the {string} page', (pageName) => {
    cy.visit(PAGE_URLS.get(pageName));
});
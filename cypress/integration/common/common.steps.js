import {Given} from "cypress-cucumber-preprocessor/steps"

const PAGE_URLS = new Map([
    ['Home', '/'],
    ['Actions', '/commands/actions'],
    ['Aliasing', '/commands/aliasing'],
    ['Assertions', '/commands/assertions'],
    ['Connectors', '/commands/connectors'],
    ['Cookies', '/commands/cookies'],
    ['Local Storage', '/commands/local-storage'],
    ['Location', '/commands/location'],
    ['Viewport', '/commands/viewport'],
    ['Waiting', '/commands/waiting'],
    ['Window', '/commands/window']
]);

Given('I have opened the {string} page', (pageName) => {
    cy.visit(PAGE_URLS.get(pageName));
});
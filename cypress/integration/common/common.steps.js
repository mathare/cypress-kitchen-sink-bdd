import {Given} from "cypress-cucumber-preprocessor/steps"

const PAGE_URLS = new Map([
    ['Actions', '/commands/actions'],
    ['Aliasing', '/commands/aliasing'],
    ['Assertions', '/commands/assertions'],
    ['Connectors', '/commands/connectors'],
    ['Cookies', '/commands/cookies']
]);

Given('I have opened the {string} page', (pageName) => {
    cy.visit(PAGE_URLS.get(pageName));
});
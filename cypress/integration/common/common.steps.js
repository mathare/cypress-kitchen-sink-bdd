import {Given} from "cypress-cucumber-preprocessor/steps"

const PAGE_URLS = new Map([
    ['Actions', '/commands/actions']
]);

Given('I have opened the {string} page', (pageName) => {
    cy.visit(PAGE_URLS.get(pageName));
});
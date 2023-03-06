import Chainable = Cypress.Chainable;

export const getGreeting = (): Chainable<JQuery<HTMLHeadingElement>> => cy.get('h1');

import { getTitle } from '../support/app.po';

describe('demo-one', () => {
  beforeEach(() => cy.visit('/'));

  /*   it('should display welcome message', () => {
    // Custom command example, see `../support/commands.ts` file
    cy.login('my-email@something.com', 'myPassword');

    // Function helper example, see `../support/app.po.ts` file
    getGreeting().contains('Welcome to demo-one!');
  }); */

  it('should display page title', () => {
    cy.visit('/demo/page-one');

    getTitle().contains('Page 1');
  });
});

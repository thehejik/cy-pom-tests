import LoginPage from '../pages/loginPage.po'

describe('template spec', () => {
  it('Login to rancher', () => {
    LoginPage.visit();
    LoginPage.login('admin','sa');
    LoginPage.isLoggedIn().then((isLoggedIn) => {
    if (isLoggedIn) {
      cy.log('User is logged in.');
    } else {
      cy.log('User is not logged in.');
    }
    })
  })
})
class LoginPage {
    visit() {
        cy.visit('https://10.100.103.236.nip.io/')
    }
    login(username: string, password: string) {
        cy.get('input[id=username]').type(username);
        cy.get('input[type=password]').type(password);
        cy.get('button[type=submit]').click();
    }
    
    isLoggedIn() {
        return cy.get('div.user-mensu').then(($element) => $element.length > 0);
        }
}

export default new LoginPage();
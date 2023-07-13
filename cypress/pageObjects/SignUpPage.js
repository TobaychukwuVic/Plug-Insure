class SignUpPage{
    getFirstName(){
        return cy.get('[placeholder="First name"]')
    }
    getLastName(){
        return cy.get('[placeholder="Last name"]')
    }
    getEmailAddress(){
        return cy.get('[placeholder="Email Address"]')
    }
    getPassword(){
        return cy.get('[placeholder="Password"]')
    }
    getConfirmPassword(){
        return cy.get('[placeholder="Confirm Password"]')
    }
    getCodeBtn(){
        return cy.get('.sc-dkzDqf')
    }
    getAlert(){
        return cy.get('.dWGBOT ')
    }
    getEmptyFirstName(){
        return cy.get('#root > div > div.sc-gsnTZi.tKwn > div > div.signup-container > div.signup-form > form > div:nth-child(2) > div:nth-child(1) > div > p')
    }
    getEmptyLastName(){
        return cy.get('#root > div > div.sc-gsnTZi.tKwn > div > div.signup-container > div.signup-form > form > div:nth-child(2) > div:nth-child(2) > div > p')
    }
    getEmptyEmailAddress(){
        return cy.get('#root > div > div.sc-gsnTZi.tKwn > div > div.signup-container > div.signup-form > form > div.email-container > div > p')
    }
    getEmptyPassword(){
        return cy.get('#root > div > div.sc-gsnTZi.tKwn > div > div.signup-container > div.signup-form > form > div:nth-child(4) > div.field-column.password-field-column > div > p')
    }
    getEmptyConfirmPassword(){
        return cy.get('#root > div > div.sc-gsnTZi.tKwn > div > div.signup-container > div.signup-form > form > div:nth-child(4) > div:nth-child(2) > div > p')
    }
    getInvalidFirstName(){
        return cy.get('#root > div > div.sc-gsnTZi.tKwn > div > div.signup-container > div.signup-form > form > div:nth-child(2) > div:nth-child(1) > div > p')
    }
    getInvalidLastName(){
        return cy.get('#root > div > div.sc-gsnTZi.tKwn > div > div.signup-container > div.signup-form > form > div:nth-child(2) > div:nth-child(2) > div > p')
    }
    getInvalidEmailAddress(){
        return cy.get('#root > div > div.sc-gsnTZi.tKwn > div > div.signup-container > div.signup-form > form > div.email-container > div > p')
    }
    getExistingEmailAddress(){
        return cy.get('.toast-title')
    }
    getInvalidPassword(){
        return cy.get('#root > div > div.sc-gsnTZi.tKwn > div > div.signup-container > div.signup-form > form > div:nth-child(4) > div.field-column.password-field-column > div > p')
    }
}
export default SignUpPage;
/// <reference types= "cypress" />
import SignUpPage from "../pageObjects/SignUpPage";
import YopMail from "../pageObjects/YopMail";

var signupEmail
const yopMail = new YopMail;
const signup = new SignUpPage();

const data = require('../fixtures/jsonData.config.json')
const firstname = data.signup_data.firstname
const lastname = data.signup_data.lastname
const password = data.signup_data.password
const invalid_firstname = data.signup_data.invalid_firstname
const invalid_lastname = data.signup_data.invalid_lastname
const invalid_email = data.signup_data.invalid_email
const existing_email = data.signup_data.existing_email
const invalid_password = data.signup_data.invalid_password
//const invalid_email = data.signup_data.invalid_email

describe("Navigating to the Sign up Page",()=> {
    before(function () {
        cy.clearLocalStorageCache();
    });
    beforeEach(() => {
        cy.restoreLocalStorageCache();
    });

    afterEach(() => {
        cy.saveLocalStorageCache();
    });


    it("Opening Sign up URL", function () {
        cy.OpenSignUpUrl({});
        cy.url().should("include","register")
    })

    it("Verify that user cannot proceed with sign up if any compulsory fields is empty", function(){
        signup.getFirstName().click()
        signup.getCodeBtn().click()
        signup.getEmptyFirstName().should('be.visible').and('contain.text', 'Field cannot be empty')
        signup.getLastName().click()
        signup.getCodeBtn().click()
        signup.getEmptyLastName().should('be.visible').and('contain.text', 'Field cannot be empty')
        signup.getEmailAddress().click()
        signup.getCodeBtn().click()
        signup.getEmptyEmailAddress().should('be.visible').and('contain.text', 'Field cannot be empty')
        signup.getPassword().click()
        signup.getCodeBtn().click()
        signup.getEmptyPassword().should('be.visible').and('contain.text', 'Field cannot be empty')
        signup.getConfirmPassword().click()
        signup.getCodeBtn().click()
        signup.getEmptyConfirmPassword().should('be.visible').and('contain.text', 'Field cannot be empty')
})

    it("Verify that user cannot proceed with invalid fields", function(){
        signup.getFirstName().clear().type(invalid_firstname)
        signup.getCodeBtn().click()
        signup.getInvalidFirstName().should('exist').and('contain.text', 'First name must be at least 3 characters')
        signup.getLastName().clear().type(invalid_lastname)
        signup.getCodeBtn().click()
        signup.getInvalidLastName().should('be.visible').and('contain.text', 'Last name must be at least 3 characters')
        signup.getEmailAddress().clear().type(invalid_email)
        signup.getCodeBtn().click()
        signup.getInvalidEmailAddress().should('be.visible').and('contain.text', 'Enter valid email')
        signup.getPassword().clear().type(invalid_password)
        signup.getCodeBtn().click()
        signup.getInvalidPassword().should('be.visible').and('contain.text', 'Field cannot be empty')

    })

    it("Verify that user cannot proceed with an existing email", function(){
        signup.getFirstName().clear().type(firstname)
        signup.getLastName().clear().type(lastname)
        signup.getEmailAddress().clear().type(existing_email)
        signup.getPassword().clear().type(password)
        signup.getConfirmPassword().clear().type(password)
        signup.getCodeBtn().click()
        signup.getExistingEmailAddress().should('be.visible').and('contain.text', 'Error')

    })

    it("Successful sign up", function(){
        signup.getFirstName().clear().type(firstname)
        signup.getLastName().clear().type(lastname)

        var time = Date.now()
        signupEmail = "test"+time+"@yopmail.com"
        signup.getEmailAddress().clear().type(signupEmail)
        signup.getPassword().clear().type(password)
        signup.getConfirmPassword().clear().type(password)
        signup.getCodeBtn().click()
        signup.getAlert().should("be.visible").and("contain.text","User created successfully")
    })

    it("Validate user can proceed to their email to fetch OTP", function(){
        cy.forceVisit("https://yopmail.com/en/", signupEmail)
    })

});
# Plug-Insure
This folder contains UI tests done for "https://plug-frontend.vercel.app/register" sign up and login feature

# Framework Used
I have used the cypress framework, which is a good tool for  testing and also packages MOCHA & CHAI by default, written in javascript, as these are the preferred recommended for set up

Mocha framework was used in the tests under "e2e" for describing and dividing the test cases. And Chai was used for assertions

# How to set up
- First thing you should do it pull the project via preferred IDE or
- Create a folder, open terminal and navigate to the folder then run command:
`git clone https://github.com/TobaychukwuVic/Plug-Insure.git`
- Launch IDE and open project
- Navigate to folder on terminal and '**npm install**'

**To run cypress in GUI, in terminal type:** 
`node_module/.bin/cypress open` 
or
 `npx cypress open`
- Select the UI test file under `cypress/e2e` 
- RUN TEST!

**To run cypress headless, in terminal, type:**
npx cypress run -- --record --spec "cypress/e2e/login.cy.js" OR
npx cypress run -- --record --spec "cypress/e2e/signUp.cy.js" 

# Tour
Fixtures folder -> For test data

e2e -> For main test file

cypress.config.json -> Adjust configuration and add/update **base url**

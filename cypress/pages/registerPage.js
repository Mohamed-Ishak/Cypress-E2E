export class RegisterPage{
    
    webLocators ={
           firstName : '#input-firstname',
           lastName  : '#input-lastname',
           email: '#input-email',
           telephone: '#input-telephone',
           password: '#input-password',
           confirmPassword : '#input-confirm',
           privacyPolicy : '[type="checkbox"]',
           button : '[type="submit"]'

    }

    openURL(){
        cy.visit(Cypress.env('URL'))
    }

    enterFirstName(fName){
        cy.get(this.webLocators.firstName).type(fName)
    }


    enterLastName(lName){
        cy.get(this.webLocators.lastName).type(lName)
    }

    enterEmail(email){
        cy.get(this.webLocators.email).type(email)
    }


    enterTelephonNumber(telephone){
        cy.get(this.webLocators.telephone).type(telephone)
    }


    enterPasswordAndConfirmPassword(pass){
        cy.get(this.webLocators.password).type(pass)
        cy.get(this.webLocators.confirmPassword).type(pass)
    }


    selectPrivacyCheckbox(){
        cy.get(this.webLocators.privacyPolicy).check()
    }

    clickOnContinue(){
        cy.get(this.webLocators.button).click()
    }


}
import { RegisterPage } from "../../pages/registerPage"
import registerData from "../../fixtures/registerData.json"
const registerObj = new RegisterPage()
describe('Test Automation',()=>{
    it('register flow',()=>{
        registerObj.openURL()
        registerObj.enterFirstName(registerData.firstName)
        registerObj.enterLastName(registerData.lastName)
        registerObj.enterEmail(registerData.email)
        registerObj.enterTelephonNumber(registerData.telephone)
        registerObj.enterPasswordAndConfirmPassword(registerData.password)
        registerObj.selectPrivacyCheckbox()
        registerObj.clickOnContinue()
    })
})
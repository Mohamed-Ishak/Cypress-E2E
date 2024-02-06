import { HomePage } from "../../pages/homePage";
import testData from "../../fixtures/testData.json"


const homePageObj = new HomePage()
describe('test Automation',() =>{
    before(() =>{
        cy.login(testData.login.email,testData.login.password)
    })

    it('Add To Cart flow',()=>{
        homePageObj.searchProduct(testData.product.productName)
        homePageObj.addToCart()
        homePageObj.verfiySuccessMessage().should('contain',testData.message.successMessage).and('contain',testData.product.productName)
    })
})
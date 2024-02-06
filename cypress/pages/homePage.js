export class HomePage{
    webLocators ={
        searchInput:'[name="search"]',
        clickSearch:'.btn.btn-default.btn-lg1',
        product:'img[title="MacBook"]',
        addToCart:'Add to Cart',
        successfullMessage:'.alert.alert-success.alert-dismissible'
    }

    searchProduct(productname){
      cy.get(this.webLocators.searchInput).type(productname)
      cy.get(this.webLocators.clickSearch).click()
    }

    addToCart(){
       cy.contains(this.webLocators.addToCart).first().click()
      }

      verfiySuccessMessage(){
        return cy.get(this.webLocators.successfullMessage)
      }
}
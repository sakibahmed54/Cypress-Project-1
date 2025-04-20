import { describe } from "mocha"
import { LoginPage } from "./Pages/login_page" 
const loginPage =new LoginPage()

beforeEach(function(){
    cy.visit('https://opensource-demo.orangehrmlive.com/')
})

describe('All Login Test',function(){




    it ('LoginTestWith valid credentials',function(){
    
    
        loginPage.enterUsername('Admin')
        loginPage.enterPassword('admin123')
        loginPage.clickLogin()
        cy.get('.oxd-userdropdown-tab').click()
    
    })
    it('LoginTest with invalid username',function(){
        
        
            loginPage.enterUsername('Admin')
            loginPage.enterPassword('admin123')
            loginPage.clickLogin()
            cy.get('.oxd-userdropdown-tab').click()
        
        })

})
it('LoginTest with invalid password',function(){
        
        
    loginPage.enterUsername('Admin')
    loginPage.enterPassword('admin123')
    loginPage.clickLogin()
    cy.get('.oxd-userdropdown-tab').click()

})




const assert = require('chai').assert
const expect = require('chai').expect
const Common = require('../common/common')
const Constants = require('../common/constants')
const LoginPage = require('../page/login.page')



describe('Verifying Login Flow', () => {

  it('Verify Elements on Login Page', () => {
    browser.url('/')
    expect(LoginPage.aceinvoiceLogo.isVisible()).to.exist
    expect(LoginPage.aceinvoiceHeader.getText()).to.equal('AceInvoice')
    expect(LoginPage.taglineHeader.getText()).to.equal('Time Tracking and Invoicing')
    expect(LoginPage.signinHeader.getText()).to.equal('Sign In')    
    expect(LoginPage.loginButton.getValue()).to.equal('Login')
    expect(LoginPage.rememberMeCheckbox.getText()).to.exist
    expect(LoginPage.checkboxLabel.getText()).to.equal('Remember Me')
    expect(LoginPage.forgotPasswordText.getText()).to.equal('Forgot Password?')
    expect(LoginPage.doNotHaveAccountText.getText()).to.contains("Don't have an account?")
    expect(LoginPage.signupText.getText()).to.equal('Sign Up')
    expect(LoginPage.username.isVisible()).to.exist
    expect(LoginPage.password.isVisible()).to.exist
  })

  it(
    'Verify error message when clicking on submit button without providing both inputs',
    () => {
      browser.url('/')
      LoginPage.submit()
      LoginPage.toastMesseges.waitForText(5000)
      expect(LoginPage.toastMesseges.getText()).to.equal('Incorrect email or password')
    }
  )

  it('Success Login', () => {
    Common.login()
    expect(LoginPage.profileName.getText()).to.equal(Constants.name)
  })
})
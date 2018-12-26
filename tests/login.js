const assert = require('chai').assert;
const expect = require('chai').expect;
const common = require('../common/common');
const Constants = require('../common/constants');
const LoginPage = require('../page/login.page');



describe('Verifying Login Flow', () => {

  it('Verify Elements on Login Page', () => {
    browser.url('/')
    expect(LoginPage.aceinvoice_logo.isVisible()).to.exist
    expect(LoginPage.header_aceinvoice.getText()).to.equal('AceInvoice')
    expect(LoginPage.header_tagline.getText()).to.equal('Time Tracking and Invoicing')
    expect(LoginPage.sign_in_header.getText()).to.equal('Sign In')    
    expect(LoginPage.login_button.getValue()).to.equal('Login')
    expect(LoginPage.remember_me_checkbox.getText()).to.exist
    expect(LoginPage.checkbox_label.getText()).to.equal('Remember Me')
    expect(LoginPage.forgot_password_text.getText()).to.equal('Forgot Password?')
    expect(LoginPage.donot_have_account_text.getText()).to.contains("Don't have an account?")
    expect(LoginPage.sign_up_text.getText()).to.equal('Sign Up')
    expect(LoginPage.username.isVisible()).to.exist
    expect(LoginPage.password.isVisible()).to.exist
  })

  it(
    'Verify error message when clicking on submit button without providing both inputs',
    () => {
      browser.url('/')
      LoginPage.submit()
      LoginPage.toast_message.waitForText(5000)
      expect(LoginPage.toast_message.getText()).to.equal('Incorrect email or password')
    }
  )

  it('Success Login', () => {
    common.login()
    expect(LoginPage.profile_name.getText()).to.equal(Constants.name)
  })
})
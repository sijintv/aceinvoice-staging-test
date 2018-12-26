const common = require('../common/common');
const signupPage = require('../page/signup.page');

const assert = require('chai').assert;
const expect = require('chai').expect;

beforeEach(() => {
  browser.url('/sign_up')
})

describe('Verifying Login Flow', () => {

  it('Verify Elements on Login Page', () => {
    expect(signupPage.aceinvoiceLogo.isVisible()).to.exist
    expect(signupPage.aceinvoiceHeader.getText()).to.equal('AceInvoice')
    
    expect(signupPage.headerTagline.getText()).to.equal('Time Tracking and Invoicing')
    expect(signupPage.createAccountHeader.getText()).to.equal('Create Account')

    expect(signupPage.emailInput.isVisible()).to.exist

    expect(signupPage.signupButton.getValue()).to.equal('Get Started')

    expect(signupPage.alreadyHaveAccountText.getText()).to.contains('Already have an account?')
    expect(signupPage.signinText.getText()).to.equal('Sign in')
  })

  it(
    'Verify error message when clicking on submit button without providing both inputs',
    () => {
      signupPage.submit()
      signupPage.errorMessage.waitForText(5000)
      expect(signupPage.error_message.getText()).to.equal('Email can not be empty')
    }
  )
})
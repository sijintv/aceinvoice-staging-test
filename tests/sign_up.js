
const SignupPage = require('../page/signup.page');

const assert = require('chai').assert;
const expect = require('chai').expect;

beforeEach(() => {
  browser.url('/sign_up')
})

describe('Verifying Login Flow', () => {

  it('Verify Elements on Login Page', () => {
    expect(SignupPage.aceinvoiceLogo.isVisible()).to.exist
    expect(SignupPage.aceinvoiceHeader.getText()).to.equal('AceInvoice')
    expect(SignupPage.taglineHeader.getText()).to.equal('Time Tracking and Invoicing')
    expect(SignupPage.createAccountHeader.getText()).to.equal('Create Account')
    expect(SignupPage.emailInput.isVisible()).to.exist
    expect(SignupPage.signupButton.getValue()).to.equal('Get Started')
    expect(SignupPage.alreadyHaveAccountText.getText()).to.contains('Already have an account?')
    expect(SignupPage.signinText.getText()).to.equal('Sign in')
  })

  it(
    'Verify error message when clicking on submit button without providing both inputs',
    () => {
      SignupPage.submit()
      SignupPage.errorMessage.waitForText(5000)
      expect(SignupPage.errorMessage.getText()).to.equal('Email can not be empty')
    }
  )
})
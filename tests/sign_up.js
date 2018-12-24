
var common = require('../common/common')
var signup = require('../page/signup.page')

var assert = require('chai').assert
var expect = require('chai').expect

beforeEach(() => {
  browser.url('/sign_up')
})

describe('Verifying Login Flow', () => {

  it('Verify Elements on Login Page', () => {
    expect(signup.aceinvoice_logo.isVisible()).to.exist
    expect(signup.header_aceinvoice.getText()).to.equal('AceInvoice')
    
    expect(signup.header_tagline.getText()).to.equal('Time Tracking and Invoicing')
    expect(signup.create_account_header.getText()).to.equal('Create Account')

    expect(signup.email_input.isVisible()).to.exist

    expect(signup.signUp_button.getValue()).to.equal('Get Started')

    expect(signup.already_have_account_text.getText()).to.contains('Already have an account?')
    expect(signup.sign_in_text.getText()).to.equal('Sign in')
  })

  it('Verify error message when clicking on submit button without providing both inputs', () => {

    signup.submit()
    signup.error_message.waitForText(5000)
    expect(signup.error_message.getText()).to.equal('Email can not be empty')
  })
})

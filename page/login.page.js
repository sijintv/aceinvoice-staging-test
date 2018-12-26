const {Page} = require('./page')
const Constants = require('../common/constants')

class LoginPage extends Page {
  get signinHeader() { return $('h3=Sign In') }
  get rememberMeCheckbox() { return $('#remember_me_id') }
  get checkboxLabel() { return $('span.checkbox-heading=Remember Me') }
  get forgotPasswordText() { return $('a=Forgot Password?') }
  get doNotHaveAccountText() { return $('a.signup-button.border-radius-lg') }
  get aceinvoiceLogo() { return $('img[src="/packs/icon-5c84dcebf26984e5eb25872975ab9ea7.svg"]') }
  get aceinvoiceHeader() { return $('h2=AceInvoice') }
  get taglineHeader() { return $('h2=Time Tracking and Invoicing') }
  get signupText() { return $('strong=Sign Up') }
  get username() { return $('input.form-control:nth-child(1)[name="email"]') }
  get password() { return $('input.form-control:nth-child(1)[name="password"]') }
  get loginButton() { return $('.btn.btn-primary') }
  get profileName() { return $(`span=${Constants.name}`) }
  get toastMesseges() { return $('div=Incorrect email or password') }
  

  submit() {
      this.loginButton.click()
    }

}

module.exports = new LoginPage()
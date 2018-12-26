const {Page} = require('./page')

class SignupPage extends Page {

  get aceinvoiceLogo() { return $('img[src="/packs/icon-5c84dcebf26984e5eb25872975ab9ea7.svg"]') }
  get aceinvoiceHeader() { return $('h2=AceInvoice') }
  get taglineHeader() { return $('h2=Time Tracking and Invoicing') }
  get createAccountHeader() { return $('h3=Create Account') }
  get emailInput() { return $('input[name="email"]') }
  get signupButton() { return $('.btn.btn-primary') }
  get alreadyHaveAccountText() { return $('a.signup-button.border-radius-lg') }
  get signinText() { return $('strong=Sign in')}
  get errorMessage() { return $('label=Email can not be empty') }



submit() {
        this.signupButton.click()
    }
}


module.exports = new SignupPage()
// login.page.js
var Page = require('./page')

var SignUpPage = Object.create(Page, {
  // define elements  
  aceinvoice_logo: { get: function () { return $('img[src="/packs/icon-5c84dcebf26984e5eb25872975ab9ea7.svg"]'); } },
  header_aceinvoice: { get: function () { return $('h2=AceInvoice'); } },
  header_tagline: { get: function () { return $('h2=Time Tracking and Invoicing'); } },

  create_account_header: { get: function () { return $('h3=Create Account'); } },
  email_input: { get: function () { return $('input[name="email"]');}},
  signUp_button: { get: function () { return $('.btn.btn-primary');}},
  already_have_account_text: { get: function () { return $('a.signup-button.border-radius-lg'); } },
  sign_in_text: { get: function () { return $('strong=Sign in'); } },

  error_message: { get: function () { return $('label=Email can not be empty'); } },
  // define or overwrite page methods


  open: {
    value: function () {
      Page.open.call(this, '')
    }
  },

  submit: {
    value: function () {
      this.signUp_button.click()
    }
  }
})


module.exports = SignUpPage

const Page = require('./page');
const Constants = require('../common/constants');

const LoginPage = Object.create(Page, {
   
  sign_in_header: { get: function() { return $('h3=Sign In'); } },
  remember_me_checkbox: { get: function() { return $('#remember_me_id'); } },
  checkbox_label: { get: function() { return $('span.checkbox-heading=Remember Me'); } },
  forgot_password_text: { get: function() { return $('a=Forgot Password?'); } },
  donot_have_account_text: { get: function() { return $('a.signup-button.border-radius-lg'); } },
  aceinvoice_logo: { get: function() { return $('img[src="/packs/icon-5c84dcebf26984e5eb25872975ab9ea7.svg"]'); } },
  header_aceinvoice: { get: function() { return $('h2=AceInvoice'); } },
  header_tagline: { get: function() { return $('h2=Time Tracking and Invoicing'); } },
  sign_up_text: { get: function() { return $('strong=Sign Up'); } },
  username: { get: function() { return $('input.form-control:nth-child(1)[name="email"]');}},
  password: { get: function() { return $('input.form-control:nth-child(1)[name="password"]');}},
  login_button: { get: function() { return $('.btn.btn-primary');}},
  profile_name: { get: function() { return $(`span=${Constants.name}`); } },
  toast_message: { get: function() { return $('div=Incorrect email or password'); } },
  
  open: {
    value: function() {
      Page.open.call(this, '')
    }
  },

  submit: {
    value: function() {
      this.login_button.click()
    }
  }

});

module.exports = LoginPage
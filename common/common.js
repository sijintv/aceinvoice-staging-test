const { Page } = require('../page/page')
const expect = require('chai').expect
const LoginPage = require('../page/login.page')
const Constants = require('../common/constants')
const LandingPage = require('../page/landing.page')

class Common extends Page {
  login() {
    browser.url('/')
    LoginPage.username.setValue(Constants.email)
    LoginPage.password.setValue(Constants.password)
    browser.pause(50)
    LoginPage.submit()
    browser.pause(2000)
  }

  tabs() {
    expect(LandingPage.timeTracking.getText()).to.equal('Time Tracking')
    expect(LandingPage.team.getText()).to.equal('Team')
    expect(LandingPage.projects.getText()).to.equal('Projects')
    expect(LandingPage.clients.getText()).to.equal('Clients')
    expect(LandingPage.invoices.getText()).to.equal('Invoices')
    expect(LandingPage.expenses.getText()).to.equal('Expenses')
    expect(LandingPage.reports.getText()).to.equal('Reports')
    expect(LandingPage.settings.getText()).to.equal('Settings')
  }
}

module.exports = new Common()
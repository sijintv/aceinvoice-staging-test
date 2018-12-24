var expect = require('chai').expect
var LoginPage = require('../page/login.page')
var variables = require('../common/constants')
var landing = require('../page/landing.page')

var Common = function () {
  var Login = () => {
    browser.url('/')
    LoginPage.username.setValue(variables.email)
    LoginPage.password.setValue(variables.password)
    browser.pause(50)
    LoginPage.submit()
    browser.pause(2000)
  }

  var Tabs = () => {
    expect(landing.time_tracking.getText()).to.equal('Time Tracking')
    expect(landing.team.getText()).to.equal('Team')
    expect(landing.projects.getText()).to.equal('Projects')
    expect(landing.clients.getText()).to.equal('Clients')
    expect(landing.invoices.getText()).to.equal('Invoices')
    expect(landing.expenses.getText()).to.equal('Expenses')
    expect(landing.reports.getText()).to.equal('Reports')
    expect(landing.settings.getText()).to.equal('Settings')
  }

  return {
    Login: Login,
   Tabs: Tabs
  }
}()

module.exports = Common
const { Page } = require('../page/page')
const expect = require('chai').expect;
const LoginPage = require('../page/login.page');
const variables = require('../common/constants');
const landing = require('../page/landing.page');

class Common extends Page {
  login() {
    browser.url('/')
    LoginPage.username.setValue(variables.email)
    LoginPage.password.setValue(variables.password)
    browser.pause(50)
    LoginPage.submit()
    browser.pause(2000)
  }

  tabs(){
    expect(landing.time_tracking.getText()).to.equal('Time Tracking')
    expect(landing.team.getText()).to.equal('Team')
    expect(landing.projects.getText()).to.equal('Projects')
    expect(landing.clients.getText()).to.equal('Clients')
    expect(landing.invoices.getText()).to.equal('Invoices')
    expect(landing.expenses.getText()).to.equal('Expenses')
    expect(landing.reports.getText()).to.equal('Reports')
    expect(landing.settings.getText()).to.equal('Settings')
  }
}

module.exports = new Common()
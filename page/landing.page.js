const {Page} = require('./page');

class LandingPage extends Page {

  get timeTracking() { return $('a=Time Tracking') }
  get team() { return $('a=Team') }
  get projects() { return $('a=Projects') }
  get clients() { return $('a=Clients') }
  get invoices() { return $('a=Invoices') }
  get expenses() { return $('a=Expenses') }
  get reports() { return $('a=Reports') }
  get settings() { return $('a=Settings') }
  

}

module.exports = new LandingPage ()
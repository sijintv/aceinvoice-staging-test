// login.page.js
var Page = require('./page')

var LandingPage = Object.create(Page, {

 
  time_tracking: { get: function () { return $('a=Time Tracking'); } },
  team: { get: function () { return $('a=Team'); } },
  projects: { get: function () { return $('a=Projects'); } },
  clients: { get: function () { return $('a=Clients'); } },
  invoices: { get: function () { return $('a=Invoices'); } },
  expenses: { get: function () { return $('a=Expenses'); } },
  reports: { get: function () { return $('a=Reports'); } },
  settings: { get: function () { return $('a=Settings'); } },
  

})

module.exports = LandingPage

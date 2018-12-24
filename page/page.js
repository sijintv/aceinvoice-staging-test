function Page () {
  this.title = 'Ace Invoice'
}

Page.prototype.open = function (path) {
  browser.url(path)
}

module.exports = new Page()

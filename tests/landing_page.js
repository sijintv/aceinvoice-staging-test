
var Common = require('../common/common')

beforeEach(() => {
  Common.Login()
})

describe('Loging in....', function () {
  it('There shouldnt be any landing page elements', () => {
    Common.Tabs()
  })
})

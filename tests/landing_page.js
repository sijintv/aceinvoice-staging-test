const Common = require('../common/common');

beforeEach(() => {
  Common.login()
})

describe('Loging in....', () => {
  it('There shouldnt be any landing page elements', () => {
    Common.tabs()
  })
})
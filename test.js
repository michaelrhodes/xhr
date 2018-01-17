var assert = require('assert')
var xhr = require('./')

xhr('GET https://raw.githubusercontent.com/michaelrhodes/xhr/master/package.json',
  function (err) {
    assert.equal(err, null)
    assert.equal(JSON.parse(this.responseText).name, 'xhr')
  })

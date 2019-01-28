var xhr = require('./')

xhr('GET https://raw.githubusercontent.com/michaelrhodes/xhr/master/package.json',
  function (err) {
    console.assert(err === null)
    console.assert(JSON.parse(this.responseText).name === 'xhr')
  })

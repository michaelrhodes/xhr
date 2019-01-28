# xhr

xhr is a little module that simplifies working with XMLHttpRequest objects

## install

```sh
npm install michaelrhodes/xhr
```

### use

```js
var xhr = require('xhr')

// Basic async
// ···········
xhr('GET /something', function (err) {
  err ? console.error('Status:', err.message) :
  console.log(this.responseText)
})

// Less basic async
// ················
var req = xhr('GET /something.json')
// `req` is an XMLHttpRequest
req.setRequestHeader('Accept', 'application/json')
// with a fancy new `send` method
req.send(function (err) {
  err ? console.error('Status:', err.message) :
  console.log(JSON.parse(this.responseText))
})

// Sending data
// ············
var req = xhr('POST /something')
var data = new FormData
data.append('some', 'data')
req.send(data, function (err) {
  err ? console.error('Status:', err.message) :
  console.log(this.responseText)
})

// Basic sync
// ··········
var req = xhr('GET /something', true)
var res = req.send()
console.log(res.responseText || res.status)
```

### obey
[MIT](http://opensource.org/licenses/MIT)

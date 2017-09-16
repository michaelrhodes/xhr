# xhr

xhr is a little module that simplifies working with XMLHttpRequest objects

## Install

```sh
npm install michaelrhodes/xhr
```

### Usage

```js
var xhr = require('xhr')

// Basic async
// ···········
xhr('GET /something', function (err) {
  err ? console.error('http-status', err) :
  console.log(this.responseText)
})

// Less basic async
// ················
var req = xhr('GET /something.json')
// `req` is an XMLHttpRequest
req.setRequestHeader('Accept', 'application/json')
// with a fancy new `send` method
req.send(function (err) {
  err ? console.error('http-status', err) :
  console.log(JSON.parse(res))
})

// Sending data
// ············
var req = xhr('POST /something')
var data = new FormData
data.append('some', 'data')
req.send(data, function (err) {
  err ? console.error('http-status', err) :
  console.log(this.responseText)
})

// Basic sync
// ··········
var req = xhr('GET /something', true)
var res = req.send()
console.log(res.responseText || res.status)
```

### License
[MIT](http://opensource.org/licenses/MIT)

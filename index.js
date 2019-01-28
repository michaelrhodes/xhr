var XMLHttpRequest = require('xhr2')

module.exports = xhr

function xhr (path, sync, cb) {
  if (typeof sync === 'function')
    cb = sync, sync = false

  var parts = path.split(/\s+/)
  var method = parts[1] ? parts[0] : 'GET'
  var url = parts[1] || parts[0]

  var xhr = new XMLHttpRequest
  var send = xhr.send
  xhr.open(method, url, !sync)
  xhr.send = function (data, cb) {
    if (typeof data === 'function')
      cb = data, data = null

    if (typeof cb === 'function') {
      xhr.onreadystatechange = function () {
        if (xhr.readyState !== 4) return
        var code = xhr.status
        var err = code === 0 || code >= 400
        cb.call(xhr, err ? new Error(code) : null)
      }
    }

    send.call(xhr, data)
    return xhr
  }

  if (cb) xhr.send(cb)
  return xhr
}

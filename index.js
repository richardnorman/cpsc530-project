var crypto = require('crypto')

function hash1() {
    var shasum = crypto.createHash('sha1')
    shasum.update('foo')
    alert(shasum.digest('bar'))
}
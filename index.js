
function crackWeakPasswords() {
    var crypto = require('crypto')
    var shasum = crypto.createHash('sha1')
    shasum.update('foo')
    alert(shasum.digest('bar'))
    //alert('Cracking weak passwords in progress...')
}

function crackStrongPasswords() {
    //var shasum = crypto.createHash('sha1')
    //shasum.update('foo')
    //alert(shasum.digest('bar'))
    alert('Cracking strong passwords in progress...')

}
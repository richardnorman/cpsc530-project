//    var crypto = require('crypto')
let timer_minutes
let timer_seconds
let timer_milliseconds

function cycleThroughRecursion(currentHashingIndex, currentHashingPassword, currentHashedWeakPassword) {
    //let cycleThroughIndex = currentHashingIndex + 1
    if (currenthashedweakPassword == currentHashedWeakPassword) {
        return true
    }

    if (currentHashingIndex == currentHashingIndex.length) {
        return false;
    } else {
        // hash and compare
        currentHashingPassword[currentHashingLetterIndex] = String.fromCharCode(currentCharASCII)
        currentCharASCII ++

        if (cycleThroughRecursion(currentHashingIndex-1, currentHashingPassword, currentHashedWeakPassword)) {
            return true
        }
        return false
    }
}

function crackWeakPasswords() {
//    var shasum = crypto.createHash('sha1')
//    shasum.update('foo')
//    alert(shasum.digest('bar'))
    const weakpasswords = ["123456", "123456789", "qwerty", "password", "12345", "qwerty123", "1q2w3e", "12345678", "111111"]
    var hashedPasswords = []
    for (let i = 0; i < weakpasswords.length; i++) {
        hashedPasswords = hashedPasswords.push(encrypt(weakpasswords[i]))
    }

    startStopwatch()
    let triedLetters = "    "
    let currentHashingLetterIndex = triedLetters.length - 1
    let currentCharASCII = 32
    let currentCrackingPasswordIndex = 0
    while(1) {

            // hash here and compare the hashes with the current currentCharASCII
            while(currentCharASCII < 127) {
                if(currentHashingLetterIndex < triedLetters.length - 1 && currentCharASCII == 127) {
                    if (cycleThroughRecursion(currentHashingLetterIndex, triedLetters, hashedPasswords[currentCrackingPasswordIndex])) {
                        //successful cracking! Move on to the next hashed password
                        if (currentCrackingPasswordIndex < hashedPasswords.length) {
                            currentCrackingPasswordIndex++
                            triedLetters = "    "
                            currentHashingLetterIndex = triedLetters.length - 1
                            currentCharASCII = 32
                            continue
                        } else {
                            //cracked all passwords! DONE
                            return
                        }
                    } else {
                        //unsuccessful cracking... add another character and repeat the recursion
                        triedLetters += " "
                        currentCharASCII = 32
                        currentHashingLetterIndex = triedLetters.length - 1
                    }
                }
            }
        //}
    }

    // aaaa - aaab - aaac ... aaaz - aaba - aabb - aabc
    //'a' - run through all cycles
    //'aa' - run through all cycles of the first a while each iteration you loop through 
    //the entirety of the second a 
    //alert('Cracking weak passwords in progress...')
    //stopStopwatch()
    //alert("It took: " + timer_seconds)
}

function crackStrongPasswords() {
    //var shasum = crypto.createHash('sha1')
    //shasum.update('foo')
    //alert(shasum.digest('bar'))
    const strongpasswords = ["1Ki77y", "Susan53", "jelly22fi$h", "$m3llycat", "a11Black$", "!ush3r", "SterlingGmail20.15", "d3ltagamm@", "!Lov3MyPiano", "&ebay.44"]
    alert('Cracking strong passwords in progress...')

}

function encrypt(msg) {
  var sha1 = require('sha1');
  sha1(msg);
  return sha1.toLowerCase();
 }


let offset = 0,
  paused = true;

render();
  
function startStopwatch(evt) {
  if (paused) {
    paused = false;
    offset -= Date.now();
    render();
  }
}

function stopStopwatch(evt) {
    if (!paused) {
      paused = true;
      offset += Date.now();
    }
    alert("It took: " + timer_minutes + ":" + timer_seconds + ":" + timer_milliseconds)
  }

function format(value, scale, modulo, padding) {
  value = Math.floor(value / scale) % modulo;
  return value.toString().padStart(padding, 0);
}

function render() {
  var value = paused ? offset : Date.now() + offset;

  timer_milliseconds = format(value, 1, 1000, 3);
  timer_seconds = format(value, 1000, 60, 2);
  timer_minutes = format(value, 60000, 60, 2);
  
  if(!paused) {
    requestAnimationFrame(render);
  }
}
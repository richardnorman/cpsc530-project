
function crackWeakPasswords() {
//    var crypto = require('crypto')
//    var shasum = crypto.createHash('sha1')
//    shasum.update('foo')
//    alert(shasum.digest('bar'))
    startStopwatch()
    alert('Cracking weak passwords in progress...')
}

function crackStrongPasswords() {
    //var shasum = crypto.createHash('sha1')
    //shasum.update('foo')
    //alert(shasum.digest('bar'))
    alert('Cracking strong passwords in progress...')

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
}

function resetStopwatch(evt) {
  if (paused) {
    offset = 0;
    render();
  } else {
    offset = -Date.now();
  }
}

function format(value, scale, modulo, padding) {
  value = Math.floor(value / scale) % modulo;
  return value.toString().padStart(padding, 0);
}

function render() {
  var value = paused ? offset : Date.now() + offset;

  document.querySelector('#s_ms').textContent = format(value, 1, 1000, 3);
  document.querySelector('#s_seconds').textContent = format(value, 1000, 60, 2);
  document.querySelector('#s_minutes').textContent = format(value, 60000, 60, 2);
  
  if(!paused) {
    requestAnimationFrame(render);
  }
}
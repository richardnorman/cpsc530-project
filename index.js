var timer_minutes
var timer_seconds
var timer_milliseconds
var hashedMostCommonPassword = [
  '7C4A8D09CA3762AF61E59520943DC26494F8941B',
  'F7C3BC1D808E04732ADF679965CCC34CA7AE3441',
  'B1B3773A05C0ED0176787A4F1574FF0075F7521E',
  '5BAA61E4C9B93F3F0682250B6CF8331B7EE68FD8',
  '8CB2237D0679CA88DB6464EAC60DA96345513964',
  '5CEC175B165E3D5E62C9E13CE848EF6FEAC81BFF',
  '9AC20922B054316BE23842A5BCA7D69F29F69D77',
  '3D4F2BF07DC1BE38B20CD6E46949A1071F9D0E3D',
  '01B307ACBA4F54F55AAFC33BB06BBBF6CA803E9A',
  '7C222FB2927D828AF22F592134E8932480637C0D',
  'EE8D8728F435FD550F83852AABAB5234CE1DA528',
  '35ED5406781EBFDF7161BBBB18E16CB9AD1F3BE4',
  'AB87D24BDC7452E55738DEB5F868E1F16DEA5ACE',
  '18C28604DD31094A8D69DAE60F1BCD347F1AFC5A',
  '4F26AEAFDB2367620A393C973EDDBE8F8B846EBD',
  '59033478180D07080D5E4F3BAA0099996C364162',
  'B444AC06613FC8D63795BE9AD0BEAF55011936AC',
  'DF70F9B975B42116EE6C0231A7E6EAD0BBB283AA',
  '327156AB287C6AA52C8670E13163FC1BF660ADD4',
  'B7A875FC1EA228B9061041B7CEC4BD3C52AB3CE3',
  'FC84AAA687374AED41957693F32664E5F4981862',
  'AAF4C61DDCC5E8A2DABEDE0F3B482CD9AEA9434D',
  'C0B137FE2D792459F26FF763CCE44574A5B5AB03',
  '9F2FEB0F1EF425B292F2F94BC8482494DF430413',
  'B14EAAD1251E7C575DC7787AE83088958D54566D',
  'E5E9FA1BA31ECD1AE84F75CAAA474F3A663F05F4',
  '5C17FA03E6D5FC247565E1CD8FFA70E1BFE5B8D9',
  '4D0FB475B242228032CBDF6D53924D2538DF037B',
  '42629D789C788D24DEC3843783C3EFF9651BD228',
  '759730A97E4373F3A0EE12805DB065E3A4A649A5',
  '891C5FEEF171DA85AADD3FDB8130BA509B03F5EA',
  'B800E8E1FF392127A651E3F3A3BA4AB5A2AE5312'
]

function crackWeakPasswords() {
  const weakpasswords = ["123456", "123456789", "qwerty", "password", "12345", "qwerty123", "1q2w3e", "12345678", "111111", "abcd"]
  var hashedPasswords = []
  for (let i = 0; i < weakpasswords.length; i++) {
    hashedPasswords.push(encrypt(weakpasswords[i]))
  }
  startStopwatch()
  isTimeRemaining = false
  try {
    hashedPasswords.forEach(element => {
      isTimeRemaining = crackPassword(element, 4, 6, 65, 123)
      if (!isTimeRemaining) {
        throw BreakException
      }
    });
  } catch (error) {}
  
  stopStopwatch()
  if (isTimeRemaining) {
    changeGreen()
    document.getElementById("checkMark").style.visibility = "visible";
  } else {
    changeRed()
    alert("Time exceeded! Passwords not cracked :(")
  }
  console.log("It took: " + timer_minutes + ":" + timer_seconds + ":" + timer_milliseconds)
}

function startCrackingByLoadingWeakGIF() {
  const loadingWeakGIF = document.createElement("img");
  loadingWeakGIF.src = "https://i.pinimg.com/originals/24/2e/12/242e12c5180073807fc7ff2d5f244d1c.gif"
  //loadingWeakGIF.onload = crackWeakPasswords()
  loadingWeakGIF.width = 250

  document.getElementById('loadingWIndicator').appendChild(loadingWeakGIF)
}

function crackStrongPasswords() {
  const strongpasswords = ["!Lov3MyPiano"]
  var hashedPasswords = []
  for (let i = 0; i < strongpasswords.length; i++) {
    hashedPasswords.push(encrypt(strongpasswords[i]))
  }
  
  isTimeRemaining = false
  startStopwatch2()
  try {
    hashedPasswords.forEach(element => {
      isTimeRemaining = crackPassword(element, 7, 12, 33, 127)
      if (!isTimeRemaining) {
        throw BreakException
      }
    })
  } catch (error) {}
  stopStopwatch2()
  if (isTimeRemaining) {
    changeGreen2()
    document.getElementById("checkMark2").style.visibility = "visible";
  } else {
    changeRed2()
    alert("Time exceeded! Passwords not cracked :(")
  }
  console.log("It took: " + timer_minutes + ":" + timer_seconds + ":" + timer_milliseconds)
}

function crackPassword(correctHashedPassword, minlen, maxlen, startCharacter, endCharacter) {
  if (hashedMostCommonPassword.includes(correctHashedPassword)) {
    return true
  }
  
  x = String.fromCharCode(startCharacter).repeat(minlen-1)

  for (var thislen = minlen; thislen < maxlen + 1; thislen++) {
    x = x.concat(String.fromCharCode(startCharacter))
    if(all_combinations(x, thislen - 1, correctHashedPassword, startCharacter, endCharacter)) {
      return true
    } else {
      updateTime()
      if (timer_minutes > 9) {
        return false
      }
    }
  }
}

function all_combinations(x, len, correctHashedPassword, startCharacter, endCharacter) {
  for (var c = startCharacter; c < endCharacter; c++) {
    x = x.substr(0, len) + String.fromCharCode(c) + x.substr(len + 1)
    if (len > 0) {
      updateTime()
      if (timer_minutes > 9) {
        return false
      }
      if (all_combinations(x, len - 1, correctHashedPassword, startCharacter, endCharacter)) {
        return true
      } 
    } else {
      if (correctHashedPassword == encrypt(x)) {
        return true
      }
    }
  }
}

function encrypt(msg) {
  sha1(msg)
  var hash = sha1.create()
  hash.update(msg)
  return hash.hex().toUpperCase()
}

let offset = 0,
  paused = true;

function startStopwatch(evt) {
  //document.querySelector('#loadingWeak').style.display = 'block'
  if (paused) {
    offset = 0
    paused = false;
    offset -= Date.now();
  }
}

function startStopwatch2(evt) {
  //document.querySelector('#loadingStrong').style.display = 'block'
  if (paused) {
    offset = 0
    paused = false;
    offset -= Date.now();
  }
}

function stopStopwatch(evt) {
  if (!paused) {
    paused = true;
    offset += Date.now();
    //document.querySelector('#loadingWeak').style.display = 'none'
    render()
  }
}

function stopStopwatch2(evt) {
  if (!paused) {
    paused = true;
    offset += Date.now();
    //document.querySelector('#loadingStrong').style.display = 'none'
    render2()
  }
}

function format(value, scale, modulo, padding) {
  value = Math.floor(value / scale) % modulo;
  return value.toString().padStart(padding, 0)
}

function updateTime() {
  var value = paused ? offset : Date.now() + offset;

  timer_milliseconds = format(value, 1, 1000, 3)
  timer_seconds = format(value, 1000, 60, 2)
  timer_minutes = format(value, 60000, 60, 2)
}

function render() {
  var value = paused ? offset : Date.now() + offset;

  timer_milliseconds = format(value, 1, 1000, 3)
  timer_seconds = format(value, 1000, 60, 2)
  timer_minutes = format(value, 60000, 60, 2)
  document.querySelector('#s_ms').textContent = format(value, 1, 1000, 3)
  document.querySelector('#s_seconds').textContent = format(value, 1000, 60, 2)
  document.querySelector('#s_minutes').textContent = format(value, 60000, 60, 2)
  document.querySelector('#timerWeak').style.display = 'block'
}

function render2() {
  var value = paused ? offset : Date.now() + offset;

  timer_milliseconds = format(value, 1, 1000, 3)
  timer_seconds = format(value, 1000, 60, 2)
  timer_minutes = format(value, 60000, 60, 2)
  document.querySelector('#s_ms2').textContent = format(value, 1, 1000, 3)
  document.querySelector('#s_seconds2').textContent = format(value, 1000, 60, 2)
  document.querySelector('#s_minutes2').textContent = format(value, 60000, 60, 2)
  document.querySelector('#timerStrong').style.display = 'block'
}

function changeGreen() {
  document.getElementById("s_ms").style.color = "green";
  document.getElementById("s_seconds").style.color = "green";
  document.getElementById("s_minutes").style.color = "green";
}

function changeGreen2() {
  document.getElementById("s_ms2").style.color = "green";
  document.getElementById("s_seconds2").style.color = "green";
  document.getElementById("s_minutes2").style.color = "green";
}

function changeRed() {
  document.getElementById("s_ms").style.color = "red";
  document.getElementById("s_seconds").style.color = "red";
  document.getElementById("s_minutes").style.color = "red";
}
function changeRed2() {
  document.getElementById("s_ms2").style.color = "red";
  document.getElementById("s_seconds2").style.color = "red";
  document.getElementById("s_minutes2").style.color = "red";
}

let weakbutton = document.getElementById("crackWeakPasswords");
let strongbutton = document.getElementById("crackStrongPasswords");

weakbutton.addEventListener("click", startCrackingByLoadingWeakGIF);
strongbutton.addEventListener("click", crackStrongPasswords);
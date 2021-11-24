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



function cycleThroughRecursion(currentHashingIndex, currentHashingPassword, currentHashedWeakPassword) {
  //let cycleThroughIndex = currentHashingIndex + 1
  if (currenthashedweakPassword == currentHashedWeakPassword) {
    return true
  }

  if (currentHashingIndex == currentHashingIndex.length) {
    return false
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
  const weakpasswords = ["123456", "123456789", "qwerty", "password", "12345", "qwerty123", "1q2w3e", "12345678", "111111", "1234567890"]
  var hashedPasswords = []
  for (let i = 0; i < weakpasswords.length; i++) {
    hashedPasswords.push(encrypt(weakpasswords[i]))
  }
  console.log("Stopwatch")
  startStopwatch()
  hashedPasswords.forEach(element => {
    //crackPassword(element)
  });
  sleep(1000)
  console.log("sleep")
  stopStopwatch()
  console.log("It took: " + timer_minutes + ":" + timer_seconds + ":" + timer_milliseconds)
  //alert("Done cracking!")


    // aaaa - aaab - aaac ... aaaz - aaba - aabb - aabc
    //'a' - run through all cycles
    //'aa' - run through all cycles of the first a while each iteration you loop through
    //the entirety of the second a
    //alert('Cracking weak passwords in progress...')
    //stopStopwatch()
    //alert("It took: " + timer_seconds)
}

function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

function crackStrongPasswords() {
  //var shasum = crypto.createHash('sha1')
  //shasum.update('foo')
  //alert(shasum.digest('bar'))
  const strongpasswords = ["jelly22fi$h", "SterlingGmail20.15", "d3ltagamm@", "!Lov3MyPiano", "&ebay.44"]
  alert('Cracking strong passwords in progress...')
  var hashedPasswords = []
  for (let i = 0; i < strongpasswords; i++) {
    hashedPasswords.push(encrypt(strongpasswords[i]))
  }

  startStopwatch2()
  hashedPasswords.forEach(element => {
    crackPassword(element)
  })
  stopStopwatch2()
}

function crackPassword(correctHashedPassword) {

  if (hashedMostCommonPassword.includes(correctHashedPassword)) {
    return true
  }

  let triedLetters = "    "
  let currentHashingLetterIndex = triedLetters.length - 1
  let currentCharASCII = 32
  while(1) {
    // hash here and compare the hashes with the current currentCharASCII
    while(currentCharASCII < 127) {
      if(currentHashingLetterIndex < triedLetters.length - 1 && currentCharASCII == 127) {
        if (cycleThroughRecursion(currentHashingLetterIndex, triedLetters, correctHashedPassword)) {
          //successful cracking!
          return true
        } else {
          //unsuccessful cracking... add another character and repeat the recursion
          triedLetters += " "
          currentCharASCII = 32
          currentHashingLetterIndex = triedLetters.length - 1
        }
      }
    }
  }
  return false
}

function encrypt(msg) {
  //let sha1 = require('sha1')
  //sha1(msg)
  //alert('sha1.toString.toUpperCase()')
  //return sha1.toString.toUpperCase()
 }

 let offset = 0,
   paused = true;

 function startStopwatch(evt) {
   document.querySelector('#loadingWeak').style.display = 'block'
   if (paused) {
     offset = 0
     paused = false;
     offset -= Date.now();
   }
 }

 function startStopwatch2(evt) {
   if (paused) {
     offset = 0
     paused = false;
     offset -= Date.now();
   }
   document.querySelector('#loadingStrong').style.display = 'block'
 }

function stopStopwatch(evt) {
   if (!paused) {
     paused = true;
     offset += Date.now();
     //document.querySelector('#loadingWeak').style.display = 'none'
     render2()
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

function render() {
  var value = paused ? offset : Date.now() + offset;

  timer_milliseconds = format(value, 1, 1000, 3)
  timer_seconds = format(value, 1000, 60, 2)
  timer_minutes = format(value, 60000, 60, 2)
  document.querySelector('#s_ms2').textContent = format(value, 1, 1000, 3);
  document.querySelector('#s_seconds2').textContent = format(value, 1000, 60, 2);
  document.querySelector('#s_minutes2').textContent = format(value, 60000, 60, 2);
  document.querySelector('#timerStrong').style.display = 'block'
}

function render2() {
  console.log("test")
  var value = paused ? offset : Date.now() + offset;

  timer_milliseconds = format(value, 1, 1000, 3)
  timer_seconds = format(value, 1000, 60, 2)
  timer_minutes = format(value, 60000, 60, 2)
  document.querySelector('#s_ms').textContent = format(value, 1, 1000, 3);
  document.querySelector('#s_seconds').textContent = format(value, 1000, 60, 2);
  document.querySelector('#s_minutes').textContent = format(value, 60000, 60, 2);
  document.querySelector('#timerWeak').style.display = 'block'
}

let weakbutton = document.getElementById("crackWeakPasswords");
let strongbutton = document.getElementById("crackStrongPasswords");

weakbutton.addEventListener("click", crackWeakPasswords);
strongbutton.addEventListener("click", crackStrongPasswords);

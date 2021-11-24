import * from './index.js';

let weakbutton = document.getElementById("crackWeakPasswords");
let strongbutton = document.getElementById("crackStrongPasswords");

weakbutton.addEventListener("click", crackWeakPasswords);
strongbutton.addEventListener("click", crackStrongPasswords);

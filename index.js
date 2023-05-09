const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R",
"S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o",
"p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
"~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";"
,"<",">",".","?","/"];

let password1Box = document.getElementById("password-1");
let password2Box = document.getElementById("password-2");

function random_num() {
    return Math.floor(Math.random() * 91);
}

function generatePasswords() {
    let password = "";

    for(let i = 0; i < 16; i++) {
        password += characters[random_num()];
    }
    return password
}

function fillInPassword() {
    let password1 = generatePasswords();
    let password2 = generatePasswords();

    password1Box.textContent = password1;
    password2Box.textContent = password2;
}
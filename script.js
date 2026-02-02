const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"];
let generatePasswordBtn = document.querySelector(".generate-ps-btn")
let passwordOptionBtn = document.querySelectorAll('.password-option-btn')
let psOne = document.getElementById("ps-one")
let psTwo = document.getElementById("ps-two")

let password = ""


function generateRandomChar() {
    let random_Char = Math.floor(Math.random() * characters.length)
    return characters[random_Char]
}

function generateRandomPassword() {
    password = ""

    for (let i = 0; i < 16; i++) {
        password += generateRandomChar()
    }


    return password


}


generatePasswordBtn.addEventListener("click", function () {
    for (let i = 0; i < passwordOptionBtn.length; i++) {
        passwordOptionBtn[i].textContent = generateRandomPassword()
    }
})

psOne.addEventListener("click", function () {
    var copyTextBtn = psOne.textContent;
    navigator.clipboard.writeText(copyTextBtn).then(function () {
        alert("Password copied")
    })



})


psTwo.addEventListener("click", function () {
    var copyTextBtn = psTwo.textContent;
    navigator.clipboard.writeText(copyTextBtn).then(function () {
        alert("Password copied")
    })



})







/*for (let i = 0; i < passwordOptionBtn.length; i++) {




    passwordOptionBtn[i].addEventListener("click", function () {
        for (let i = 0; i < passwordOptionBtn.length; i++) {
            console.log(passwordOptionBtn[i].textContent)
        }



    })
}*/





const input_box = document.querySelector(".input_box"),
    inputField = input_box.querySelector("input"),
    generatePasswordBtn = input_box.querySelector(".generate"),
    copyBtn = input_box.querySelector(".copy");


do {

    var passwordLength = window.prompt("Enter password length (minimum lenght 12)")
}
while (!passwordLength === '' || +passwordLength < 12 || !passwordLength.match(/^[0-9]+$/))  //for numbers 0-9

generatePassword(passwordLength, numbers, specialCharacters, alphabets)


generatePasswordBtn.addEventListener("click", function () {

    generatePassword(passwordLength, numbers, specialCharacters, alphabets)

})

function generatePassword(passwordLength, numbers, specialCharacters, alphabets) {

    let passStr = ""
    let dataArray = [...numbers, ...specialCharacters, ...alphabets]

    let shuffledDataArray = dataArray.sort(() =>
        Math.random() - 0.5) // suffle the data array

    for (let i = 0; i < passwordLength; i++) {

        passStr += shuffledDataArray[Math.floor(Math.random() * shuffledDataArray.length)]

    }

    inputField.value = passStr
    copyBtn.classList.add("active")
    checkPasswordStrength(inputField.value)

}




function checkPasswordStrength(passwordString) {
    if (passwordString.match(regexComplete) && passwordString.length >= 12) {
        document.body.style.background = "linear-gradient(145deg,#64dd17,#b2ff59)";
    }
    else if (passwordString.match(regexFormAlphabetsAndNumbers) && !passwordString.match(regexComplete)) {

        document.body.style.background = "linear-gradient(145deg,#ffd600,#ffee58)";

    }
    else {

        document.body.style.background = "linear-gradient(145deg,#d50000,#ef5350)";
    }
}





inputField.addEventListener("input", function () {
    checkPasswordStrength(inputField.value)

    if (inputField.value === '' || inputField.value.length < 12) {
        copyBtn.classList.remove("active")
    } else {
        copyBtn.classList.add("active")
    }
})



const copyToClipboard = (str) => {
    if (navigator && navigator.clipboard && navigator.clipboard.writeText) {
        return navigator.clipboard.writeText(str)
    } else {
        return false;
    }
}


copyBtn.addEventListener("click", function () {
    if (copyToClipboard(inputField.value)) {
        alert("Password copied!!!")
    }
})
const charactersArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const alphabetsArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

const numbersArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const symbolsArray = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?", "/"];


const passwordLength = document.querySelector("#pw-length");
const addNumbersCheckbox = document.querySelector("#numbers");
const addSymbolsCheckbox = document.querySelector("#symbols");

const generateBtn = document.querySelector(".generate");
const passwordFields = document.querySelectorAll(".pw-container input");

// const addNumbersLabel= document.querySelector(".numbers-container label");
// const addSymbolsLabel= document.querySelector(".symbols-container label");
const checkboxLabels = document.querySelectorAll(".checkbox-label"); 


function randomCharacter() {
    // Creating the characters array to choose a random character from
    let characters = [...alphabetsArray];
    if (addNumbersCheckbox.checked == true) {
        if (addSymbolsCheckbox.checked == true) {
            characters = characters.concat(numbersArray).concat(symbolsArray);
        }
        else {
            characters = characters.concat(numbersArray);
        }
    }
    else {
        if (addSymbolsCheckbox.checked == true) {
            characters = characters.concat(symbolsArray);
        }
    }

    const randNum = Math.floor(Math.random() * characters.length);
    return characters[randNum];
}

function passwordGenerator(len = 15) {
    let password = "";
    for (let i = 0; i < len; i++) {
        password += randomCharacter();
    }
    return password;
}

generateBtn.addEventListener("click", () => {
    if(passwordLength.value == ""){ //Use default value
        passwordFields[0].value = passwordGenerator();
        passwordFields[1].value = passwordGenerator(); 
    }
    else{
        passwordFields[0].value = passwordGenerator(passwordLength.value);
        passwordFields[1].value = passwordGenerator(passwordLength.value);
    }

})


checkboxLabels.forEach(box =>{
    box.addEventListener("click", ()=>{
        const tickMark= box.children[0].children[0];
        if(window.getComputedStyle(tickMark).getPropertyValue("display") == "none"){
            tickMark.style.display= "block";
        }else{
            tickMark.style.display= "none";
        }

    })
})

/*
addNumbersLabel.addEventListener("click", ()=>{
    // console.dir(addNumbersLabel.children[0].children[0]);
    const tickMark= addNumbersLabel.children[0].children[0];

    // console.log(window.getComputedStyle(tickMark).getPropertyValue("display"));
    if(window.getComputedStyle(tickMark).getPropertyValue("display") == "none"){
        tickMark.style.display= "block";
    }else{
        tickMark.style.display= "none";
    }
})

addSymbolsLabel.addEventListener("click", ()=>{
    // console.dir(addSymbolsLabel.children[0].children[0]);
    const tickMark= addSymbolsLabel.children[0].children[0];
  
    if(window.getComputedStyle(tickMark).getPropertyValue("display") == "none"){
        tickMark.style.display= "block";
    }else{
        tickMark.style.display= "none";
    }
})
*/    

passwordFields.forEach(field => {
    field.addEventListener("click", ()=>{
      // Select the text inside the input
      field.select();
      field.setSelectionRange(0, 99999); // For mobile devices

      // Copy the selected text to the clipboard
      navigator.clipboard.writeText(field.value)
        .then(() => {
          alert("Text copied to clipboard: " + field.value);
        })
        .catch((err) => {
          alert("Failed to copy text: " + err);
        });
    })
})


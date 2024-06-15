//make the password readOnly
let myInput = document.querySelector('input');
myInput.addEventListener("keydown", function(event) {
    event.preventDefault();
});

//print the value of slider in P tag
let range = document.querySelector('#sliderValue');

let field = document.querySelector('.field'); //input field is declared here

range.addEventListener('input', function(event) {
    field.innerHTML = event.target.value;   
    generatePassword();
})

//declaration of all the inputs needed
const passwordInput = document.querySelector('.passwordGenerator');
const copyButton = document.querySelector('.copybutton');
const checkbox = document.querySelector('.checkbox-input'); 

// Set checkboxes as checked by default
document.getElementById('numbers').checked = true;
document.getElementById('letters').checked = true;
document.getElementById('mixed-case').checked = true;
document.getElementById('punctuation').checked = true;

// function to generate password
const generatePassword = () => {
    let password = ''
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const mixedCase = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const number = '1234567890';
    const punctuation ="!@#$%^&*()_+~`|}{[]:;?><,./-=";


    let lengthOf = parseInt(range.value); //Length from slider value
    const options = {
        inNumber: document.querySelector('#numbers').checked,
        inLetter: document.querySelector('#letters').checked,
        inMixedCase: document.querySelector('#mixed-case').checked,
        inPunctuation: document.querySelector('#punctuation').checked
    }
    let charset=''
    if (options.inNumber) charset+=number;
    if (options.inLetter) charset+=letters;
    if (options.inMixedCase) charset+=mixedCase;
    if (options.inPunctuation) charset+=punctuation;

    for (let i = 0; i<lengthOf; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length); //2 * 20 = 40
        console.log(randomIndex, charset.length);
        password+=charset[randomIndex]  
    }
    passwordInput.value = password


};

range.addEventListener('input', generatePassword);
//generatePassword();

copyButton.addEventListener('click', function() {
    passwordInput.select();
    document.execCommand('copy');
    alert('password copied');
})
import { Component } from '@angular/core';
import { ICodeStructure, SharedCodeComponent } from '../../../../shared-components/shared-code/shared-code.component';

@Component({
    selector: 'app-password-generator',
    imports: [SharedCodeComponent],
    templateUrl: './password-generator.component.html',
    styleUrl: './password-generator.component.scss',
})
export class PasswordGeneratorComponent {
    projectName: string = 'Password Generator – Create Strong & Secure Passwords Instantly';
    projectDescription: string = `A modern and interactive password generator built with HTML, CSS, and JavaScript. Easily customize your password with adjustable length and toggle options for uppercase letters, lowercase letters, numbers, and symbols. With a sleek UI and instant copy-to-clipboard functionality, this tool ensures you generate secure passwords tailored to your needs. Ideal for improving account security with just one click!`;
    projectDate: string = 'Last updated: May 2025';
    projectVersion: string = 'v1.0.0';
    projectTags: string[] = ['Web Development', 'HTML', 'CSS', 'JS'];
    projectVideSrc: string =
        './../../../../../assets/video-samples/password generator.mp4';

    HTMLCodeSnippets: ICodeStructure[] = [
        {
            code: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Password Generator</title>
    <link href="https://cdn.jsdelivr.net/npm/remixicon@4.3.0/fonts/remixicon.css" rel="stylesheet" />
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <div class="password-box">
            <h2 class="heading">Password Generator</h2>
            <div class="box">
                <input type="text" placeholder="Password Generator" class="result-input">
                <button type="button" class="copy-btn">
                    <i class="ri-file-copy-fill"></i>
                </button>
            </div>
            <h4 class="pass-length">Password Length</h4>
            <div class="range-box">
                <input type="range" min="1" max="40" value="10" class="range-btn">
                <p class="range-num">10</p>
            </div>
            <div class="include-input-box">
                <input type="checkbox" name="uppercase" class="checkbox-input" checked id="uppercase">
                <label for="uppercase">Include Uppercase Letters</label>
            </div>
            <div class="include-input-box">
                <input type="checkbox" name="lowercase" class="checkbox-input" id="lowercase">
                <label for="lowercase">Include Lowercase Letters</label>
            </div>
            <div class="include-input-box">
                <input type="checkbox" name="numbers" class="checkbox-input" id="numbers">
                <label for="numbers">Include Numbers</label>
            </div>
            <div class="include-input-box">
                <input type="checkbox" name="symbols" class="checkbox-input" id="symbols">
                <label for="symbols">Include Symbols</label>
            </div>
            <button class="generate-btn">Generate Password</button>
        </div>
        <div class="alert">
            <div class="popup">
                <p>Please Select </p>
            </div>
        </div>
    </div>
    <script src="main.js"></script>
</body>
</html>
    `,
            codeTitle: 'index.html',
        },
    ];

    CSSCodeSnippets: ICodeStructure[] = [
        {
            code: `
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
* {
    font-family: "Poppins", sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.container {
    background-color: #eef0f5;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    padding: 10px;
}

.password-box {
    padding: 20px;
    background-color: #1c2136;
    color: #fff;
    border-radius: 20px;
    max-width: 400px;
    width: 100%;
}

.heading {
    border-left: 6px solid #5d33f8;
    padding-left: 10px;
    margin: 10px 0;
    margin-bottom: 30px;
}

.box {
    display: flex;
    align-items: center;
    border: 2px solid #5d33f8;
    height: 50px;
    padding: 0 15px;
    border-radius: 6px;

    .result-input {
        width: 100%;
        background-color: transparent;
        border: none;
        color: #fff;
        outline: none;
        font-size: 1rem;
    }

    .copy-btn {
        background-color: transparent;
        outline: none;
        border: none;
        color: #fff;
        cursor: pointer;
        font-size: 1rem;
    }
}

.pass-length {
    margin-block: 20px 10px;
}

.range-box {
    display: flex;
    align-items: center;
    margin-block: 10px 20px;

    .range-btn {
        width: 100%;
        height: 2px;
        cursor: pointer;
    }

    .range-num {
        margin-left: 10px;
    }
}

.include-input-box {
    display: flex;
    align-items: center;
    transition: 0.3s linear;

    .checkbox-input {
        width: 15px;
        height: 15px;
        margin: 10px 0;
        margin-right: 10px;;
    }
}

.generate-btn {
    width: 100%;
    height: 40px;
    background-color: #5d33f8;
    color: #fff;
    font-size: 16px;
    border: none;
    outline: none;
    border-radius: 6px;
    margin-top: 20px;
    cursor: pointer;
}

.alert {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.8);
    display: none;
    justify-content: center;
    align-items: center;
    height: 100vh;

    &.active {
        display: flex;
    }

    .popup {
        width: 400px;
        height: 200px;
        background-color: #fff;
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 20px;

        p {
            background-color: #1c2136;
            padding: 20px;
            border-radius: 5px;
            color: #fff;
            font-weight: bold;
            font-size: 1.1rem;
        }
    }
}
    `,
            codeTitle: 'style.css',
        },
    ];

    JSCodeSnippets: ICodeStructure[] = [
        {
            code: `
let rangeBtn = document.querySelector('.range-btn');
let rangeNum = document.querySelector(".range-num");
let resultInput = document.querySelector('.result-input');
let copyBtn = document.querySelector('.copy-btn');
let generateBtn = document.querySelector('.generate-btn');
let alertBx = document.querySelector('.alert');
let alertContent = document.querySelector('.alert p');

let uppercaseCheckbox = document.querySelector('#uppercase');
let lowercaseCheckbox = document.querySelector('#lowercase');
let numbersCheckbox = document.querySelector('#numbers');
let symbolsCheckbox = document.querySelector('#symbols');

let uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let lowercase = 'abcdefghijklmnopqrstuvwxyz';
let numbers = '1234567890';
let symbols = '!@#$%^&*()_+=';

rangeBtn.addEventListener('input', (event) => {
    rangeNum.innerHTML = event.target.value;
});

generateBtn.addEventListener('click', () => {
    let alphabets = '';
    let generatedPassword = resultInput.value;

    alphabets += uppercaseCheckbox.checked ? uppercase : '';
    alphabets += lowercaseCheckbox.checked ? lowercase : '';
    alphabets += numbersCheckbox.checked ? numbers : '';
    alphabets += symbolsCheckbox.checked ? symbols : '';

    if (alphabets === '') {
        alertBx.classList.add('active');
        alertContent.innerHTML = 'Please Select One Checkbox';
    } else {
        do {
            generatedPassword = generatePassword(alphabets, rangeBtn.value, generatedPassword.length);
        } while (!isValidPassword(generatedPassword));

        resultInput.value = generatedPassword;
        logCheckedParents();
    }
});

document.addEventListener('click', (e) => {
    if (e.target.classList.contains('alert')) {
        alertBx.classList.remove('active');
    }
});

resultInput.addEventListener('input', () => {
    updateCheckboxesAndStyles(resultInput.value);
});

function generatePassword(alphabets, length) {
    let password = '';
    for (let i = 0; i < length; i++) {
        let randomIndex = Math.floor(Math.random() * alphabets.length);
        password += alphabets[randomIndex];
    }
    return password;
}

function isValidPassword(password) {
    let hasUppercase = !uppercaseCheckbox.checked || /[A-Z]/.test(password);
    let hasLowercase = !lowercaseCheckbox.checked || /[a-z]/.test(password);
    let hasNumbers = !numbersCheckbox.checked || /[0-9]/.test(password);
    let hasSymbols = !symbolsCheckbox.checked || /[!@#$%^&*()_=+]/.test(password);

    return hasUppercase && hasLowercase && hasNumbers && hasSymbols;
}

function logCheckedParents() {
    let checkboxes = [uppercaseCheckbox, lowercaseCheckbox, numbersCheckbox, symbolsCheckbox];

    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            checkbox.parentElement.style.textDecoration = 'line-through';
            checkbox.nextElementSibling.style.color = '#f00';
        } else {
            checkbox.parentElement.style.textDecoration = 'none';
            checkbox.nextElementSibling.style.color = '#fff';
        }
    });
}

function updateCheckboxesAndStyles(value) {
    let checkboxes = [
        { checkbox: uppercaseCheckbox, regex: /[A-Z]/ },
        { checkbox: lowercaseCheckbox, regex: /[a-z]/ },
        { checkbox: numbersCheckbox, regex: /[0-9]/ },
        { checkbox: symbolsCheckbox, regex: /[!@#$%^&*()_=+]/ }
    ];

    checkboxes.forEach(item => {
        if (item.regex.test(value)) {
            item.checkbox.checked = true;
            item.checkbox.parentElement.style.textDecoration = 'line-through';
            item.checkbox.nextElementSibling.style.color = '#f00';
        } else {
            item.checkbox.checked = false;
            item.checkbox.parentElement.style.textDecoration = 'none';
            item.checkbox.nextElementSibling.style.color = 'initial';
        }
    });
}

copyBtn.addEventListener('click', () => {
    if (resultInput.value.length == 0) {
        alertBx.classList.add('active');
        alertContent.innerHTML = 'Please click on Generate Password Button';
    } else {
        resultInput.select();
        resultInput.setSelectionRange(0, 99999);
        navigator.clipboard.writeText(resultInput.value);

        copyBtn.innerHTML = '<i class="ri-check-line"></i>';
        setTimeout(() => {
            copyBtn.innerHTML = '<i class="ri-file-copy-fill"></i>';
        }, 1500);
    }
});

    `,
            codeTitle: 'main.js',
        },
    ];

    zipFile: string = 'assets/zip-files/password generator v1.rar';
}

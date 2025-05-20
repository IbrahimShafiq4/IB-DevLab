import { Component } from '@angular/core';
import { SharedCodeComponent } from "../../../../shared-components/shared-code/shared-code.component";

interface ICodeStructure {
    codeTitle: string;
    code: string
}

@Component({
    selector: 'app-tabs',
    imports: [SharedCodeComponent],
    templateUrl: './tabs.component.html',
    styleUrl: './tabs.component.scss'
})
export class TabsComponent {

    projectName: string = 'Tab Navigation System';
    projectDescription: string = `A responsive tab navigation component built with vanilla JavaScript that smoothly transitions between
                content sections with animated underline effect.`;
    projectDate: string = 'Last updated: May 2025';
    projectVersion: string = 'v1.0.0';
    projectTags: string[] = ['Web Development', 'HTML', 'CSS', 'JS'];
    projectVideSrc: string = './../../../../../assets/video-samples/Tabs.mp4';

    HTMLCodeSnippets: ICodeStructure[] = [
        {
            code: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tabs</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <div class="tab_box">
            <button class="tab_btn active">Home</button>
            <button class="tab_btn">About</button>
            <button class="tab_btn">Blogs</button>
            <button class="tab_btn">Contact us</button>
            <div class="line"></div>
        </div>
        <div class="content_box">
            <div class="content active">
                <h2>Home</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi culpa minus eveniet obcaecati,
                    exercitationem eos labore inventore adipisci laborum facere asperiores soluta nulla ut corporis,
                    consectetur praesentium! Dicta, quidem aperiam.
                </p>
            </div>
            <div class="content">
                <h2>About</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi culpa minus eveniet obcaecati,
                    exercitationem eos labore
                </p>
            </div>
            <div class="content">
                <h2>Blogs</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi culpa minus eveniet obcaecati,
                    exercitationem eos labore inventore adipisci laborum facere asperiores soluta nulla ut corporis,
                    consectetur praesentium! Dicta, quidem aperiam.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi culpa minus eveniet obcaecati,
                    exercitationem eos labore inventore adipisci laborum facere asperiores soluta nulla ut corporis,
                    consectetur praesentium! Dicta, quidem aperiam.
                </p>
            </div>
            <div class="content">
                <h2>Contact us</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi culpa minus eveniet obcaecati,
                    exercitationem eos labore inventore adipisci laborum facere asperiores soluta nulla ut corporis,
                    consectetur praesentium! Dicta, quidem aperiam.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi culpa minus eveniet obcaecati,
                    exercitationem eos labore inventore adipisci laborum facere asperiores soluta nulla ut corporis,
                    consectetur praesentium! Dicta, quidem aperiam.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi culpa minus eveniet obcaecati,
                    exercitationem eos labore inventore adipisci laborum facere asperiores soluta nulla ut corporis,
                    consectetur praesentium! Dicta, quidem aperiam.
                </p>
            </div>
        </div>
    </div>
    <script src="main.js"></script>
</body>
</html>

    `,
            codeTitle: 'index.html'
        }
    ];

    CSSCodeSnippets: ICodeStructure[] = [
        {
            code: `
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background-color: #deeeff;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    font-family: "Poppins", sans-serif;
}

.container {
    width: 600px;
    background-color: #fff;
    padding: 30px;
    box-shadow: 0 2px 16px rgba(0, 0, 0, 0.1);
    border-radius: 20px;
}

.tab_box {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-bottom: 2px solid rgb(229, 229, 229);
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 10px;
    position: relative;

    .tab_btn {
        font-size: inherit;
        font-weight: inherit;
        color: #919191;
        background-color: transparent;
        border: none;
        outline: none;
        padding: 18px;
        cursor: pointer;

        &.active {
            color: #7460ff
        }
    }

    .line {
        position: absolute;
        top: calc(100% - 1px);
        left: 17px;
        width: 90px;
        height: 5px;
        background-color: #7460ff;
        transition: all 0.3s linear;
    }
}

.content_box {
    padding: 20px;
    .content {
        transition: 0.3s linear;
        display: none;
        margin: 20px 0;
        animation: moving 0.5s ease;
        &.active {
            display: block;
        }
        h2 {
            margin-bottom: 10px
        }
    }
}

@keyframes moving {
    from { transform: translateX(50px); opacity: 0; };
    to { transform: translateX(0); opacity: 1; }
}
    `,
            codeTitle: 'style.css'
        }
    ];

    JSCodeSnippets: ICodeStructure[] = [
        {
            code: `
// Select all elements with the class 'tab_btn' and store them in the 'tabs' variable
const tabs = document.querySelectorAll('.tab_btn');

// Select all elements with the class 'content' and store them in the 'all_content' variable
const all_content = document.querySelectorAll('.content');

// Iterate over each tab element and attach a click event listener
tabs.forEach((tab, index) => {
    tab.addEventListener('click', (e) => {
        // When a tab is clicked, remove the 'active' class from all tabs
        removeActiveClass();
        // Add the 'active' class to the clicked tab
        tab.classList.add('active');
        // Adjust the width and position of the line element based on the clicked tab
        lineWidth(e);
        // Remove the 'active' class from all content elements
        displayAllContent();
        // Add the 'active' class to the content element that corresponds to the clicked tab
        showContent(index);
    });
});

// Function to remove the 'active' class from all tabs
function removeActiveClass() {
    tabs.forEach((tab) => {
        tab.classList.remove('active');
    });
}

// Function to adjust the width and position of the line element based on the clicked tab
function lineWidth(e) {
    let line = document.querySelector('.line');
    line.style.width = e.target.offsetWidth + 'px';
    line.style.left = e.target.offsetLeft + 'px';
}

// Function to remove the 'active' class from all content elements
function displayAllContent() {
    all_content.forEach((content) => content.classList.remove('active'));
}

// Function to add the 'active' class to the content element that corresponds to the clicked tab
function showContent(index) {
    all_content[index].classList.add('active');
}
    `,
            codeTitle: 'main.js'
        }
    ];

    zipFile: string = 'assets/zip-files/tabs.rar';
}

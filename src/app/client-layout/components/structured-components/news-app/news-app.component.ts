import { Component } from '@angular/core';
import { ICodeStructure, SharedCodeComponent } from '../../../../shared-components/shared-code/shared-code.component';

@Component({
  selector: 'app-news-app',
  imports: [SharedCodeComponent],
  templateUrl: './news-app.component.html',
  styleUrl: './news-app.component.scss'
})
export class NewsAppComponent {
  projectName: string = '📰 NEWS APP';
  projectDescription: string = `A news application built with modern frontend technologies. It fetches real-time news from an API and displays it in a clean and responsive layout. Key features include categorized news sections, search functionality, and embedded videos. Ideal for learning API integration and UI design.`;
  projectDate: string = 'Last updated: May 2025';
  projectVersion: string = 'v1.0.0';
  projectTags: string[] = ['Web Development', 'HTML', 'CSS', 'JS', 'API'];
  projectVideoOnYoutube: string = 'https://www.youtube.com/watch?v=9IXZ_qEvF-w&list=PL7S9lp7CuORbIPgqN7TrnlaboZ_Mos9TD';

  HTMLCodeSnippets: ICodeStructure[] = [
    {
      code: `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Latest News</title>
    <link rel="stylesheet" href="./styles/style.css">
</head>

<body>
    <div class="hamburger-menu">
        <span class="hamburger-menu-span"></span>
        <span class="hamburger-menu-span"></span>
        <span class="hamburger-menu-span"></span>
    </div>

    <div class="news-container">
        <h1>Latest News Application</h1>
        <h3 class="news-header">News of Business</h3>
        <div class="loading-animation">
            <div class="spinner"></div>
        </div>
        <div class="news-articles"></div>
    </div>

    <aside>
        <div class="categories-list">
            <div class="list-header">
                <h5>Categories</h5>
            </div>
            <div class="list-details"></div>
        </div>
    </aside>

    <script type="module" src="./scripts/main.js"></script>
</body>

</html>
    `,
      codeTitle: 'index.html'
    }
  ];

  CSSCodeSnippets: ICodeStructure[] = [
    {
      code: `
:root {
    --primary-color: #ff6b6b;
    --secondary-color: #5e5757;
    --text-dark: #2e2e2e;
    --text-light: #ffffff;
    --bg-light: #ffffff;
    --bg-dark: #202020;
    --shadow: 0px 1px 10px rgba(0, 0, 0, 0.5);
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

body {
    perspective: 1200px;
    background-color: var(--bg-dark);
    min-height: 100vh;
}

.news-container {
    background-color: var(--bg-light);
    background-image: repeating-linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0.13),
            rgba(0, 0, 0, 0.13) 1px,
            transparent 1px,
            transparent 20px
        ),
        repeating-linear-gradient(
            to right,
            rgba(0, 0, 0, 0.13),
            rgba(0, 0, 0, 0.13) 1px,
            transparent 1px,
            transparent 20px
        );
    background-size: 20px 20px;
    transition: transform 0.3s ease;
    position: relative;
    z-index: 2;
    min-height: 100vh;
}

.news-container--active {
    transform: rotateY(45deg) scale(0.6);
}

h1 {
    color: var(--text-dark);
    background-color: var(--bg-light);
    padding: 20px;
    text-align: center;
    box-shadow: 0 2px 1px rgba(0, 0, 0, 0.5);
}

/* Loading Animation */
.loading-animation {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    min-height: 200px;
}

.spinner {
    width: 50px;
    height: 50px;
    border: 5px solid rgba(0, 0, 0, 0.1);
    border-radius: 50%;
    border-top-color: var(--primary-color);
    animation: spin 1s ease-in-out infinite;
}

@keyframes spin {
    to {
        transform: rotate(360deg);
    }
}

.loading-animation.hidden {
    display: none;
}

/* Hamburger Menu */
.hamburger-menu {
    position: fixed;
    top: 10px;
    left: 10px;
    display: flex;
    flex-direction: column;
    gap: 4px;
    width: max-content;
    overflow: hidden;
    justify-content: center;
    cursor: pointer;
    z-index: 3;
}

.hamburger-menu span {
    background-color: var(--text-dark);
    width: 20px;
    height: 3px;
    transition: all 0.3s ease;
}

.hamburger-menu span:nth-child(2) {
    background-color: transparent;
    position: relative;
}

.hamburger-menu span:nth-child(2)::before,
.hamburger-menu span:nth-child(2)::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 25%;
    height: 100%;
    background-color: var(--text-dark);
    transition: all 0.3s ease;
}

.hamburger-menu span:nth-child(2)::before {
    left: 25%;
}

.hamburger-menu span:nth-child(2)::after {
    left: 25%;
    transform: translateX(100%);
}

.hamburger-menu--active span,
.hamburger-menu--active span::before,
.hamburger-menu--active span::after {
    background-color: var(--bg-light);
}

.hamburger-menu--active span:nth-child(1) {
    transform: translateY(7px) rotate(45deg);
}

.hamburger-menu--active span:nth-child(2)::before {
    left: 0%;
    transform: translateX(-100%);
}

.hamburger-menu--active span:nth-child(2)::after {
    left: 50%;
    transform: translateX(200%);
}

.hamburger-menu--active span:nth-child(3) {
    transform: translateY(-7px) rotate(-45deg);
}

/* Aside Menu */
aside {
    position: fixed;
    top: 50%;
    right: 50px;
    transform: translateY(-50%) rotateY(-118deg) scale(0.8);
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 20px;
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 5px;
    backdrop-filter: blur(2px);
    z-index: 1;
    transition: transform 0.3s ease;
}

aside.menu--showed {
    transform: translateY(-50%) rotateY(-45deg) scale(0.8);
}

aside > div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

aside h5 {
    font-size: 1rem;
    color: var(--text-light);
    text-align: center;
    background-color: var(--text-dark);
    padding: 5px;
    border-radius: 5px;
}

.list-details {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.list-details span {
    color: var(--text-light);
    position: relative;
    transition: all 0.3s ease;
    padding: 2px;
    width: max-content;
    cursor: pointer;
}

.list-details span::first-letter {
    background-color: var(--primary-color);
    border-radius: 5px;
}

.list-details span::before {
    content: "";
    position: absolute;
    top: 0;
    left: 2px;
    height: 100%;
    width: 0%;
    background-color: var(--primary-color);
    border-radius: 5px;
    z-index: -1;
    transition: width 0.3s ease;
}

.list-details span:hover::first-letter {
    background-color: transparent;
}

.list-details span:hover::before {
    width: 100%;
    pointer-events: none;
}

.list-details span.active--filtration::before {
    width: 100%;
    pointer-events: none;
}

/* News Content */
.news-header {
    font-size: 2rem;
    color: var(--text-dark);
    margin: 20px auto;
    text-align: center;
}

.news-articles {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1.5rem;
    padding: 1rem;
}

.article-div {
    border-radius: 5px;
    box-shadow: var(--shadow);
    overflow: hidden;
    background-color: var(--bg-light);
    transition: transform 0.3s ease;
}

.article-div:hover {
    transform: translateY(-5px);
}

.article-div figure {
    width: 100%;
    margin: 0;
}

.article-div figure img {
    width: 100%;
    aspect-ratio: 16 / 9;
    object-fit: cover;
    display: block;
}

.article-content {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
}

.article-div h5 {
    color: var(--text-dark);
    font-size: 1.1rem;
}

.article-div p {
    color: var(--text-dark);
    font-size: 0.9rem;
    line-height: 1.4;
}

.article-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 0.5rem;
}

.article-footer a {
    color: var(--primary-color);
    font-size: 0.85rem;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s ease;
}

.article-footer a:hover {
    color: #ff3b3b;
}

.article-footer p {
    font-size: 0.8rem;
    color: #666;
}
    `,
      codeTitle: 'style.css'
    }
  ];

  JSCodeSnippets: ICodeStructure[] = [
    {
      code: `
export const CONFIG = {
    API_KEY: 'e990c9bc6e654be2a9ee1e00147fd083',
    DEFAULT_IMAGE: './../images/loading-img.webp',
    PAGE_SIZE: 10,
    CATEGORIES: [
        "business",
        "entertainment",
        "general",
        "health",
        "science",
        "sports",
        "technology",
    ],
    DEFAULT_SETTINGS: {
        lang: 'en',
        country: 'us',
        category: 'business'
    }
};
    `,
      codeTitle: 'CONFIG.js'
    },
    {
      code: `
import { CONFIG } from './config.js';

export class NewsAPI {
    constructor() {
        this.settings = { ...CONFIG.DEFAULT_SETTINGS };
    }

    async fetchNews() {
        try {
            const url = this.buildURL();
            const response = await fetch(url);

            if (!response.ok) {
                throw new Error(HTTP error! status: \${response.status});
            }

            return await response.json();
        } catch (error) {
            console.error("Error fetching news:", error);
            throw error;
        }
    }

    buildURL() {
        const { country, category } = this.settings;
        return https://newsapi.org/v2/top-headlines?country=\${country}&category=\${category}&apiKey=\${CONFIG.API_KEY}&pageSize=\${CONFIG.PAGE_SIZE};
    }

    updateSettings(newSettings) {
        this.settings = { ...this.settings, ...newSettings };
    }

    getCurrentSettings() {
        return { ...this.settings };
    }
}
    `,
      codeTitle: 'API.js'
    },
{
  code: `
import { CONFIG } from './config.js';

export class NewsUI {
    constructor() {
        this.domElements = {
            newsContainer: document.querySelector('.news-container'),
            hamburgerMenu: document.querySelector('.hamburger-menu'),
            newsHeader: document.querySelector('.news-header'),
            newsArticles: document.querySelector('.news-articles'),
            aside: document.querySelector('aside'),
            categoriesList: document.querySelector('.categories-list .list-details'),
            languagesList: document.querySelector('.languages-list .list-details'),
            loadingAnimation: document.querySelector('.loading-animation')
        };
    }

    initEventListeners(onCategoryChange) {
        this.domElements.hamburgerMenu.addEventListener("click", this.handleHamburgerClicked.bind(this));

        this.setAsideCategories(onCategoryChange);
    }

    handleHamburgerClicked() {
        this.domElements.hamburgerMenu.classList.toggle('hamburger-menu--active');
        this.domElements.newsContainer.classList.toggle('news-container--active');
        this.domElements.aside.classList.toggle('menu--showed');
    }

    setAsideCategories(onClick) {
        this.domElements.categoriesList.innerHTML = '';

        CONFIG.CATEGORIES.forEach((category) => {
            const catElement = document.createElement('span');
            catElement.textContent = category;

            if (category === CONFIG.DEFAULT_SETTINGS.category) {
                catElement.classList.add('active--filtration');
            }

            catElement.addEventListener('click', () => {
                this.updateActiveFilter(this.domElements.categoriesList, catElement);
                onClick(category);
            });

            this.domElements.categoriesList.appendChild(catElement);
        });
    }

    updateActiveFilter(container, activeElement) {
        container.querySelectorAll('span').forEach(span => {
            span.classList.remove('active--filtration');
        });
        activeElement.classList.add('active--filtration');
    }

    async displayNews(articles) {
        this.showLoading();
        this.domElements.newsArticles.innerHTML = '';

        if (!articles || articles.length === 0) {
            this.domElements.newsArticles.innerHTML = '<p class="no-articles">No articles found</p>';
            this.hideLoading();
            return;
        }

        const articleElements = await Promise.all(
            articles.map(article => this.createArticleElement(article))
        );

        articleElements.forEach(element => {
            if (element) this.domElements.newsArticles.appendChild(element);
        });

        this.hideLoading();
    }

    async createArticleElement(article) {
        const articleDiv = document.createElement('div');
        articleDiv.className = 'article-div';

        const imageUrl = await this.handleImageLoading(article.urlToImage);

        articleDiv.innerHTML = \`
            <figure>
                <img src="\${imageUrl}" alt="\${article.title || 'News image'}" loading="lazy">
            </figure>
            <div class="article-content">
                <h5>\${article.author || 'Unknown author'}</h5>
                <p>\${article.description || article.content || 'No description available for this article.'}</p>
                <div class="article-footer">
                    <a href="\${article.url}" target="_blank" rel="noopener noreferrer">Read more</a>
                    <p>\${article.source?.name || 'Unknown source'}</p>
                </div>
            </div>
        \`;

        return articleDiv;
    }

    async handleImageLoading(imageUrl) {
        return new Promise((resolve) => {
            if (!imageUrl) {
                resolve(CONFIG.DEFAULT_IMAGE);
                return;
            }

            const img = new Image();
            img.src = imageUrl;

            img.onload = () => resolve(imageUrl);
            img.onerror = () => resolve(CONFIG.DEFAULT_IMAGE);
        });
    }

    updateHeader(text) {
        this.domElements.newsHeader.textContent = text;
    }

    showLoading() {
        this.domElements.loadingAnimation.classList.remove('hidden');
    }

    hideLoading() {
        this.domElements.loadingAnimation.classList.add('hidden');
    }

    showError(message) {
        this.domElements.newsArticles.innerHTML = \`
            <div class="error-message">
                <p>\${message}</p>
                <button class="retry-button">Retry</button>
            </div>
        \`;
    }
}
  `,
  codeTitle: 'UI.js'
},
    {
      code: `
import { NewsAPI } from './api.js';
import { NewsUI } from './ui.js';

class NewsApp {
    constructor() {
        this.api = new NewsAPI();
        this.ui = new NewsUI();
        this.initialize();
    }

    async initialize() {
        this.ui.initEventListeners(
            (category) => this.handleCategoryChange(category)
        );

        try {
            await this.loadNews();
        } catch (error) {
            this.ui.showError('Failed to load news. Please try again later.');
            console.error('Initialization error:', error);
        }
    }

    async loadNews() {
        try {
            this.ui.showLoading();
            const data = await this.api.fetchNews();
            this.ui.displayNews(data.articles);

            const { category } = this.api.getCurrentSettings();
            this.ui.updateHeader(News of \${category});
        } catch (error) {
            this.ui.showError('Failed to fetch news. Please try again.');
            throw error;
        }
    }

    async handleCategoryChange(category) {
        this.api.updateSettings({ category });
        await this.loadNews();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new NewsApp();
});
    `,
      codeTitle: 'main.js'
    },
  ];

  zipFile: string = 'assets/zip-files/Latest news.rar';
}
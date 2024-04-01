import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    ul,
    ol {
        list-style: none;
        
    }

    /* Prevent font size inflation */
    html {
        -moz-text-size-adjust: none;
        -webkit-text-size-adjust: none;
        text-size-adjust: none;
    }

    /* Remove default margin in favour of better control in authored CSS */
    body, h1, h2, h3, h4, p,
    figure, blockquote, dl, dd {
        margin: 0;
    }

    /* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
    ul[role='list'],
    ol[role='list'] {
        list-style: none;
    }

    /* Set core body defaults */
    body {
        min-height: 100vh;
        line-height: 1.5;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        scroll-behavior: smooth;
        text-rendering: optimizeSpeed;
        background-color: #F0F0F6;

    }

    /* Set shorter line heights on headings and interactive elements */
    h1, h2, h3, h4,
    button, input, label {
        line-height: 1.1;
    }

    /* Balance text wrapping on headings */
    h1, h2,
    h3, h4 {
        text-wrap: balance;
        font-family: Inter,serif;
        font-weight: 700;
        
    }

    /* A elements that don't have a class get default styles */
    a:not([class]) {
        text-decoration-skip-ink: auto;
        color: currentColor;
    }

    /* Make images easier to work with */
    img,
    picture {
        max-width: 100%;
        display: block;
    }

    /* Inherit fonts for inputs and buttons */
    input, button,
    textarea, select {
        font: inherit;
    }

    /* Make sure textarea without a rows attribute are not tiny */
    textarea:not([rows]) {
        min-height: 10em;
    }

    /* Anything that has been anchored to should have extra scroll margin */
    :target {
        scroll-margin-block: 5ex;
    }
    
    p {
        font-family: Inter,serif;
        font-size: 1rem;
        font-style: normal;
        font-weight: 400;
        line-height: 1.5rem;
        color: #767676;/* 160% */
        
    }
    h3 {
        font-size: 1.3rem;
        font-style: normal;
        font-weight: 500;
        line-height: 123.6%; /* 22.248px */
        text-transform: capitalize;
    }
    h4 {
        color: #2B2B2B;

        /* H3 - 24px */
        font-family: Inter,serif;
        font-size: 1.1rem;
        font-style: normal;
        font-weight: 600;
        line-height: 123.6%; /* 29.664px */
        text-transform: capitalize;
    }
    h5 {
        color: #2B2B2B;
        /* H4 - 18px */
        font-family: Inter,serif;
        font-size: 0.9rem;
        font-style: normal;
        font-weight: 500;
        line-height: 123.6%; /* 22.248px */
        text-transform: capitalize;
    }

`
export default GlobalStyle;
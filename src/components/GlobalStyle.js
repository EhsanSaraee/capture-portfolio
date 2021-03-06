import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html {
        @media (max-width: 1700px) {
            font-size: 75%;
        }
    }
    body {
        background: #1b1b1b;
        font-family: 'Inter', sans-serif;
        overflow-x: hidden;
    }
    button {
        font-weight: bold;
        font-size: 0.8rem;
        cursor: pointer;
        padding: 0.8rem 1.6rem;
        border: 3px solid #23d997;
        background: transparent;
        color: #fff;
        transition: all 0.5s ease;
        font-family: 'Inter', sans-serif;
        &:hover {
            background: #23d997;
            color: #fff;
        }
    }
    h2 {
        font-weight: lighter;
        font-size: 2.5rem;
    }
    h3 {
        color: #fff;
        font-size: 1rem;
    }
    h4 {
        font-weight: bold;
        font-size: 1.3rem;
    }
    a {
        font-size: 1rem;
    }
    span {
        font-weight: bold;
        color: #23d997;
    }
    p {
        padding: 3rem 0;
        color: #ccc;
        font-size: 0.8rem;
        line-height: 150%;
    }
`;

export default GlobalStyle;

import { createGlobalStyle } from "styled-components";

export const defaultTheme = {
    color: "#666",
    darkColor: "#333",
    lightColor: "#fff"
}

export const newTheme = {
    color: "#111"
}

export const GlobalStyles = createGlobalStyle`
    .navbar {
        background-color: ${(props) => props.theme.color};
    }

    a {
        text-decoration: none;
    }

    #author-attribution {

    }

    #banner {
        width: 100%;
    }

    .bg-theme {
        background-color: ${(props) => props.theme.color};
    }

    body { 
        background-color: ${(props) => props.theme.lightColor};
    }

    .btn-block {
        display: block;
        width: 100%;
        min-height: 100%;
    }

    .btn-theme {
        color: #fff;
        background-color: ${(props) => props.theme.color};
        border-color: ${(props) => props.theme.color};
    }

    .btn-theme:hover {
        color: #fff;
        background-color: ${(props) => props.theme.darkColor};
        border-color: ${(props) => props.theme.darkColor};
    }

    .card {
        border-color: ${(props) => props.theme.darkColor};
    }

    .card-footer .btn {
        border-color: #fff!important;
    }

    .card-title {
        font-weight: 600;
    }

    img {
        max-width: 100%;
    }

    .mainBody {
        min-height: 67vh;
    }

    #main-quote {
        font-size: 2rem;
    }

    #myInput {
        width: 100%;
    }

    .navbar, .footer {
        width: 100%!important;
    }

    #NavSearch {
        width: 100%;
    }

    .quote-body, .quote-preview {
        font-family: 'Merriweather', serif;
    }

    .smaller-text {
        font-size: 14px;
        font-weight: 650;
    }

    #searchTerm {
        width: 88%;
    }
`
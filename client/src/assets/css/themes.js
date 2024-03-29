import { createGlobalStyle } from "styled-components";

const buttonColors = ({main, dark}) => {
    return {
        main: main,
        dark: dark,
    }
}

export const petra = {
    color: "#9c2018",
    lightColor: "#d4a59a",
    quote: "#f3e0dc",
    button: buttonColors({main: "#bc4539", dark: "#8c1519"})
}

export const carbon = {
    color: "#888",
    lightColor: "#efefef",
    quote: "#d4d4d4",
    button: buttonColors({main: "#cc2b2f", dark: "#990b0f"})
}

export const minimal = {
    color: "#a81a13",
    lightColor: "#dad7cc",
    quote: "#fff",
    button: buttonColors({main: "#b82a23", dark: "#980a03"})
}

export const journal = {
    color: "#6d7993",
    lightColor: "#d5d5d5",
    quote: "#f6f6f6",
    button: buttonColors({main: "#96858f", dark: "#66555f"})
}

export const gunmetal = {
    color: "#22252c",
    lightColor: "#b0a390",
    quote: "#f9f9f9",
    button: buttonColors({main: "#984b43", dark: "#681b13"})
}

export const brain = {
    color: "#2f418e",
    lightColor: "#fff",
    quote: "#e2e2e2",
    button: buttonColors({main: "#2f418e", dark: "#354eb1"})
}

export const redbrain = {
    color: "#9e311f",
    lightColor: "#fff",
    quote: "#e7e7e7",
    button: buttonColors({main: "#9e311f", dark: "#be412f"})
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

    .author-corner .btn-weak {
        border-top-left-radius: 0rem;
        border-top-right-radius: 0rem;
        border-bottom-left-radius: .35rem;
        border-bottom-right-radius: .35rem;
    }

    #banner, #myInput, #NavSearch {
        width: 100%;
    }

    .bg-theme {
        background-color: ${(props) => props.theme.color};
    }

    body { 
        background-color: ${(props) => props.theme.lightColor};
    }

    .border-black {
        border: 1px solid #111;
    }

    .btn:focus {
        box-shadow: none!important
    }
    
    .btn-block {
        display: block;
        width: 100%;
        min-height: 100%;
    }

    .btn-theme {
        color: #fff;
        background-color: ${(props) => props.theme.button.main};
        //border: none;
    }

    .btn-theme:hover {
        color: #fff;
        background-color: ${(props) => props.theme.button.dark};
    }

    .btn-weak {
        color: #000;
        background-color: #fff;
        border: 1px solid #ccc;
    }

    .btn-weak a {
        color: #000;
    }

    .card {
    }

    .card-footer .btn {
        border-color: #fff!important;
    }

    .card-img {
        border-radius: 0px!important
    }

    .card-title {
        font-weight: 600;
    }

    .link-theme {
        color: ${(props) => props.theme.button.main};
    }

    .link-theme:hover {
        color: ${(props) => props.theme.button.dark};
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

    .mobile-share {
        background-color: transparent;
        border-color: transparent;
        color: #eee;
        font-size: 1.5rem;
        transition: all 0.4s ease;
    }

    .mobile-share:hover {
        color: #666;
    }

    .navbar, .footer {
        width: 100%!important;
    }

    .nav-link .btn-block {
        font-size: 0.9rem;
    }

    .quote-body, .quote-preview {
        font-family: 'Merriweather', serif;
    }

    .quote-footer {
        background-color: ${(props) => props.theme.color};
    }

    .quote-page {
        background-image: url("/assets/images/thumbnails/undoctrination_icon_bw.png");
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
    }

    .rounded-bottom {
        border-bottom-left-radius: .35rem!important;
        border-bottom-right-radius: .35rem!important;
    }

    .rounded-top {
        border-top-left-radius: .35rem!important;
        border-top-right-radius: .35rem!important;
    }

    .smaller-text {
        font-size: 14px;
        font-weight: 650;
    }

    #searchTerm {
        width: 100%;
    }

    .share-button {
        font-size: 1.8rem;
        transition: all 0.4s ease;
    }

    #share-twitter {
        color: #1DA1F2 !important;
    }

    #share-twitter:hover {
        color: #0d476b !important;
    }

    #share-facebook {
        color: #4867AA !important;
    }

    #share-facebook:hover {
        color: #1c315e !important;
    }

    #share-reddit {
        color: #fc5011 !important;
    }

    #share-reddit:hover {
        color: #782c10 !important;
    }
`
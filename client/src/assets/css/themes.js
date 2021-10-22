import { createGlobalStyle } from "styled-components";

export const defaultTheme = {
    color: "#666",
    darkColor: "#333",
    lightColor: "bbb"
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

    .card-main {
        min-height: 100%
    }

    .card-footer .btn {
        border-color: #fff!important;
    }

    img {
        max-width: 100%;
    }

    .mainBody {
        min-height: 67vh;
    }

    #myInput {
        width: 100%;
    }
`
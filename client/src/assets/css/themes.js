import { createGlobalStyle } from "styled-components";

export const defaultTheme = {
    color: "#fff"
}

export const newTheme = {
    color: "#111"
}

export const GlobalStyles = createGlobalStyle`
    .navbar {
        background-color: ${(props) => props.theme.color}
    }

    #banner {
        width: 100%;
    }

    body { 
        background-color: #666
    }

    .navIcon {

    }
`
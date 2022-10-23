import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
html,
body,
#root,
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    width: 100%;
}

html, body, #root {
    min-height: 100vh;
}

ul, li {
    list-style-type: none;
}
`
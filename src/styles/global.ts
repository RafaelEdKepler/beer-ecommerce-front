import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
  }

  body {
    font-family: "DM Sans", sans-serif;
    line-height: 100%;
    color: ${props => props.theme.colors['black-400']};
    background-color: ${props => props.theme.colors['white-100']};
  }
`;
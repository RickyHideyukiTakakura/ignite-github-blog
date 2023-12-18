import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 1px ${(props) => props.theme.blue};
  }

  body {
    background: ${(props) => props.theme["base-background"]};
    color: ${(props) => props.theme.white};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button, span {
    font: 400 1rem 'Nunito', sans-serif;
    line-height: 160%;
  }

  a {
    text-decoration: none;

    &:hover {
      box-shadow: 0 1px 0 0 ${(props) => props.theme.blue};
      transition: all 0.5s;
    }
  }

  button, a {
    cursor: pointer;
  }

  ul {
    list-style: none;
  }
`;

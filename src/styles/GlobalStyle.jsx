import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html, body, #root {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, sans-serif;
    height: 100%;
  }

  body {
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.text};
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  .documentation-text {
    white-space: pre-wrap;
    word-wrap: break-word;
    font-family: 'Courier New', Courier, monospace;
    background-color: ${(props) => props.theme.codeBackground};
    padding: 15px;
    border-radius: 5px;
    border: 1px solid ${(props) => props.theme.borderColor};
    font-size: 0.9em;
    line-height: 1.6;
    color: ${(props) => props.theme.text};
  }

  .highlight {
    background-color: ${(props) => props.theme.highlightBackground};
    color: ${(props) => props.theme.highlightText};
    padding: 2px 0;
    border-radius: 3px;
  }
`

export { GlobalStyle }

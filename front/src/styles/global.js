import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    font: 1rem Roboto, sans-serif;
    background: ${props => props.theme.colors.backgroundBody};
    -webkit-font-smoothing: antialiased;
    color: ${props => props.theme.colors.textColor};
  }
`;

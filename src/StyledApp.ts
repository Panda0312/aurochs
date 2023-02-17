import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  html, body {
    height: 100%;
    margin: 0;
    padding: 0;
    font-family: Arial, Helvetica, sans-serif;
  }
`;

export const AppRoot = styled.div``;

export const Nav = styled.nav`
  font-size: 0;
  > * {
    font-size: 1rem;
  }
  a {
    display: inline-block;
    height: 24px;
    line-height: 24px;
    padding: 0 6px;
  }
`;

export const Content = styled.div``;

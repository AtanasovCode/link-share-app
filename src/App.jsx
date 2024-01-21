import styled, { ThemeProvider, createGlobalStyle } from "styled-components";

import Card from "./components/Card";

const App = () => {

  const theme = {
    //Colors
    background: "#141414",
    primary: "#1F1F1F",
    secondary: "#333333",
    text: "#FFF",
    accent: "#C4F82A",

    //Typography
    font: "'Inter', sans-serif",
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container>
        <Card />
      </Container>
    </ThemeProvider>
  );
}

export default App;

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    min-height: 100vh;
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.background};
  min-height: 100vh;
`;
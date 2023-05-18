import React from "react";
import { Container } from "@chakra-ui/react";
import Main from "./components/Main";
import Header from "./components/Header";

function App() {

  return (
    <Container minW='max-content' py={4} centerContent alignItems='center'>
      <Header />
      <Main />
    </Container>
  )
}

export default App;
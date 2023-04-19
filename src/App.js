import React from "react";
import { ChakraProvider, Container } from "@chakra-ui/react";
import Main from "./components/Main";
import Header from "./components/Header";

function App() {
  return (
    <ChakraProvider>
      <Container py={4}>
        <Header />
        <Main />
      </Container>
    </ChakraProvider>
  )
}

export default App;
import React from "react";
import { Container, Flex, Heading } from "@chakra-ui/react";

const cache = {};

function importAll(r) {
    r.keys().forEach((key) => cache[key] = r(key));
}

importAll(require.context("../images", false, /\.(png|jpe?g|svg)$/));

// const images = Object.entries(cache).map(module => module[1].default);
const img_array = new Map(Object.entries(cache));
const imgNodes = img_array.forEach((img) => (<img src={img.value}></img>))

function Main() {
    return (
        <Container as='main'>
            <Flex wrap='wrap'>
                { imgNodes }
            </Flex>
            {/* <Heading>{imgNodes}</Heading> */}
        </Container>
    )
}

export default Main;
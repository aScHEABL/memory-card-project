import React from "react";
import { Container, Flex, Icon, IconButton, Image, Box } from "@chakra-ui/react";
import { v4 as uuidv4 } from 'uuid';
import _ from 'lodash-es';

const cache = {};

function importAll(r) {
    r.keys().forEach((key) => cache[key] = r(key));
}

importAll(require.context("../images", false, /\.(png|jpe?g|svg)$/));

const handleClick = (e) => {
    console.log("Click handled!");
    e.target.setAttribute("data-checked", true);
}

const images = Object.entries(cache).map((module) => module[1]);
// const imageNodes = images.map((item) => <Image width="25%" objectFit="scale-down" key={uuidv4()} src={item} style={{cursor: 'pointer'}} 
// data-checked="false" onClick={(e) => handleClick(e)} />)
const imageNodes = images.map((item) => 
    <Box key={uuidv4()} boxSize="sm">
        <Image objectFit="scale-down" src={item} style={{cursor: 'pointer'}} 
        data-checked="false" onClick={(e) => handleClick(e)} />
    </Box>
)
const randomImgNodes_sample = _.sampleSize(imageNodes, 4);




function Main() {

    return (
        <Container as='main' maxW='180ch' centerContent>
            <Flex wrap='nowrap' justify='center' alignItems='center'>
                { randomImgNodes_sample }
            </Flex>
        </Container>
    )
}

export default Main;
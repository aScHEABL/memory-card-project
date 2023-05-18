import React from "react";
import { useColorMode } from "@chakra-ui/react";
import { Flex, Heading, Stat, StatGroup, StatLabel, StatNumber, Box, Button } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

function Header() {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
            <Flex as='header' justify gap={80} alignItems='center'>
                <Heading as='h1' size='2xl'>MEMORY GAME</Heading>
                <Button pos='absolute' top='10%' left='50%' onClick={() => toggleColorMode()}
                m="1rem">
                    {colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
                </Button> 
                <Flex gap={6}>
                    <StatGroup>
                        <Stat>
                            <StatLabel>LEVEL: </StatLabel>
                            <StatNumber>5</StatNumber>
                        </Stat>
                    </StatGroup>
                    <StatGroup>
                        <Stat>
                            <StatLabel>SCORE: </StatLabel>
                            <StatNumber>13</StatNumber>
                        </Stat>
                    </StatGroup>
                    <StatGroup>
                        <Stat>
                            <StatLabel>HIGHSCORE: </StatLabel>
                            <StatNumber>27</StatNumber>
                        </Stat>
                    </StatGroup>
                </Flex>
            </Flex>
    )
}

export default Header;
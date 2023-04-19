import React from "react";
import { Container, Flex, Heading, Stat, StatGroup, StatLabel, StatNumber } from "@chakra-ui/react";

function Header() {
    return (
            <Heading>
                <Flex justify gap={6}>
                    <Heading as='h1' size='2xl'>MEMORY GAME</Heading>
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
            </Heading>
    )
}

export default Header;
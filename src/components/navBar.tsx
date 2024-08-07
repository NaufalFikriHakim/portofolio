import React from "react";
import { Box, Center, Flex, Spacer, HStack } from "@chakra-ui/react";

export default function NavBar() {
    return (
        <Box w="100%" borderBottom="2px" borderColor="black" height="62px" paddingRight="50px">
            <Flex align="center" >
                <Box padding="10px">
                <img src="/code-icon.svg" alt="logo" height="50px" width="50px" />
            </Box>
            <Spacer/>
            <HStack spacing="50px" >
                <a href="">Home</a>
                <a href="">Tech Stack</a>
                <a href="">Projects</a>
            </HStack>
            </Flex>
            
            


        </Box>
    )

}
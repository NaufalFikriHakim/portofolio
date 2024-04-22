import React from "react";
import { Box, Divider, AbsoluteCenter } from "@chakra-ui/react";

export default function CustomDivider() {
    return (
        <Box position='relative' padding='10'>
            <Divider borderColor="black" />
            <AbsoluteCenter bg='white' px='4'>
                Projects Highlight
            </AbsoluteCenter>
        </Box>
    )
}
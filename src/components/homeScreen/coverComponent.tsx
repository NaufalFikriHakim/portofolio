"use client"
import React from "react";
import { Stack, Center, Box, Flex, Button, Heading } from "@chakra-ui/react";
import { DownloadIcon } from '@chakra-ui/icons'

export default function CoverComponent(){
    return (
        <Box w='100%' paddingBlockStart={100}>
            <Center>
                <Heading >
                    I'm Naufal Fikri Hakim.
                </Heading>
            </Center>
            <Center pt={5}>
                <Flex>
                    <a href="https://github.com/NaufalFikriHakim">
                        <img src="/github-mark.svg" width="40px" height="40px" alt="" />
                    </a>
                    <a href="https://gitlab.com/naufal.fikri11">
                        <img src="https://images.ctfassets.net/xz1dnu24egyd/4V92fFTJOIlTPHHzSdfxem/3fdc9f0d82f08ed4c355c6e4126b870c/gitlab-logo-600.svg" width="40px" height="40px" alt="" />
                    </a>
                    <a href="https://www.linkedin.com/in/naufal-fikri-hakim/">
                        <img src="/icons8-linkedin-50.svg" width="40px" height="40px" alt="" />
                    </a>
                </Flex>
            </Center>
            <Center pt={5}>
                <Flex gap="2rem">
                    <Button colorScheme='gray' rightIcon={<DownloadIcon />}>
                        Resume
                    </Button>
                    <Button colorScheme='gray'>
                        Contact
                    </Button>
                </Flex>

            </Center>
        </Box>
    )
}
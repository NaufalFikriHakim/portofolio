"use client"
import React from "react";
import {
    VStack, Center, Box, Flex, Button, Heading, Text, Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
} from "@chakra-ui/react";
import { DownloadIcon, PhoneIcon, EmailIcon } from '@chakra-ui/icons'

export default function CoverComponent() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <Box w='100%' paddingBlockStart={100}>
            <Center>
                <Heading >
                    I'm Naufal Fikri Hakim.
                </Heading>
            </Center>
            <Center>
                <Text>
                    “Code, Collaborate, Create.”
                </Text>

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
                    <Button colorScheme='gray' onClick={onOpen}>
                        Contact
                    </Button>
                </Flex>

            </Center>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Contact Info</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <VStack>
                            <Flex direction="row">
                                <PhoneIcon boxSize={6}></PhoneIcon>
                                <Text ml={1}> +6281288827590</Text>
                            </Flex>
                            <Flex direction="row">
                                <EmailIcon boxSize={6}></EmailIcon>
                                <Text ml={1}> naufalfikri2903@gmail.com</Text>
                            </Flex>
                            <Flex direction="row">
                                <img src="/instagram.svg" width="40px" height="40px" alt="" />
                                <Text ml={1}> @nfalfikri</Text>
                            </Flex>
                            <Flex direction="row">
                                <img src="/line.svg" width="40px" height="40px" alt="" />
                                <Text ml={1}> @naufal2903</Text>
                            </Flex>

                        </VStack>




                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='gray' mr={3} onClick={onClose}>
                            Close
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Box>
    )
}
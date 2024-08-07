"use client"
import React from "react";
import { Flex, Divider, Box, Center, Text, VStack, Grid, GridItem } from "@chakra-ui/react";
import CoverComponent from "@/components/coverComponent";
import CustomDivider from "@/components/divider";
import { Card, CardHeader, CardBody, CardFooter, List, ListItem, ListIcon, OrderedList, UnorderedList, AbsoluteCenter } from '@chakra-ui/react'
import Carousel from 'react-bootstrap/Carousel';
import NavBar from "@/components/navBar";



export default function HomeScreenModule() {
    return (
        <div>
            <NavBar></NavBar>
            <Flex direction="column" w="100%" gap={2} mb={3} justify="center">
            
            <CoverComponent />
            <Box position='relative' padding='10'>
                <Divider borderColor="black" />
                <AbsoluteCenter bg='white' px='4'>
                    Tech Skills
                </AbsoluteCenter>
            </Box>
            <Center>
                <Flex justify="center" wrap="wrap" gap="0.5rem" w="80%">
                    <img src="html.png" width="60px" alt="" />
                    <img src="css.png" width="60px" alt="" />
                    <img src="js.svg" width="60px" alt="" />
                    <img src="ts.png" width="60px" alt="" />
                    <img src="python.png" width="60px" alt="" />
                    <img src="php.png" width="60px" alt="" />
                    <img src="go.png" width="60px" alt="" />
                    <img src="dart.png" width="60px" alt="" />
                    <img src="kotlin.png" width="60px" alt="" />
                    <img src="node.png" width="60px" alt="" />
                    <img src="react.png" width="60px" alt="" />
                    <img src="next.png" width="60px" alt="" />
                    <img src="express.png" width="60px" alt="" />
                    <img src="spring.png" width="60px" alt="" />
                    <img src="django.png" width="60px" alt="" />
                    <img src="laravel.png" width="60px" alt="" />
                    <img src="flutter.png" width="60px" alt="" />
                    <img src="postgre.png" width="60px" alt="" />
                    <img src="git.png" width="60px" alt="" />
                    <img src="docker.png" width="60px" alt="" />
                    <img src="gcp.png" width="60px" alt="" />
                    <img src="aws.png" width="60px" alt="" />

                </Flex>
            </Center>

            <CustomDivider />
            <VStack gap="2rem">
                <Center>
                    <Card w="80rem">
                        <CardBody>
                            <Grid templateColumns='repeat(5, 1fr)'>
                                <GridItem colSpan={2} ><Carousel>
                                    <Carousel.Item interval={2000}>
                                        <img src='/lontar1.png' alt="" style={{ border: "1px solid gray", borderRadius: "5px" }} />

                                    </Carousel.Item>
                                    <Carousel.Item interval={2000}>
                                        <img src='/lontar2.png' alt="" style={{ border: "1px solid gray", borderRadius: "5px" }} />
                                    </Carousel.Item>
                                    <Carousel.Item interval={2000}>
                                        <img src='/lontar3.png' alt="" style={{ border: "1px solid gray", borderRadius: "5px" }} />

                                    </Carousel.Item>
                                </Carousel></GridItem>
                                <GridItem colSpan={3} ><UnorderedList>
                                    <ListItem><Text as="b">Title:</Text> LontarMTI</ListItem>
                                    <ListItem><Text as="b">Description:</Text> LontarMTI is a specialized <div style={{ display: "inline-block", border: "1px solid gray", borderRadius: "5px", backgroundColor: "#0F1B38", fontWeight: "bold", color: "white", padding: "2px" }}>digital library</div> tailored for the Master of Information Technology program at Universitas Indonesia, offering a wide array of features to meet the needs of both customers and librarians. It facilitates e-book lending, online reading through a dedicated reader, and efficient management of library members.</ListItem>
                                    <ListItem><Text as="b">Status:</Text> On progress</ListItem>
                                    <ListItem><Text as="b">Task:</Text>
                                        <OrderedList>
                                            <ListItem>
                                                Contribute to the development of both the front-end and back-end using designated tech stacks.
                                            </ListItem>
                                            <ListItem>
                                                Maintain 100% <div style={{ display: "inline-block", border: "1px solid gray", borderRadius: "5px", backgroundColor: "#0F1B38", fontWeight: "bold", color: "white", padding: "2px" }}>code coverage</div> using Jest and SpringBootTest while implementing <div style={{ display: "inline-block", border: "1px solid gray", borderRadius: "5px", backgroundColor: "#0F1B38", fontWeight: "bold", color: "white", }}>Test Driven Development (TDD)</div>
                                            </ListItem>
                                            <ListItem>
                                                Implement <div style={{ display: "inline-block", border: "1px solid gray", borderRadius: "5px", backgroundColor: "#0F1B38", fontWeight: "bold", color: "white", padding: "2px" }}>SCRUM (agile)</div> as a software development methodology
                                            </ListItem>
                                            <ListItem>
                                                Implement <div style={{ display: "inline-block", border: "1px solid gray", borderRadius: "5px", backgroundColor: "#0F1B38", fontWeight: "bold", color: "white", padding: "2px" }}>SOLID</div> paradigm to create a scalable application
                                            </ListItem>
                                            <ListItem>
                                                Create necessary documentation such as Product Requirement Document (PRD), System Design Specification (SDS), and UAT documentation
                                            </ListItem>
                                        </OrderedList>
                                    </ListItem>
                                    <ListItem><Text as="b">Link:</Text> http://lontar-digital-mti.cs.ui.ac.id/ (Can only be accesed using HTTP)</ListItem>
                                    <ListItem><Text as="b">Tech Used:</Text> NextJS, ChakraUI, Tailwind CSS, SpringBoot, Jest, PostgreSQL, Elastisearch, Prometheus, Graphana, SonarCloud, Git, Linear </ListItem>
                                </UnorderedList></GridItem>
                            </Grid>


                        </CardBody>
                    </Card>
                </Center>
                <Center>
                    <Card w="80rem">
                        <CardBody>
                            <Grid templateColumns='repeat(5, 1fr)'>
                                <GridItem colSpan={5} ><UnorderedList>
                                    <ListItem><Text as="b">Title:</Text> RentSpace</ListItem>
                                    <ListItem><Text as="b">Description:</Text> RentSpace is an advanced web-based platform that specializes in <div style={{ display: "inline-block", border: "1px solid gray", borderRadius: "5px", backgroundColor: "#0F1B38", fontWeight: "bold", color: "white", padding: "2px" }}>space rental services</div>. Our application streamlines the entire process, allowing users to easily search for available rooms, make reservations, and complete payments seamlessly.</ListItem>
                                    <ListItem><Text as="b">Status:</Text> Finished</ListItem>
                                    <ListItem><Text as="b">Task:</Text>
                                        <OrderedList>
                                            <ListItem>
                                                Develop a <div style={{ display: "inline-block", border: "1px solid gray", borderRadius: "5px", backgroundColor: "#0F1B38", fontWeight: "bold", color: "white", padding: "2px" }}>rental microservice</div> that acts as the central hub connecting users with providers, serving as the foundational core of the entire application.
                                            </ListItem>
                                            <ListItem>
                                                Maintain  100% code coverage using SpringBootTest and implement <div style={{ display: "inline-block", border: "1px solid gray", borderRadius: "5px", backgroundColor: "#0F1B38", fontWeight: "bold", color: "white", padding: "2px" }}>static analysis</div> using SonarCloud to maintain a <div style={{ display: "inline-block", border: "1px solid gray", borderRadius: "5px", backgroundColor: "#0F1B38", fontWeight: "bold", color: "white", padding: "2px" }}>clean code</div>
                                            </ListItem>
                                            <ListItem>
                                                Implement <div style={{ display: "inline-block", border: "1px solid gray", borderRadius: "5px", backgroundColor: "#0F1B38", fontWeight: "bold", color: "white", padding: "2px" }}>Kanban (agile)</div> as a software development methodology
                                            </ListItem>
                                            <ListItem>
                                                Increase website performance up to 80% by doing <div style={{ display: "inline-block", border: "1px solid gray", borderRadius: "5px", backgroundColor: "#0F1B38", fontWeight: "bold", color: "white", padding: "2px" }}>web profiling</div> using Prometheus and Grafana
                                            </ListItem>
                                            <ListItem>
                                                Impement appropriate design pattern to resolve existing problem
                                            </ListItem>
                                            <ListItem>
                                                Create a runner using Docker for CI/CD purpose
                                            </ListItem>
                                            <ListItem>
                                                Deploy existing program and runner using <div style={{ display: "inline-block", border: "1px solid gray", borderRadius: "5px", backgroundColor: "#0F1B38", fontWeight: "bold", color: "white", padding: "2px" }}>Google Cloud</div>
                                            </ListItem>

                                        </OrderedList>
                                    </ListItem>
                                    <ListItem><Text as="b">Repository:</Text> <Text as="u"><a href="https://gitlab.com/naufal.fikri11/service-rent">https://gitlab.com/naufal.fikri11/service-rent</a></Text></ListItem>
                                    <ListItem><Text as="b">Tech Used:</Text> NextJS, Tailwind CSS, SpringBoot, Docker, PostgreSQL, SonarCloud, Prometheus, Grafana, Git, Trello, Google Cloud</ListItem>
                                </UnorderedList></GridItem>
                            </Grid>


                        </CardBody>
                    </Card>
                </Center>
                <Center>
                    <Card w="80rem">
                        <CardBody>
                            <Grid templateColumns='repeat(5, 1fr)'>
                                <GridItem colSpan={2} ><Carousel>
                                    <Carousel.Item interval={2000}>
                                        <img src='/hurtheart1.png' alt="" style={{ border: "1px solid gray", borderRadius: "5px" }} />

                                    </Carousel.Item>
                                    <Carousel.Item interval={2000}>
                                        <img src='/hurtheart2.png' alt="" style={{ border: "1px solid gray", borderRadius: "5px" }} />
                                    </Carousel.Item>
                                    <Carousel.Item interval={2000}>
                                        <img src='/hurtheart3.png' alt="" style={{ border: "1px solid gray", borderRadius: "5px" }} />

                                    </Carousel.Item>
                                    <Carousel.Item interval={2000}>
                                        <img src='/hurtheart4.png' alt="" style={{ border: "1px solid gray", borderRadius: "5px" }} />

                                    </Carousel.Item>
                                    <Carousel.Item interval={2000}>
                                        <img src='/hurtheart5.png' alt="" style={{ border: "1px solid gray", borderRadius: "5px" }} />

                                    </Carousel.Item>
                                    <Carousel.Item interval={2000}>
                                        <img src='/hurtheart6.png' alt="" style={{ border: "1px solid gray", borderRadius: "5px" }} />

                                    </Carousel.Item>
                                </Carousel></GridItem>
                                <GridItem colSpan={3} ><UnorderedList>
                                    <ListItem><Text as="b">Title:</Text> HurtHeart</ListItem>
                                    <ListItem><Text as="b">Description:</Text> HurtHeart is an innovative online platform designed for <div style={{ display: "inline-block", border: "1px solid gray", borderRadius: "5px", backgroundColor: "#0F1B38", fontWeight: "bold", color: "white", padding: "2px" }}>booking psychiatry sessions</div> seamlessly, offering a comprehensive range of services from appointment scheduling to secure payment processing. </ListItem>
                                    <ListItem><Text as="b">Status:</Text> Finished</ListItem>
                                    <ListItem><Text as="b">Task:</Text>
                                        <OrderedList>
                                            <ListItem>
                                                Contribute to developing both front-end and back-end using designated tech stacks.
                                            </ListItem>
                                            <ListItem>
                                                Implement <div style={{ display: "inline-block", border: "1px solid gray", borderRadius: "5px", backgroundColor: "#0F1B38", fontWeight: "bold", color: "white", padding: "2px" }}>CI/CD</div> using GitHub Actions
                                            </ListItem>
                                            <ListItem>
                                                Create necessary documentation such as Use Case Diagrams and Specifications, Design Class Diagrams, Sequence Diagrams, and API documentation.
                                            </ListItem>
                                            <ListItem>
                                                Deploy existing program into vercel
                                            </ListItem>
                                        </OrderedList>
                                    </ListItem>
                                    <ListItem><Text as="b">Repository:</Text> <Text as="u"><a href="https://github.com/RPL-Jaya/HurtHeart">https://github.com/RPL-Jaya/HurtHeart</a></Text></ListItem>
                                    <ListItem><Text as="b">Link:</Text> <Text as="u"><a href="https://hurt-heart.vercel.app">https://hurt-heart.vercel.app</a></Text></ListItem>
                                    <ListItem><Text as="b">Tech Used:</Text> HTML, CSS, Bootstrap, Django, PostgreSQL, Git </ListItem>
                                </UnorderedList></GridItem>
                            </Grid>


                        </CardBody>
                    </Card>


                </Center>

            </VStack>


        </Flex>

        </div>


        
    )
}
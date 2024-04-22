"use client"
import React from "react";
import {Flex, Divider} from "@chakra-ui/react";
import CoverComponent from "@/components/homeScreen/coverComponent";
import CustomDivider from "@/components/divider";


export default function HomeScreenModule() {
    return (
        <Flex direction="column" w="100%" gap={2}>
            <CoverComponent />
            <CustomDivider />
        </Flex>

    )
}
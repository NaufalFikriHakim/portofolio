import { extendTheme } from "@chakra-ui/react";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Global } from '@emotion/react'

const plus_jakarta_sans = Plus_Jakarta_Sans({ weight: "600", subsets: ["latin"] });

export const myNewTheme = extendTheme({
    colors: {
        heading: "#D61B23",
        bgSecondary: "#192F59",
        mainFont: "#223D71",
        fail: "#DE484E",
        bgSection: "#EEEEEE",
        bgGelap: "#6B6B6B",
        textLight: "#D2D2D2",
        backgroundPrimary: "#FFFFFF",
        alternative1: "#FBC3BC",
        alternative2: "#C8C6D7",
        success: "#198754",
    },
    fonts: {
        heading: "Plus Jakarta Sans"
    },
});
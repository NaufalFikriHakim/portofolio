"use client"
import { ChakraProvider } from "@chakra-ui/react";
import { myNewTheme } from "./theme";

export function Providers({ children }: { children: React.ReactNode }) {
    return <ChakraProvider theme={myNewTheme}>{children}</ChakraProvider>;
}

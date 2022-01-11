import React from 'react';
import {Center, Spinner, Text, VStack} from "@chakra-ui/react";

const Loader = ({height="100vh", width="100%", color = "black", showText = true}) => (
    <Center h={height} w={width}>
        <VStack spacing={5}>
            {showText && <Text fontSize='5xl' color={color}>Loading</Text>}
            <Center>
                <Spinner color={color} size={"xl"} zIndex={10}/>
            </Center>
        </VStack>
    </Center>
)

export default Loader;
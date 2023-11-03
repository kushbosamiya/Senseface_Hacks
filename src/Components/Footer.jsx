import React from 'react'
import { Box, Image, Stack, Text } from "@chakra-ui/react"
import Logo from "../Assets/Header_component/logo.svg"

const Footer = () => {
    return (
        <>
            <Box display={'flex'} justifyContent={'center'} py={'2%'} px={'10%'}>
                <Box  >
                    <Text as={'body'} fontSize={'xl'} lineHeight={'2.8rem'} maxW={'45%'}>Crafted with ❤️ and a pinch of chaos, courtesy of our fantastic eight-member squad working together collabratively</Text>
                </Box>
                <Box  display={'flex'} justifyContent={'center'}>
                    <Image src={Logo} alt="logo" objectFit={'contain'} width={"100%"} />
                </Box>
            </Box>
        </>
    )
}

export default Footer
import React from 'react'
import { Box, Image, Stack, Text } from "@chakra-ui/react"
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';








// Assets
import Logo from "../Assets/Header_component/logo.svg"


const Header = () => {
    return (
        <Box padding={'.5rem'} display={'flex'} justifyContent={'center'} py={'1%'} >
            <Navbar />
        </Box>
    )
}

export default Header

const Navbar = () => {

    return <>
        <Box border={'1px solid #d6ff92'} bgColor={'#f6ffe4'} paddingLeft={'2%'} paddingRight={'2%'} borderRadius={'xl'} width={'60vw'} >
            <NavLinks />
        </Box>
    </>
}


// navlinks 
const NavLinks = () => {

    return <>
        <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'} >
            {/* logo */}
            <Image
                padding={'.05rem'}
                src={Logo}
                alt="Senseface"
                height={'auto'}
                width={'96px'}
            />
            <Stack direction={'row'} width={'80%'} justifyContent={'space-between'} padding={'.25rem'} fontSize={'lg'} fontWeight={'540'} fontFamily={`'Montserrat Variable', sans-serif`} color={'#173102'}  >
                {/* link */}

                <Text cursor={'pointer'} _hover={{ color: '#A8FC3B' }} >How it Works</Text>
                <Text cursor={'pointer'} _hover={{ color: '#A8FC3B' }} >Integration</Text>
                <Text cursor={'pointer'} _hover={{ color: '#A8FC3B' }} >Who we are</Text>
                <Text cursor={'pointer'} _hover={{ color: '#A8FC3B' }} >Login</Text>
            </Stack>
        </Box >
    </>
}
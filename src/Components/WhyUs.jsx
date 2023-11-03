import React from 'react'
import { Box, Avatar, Stack, Image, Text } from "@chakra-ui/react"


import ChatImg from "../Assets/WhyUs_Section/chat-icons.png"
const WhyUs = () => {
    return (
        <>
            <Stack direction={'row'} justifyContent={'space-around'} py={'1%'} px={'5%'}>

                <ChatDisplayone />


                <ChatDisplaytwo />

                <ChatDisplaythree />

            </Stack>


        </>
    )
}

export default WhyUs

const ChatDisplayone = () => {
    return (<>
        <Box>

            <Image padding={'.5rem'} src={ChatImg} boxSize={'fit-content'} alt="one" />
            <Box position={'absolute'} width={'18%'} top={'87.25%'} left={'11.75%'} padding={'.5rem'} ><Text lineHeight={'2.2rem'} fontSize={'lg'} >Enhanced safety with cutting-edge technology  a game-changer.</Text></Box>
            <Box display={'flex'} justifyContent={'end'} pos={'absolute'}
                left={'28%'} top={'98%'}><Avatar name='Ayush Rana' bgColor={'#E9FFC7'} color={'#173102'} /></Box>
        </Box>
    </>)
}
const ChatDisplaytwo = () => {
    return <>
        <Box>
            <Image src={ChatImg} boxSize={'fit-content'} alt="two" />
            <Box position={'absolute'} width={'18%'} top={'86.75%'} left={'41.75%'} padding={'.5rem'}><Text lineHeight={'2.2rem'} fontSize={'lg'} >Skyrocketed efficiency with tailored solutions and a solid track record.</Text></Box>
            <Box display={'flex'} justifyContent={'end'} pos={'absolute'}
                left={'88%'} top={'98%'}><Avatar name='Ravi Sharma' bgColor={'#E9FFC7'} color={'#173102'} /></Box>
        </Box>
    </>
}
const ChatDisplaythree = () => {
    return <>
        <Box>
            <Image src={ChatImg} boxSize={'fit-content'} alt="three" />
            <Box position={'absolute'} width={'18%'} top={'86.75%'} left={'71.75%'} padding={'.5rem'}>
                <Text lineHeight={'2.2rem'} fontSize={'lg'}>Trustworthy partner, respecting privacy while enhancing law enforcement.</Text>
            </Box>
            <Box display={'flex'} justifyContent={'end'} pos={'absolute'}
                left={'58%'} top={'98%'} F><Avatar name='Vipul Verma' bgColor={'#E9FFC7'} color={'#173102'} /></Box>
        </Box>
    </>
}
import React from 'react'
import { Box, Avatar, Stack, Image, Text, Heading, Button, HStack, VStack } from "@chakra-ui/react"
import functionsAvatar from "../Assets/Product_Help_section/avatar_section.png"
import { ChevronRightIcon } from "@chakra-ui/icons"

const Prod_help = () => {
    return (
        <><Box display={'flex'}  px={'2%'} py={'1%'}   >
            <Box display={'flex'}   flexDir={'row'} px={'5%'}   >
                <VStack minW={'45%'} height={'100%'} >
                    {/* image */}
                    <Image src={functionsAvatar} alt="avatar" />
                </VStack>
                <Box  borderRadius={'lg'}  minW={'45%'} px={'1%'} py={'2%'} display={'flex'} flexDirection={'column'} justifyContent={'space-between'}  >
                    {/* <Box px={'1%'} py={'2%'}> */}
                    <Heading fontSize={'5xl'} color={'#173102'} fontWeight={'bold'} fontFamily={`'Montserrat Variable', sans-serif`} lineHeight={'3.75rem'} letterSpacing={'0.02rem'}>How <span style={{ color: "#A8FC3B" }}>
                        Senseface
                    </span>        &nbsp; can help you</Heading>
                    {/* </Box> */}

                    <Text fontSize={'2xl'} lineHeight={'2.8rem'} opacity={'0.8'}>The "Smart Policing using AI and Face Recognition" system, equipped with a versatile tech stack, offers vital support to law enforcement. Its webcam-based face detection rapidly identifies individuals, bolstering proactive crime prevention and aiding in the swift apprehension of suspects. The system's extensive criminal history database streamlines investigations, enabling officers to access critical information efficiently. With a robust authentication system, data security is ensured, while the user-friendly interface accommodates officers with varying technical expertise. </Text>
                    <Box>
                        <Button rightIcon={<ChevronRightIcon />} size={'lg'} bgColor={'#E9FFC7'} variant={'ghost'} _hover={{ bgColor: "#E9FFC7" }} fontSize={'xl'}>Try Us</Button>
                    </Box>

                </Box>

            </Box >
        </Box ></>
    )
}

export default Prod_help

// {/* <VStack border={'1px solid blue'} borderRadius={'lg'}  >
// {/* text */}
// <Stack px={'1%'} py={'2%'}  >
//     {/* primary */}
//     <Heading fontSize={'5xl'} fontWeight={'bold'} fontFamily={`'Montserrat Variable', sans-serif`} lineHeight={'3.75rem'} letterSpacing={'0.02rem'}>How <span style={{ color: "#A8FC3B" }}>
//         Senseface
//     </span>
//         &nbsp; can help you</Heading>
//     <Text fontSize={'xl'} lineHeight={'2.8rem'} opacity={'0.8'}>The "Smart Policing using AI and Face Recognition" system, equipped with a versatile tech stack, offers vital support to law enforcement. Its webcam-based face detection rapidly identifies individuals, bolstering proactive crime prevention and aiding in the swift apprehension of suspects. The system's extensive criminal history database streamlines investigations, enabling officers to access critical information efficiently. With a robust authentication system, data security is ensured, while the user-friendly interface accommodates officers with varying technical expertise. </Text>
//     <Stack boxSize={'xs'} justifyContent={'start'}>
//         <Button rightIcon={<ChevronRightIcon />} size={'lg'} bgColor={'#E9FFC7'} variant={'ghost'} _hover={{ bgColor: "#E9FFC7" }}>Try Us</Button>
//     </Stack>
// </Stack>

// </VStack> */}
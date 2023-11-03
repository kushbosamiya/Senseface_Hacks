import React, { useRef } from 'react'
import { Box, Heading, Stack, Text, Button, AspectRatio } from "@chakra-ui/react"
import { ChevronRightIcon } from "@chakra-ui/icons"


const HeroSection = () => {
    return (
        <>
            <Box display={'flex'} px={'2%'} py={'1%'} justifyContent={'center'} flexDirection={'column'} >
                <SectionContent />
            </Box>
        </>
    )
}

export default HeroSection


const SectionContent = () => {
    return (
        <>

            {/* main text */}
            <Stack textAlign={'center'} px={'1%'} py={'2%'} color={'#173102'}  >
                <Heading fontSize={'5xl'} fontWeight={'bold'} fontFamily={`'Montserrat Variable', sans-serif`} lineHeight={'5rem'} letterSpacing={'0.02rem'} >Securing Tomorrow Today :
                    <Text>
                        <span style={{ color: "#A8FC3B" }}>
                            AI-Powered
                        </span>
                        &nbsp; Policing
                    </Text>
                </Heading>
            </Stack>

            {/* secondary  */}
            <Stack textAlign={'center'} px={'1%'} py={'2%'} alignItems={'center'}   >
                <Box display={'flex'}  >
                    <Text width={'52vw'} opacity={'.8'} fontSize={'2xl'} fontWeight={'medium'} fontFamily={`'Manrope Variable', sans-serif`} lineHeight={'2.5rem'}>Discover the future of policing, where technology enhances security and community well-being.
                    </Text>
                </Box>
            </Stack>

            {/* buttons */}
            <Stack textAlign={'center'} px={'1%'} py={'2%'} alignItems={'center'} >
                <Stack direction={'row'} spacing={4} fontFamily={`'Montserrat Variable', sans-serif`}>
                    <Button bgColor='#E9FFC7' color={'#173102'} _hover={{ bgColor: "#E9FFC7" }} size={'lg'} fontSize={'lg'} rightIcon={<ChevronRightIcon />} variant='solid'>
                        What We Have Done
                    </Button>
                    <Button bgColor='#A8FC3B' color={'#173102'} _hover={{ bgColor: "#A8FC3BF" }} size={'lg'} fontSize={'lg'} rightIcon={<ChevronRightIcon />} variant='ghost'>
                        Get Platform Demo
                    </Button>
                </Stack>
            </Stack>

            {/* intro video  */}
            <Box px={'2%'} py={'2%'} height="auto" >
                <VideoSection />
            </Box>
        </>
    )
}

const VideoSection = () => {
    return <>
    <Box boxSize={'70%'} position={'relative'} left={'16%'}>
    <AspectRatio ratio={4 / 3}>
        <iframe
            style={{
                borderRadius: "1rem"
            }}
            title='naruto'
            width="100%"
            height="100%"
            src='https://www.youtube.com/embed/yWtFb9LJs3o'

        />
    </AspectRatio>
</Box>
    </>
}




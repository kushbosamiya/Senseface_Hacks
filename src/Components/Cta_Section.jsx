import { HStack, Heading, Stack, VStack, Text, Box, Image } from '@chakra-ui/react'
import React from 'react'
import Growth from "../Assets/Cta_section/growth_icon.svg"
import Crm from "../Assets/Cta_section/Crm.svg"
import bell from "../Assets/Cta_section/bell.svg"
import Crmimg from "../Assets/Cta_section/Crm_img_2.svg"

const Cta_Section = () => {
    return (
        <>

            <Box display={'flex'} flexDir={'column'} justifyContent={'center'} py={'1%'} px={'2%'} >
                <Headline />
                <SecondaryText />
                <BannerSection />
            </Box >
        </>
    )
}

export default Cta_Section

const Headline = () => {
    return <Stack direction={'column'}>
        <Heading textAlign={'center'} fontSize={'5xl'} fontWeight={'bold'} fontFamily={`'Montserrat Variable', sans-serif`} lineHeight={'5rem'} letterSpacing={'0.02rem'} > <span style={{ color: "#A8FC3B" }}>AI Eyes</span> <span>for</span>
            <Text >
                Safer Communities
            </Text>
        </Heading>
    </Stack>
}

const SecondaryText = () => {
    return <>
        <Stack direction={'column'} alignItems={'center'} >
            <Text as={'body'} textAlign={'center'} width={'40vw'} fontSize={'2xl'} fontFamily={`'Manrope Variable', sans-serif`} lineHeight={'2.8rem'}>Empowering law enforcement with cutting-edge AI and face recognition.</Text>
        </Stack>

    </>
}

const BannerSection = () => {

    return <>
        <Stack direction={'row'} borderRadius={'xl'} border={'1px solid #d6ff92'} bgColor={'#E9FFC7'} py={'1%'} px={'2%'} justifyContent={'center'}>
            <Box display={'flex'} flexDirection={'column'}gap={'2rem'} width={'45%'} px={'2%'} py={'1%'} justifyContent={'space-between'}>
                {/* primary text */}
                <Heading fontWeight={'bold'} fontFamily={`'Montserrat Variable', sans-serif`} letterSpacing={'0.02rem'} fontSize={'3xl'} color={'#173102'} maxW={'70%'} lineHeight={'2.8rem'}>Seamless integration with productivity tools for smarter policing.</Heading>
                {/* body */}
                <Box display={'flex'} alignItems={'center'} justifyContent={'space-around'}>
                    <Image src={Growth} alt="growth" /><Text maxWidth={'60%'} lineHeight={'2.8rem'} fontSize={'xl'}>Make participants more involved with helpful data and analysis.</Text>
                </Box>
                <Box display={'flex'} alignItems={'center'} justifyContent={'space-around'}><Image src={Crm} alt="crm" /><Text maxWidth={'60%'} lineHeight={'2.8rem'} fontSize={'xl'}>Easily collect and connect attendee information to your CRM for customized follow-up."
                </Text></Box>
                <Box display={'flex'} alignItems={'center'} justifyContent={'space-around'}><Image src={bell} alt="bell" /><Text maxWidth={'60%'} lineHeight={'2.8rem'} fontSize={'xl'}>Keep your sales team updated instantly with Slack , Notion."
                </Text></Box>
            </Box>
            <Box width={'45%'} display={'flex'} alignItems={'center'}>
                <Image src={Crmimg} alt={'crmimg'} objectFit={'cover'} />
            </Box>
        </Stack></>
}
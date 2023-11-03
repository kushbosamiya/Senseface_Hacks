import { Box, Heading, Stack, Text, Flex } from '@chakra-ui/react'
import React from 'react'

const WorkingSection = () => {
    return (
        <Box display={'flex'} justifyContent={'center'} py={'4%'} px={'2%'}  >
            <Flex justifyContent={'space-around'}>
                <Box width={'45%'} display={'flex'} flexDir={'column'} justifyContent={'space-between'}>
                    <BoxOne />
                    <BoxTwo />
                </Box>
                <BoxThree />
            </Flex>
        </Box >
    )
}

export default WorkingSection

const BoxOne = () => {

    return <>
        <Box display={'flex'} flexDirection={'column'} gap={'2%'} borderRadius={'xl'} border={'1px solid #d6ff92'} bgColor={'#E7F4D7'} py={'1%'} px={'2%'}  >
            {/* <Stack > */}
            <Heading fontWeight={'bold'} fontFamily={`'Montserrat Variable', sans-serif`} letterSpacing={'0.02rem'} fontSize={'3xl'} color={'#173102'} lineHeight={'2.8rem'}>How does our system detect faces in real-time using AI?</Heading>
            <Text lineHeight={'2.8rem'} fontSize={'xl'}>Our system uses advanced computer vision technology to analyze video feeds from webcams in real-time. It identifies patterns that resemble human faces, and when it detects a match, it promptly triggers an alert or stores the data for analysis.</Text>
            {/* </Stack> */}
        </Box>
    </>
}
const BoxTwo = () => {
    return <>
        <Box display={'flex'} flexDirection={'column'} gap={'2%'} border={'1px solid #d6ff92'} borderRadius={'xl'} bgColor={'#E7F4D7'} py={'1%'} px={'2%'} >
            {/* <Stack border={'1px solid #d6ff92'} bgColor={'#E7F4D7'} py={'1%'} px={'2%'}> */}
            <Heading fontWeight={'bold'} fontFamily={`'Montserrat Variable', sans-serif`} letterSpacing={'0.02rem'} fontSize={'3xl'} color={'#173102'} lineHeight={'2.8rem'}>How is the criminal history database updated and accessed?</Heading>
            <Text lineHeight={'2.8rem'} fontSize={'xl'}>The database is regularly updated with new criminal records. When an individual's face is detected and identified, the system checks for a match in the database. If a match is found, it provides access to that individual's criminal history for law enforcement to review.</Text>
            {/* </Stack> */}
        </Box></>
}
const BoxThree = () => {

    return <>
        <Box  bgColor={'#E9FFC7'} borderRadius={'xl'} py={'1%'} px={'2%'} width={'45%'}  >

            <Heading fontWeight={'bold'} fontFamily={`'Montserrat Variable', sans-serif`} letterSpacing={'0.02rem'} fontSize={'3xl'} color={'#173102'} lineHeight={'2.8rem'}>How do various technologies collaborate to ensure seamless data integration?</Heading>
            <Text lineHeight={'2.8rem'} fontSize={'xl'}>Our system seamlessly integrates four key technologies: NLP, Python, NumPy, and Supabase, to ensure efficient data management. When data is collected from webcams, Python scripts organize it systematically. Simultaneously, Natural Language Processing (NLP)enhances the data meaning and usefulness. This amalgamation of image and text data is securely stored in Supabase, a robust and secure database system. This collaborative effort among these technologies establishes a streamlined pathway for data, providing law enforcement with valuable insights for smarter policing and improved public safety.</Text>
            {/* </Stack> */}
        </Box></>
}

import {
    Box, Flex, Heading, Image, Stack, FormControl,
    FormLabel, Input
    ,
    FormHelperText,
    Button
} from '@chakra-ui/react'
import React from 'react'
import FormAvatr from "../Assets/form_section/avatar.svg"

const FormSection = () => {
    return (
        <Box display={'flex'} justifyContent={'center'} py={'2%'} px={'2%'}  >
            <Avatar_Section />
            <FormPortion />
        </Box>
    )
}

export default FormSection


const Avatar_Section = () => {

    return <>
        <Box width={'45%'} display={'flex'} justifyContent={'center'}>
            <Image src={FormAvatr} objectFit={'cover'} alt="avatar" />
        </Box>
    </>
}

const FormPortion = () => {
    return <>
        <Box display={'flex'} width={'45%'} gap={'8%'} bgColor={'#E9FFC7'} flexDirection={'column'} py={'2%'} px={'2%'} borderRadius={'xl'}>
            <Heading color={'#173102'} lineHeight={'2.8rem'} fontSize={'3xl'}>Wave at Your Webcam 👋, and We will Wave You Back digitally, of course ...</Heading>
            <Stack bgColor={'#F6FFE6'} borderRadius={'xl'} py={'1%'} px={'2%'}>
                <FormControl as={'body'} display={'flex'} flexDir={'column'}>
                    <Box py=".75rem">

                        <FormLabel>Name</FormLabel>
                        <Input type='text' border="1px solid #173102" />
                    </Box>
                    <Box py=".75rem">

                        <FormLabel>Purpose</FormLabel>
                        <Input type='text' border="1px solid #173102 " />
                    </Box>
                    <Box py=".75rem">

                        <FormLabel>Email address</FormLabel>
                        <Input type='email' border="1px solid #173102" />
                    </Box>
                    <FormHelperText py={'.75rem'}>We would love to respond you ✌️</FormHelperText>
                </FormControl>
            </Stack>
            <Box display={'flex'}><Button px={'50%'} _hover={{ bgColor: "#A8FC3BF" }} size={'lg'} bgColor={'#A8FC3B'} fontSize={'xl'} fontFamily={`'Montserrat Variable', sans-serif`}>SUBMIT</Button></Box>
        </Box>
    </>
}
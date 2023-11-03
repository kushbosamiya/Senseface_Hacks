import React from 'react'

import {
    ChakraProvider
} from '@chakra-ui/react';

// custom theme and fonts 
import CustomTheme from "./Fonts/theme";

// import all the component here , and then final export to App.js

import NavBar from './Components/Header';
import HeroSection from './Components/HeroSection';
import WhyUs from './Components/WhyUs';
import Prod_help from './Components/Prod_help';
import Cta_Section from './Components/Cta_Section';
import WorkingSection from './Components/how_it_works';
import FormSection from './Components/form_section';
import Footer from './Components/Footer';

const FinalRender = () => {
    return (
        <>
            <ChakraProvider theme={CustomTheme}>
                {/* here comes all the components */}

                <NavBar />
                <HeroSection />
                {/* <WhyUs /> */}
                <Prod_help />
                <Cta_Section />
                <WorkingSection />
                <FormSection />
                <Footer />

                {/* <Heading fontSize="4rem" lineHeight="5rem" letterSpacing=".02rem" fontWeight="540" textAlign='center' width='92.5rem' height="7rem">Securing Tomorrow Today:
                    AI-Powered Policing </Heading>
                <Text>kem chhe bdhaane
                </Text> */}
            </ChakraProvider>

        </>
    )
}

export default FinalRender
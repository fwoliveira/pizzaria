import React from 'react';
import HomeAdmin from './src/screens/HomeAdmin';
import { SignIn } from './src/screens/SingIn';
import * as SplashScreen from 'expo-splash-screen'
import {ThemeProvider} from 'styled-components';
import theme from './src/global/styles/theme';
import{
  useFonts,
  DMSerifDisplay_400Regular,
} from '@expo-google-fonts/dm-serif-display';

import{
  DMSans_400Regular
} from '@expo-google-fonts/dm-sans'
import { Routes } from './src/routes';





export default function App() {
  const [fontsLoaded] = useFonts({
    DMSerifDisplay_400Regular,
    DMSans_400Regular
  })
  if(!fontsLoaded) return null;
  SplashScreen.hideAsync();

  return (
    <ThemeProvider theme={theme}>
   
     <Routes/>
    </ThemeProvider>
  );
}

import React from 'react';
import HomeAdmin from './src/screens/HomeAdmin';
import {ThemeProvider} from 'styled-components';
import theme from './src/global/styles/theme';
  


export default function App() {
  return (
    <ThemeProvider theme={theme}>
     <HomeAdmin/>
    </ThemeProvider>
  );
}

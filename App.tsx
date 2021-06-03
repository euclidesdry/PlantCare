import React from 'react';
import AppLoading from 'expo-app-loading';

// Pages
import { Welcome } from './src/pages/Welcome';
import { UserIdentification } from './src/pages/UserIdentification';
import { Confirmation } from './src/pages/Confirmation';

// Fonts
import { 
  useFonts,
  Jost_400Regular,
  Jost_600SemiBold
} from '@expo-google-fonts/jost';

export default function App() {

  const [ fontsLoaded ] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold
  });

  if (!fontsLoaded) // Waiting for Load Fonts
    return <AppLoading/>

  return (
    <Confirmation />
  )
}
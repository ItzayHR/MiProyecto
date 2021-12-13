import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigation1 from './Navigations/StackNavigation1';
import SmiteProvider from './Context/SmiteContext';

export default function App() {
  return (
  <SmiteProvider>
    <NavigationContainer>
      <StackNavigation1/>
    </NavigationContainer>
  </SmiteProvider>
  );
}

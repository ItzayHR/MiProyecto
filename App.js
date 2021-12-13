// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SmiteProvider from './Context/SmiteContext';
import GodsScreen from './Screens/GodsScreen';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <StatusBar style="auto" /> */}
      <SmiteProvider>
        <GodsScreen/>
      </SmiteProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

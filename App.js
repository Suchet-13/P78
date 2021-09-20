import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {StarMapScreen} from './screens/StarMap';
import {DailyPicScreen} from './screens/DailyPic';
import {SpaceCraftScreen} from './screens/SpaceCraft';
import {WebView} from 'react-native-webview';

export default function App() {
  return (
    <View style={styles.container}>
      <SpaceCraftScreen/>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      
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

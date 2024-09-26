import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import { useState } from 'react';
import HomeScreen from './screens/HomeScreen';
import MenuScreen from './screens/MenuScreen';
import { useFonts } from 'expo-font';
import Colors from './constants/colors';

export default function App() {

  const [fontsLoaded] = useFonts({
    "rusi-light" : require("./assets/fonts/Rusillaserif-Light.ttf"),
    "rusi-regular" :require("./assets/fonts/Rusillaserif-Regular.ttf"),
    "Vintage" :require("./assets/fonts/VintageBrush.ttf"),
    "Chiro" :require("./assets/fonts/Chiro-Regular.ttf"),
  })
 
  const [currentScreen, setCurrentScreen] = useState("home");

  function menuScreenHandler(){
    setCurrentScreen("menu");
  }

  function homeScreenHandler(){
    setCurrentScreen("home");
  }


  let screen = <HomeScreen onNext = {menuScreenHandler}/>;

  if (currentScreen === "menu"){
    screen = <MenuScreen onNext = {homeScreenHandler}/>;
  }


  return (
<>
      <StatusBar style ="light"/>
      <SafeAreaProvider style = {styles.container}>{screen}</SafeAreaProvider>
</>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.accent100,
    alignItems: 'center',
    justifyContent: 'center',
  
  },
});

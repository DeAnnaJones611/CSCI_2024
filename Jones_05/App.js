import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import { useState } from 'react';
import HomeScreen from './screens/HomeScreen';
import MenuScreen from './screens/MenuScreen';
import { useFonts } from 'expo-font';
import Colors from './constants/colors';

export default function App() {
//This loads the fonts in the app
  const [fontsLoaded] = useFonts({
    "rusi-light" : require("./assets/fonts/Rusillaserif-Light.ttf"),
    "rusi-regular" :require("./assets/fonts/Rusillaserif-Regular.ttf"),
    "Vintage" :require("./assets/fonts/VintageBrush.ttf"),
    "Chiro" :require("./assets/fonts/Chiro-Regular.ttf"),
  })
 
  //Varible that holds the screen
  const [currentScreen, setCurrentScreen] = useState("home");

  //Changes the screen to the menu screen
  function menuScreenHandler(){
    setCurrentScreen("menu");
  }

  //Changes the screen to the home screen
  function homeScreenHandler(){
    setCurrentScreen("home");
  }

//Pre sets the screen to the home screen
  let screen = <HomeScreen onNext = {menuScreenHandler}/>;


  //Checks the sceen 
    //If it is menu then changes the screen
  if (currentScreen === "menu"){
    screen = <MenuScreen onNext = {homeScreenHandler}/>;
  }

//Returns the screen to be shown on the phone screen
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

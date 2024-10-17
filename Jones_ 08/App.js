import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from "expo-splash-screen";
import Colors from "./constants/colors";
import {useCallback} from "react";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import HomeScreen from "./screens/HomeScreen";


export default function App() {
  const [fontsLoaded, fontError] = useFonts({
  "young" : require("./assets/fonts/Strong Young.otf"),
  "dragon" :require("./assets/fonts/DRAGONHUNTER.otf"),
  "pop" :require("./assets/fonts/Popcat.otf"),
  "show" :require("./assets/fonts/Showdex.otf"),
  // // "popcat" : require("./assets/fonts/Popcat.oft"),
  // "showdex": require("./assets/fonts/Showdex.oft"),
  });

  const onLayoutRootView =  useCallback(async () => {
    if (fontsLoaded || fontError){
      await SplashScreen.hideAsync();
    }
});

let screen = <HomeScreen/>
  
if (!fontsLoaded && !fontError){
  return null;
}
else{
  return(
    <>
      <StatusBar style="light"/>
      <SafeAreaProvider style={styles.container}>
        {screen}
      </SafeAreaProvider>
    </>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,  

  },
});

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import { useCallback } from 'react';
import * as SplashScreen from "expo-splash-screen";
import HomeScreen from './screen/HomeScreen';
import VacationOverviewScreen from './screen/VacationOverviewScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Colors from "./constants/colors";

//This makes the stack constat 
const Stack = createNativeStackNavigator();

export default function App() {

  //This dose not laost the screen till all the fonts are made 
  const [fontsLoaded, fontError] = useFonts({
    juni: require("./assets/font/JunigardenSwash.otf")
  });

  //This makes an async function to wait for the screen to load
  const onLayoutRootView =  useCallback(async () =>{
    if(fontsLoaded || fontError){
      await SplashScreen.hideAsync();
    }

  }, [fontsLoaded, fontError]);

  //if neither are true returns null
  //Else the screen shows 
   if (!fontsLoaded && !fontError){
    return null;
   } else{
    //This uses stack naivigation to navigate throught the screens
      return(
          <>
            <StatusBar style = "light"/>
          <NavigationContainer>
              <Stack.Navigator
                initialRouteName= "HomeScreen"
                screenOptions={{
                  headerStyle: {backgroundColor: Colors.primary500},
                  headerTintColor:  Colors.primary300,
                  headerTitleStyle: {fontSize: 40},
                  contentStyle: {backgroundColor: Colors.primary800},

                }}
              >
                <Stack.Screen
                  name = "HomeScreen"
                  component={HomeScreen}
                  options={{
                      title: "Country Locations"
                  }}
                />

                <Stack.Screen
                  name = "VacationOverviewScreen"
                  component={VacationOverviewScreen}
                />
              </Stack.Navigator>
          </NavigationContainer>
            
          </>
      );
   }


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
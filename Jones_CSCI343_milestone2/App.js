import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts} from 'expo-font';
import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer } from '@react-navigation/native';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { useCallback } from 'react';
import  Colors  from './constants/colors';
import { Entypo, MaterialCommunityIcons, MaterialIcons, FontAwesome5 } from "@expo/vector-icons";
import BookmarksContextProvider from './store/context/bookmarks-context';



import AddNewDeckScreen from "./screens/AddNewDeckScreen";
import EditDeckScreen from './screens/EditDeckScreen';
import EditDeckAllScreen from './screens/EditDeckAllScreen';
import FavoriteDeckScreen from './screens/FavoriteDeckScreen';
import SelectDeckScreen from './screens/SelectDeckScreen';
import TestScreen from './screens/TestSreen';





//Creates constants for all the screens 
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

//Makes the Drawer Navigation of the screen 
function DrawerNavigator(){
  return (

    //The basic design of the outter drawer
    //And screens connected to the drawer
    <Drawer.Navigator
      initialRouteName='Listings'
      screenOptions={{
        headerStyle: {backgroundColor: Colors.primary500},
        headerTintColor: "white",
        headerTitleStyle :{
          fontFamily: "nolluqa",
          fontSize: 40,
          color: Colors.accent800
        },
        screenContainerStyle: {backgroundColor: Colors.primary300},
        drawerContentStyle: {backgroundColor: Colors.primary500},
        drawerInactiveTintColor: Colors.primary300,
        drawerActiveTintColor: Colors.accent500,
        drawerActiveBackgroundColor: Colors.primary800,
      }}
    >
         <Drawer.Screen 
        name="Select Deck"
        component={SelectDeckScreen}
        options={{
          title: "Select Deck",
          drawerLabel: "Select Deck",
          drawerIcon: ({color,size}) => (
            <Entypo name="bookmark" size={size} color={color}/>
          ),
        }}
        />
            <Drawer.Screen 
        name="Favorite Deck"
        component={FavoriteDeckScreen}
        options={{
          title: "Favorite Deck",
          drawerLabel: "Favorite Deck",
          drawerIcon: ({color,size}) => (
            <Entypo name="bookmark" size={size} color={color}/>
          ),
        }}
        />
        <Drawer.Screen
        name = "Add New Deck"
        component={AddNewDeckScreen}
        options={{
          title: "Add New Deck",
          drawerLabel: "Add New Deck",
          drawerIcon: ({ color, size}) => (
            <Entypo name="list" size ={size} color={color}/>),
        }}
      />
      <Drawer.Screen 
        name="Edit Deck"
        component={EditDeckAllScreen}
        options={{
          title: "Edit Deck",
          drawerLabel: "Edit Deck",
          drawerIcon: ({color,size}) => (
            <Entypo name="bookmark" size={size} color={color}/>
          ),
        }}
        />


 
    </Drawer.Navigator>
  );
}

//Creates the tabs at the bottom of the screen



export default function App() {

  //Make sure the fonts load before showing the screens
  const [fontsLoaded, fontError] = useFonts({
      playfair: require("./assets/fonts/Playfair.ttf"),
      playfairBold: require("./assets/fonts/PlayfairBold.ttf"),
      playfairItalic: require("./assets/fonts/PlayfairBoldItalic.ttf"),
      nolluqa: require("./assets/fonts/NolluqaRegular.otf"),

});

    const onLayoutRootView = useCallback(async () => {
      if (fontsLoaded || fontError){
        await SplashScreen.hideAsync();
      }
    });

    if(!fontsLoaded && !fontError) {
      return null;
    } else{
  return (
    //The Stack navigation of the screen 
    //And the screens that have access to the Stack navigation
    //The bookmarksContext Provider is used for all 
        <>
          <StatusBar style ="light"/>
            <BookmarksContextProvider>
            <NavigationContainer>
            <Stack.Navigator
              initialRouteName="DrawerScreen"
              screenOptions = {{
                  headerTintColor: Colors.primary300,
                  headerStyle:  {backgroundColor: Colors.primary500},
                  contentStyle: {backgroundColor: "black"},
              }}>
                  <Stack.Screen
                    name="DrawerScreen"
                    component={DrawerNavigator}
                    options = {{
                      headerShown :false,
                    }}
                  />
                  <Stack.Screen
                    name="Edit Specific Deck"
                    component = {EditDeckScreen}
                    options= {{
                      headerBackTileVisible: false,
                    }}
                  />
                  <Stack.Screen
                    name="NewsDetail"
                    component = {TestScreen}
                    options= {{
                      headerBackTileVisible: false,
                    }}
                  />
              </Stack.Navigator>
          </NavigationContainer> 
            </BookmarksContextProvider>


        


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
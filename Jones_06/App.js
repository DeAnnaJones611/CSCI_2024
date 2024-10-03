import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AddRecipeScreen from './screens/AddRecipeScreen';
import RecipeScreen from './screens/RecipeScreen';
import { useFonts } from 'expo-font';
import Colors from './constants/colors';

export default function App() {
  //Fonts: 12:15

  const [fontsLoaded] = useFonts({
    "dragon" : require("./assets/fonts/Purple Dragon.ttf"),//Wokrs
    "funnytoys" :require("./assets/fonts/FunnyToysDEMO.otf"),//works
    "birthday" :require("./assets/fonts/Simple Birthday.otf"),//Works
    "Coffee" :require("./assets/fonts/Coffee Soda.otf"), //Works
  })

  const [currentScreen, setCurrentScreen] = useState("home");
  const [currentID, setCurrentID] = useState(4);
  const [currentRecipe, setCurrentRecipe] = useState([
    {
      id: 1,
      title: "Title 1",
      text: "This is the text of 1",

    },
    {
      id: 2,
      title: "Title 2",
      text: "This is the text of 2",
    },
    {
      id: 3,
      title: "Title 3",
      text: "This is the text of 3",
    },

  ]);


  function homeScreenHandler(){
      setCurrentScreen("home");
  }

  function recipeScreenHandler(){
    setCurrentScreen("recipe");
  }

  function addRecipeScreenHandler(){
    setCurrentScreen("add");
  }


    function addRecipeHandler(enterRecipeTitle, enteredRecipeText){
      setCurrentRecipe((currentRecipe)=>{
        return [
          ...currentRecipe,
          {id: currentID, title: enterRecipeTitle, text: enteredRecipeText},
        ];
      });
      setCurrentID(currentID+1);
      recipeScreenHandler();
    }

    function deleteRecipeHandler(id){
        setCurrentRecipe((currentRecipe) =>{
          return currentRecipe.filter((item) => item.id !== id);
        })
    }


    let screen = <HomeScreen onNext = {recipeScreenHandler}/>;

    if (currentScreen === "add"){
      screen = <AddRecipeScreen onCancel={recipeScreenHandler} onAdd={addRecipeHandler}/>
    }


    if (currentScreen === "recipe"){
      screen = <RecipeScreen onAdd={addRecipeScreenHandler} onHome={homeScreenHandler} onDelete={deleteRecipeHandler} currentRecipe ={currentRecipe}/>
    }

  return (
  <>
    <StatusBar style="auto"/>
    <SafeAreaProvider style = {styles.container}>{screen}</SafeAreaProvider>
  </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.pl1primary1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

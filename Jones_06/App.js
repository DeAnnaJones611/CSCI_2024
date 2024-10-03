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
//THis is the fonts Loaded
  const [fontsLoaded] = useFonts({
    "dragon" : require("./assets/fonts/Purple Dragon.ttf"),//Wokrs
    "funnytoys" :require("./assets/fonts/FunnyToysDEMO.otf"),//works
    "birthday" :require("./assets/fonts/Simple Birthday.otf"),//Works
    "Coffee" :require("./assets/fonts/Coffee Soda.otf"), //Works
  })
 //These are the vaibles used for the app
  const [currentScreen, setCurrentScreen] = useState("home");
  const [currentID, setCurrentID] = useState(4);

  //This is the data for the app
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

 //This changes it to the home screen
  function homeScreenHandler(){
      setCurrentScreen("home");
  }
//This changes the app to the recipe screen

  function recipeScreenHandler(){
    setCurrentScreen("recipe");
  }
  //This changes the app to the add screen

  function addRecipeScreenHandler(){
    setCurrentScreen("add");
  }

//This is the function used to add the information to the lists
    function addRecipeHandler(enterRecipeTitle, enteredRecipeText){

           //Loops to the end and 
        //Add the title and text passed through
      setCurrentRecipe((currentRecipe)=>{
        return [
          ...currentRecipe,
          {id: currentID, title: enterRecipeTitle, text: enteredRecipeText},
        ];
      });

      //Increase the Id
      setCurrentID(currentID+1);

       //Closes the page
      recipeScreenHandler();
    }
 //This delets the information 
    function deleteRecipeHandler(id){
       //Loops through the end and takes the id out of the items
        setCurrentRecipe((currentRecipe) =>{
          return currentRecipe.filter((item) => item.id !== id);
        })
    }

    //Automatically makes the main screen to the home screen
    let screen = <HomeScreen onNext = {recipeScreenHandler}/>;


      //Changes the screen if it is add
      //Passing the functions through
    if (currentScreen === "add"){
      screen = <AddRecipeScreen onCancel={recipeScreenHandler} onAdd={addRecipeHandler}/>
    }

    //Changes the screen if it is recipe 
      //Passing the functions
    if (currentScreen === "recipe"){
      screen = <RecipeScreen onAdd={addRecipeScreenHandler} onHome={homeScreenHandler} onDelete={deleteRecipeHandler} currentRecipe ={currentRecipe}/>
    }

  
    //This is where the screens are being shown
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

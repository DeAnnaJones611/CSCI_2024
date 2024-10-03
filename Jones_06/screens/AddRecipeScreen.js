import {View, StyleSheet, Text, TextInput, ScrollView} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Title from "../components/Title";
import NavButton from "../components/NavButton";
import { useState } from "react";
import Colors from "../constants/colors";

function AddRecipeScreen(props){
    //Creates the safe area insets used 
    const insets = useSafeAreaInsets();

    //These are the varibles used to  keep track of the 
        //Title and Recipe steps 
        //Entered by the user
    const [recipeTitle, setRecipeTitle] = useState("");
    const [recipeText, setRecipeText] = useState("");

    //This puts the input of the title as the varible
    function inputTitleHandler(recipeTitle){
        setRecipeTitle(recipeTitle);
    }

    //This changes the input of the text as the varible
    function inputTextHandler(recipeText){
        setRecipeText(recipeText);
    }

    //This passes the information to the function
        //In order to run the function
    function addRecipeHandler(){
        props.onAdd(recipeTitle, recipeText);
    }


    //This page is a form
        //Where the user can input a recipe title and steps
        //This allows the user to save
            //And the information shows up on the other page
        //This will cancle and clear the screen when cancle is clicked
    return(
        <View
            style = {[
                styles.rootContainer,{
                    paddingTop: insets.top,
                    paddingBottom: insets.bottom,
                    paddingLeft: insets.left,
                    paddingRight: insets.right,
                }

            ]}>

            <View style ={styles.titleContainer}>
                <Title>
                   Add Recipe
                </Title>    
            </View>
 
            <View style={styles.scrollViewContainer}>
                <ScrollView style={styles.scrollViewItems}>     
                    <View style ={styles.inputTitleContainer}>
                        <TextInput
                        style = {styles.inputTitle}
                        placeholder="Input the Title of the recipe"
                        onChangeText={inputTitleHandler}
                        value={recipeTitle}
                         
                        />
                    </View>

                    <View tyle ={styles.inputTitleContainer}>
                        <TextInput
                        style = {styles.inputTitle}
                        placeholder="Please, put in the steps and ingrediets."
                        onChangeText={inputTextHandler}
                        value={recipeText}
                        multiline={true}
                        numberOfLines={20}
                        textAlignVertical="top"
                        />
                    </View>

                </ScrollView>
            </View>

             <View style = {styles.buttonContainerAll}>
                <View style = {styles.buttonContainerSingle}>
                    <NavButton onPress = {props.onCancel}>Cancel</NavButton>
                </View>


                <View style = {styles.buttonContainerSingle}>
                    <NavButton onPress = {addRecipeHandler}>Save</NavButton>
                </View> 
            </View> 







        </View>
    )

}

export default AddRecipeScreen;

const styles = StyleSheet.create({
        rootContainer:{
            flex: 1,
            alignItems: "center",
        },
        titleContainer:{
            padding: 5,
            margin: 10,
        },
        inputContainerAll:{
            padding:4,
            borderWidth:7,
            width: "100%", 

        },

        scrollViewContainer:{
            flex: 5,
            width: 350,
        },

        inputTitleContainer:{
            margin: 3,
            padding:2,
            backgroundColor: Colors.pl1primary2,
            width: "100%",

        },

        inputTitle:{
            margin:2,
            padding: 2,
            backgroundColor:"red",
            width: "100%",
        },
        
        inputTextContainer:{
            margin: 2, 
            padding: 1,
            width:"100%",
        },
        inputText:{
            padding: 2,
            margin: 2,
            width: "100%",

        },

        

        buttonContainerAll:{
            flexDirection: "row",
            height: "20%",
            padding:5,
            margin: 10,
            // backgroundColor: "green"

        },

        buttonContainerSingle:{
            margin: 5,
            padding: 2,
            justifyContent: "center",
            alignItems: "center",
        },



});




//<View tyle ={styles.inputTextContainer}>
//<TextInput
 //style = {styles.inputText}
 //placeholder="Please Put in the steps and ingrediets"
 //onChangeText={setRecipeText}
 //textAlign="top"
 //multiline="true"
 
 ///>
//</View>
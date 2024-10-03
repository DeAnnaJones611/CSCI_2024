import {View, StyleSheet, Text,FlatList} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useState } from "react";
import Title from "../components/Title";
import NavButton from "../components/NavButton";
import RecipeItem from "../components/RecipeItem";
import RecipeView from "../modals/ViewRecipeScreen";
import Colors from "../constants/colors";


function RecipeScreen(props){
    //Creates the safe area insets used 
    const insets = useSafeAreaInsets();

    //These are the constants used for the page
        //One for the modal and the rest to manage the data pulled in from the data
    const [modalIsVisible, setModalIsVisible] = useState(false);
    const [modalRecipeTitle, setModalRecipeTitle] = useState("");
    const [modalRecipeText, setModalRecipeText] = useState("");


    //This function is for the modal
        //Passes the title and text to the modal
        //Makes the modal true
    function recipeViewHandler(title, text){
        setModalRecipeTitle(title);
        setModalRecipeText(text);
        setModalIsVisible(true);
    }


    //This closes the modal
    function closeRecipeViewHandler(){
        setModalIsVisible(false);
    }


        
    //This is the recipe screen

    //Holds all the recipes in the data base

    //Allows the user to view and delete the reipce from the app
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
                    Recipe Screen
                </Title>    
            </View>

            <View style={styles.listContainer}>
                <FlatList
                 data={props.currentRecipe}
                 keyExtractor={(item,index) =>{
                    return item.id;
                 }}

                 alwaysBounceVertical = {false}

                 renderItem = {(itemData) => {
                    return(
                        <RecipeItem
                            id = {itemData.item.id}
                            title = {itemData.item.title}
                            onView={recipeViewHandler.bind(
                                this,
                                itemData.item.title,
                                itemData.item.text
                            )}
                            onDelete = {props.onDelete.bind(this, itemData.item.id)}
                        />
                    );
                 }}
                />
            </View>
            <View style={styles.buttonContainerAll}>
                <View style={styles.buttonContainerSingle} >
                    <NavButton onPress = {props.onAdd}>Add New</NavButton>
                </View>

                <View style={styles.buttonContainerSingle} >
                    <NavButton onPress = {props.onHome}>Return Home</NavButton>
                </View>
            </View>

        <RecipeView
            visible = {modalIsVisible}
            title = {modalRecipeTitle}
            text = {modalRecipeText}
            onClose = {closeRecipeViewHandler}
        />

        </View>


    )

}

export default RecipeScreen;

const styles = StyleSheet.create({
    rootContainer:{
        flex: 1,
        alignItems: "center",
    },

    titleContainer:{
        flex: 1,
        margin:5,

    },
    listContainer: {
        flex:6,
        margin: 10,
        padding: 5,
        paddingRight:20,
        width: 350,
        backgroundColor: Colors.pl2accent2,
    },

    buttonContainerAll:{
        flex: 1,
        flexDirection:"row",
        margin: 10,
    },
    buttonContainerSingle:{
        margin: 2,
        justifyContent: "center",
        alignItems: "center",
    },
});
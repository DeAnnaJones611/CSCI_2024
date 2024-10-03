import {View, StyleSheet, Text, Image, Linking} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Title from "../components/Title";
import NavButton from "../components/NavButton";

function HomeScreen(props){
    //Creates the safe area insets used 
    const insets = useSafeAreaInsets();


    //This is the main screen

    //There is a title, photo, text, and a nav button
    
    //The button at the bottom goes to the different screen
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
                   Fancy Recipes
                </Title>    
            </View>

            <View style ={styles.imageContainer}>
                <Image style ={styles.imagePic} source = {require("../assets/images/main.png")}/>
            </View>


            <View style = {styles.buttonContainer}>
                <NavButton onPress = {props.onNext}>View Recipes</NavButton>
            </View>


        </View>
    )

}

export default HomeScreen;

const styles = StyleSheet.create({
    rootContainer:{
        flex: 1,
        alignItems: "center",
    },

    imageContainer:{
        flex: 2,
        width: 350,
        height: "80%",
        justifyContent: "center",
        alignItems : "center",
        margin: 30,

    },
    imagePic:{
    height: "100%",
	width: "100%",
	borderWidth: 3,
    resizeMode: "stretch",
	borderColor:"#CC7722",
    borderBlockColor: "#F9A603",
    marginTop:10,
    borderRadius:50,
    borderStyle: "dashed",
    },

    inforContainer:{
        flex: 1,
    },

    wordContainer:{
        padding: 10,
        textAlign: "center",
    },
    wordText:{
        fontSize:25,
        textAlign: "center",
    },


    buttonContainer:{
        flex: 1,
    },
});
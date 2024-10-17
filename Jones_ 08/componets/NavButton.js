import { Pressable, StyleSheet, Text, View,useWindowDimensions } from "react-native";
import Colors from "../constants/colors";

//This is a reusable buttons for the page
function NavButton(props){

    //This uses the windowdimensions of the screen
    const {width, height} = useWindowDimensions();

    //Below is a button 

    //That is styled and takes in the props of the page 
    return(
        <Pressable
            onPress={props.onPress}

            style = {({pressed}) => pressed && styles.pressedItem}
        >
            <View style = {styles.buttonContatiner}>
                <View style = {styles.textContainer}>
                    <Text style = {[styles.text, {fontSize: width * 0.1}]}>
                        {props.children}
                    </Text>
                </View>
            </View>
        </Pressable>
    );
}

export default NavButton;


//This is the styling of the button
const styles = StyleSheet.create({
    buttonContatiner:{
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 300,
        width: 1000,
        maxWidth: "70%",
        marginHorizontal: 10,
        marginVertucal: 10,
        backgroundColor:Colors.accent40,
        borderColor: Colors.primary20,
        borderWidth: 3,
    },
    pressedItem:{
        opacity: 0.5, 
    },
    text:{
        padding: 8,
        fontSize: 25,
        textAlign: "center",
        color:Colors.primary10,
        fontFamily: "young",
    },
});
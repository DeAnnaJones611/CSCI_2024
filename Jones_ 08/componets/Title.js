import {Text, StyleSheet,useWindowDimensions} from "react-native";
import Colors from "../constants/colors";


//This is the title that will be used for the page
function Title(props){

    //This uses the window deminsions of the screen
    const {width, height} =  useWindowDimensions();

    //This is the title of text
    return <Text style = {[styles.title, {fontSize: width *0.13}]}>{props.children}</Text>;
}

export default Title;

//This is the styling of the title
const styles = StyleSheet.create({
    title:{
        textAlign: "center",
        fontFamily: "dragon",
        fontSize:20,
        padding: 5,
        backgroundColor: Colors.accent40,
        color: Colors.accent30,
        borderColor: Colors.accent30,
        borderWidth: 2,
    },
});
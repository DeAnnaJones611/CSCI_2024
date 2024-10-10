import {Text, StyleSheet} from "react-native";

import  Colors from "../constants/colors";
//This is a reusable title container for app

function Title(props){
    return <Text style = {styles.title}>{props.children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
    title:{
        fontSize :50,
        textAlign: "center",
        fontFamily: "funnytoys",
        color: Colors.primary800,
    },
})


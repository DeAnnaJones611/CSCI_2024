import {Text, StyleSheet}  from "react-native";
import Colors from "../constants/colors";

function Title(props){

    return <Text style ={styles.title}>{props.children}</Text>
}

export default Title;

const styles = StyleSheet.create({
    title: {
        fontSize: 60,
        textAlign: "center",
        fontFamily: "rusi-regular",
        padding: 5,
        borderColor: Colors.primary100,
        borderWidth: 3,
        color: Colors.accent500,
    }
})
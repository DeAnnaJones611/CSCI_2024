import {Text, StyleSheet}  from "react-native";
import Colors from "../constants/colors";

//This is a title Componet to be used

//This is the styling of the title component
function Title(props){

    return <Text style ={styles.title}>{props.children}</Text>
}

export default Title;

const styles = StyleSheet.create({
    title: {
        fontSize: 40,
        textAlign: "center",
        padding: 15,
        borderWidth: 5,
        borderColor: Colors.pl2primary2,
        borderRadius: 40,
        backgroundColor: Colors.pl2primary1,
        fontFamily:"dragon",
        color: Colors.pl1primary1
        

    }
})
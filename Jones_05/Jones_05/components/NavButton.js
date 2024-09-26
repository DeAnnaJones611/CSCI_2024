import { Pressable, StyleSheet, View,Text} from "react-native";
import Colors from "../constants/colors";
function NavButton(props){

    //This is a Nav Button
    //This takes in the name and where the next page will be
    return(
        <Pressable
            android_ripple={{color: "grey"}}
            onPress = {props.onPress}
        >
            <View style ={styles.buttonContainer}>
                <View style = {styles.textContainer}>
                    <Text style={styles.text}>
                        {props.children}
                    </Text>
                </View>
            </View>

        </Pressable>
    )
}

export default NavButton;

const styles = StyleSheet.create({
    buttonContainer:{
        justifyContent: "center",
        alignItems: "center",
        borderColor: Colors.accent500,
        borderWidth: 3,
        margin: 10,
        
    },
    textContainer:{
        padding:10,
        backgroundColor: Colors.primary100,

    },
    text:{
        padding: 8,
        fontSize: 35,
        textAlign: "center",
        fontFamily:"Chiro",
        color: Colors.accent500,
        

    },

});
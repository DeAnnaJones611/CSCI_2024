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


//This styles the nav button
const styles = StyleSheet.create({
    buttonContainer:{
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 3,
        margin: 10,
        borderStyle: "dashed",
        borderBlockColor: Colors.pl2accent1,
        
    },
    textContainer:{
        padding:5,
        margin: 5,

    },
    text:{
        padding: 8,
        fontSize: 30,
        textAlign: "center",
        fontFamily:"birthday",
        color:Colors.pl1accent1,
        

    },

});
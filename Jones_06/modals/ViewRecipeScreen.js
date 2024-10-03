import {Modal, View, StyleSheet, Text} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import NavButton from "../components/NavButton";
import Title from "../components/Title";
import Colors from "../constants/colors";


//When the user wants to see the recipe information:

//This is the recipe modal and all the styling 

//This refrence the title and text of the data
function RecipeView(props) {
    const insets = useSafeAreaInsets();

    return(
        <Modal visible = {props.visible} animationType="slide">
            <View
                style = {[
                    styles.rootContainer,{
                        paddingTop: insets.top,
                        paddingBottom: insets.bottom,
                        paddingLeft: insets.left,
                        paddingRight: insets.right,
                    },
                ]}
            >
                <View style={styles.titleContainer}>
                    <Title>{props.title}</Title>
                </View>

                <View style={styles.textContainer}>
                    <Text style={styles.textWords}>{props.text}</Text>
                </View>

                <View style={styles.buttonContainer}>
                    <NavButton onPress = {props.onClose}> Return to Recipes</NavButton>
                </View>
            </View>
        </Modal>
    );
}

export default RecipeView;


const styles = StyleSheet.create({
    rootContainer:{
        flex: 1,
        alignItems: "center",
        backgroundColor: Colors.pl2accent2
        
    },
    
    titleContainer:{
        flex:1,
        padding: 5,
        margin:5,
    },
    textContainer:{
        flex: 3,
        margin: 10,
        padding: 20,
        borderColor: Colors.pl2primary2,
        borderWidth: 5,
        width: "80%",
    },
    textWords:{
        padding: 2,
        margin: 5,
        fontSize:20,
        fontFamily:"Coffee",
        color: Colors.pl1accent1,
    },
    buttonContainer:{
        flex: 2,
        margin: 5,
    },


});


//<Modal visible={props.visible}/>
//<View 
//style = {[
 //   styles.rootContainer,
//    {paddingTop: insets.top,
//    paddingBottom: insets.bottom,
//    paddingLeft: insets.left,
//    paddingRight: insets.right,
//    },
//]}>
//</View>
//<Modal/>
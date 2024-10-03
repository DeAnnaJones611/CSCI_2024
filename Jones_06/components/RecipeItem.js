import { View, Text,Button, StyleSheet } from "react-native";
import Colors from "../constants/colors";



function RecipeItem(props){
    //This is the elements and the styleing of the Recipe Item

    //Will take in the title of the data

    //Will go to the view Modle and Delete the items
    
    return(
        <View style ={styles.AllContainer}>
            <View style = {styles.titleContainer}>
                <Text style={styles.textWord}>
                    {props.title}
                </Text>
            </View>


            <View style ={styles.buttonContainerAll}>
                <View style ={styles.buttonContainer}>
                    <Button title = "view" onPress = {props.onView}/>
                </View>
                <View style ={styles.buttonContainer}>
                    <Button title = "delete" onPress = {props.onDelete}/>
                </View>
            </View>
        </View>
    );

}

export default RecipeItem;


const styles = StyleSheet.create({

    AllContainer:{
        padding: 5,
        backgroundColor: Colors.pl1accent1,
        margin: 10,
        width: "100%",

    },

    titleContainer:{
        flex: 3,
        backgroundColor: Colors.pl2accent1,
        width: "90%"

    },

    textContainer:{
        margin: 5,
        flex: 3
    },

    textWord:{
        fontSize: 50,
        fontFamily: "Coffee",
        color: Colors.pl2primary2,

    },

    buttonContainerAll:{
        flex:2,
        flexDirection: "row",
        margin: 5,

    },

    buttonContainer:{
        padding: 2

    },

    
});


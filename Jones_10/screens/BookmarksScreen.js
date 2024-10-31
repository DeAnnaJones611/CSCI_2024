import { View, Text, StyleSheet } from "react-native";
import { useContext } from "react";
//import { BookmarksContext} from "../store/context/bookmarks-context";
import { LISTINGS } from "../data/dummy_data";
import List from "../components/List";
import Colors from "../constants/colors";

//This is the book mark screen
function BookmarksScreen (){
    <View style = {styles.rootContainer}>
        <Text style = {styles.text}>Book Mark Screen</Text>
    </View>

    
}

export default BookmarksScreen;

const styles = StyleSheet.create({
    rootContainer:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "black",
    },
    text: {
        fontSize: 24,
        fontWeight: "bold",
        color: "black",
    },
});
    
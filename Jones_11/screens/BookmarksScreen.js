import { View, Text, StyleSheet } from "react-native";
import { useContext } from "react";
import { BookmarksContext} from "../store/context/bookmarks-context";
import { LISTINGS } from "../data/dummy_data";
import List from "../components/List";
import Colors from "../constants/colors";
import ListingItem from "../components/ListingItems";

//This is the book mark screen
function BookmarksScreen (){

    //Makes the context from the context folder
    const bookmarkedListingsCtx = useContext(BookmarksContext);

    //Filters all the items for the ids 
    const bookmarkedListings = LISTINGS.filter((listingItem) => { 
        return bookmarkedListingsCtx.ids.includes(listingItem.id);
    });


    //Check if there are any 
        //Dose the following
    if (bookmarkedListings.length === 0 ){

        //Tells the user there are  no saved stories 
        return (
        <View style ={styles.rootContainer}>
            <Text style = {styles.text}>You have no saved News Stories</Text>
        </View>
    );
    } else{
        //Creates the screen using listings items
            // using the bookmarkedlisting filter results 
           return <List items = {bookmarkedListings} />; 
    }


    
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
        color: Colors.accent500,
    },
});
    
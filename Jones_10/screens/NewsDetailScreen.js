import { View, Text, StyleSheet, Image } from "react-native";
import { useState, useLayoutEffect, useContext } from "react";
import { LISTINGS } from "../data/dummy_data";
import BookmarkButton from "../components/BookmarkButton";
import Colors from "../constants/colors";
//import { BookmarksContext } from "../store/context/bookmarks-context";

// This gets the listing id 
//Then gets all the information connected to that part 
function NewsDetailScreen(props) {

  const listingId = props.route.params.listingId;
  const selectedListing = LISTINGS.find((listing) => listing.id === listingId);

  const [pressed, setPressed] = useState(false);

  function headerButtonPressHandler(){
    setPressed(!pressed);
  }



  useLayoutEffect(() => {
    props.navigation.setOptions({
      title: "",
      headerRight: () => {
        return (
          <BookmarkButton
            pressed={pressed}
            onPress={headerButtonPressHandler}
          />
        );
      },
    });
  }, [props.navigation, headerButtonPressHandler]);

  //Creates the list 
  //Using the varible selectedlisting instead of props
  return (
    <View style={styles.rootContainer}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{ uri: selectedListing.imageUrl }}
        />
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.price}>
          {selectedListing.headline.toLocaleString()}
        </Text>

        <Text style={styles.space}>
         Date:  {selectedListing.date}
        </Text>
          
        <Text style={styles.space}>
           Author:  {selectedListing.author} 
          </Text> 
        <Text style={styles.space}>
          Agency: {selectedListing.agency} 
        </Text>


        <Text style={styles.description}>
            {selectedListing.description}
        </Text>
      </View>
    </View>
  );
}
export default NewsDetailScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  imageContainer: {
    marginVertical: 10,
    height: 300,
  },
  image: {
    height: "100%",
    resizeMode: "cover",
    borderRadius: 7,
  },
  infoContainer: {
    borderRadius: 7,
    backgroundColor: Colors.primary500o8,
    flex: 1,
    alignItems: "center",
  },
  price: {
    color: Colors.primary300,
    fontSize: 25,
    fontFamily: "playfairBold",
    paddingBottom: 15,
  },
  space: {
    color: Colors.primary300,
    fontSize: 20,
    fontFamily: "playfair",
    paddingBottom: 5,
  },
  address: {
    color: Colors.primary300,
    textAlign: "center",
    width: "100%",
    fontSize: 20,
    fontFamily: "playfair",
    paddingBottom: 5,
  },
  year: {
    color: Colors.primary300,
    fontSize: 25,
    fontFamily: "playfair",
    marginBottom: 30,
  },
  description: {
    paddingTop: 20,
    color: Colors.primary300,
    width: "90%",
    textAlign: "justify",
    fontSize: 15,
    fontFamily: "playfair",
  }
});
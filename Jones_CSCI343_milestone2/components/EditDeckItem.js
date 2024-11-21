import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

function EditDeckItem(props) {
  const navigation = useNavigation();

  //Select the next place the by the listing id
    //Right now it gose to the next screen
    //Delete button will actually delete the flash card when it is functional 
    function selectedListingHandler() {
      navigation.navigate("Edit Specific Deck", {
        listingId: props.id,
      });
    }

    //Returns a pressable of the news information
    //With alternating colors 
  return (
    <View
      style={[
        styles.itemContainer,
        { backgroundColor: props.listIndex % 2 == 0 ? "#ccc" : "#fff" },
      ]}
    >
         <View style={styles.deckName}>
                <Text style={styles.deckNameText}>This is thet Deck itemContainer</Text>
            </View>

            <View>
            <Pressable  onPress={selectedListingHandler} style ={styles.buttonPress}>
                <View>
                    <Text>Edit</Text>
                </View>
            </Pressable>

            <Pressable  onPress={selectedListingHandler} style ={styles.buttonPress}>
                <View>
                    <Text>Delete</Text>
                </View>
            </Pressable>
            </View>

    </View>
  );
}

export default EditDeckItem;

const styles = StyleSheet.create({
  itemContainer: {
    paddingHorizontal: 5,
    paddingTop: 5,
    marginBottom: 10,
    borderRadius: 7,
    flexDirection: "row"
  },
  button: {
    flex: 1,
  },
  buttonPress:{
    padding: 5,
    margin: 10,
    backgroundColor: "yellow",
    borderColor: "red",
    borderWidth: 3,
  },
  deckName:{
    padding: 5,
    margin: 10,
    
  },
  deckNameText:{
    fontSize: 20,
    textAlign: "center",
  },

  imageContainer: {
    height: 300
  },
  image: {
    height: "100%",
    resizeMode: "cover",
    borderRadius: 7,
  },
  infoContainer: {
    flex: 1,
    alignItems: "center"
  },
  price: {
    fontSize: 15,
    fontFamily: "playfairBold",
    paddingBottom: 5
  },
  space: {
    fontSize: 25,
    fontFamily: "playfair",
    paddingBottom: 5
  },
  address: {
    textAlign: "center",
    width: "100%",
    fontSize: 15,
    fontFamily: "playfair",
    paddingBottom: 5
  }
});
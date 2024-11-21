
import { View, Text, Button,TextInput } from "react-native";
import EditDeckItem from "../components/EditDeckItem";


function  EditDeckAllScreen() {
  //This is the screen that populates all decks the user has
    //Either can choose one or delete the entire deck 

//This will populate the infromaiton for the edit deck screen when the edit button is clicked

//This will delete the deck (maybe have an alert to make sure) The button
  return(
    <View>
        <Text> This is the edit all deck screen</Text>
        <Text> Select a deck</Text>

        <View>
        <EditDeckItem/>
         </View>
       
    </View>
  );
}

export default EditDeckAllScreen;
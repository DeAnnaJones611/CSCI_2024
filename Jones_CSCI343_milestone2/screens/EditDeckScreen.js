
import { View, Text, Button,TextInput, StyleSheet, Modal } from "react-native";
import EditCardItem from "../components/EditCardItem";
import { useState } from "react";


function  EditDeckScreen() {

  //This is the screen is the specific screen that allows the user to edit the specifci card
    //This uses a modal to change the actual content of the information
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function EditCard(){
    setModalIsVisible(true);
    //This will show the modal

    //Populating the text boxes with the inromation from the card the user picked 
}

function SaveCard(){
    setModalIsVisible(false);
    //When the information is saved then the card will be changed and return to the main screen
}


  return(
    <View style={[
      styles.itemContainer]} >
        <Text> This is the Edit Screen</Text>
        <TextInput
            placeholder="Enter name here"
            />
        <View>
           <EditCardItem/>
        </View>

        <View>
                <Button
                title="Add New Card"
                onPress={EditCard}
                />
            </View>
            <Modal
            visible = {modalIsVisible}
            >
                <Text > Front Infomration </Text>
                <TextInput
                placeholder="Enter the front infromation"
                />
                                <Text > Back Infomration </Text>
                <TextInput
                  placeholder="Enter the back information"
                />

            <View >
                <Button title="Save" onPress ={SaveCard}/>
                <Button title="Cancel" onPress ={SaveCard}/>
            </View>

            </Modal>
       
    </View>
  );
}

export default EditDeckScreen;
const styles = StyleSheet.create({
  itemContainer: {
    paddingHorizontal: 5,
    paddingTop: 5,
    marginBottom: 10,
    borderRadius: 7,
    backgroundColor: "white",
  },
});
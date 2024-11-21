import { View, Text, Button, Modal } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { useState } from "react";

function  AddNewDeckScreen() {

//This is the visibility of of the modal 
  const [modalIsVisible, setModalIsVisible] = useState(false);

  //This changes the modal to true
  function EditCard(){
    //This will make the modal visible
    setModalIsVisible(true);


}

//This close the slides
function SaveCard(){
    //This closes the modal 
    setModalIsVisible(false);

        //This will make a card item and adds it to the flatlist and item
}

//This explains the structure of the add page item
    return(
        <View>
            <Text> This is the Add New Screen</Text>
            <TextInput
            placeholder="Enter name here"
            />

            <View>
                <Text>
                    This will be a flatlist of all the newly created cards
                    But at the beginning there will be no cards
                </Text>
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
                placeholder="Enter the front informtion"
                />
                <Text > Back Infomration </Text>
                <TextInput
                placeholder="Enter the Back infomation"
                />

            <View >
                <Button title="Save" onPress ={SaveCard}/>
                <Button title="Cancel" onPress ={SaveCard}/>
            </View>

            </Modal>
        </View>

      );
}

export default AddNewDeckScreen;
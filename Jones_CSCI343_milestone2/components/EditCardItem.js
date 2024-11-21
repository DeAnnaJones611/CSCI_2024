import { View, Text, StyleSheet, Pressable, Image, Modal, TextInput, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

function EditCardItem(props) {

    //This makes the modal visible or not 
  const [modalIsVisible, setModalIsVisible] = useState(false);


  //OPens the modal
    function EditCard(){
        setModalIsVisible(true);
        //Passes the infromation to the modal 
    }

    //This closes  the modal
    function SaveCard(){
        setModalIsVisible(false);
        //This saves the infromation 
    }

    //Returns a pressable of the news information
    //With alternating colors 
  return (
    <View
      style={[
        styles.itemContainer
      ]}
    >
         <View style={styles.allInfoContainer}>
                <View style={styles.partInfoContiner}>
                    <Text>Front Information </Text>
                </View>
                <View style={styles.partInfoContiner}>
                    <Text>Back Information </Text>
                </View>
            </View>

            <View style={styles.ButtonContainer}>
                <Button title="Edit" onPress ={EditCard}/>
                <Button title="Delete"/>
            </View>

            <Modal
            visible = {modalIsVisible}
            >
                <Text style={styles.titleText}> Front Infomration </Text>
                <TextInput
                style={styles.input}
                placeholder="enter the front information"
                />
                                <Text style={styles.titleText}> Back Infomration </Text>
                <TextInput
                style={styles.input}
                placeholder="enter the back infromation"
                />

            <View style={styles.ButtonContainer}>
                <Button title="Save" onPress ={SaveCard}/>
                <Button title="Cancel" onPress ={SaveCard}/>
            </View>

            </Modal>
    </View>
  );
}

export default EditCardItem;

const styles = StyleSheet.create({
    itemContainer: {
        paddingHorizontal: 5,
        paddingTop: 5,
        marginBottom: 10,
        borderRadius: 7,
        flexDirection: "row"
      },
    allInfoContainer:{
        flexDirection: "row",
        padding: 2,
        margin: 5,
    },
    partInfoContiner:{
        padding: 3,
        margin: 5,
    },
    ButtonContainer:{
        padding: 5, 
        flexDirection: "row",
    },

    titleText:{
        flex: 1,
        padding: 5,
        margin: 10,
        textAlign: "center",
        justifyContent: "center",
    },
    input:{
        flex: 2,
        padding:5,
        margin: 5,
        borderColor: "red",
        borderWidth: 5,
    },

});
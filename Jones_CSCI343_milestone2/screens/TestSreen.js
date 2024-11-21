import { View, Text, StyleSheet, Image, Pressable, Modal, Button } from "react-native";
import Colors from "../constants/colors";
import { useState } from "react";



//This screen is the review screen which allows the card to filp

//When all the card are populated then the user will be able to go through them and review them
//Based on the switches  on the select screen will effect how the cards will be shown
//wether it is random or in ordered and wether is front or back
function TestScreen(props) {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  function CardFlip(){
    setModalIsVisible(!modalIsVisible);
    //In the modal there will be the other infromation about the card
    //Which will be decided on the select deck page using the switches
  }
    return(
        <View>
            <Text style={styles.frontInfo}> Information  </Text>

            <View>
              <Button title=" Front Next"/>
              <Button title=" Front Flip " onPress={CardFlip}/>
              <Button title=" Front Back"/>
            </View>

            <Modal
            visible={modalIsVisible}
            >
              <View>
                <Text>
                  This is theh back of the card.
                </Text>
                <View>
              <Button title="Back Next"/>
              <Button title=" Back Flip " onPress={CardFlip}/>
              <Button title="Back Back"/>
            </View>

              </View>
            </Modal>
        </View>
    );

}
export default TestScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },

  frontInfo:{
    padding: 10,
    margin: 5,
    color: "white",
    textAlign: "center"
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
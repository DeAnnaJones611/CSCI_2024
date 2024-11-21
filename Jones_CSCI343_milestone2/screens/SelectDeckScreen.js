
import { View, Text, Switch, StyleSheet } from "react-native";
 import DeckItem from "../components/DeckItem";
 import { useState } from "react";

function  SelectDeckScreen() {
  //This screen will populate all the decks that is in the data file 
  //One switch allows for the cards to be random or in order
  //One switch would allow for the front of the card to show or back of the card is shown first

  //This is the vaible that keeps track where it is ordered or not
    const [orderIsEnabled, setOrderIsEnabled] = useState(false);
    const [frontIsEnabled, setFrontIsEnabled] = useState(false);

    //This is the toggle for the order of the switch
    function ToggleOrderSwitch(){
      setOrderIsEnabled(previousState => !previousState);
      //This will pass which funtion to use
      
      //The order function will start at index 0 and increase or decrease on which that the user is on

      // The random on would pick a random index and contine picking a random index when the user clicks next
    }

    //This is the toggle for the front and back of the switch
    function ToggleFrontSwitch(){
      setFrontIsEnabled(previousState => !previousState);

      //It will automatically be on the front (which is index 0)

      //If the switch is flipped then the index will start at 1
    }

  return(
    <View>
        <Text> This is the select Deck Screen</Text>
        <View style={styles.switchContainer}>
            <Switch
            value = {orderIsEnabled}
            ios_backgroundColor={"red"}
            trackColor={{false : "green", true: "orange"}}
            onValueChange={ToggleOrderSwitch}
            />
            <Switch
              value = {frontIsEnabled}
              ios_backgroundColor={"orange"}
              trackColor={{false : "violet", true: "red"}}
              onValueChange={ToggleFrontSwitch}
            />
        </View>
        <View>
        <DeckItem/>
        </View>
    </View>

  );
}

export default SelectDeckScreen;

const styles = StyleSheet.create({
  switchContainer:{
    flexDirection: "row",
    alignItems: "right",
    justifyContent: "flex-end",
  },
});
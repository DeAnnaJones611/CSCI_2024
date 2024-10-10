import { Text, View, StyleSheet, ScrollView,Switch, ImageBackground} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Title from "../components/Title";
import {RadioGroup} from "react-native-radio-buttons-group";
import Colors from "../constants/colors";
import  BouncyCheckbox  from "react-native-bouncy-checkbox";
import NavButton from "../components/NavButton";

//This is were all the user input is handeld
function HomeScreen(props) {
  const insets = useSafeAreaInsets();

//There is a background image that is imported

//There are radio buttons at the top with checkboxes in the middle with switches at the bottom

//Submit Button at the bottom

  return (
    <ImageBackground
      source ={require("../assets/images/bg.png")}
      resize = "stretch"
      style = {styles.rootContainer}
      imageStyle = {styles.backgroundImage}
    >
          <View
      style={[
        styles.rootContainer,
        {
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right,
        },
      ]}
    >
      <View style ={styles.titleContainer}>
           <Title>Bike Re-Pear</Title>
      </View>


      <ScrollView style={styles.scrollContainer}>


        <View style={styles.radioContiner}>
          <Text style={styles.radioHeader}>Repair Time</Text>
          <RadioGroup
            radioButtons={props.repairTimeRadioButtons}
            onPress={props.setRepairTimeId}
            selectedId={props.repairTimeId}
            layout="row"
            containerStyle={styles.radioGroup}
            labelStyle={styles.radioGroupLabels}
          />
        </View>



        <View style={styles.rowContainer}>
          <View style={styles.checkBoxContainer}>
            <Text style={styles.checkBoxHeader}>Repairs </Text>
            <View style={styles.checkBoxSubContainer}>
              {props.services.map((item) => {
                return (
                  <BouncyCheckbox
                    key={item.id}
                    text={item.name}
                    onPress={props.onSetService.bind(this, item.id)}
                    textStyle={{
                        textDecorationLine : "none",
                        color: Colors.primary500,
                        fontSize:20,
                        fontWeight:"bold"
                        
                    }}
                    innerIconStyle = {{
                        borderRadius: 0,
                        borderColor: Colors.primary300
                    }}
                    iconStyle = {{
                        borderRadius: 0,
                    }}
                    fillColor =  {Colors.primary500}
                    style = {{
                      padding: 2
                    }}
                  />
                );
              })}
            </View>
          </View>

        </View>


        <View style = {styles.rowContainer}>
            <View style = {styles.addOnsContainer}>
              <View style = {styles.addOnSubContainer}>
              <Text style={styles.addOnsLable}>News Letter</Text>
              <Switch 
                onValueChange = {props.onSetNews}
                value = {props.newsletter}
                thumbColor={
                  props.newsletter ?Colors.primary500 : Colors.primary800
                }
                trackColor = {{false: Colors.primary500, true: Colors.primary800}}
              />
              </View>

              <View style = {styles.addOnSubContainer}>
              <Text style={styles.addOnsLable}>Membership</Text>
              <Switch 
                onValueChange = {props.onSetMembership}
                value = {props.rentalMembership}
                thumbColor={
                  props.rentalMembership ?Colors.primary500 : Colors.primary800
                }
                trackColor = {{false: Colors.primary500, true: Colors.primary800}}
              />
              </View>



              

            </View>


        </View>

        <View style = {styles.buttonContainer}>
            <NavButton onPress={props.onNext}> Submit Order</NavButton>
      </View>

      </ScrollView>
    </View>
    </ImageBackground>

  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    resizeMode: "cover",
  },
  titleContainer: {
    marginBottom: 10,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: Colors.accent500,
    paddingHorizontal: 30,
    paddingVertical:5,
  },
  backgroundImage:{
    opacity: 0.3,
  },
  scrollContainer: {
    flex: 1,
  },
  radioContiner: {
    justifyContent: "center",
    alignItems:"center",
  },
  radioHeader: {
    fontSize: 30,
    color: Colors.accent300,
    fontFamily: "extra",
  },
  radioGroup: {
    padding: 20,
  },
  radioGroupLabels: {
    fonSize: 15,
    color: Colors.accent300
  },

  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingBottom: 20,
  },
  checkBoxContainer:{
    width: 300,
    backgroundColor: "#fed8b1",
    opacity: 0.9,
    borderRadius:5,
    borderWidth: 2,
    borderColor: Colors.primary800,
    padding: 5,
  },
  checkBoxHeader:{
    fontSize: 30,
    color: Colors.accent300,

    fontFamily: "extra",
  },
  checkBoxSubContainer: {
    padding: 2,
    fontSize:10,

  },

  addOnsContainer:{
    justifyContent: "space-between", 
  },
  addOnSubContainer:{
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
  },
  addOnsLable:{
    color: Colors.accent300,
    fontSize: 20,
  },
  buttonContainer:{
    alignItems:"center",
  },
});

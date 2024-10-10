import {Text, View, StyleSheet, ScrollView} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Title from "../components/Title";
import Colors from "../constants/colors";
import NavButton from "../components/NavButton";
import { LinearGradient } from "expo-linear-gradient";


function OrderScreen(props){

    //This makes the app be on a safe area to show
    const insets = useSafeAreaInsets();

    //There is a linear gradient using 2 colors

    //There is reactive printing based on when the user inputted on the other page

    //The radio button, checkboxes, and addons will show at their places

    //Printing out the subtotal, sales tax, and total at the bottom

    //With a button at the bottom to return
    return (

        <LinearGradient
            colors = {[Colors.accent500,Colors.primary300]}
            style = {styles.rootContainer}
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
        
        <View style = {styles.titleContainer}>
            <Title>Order Summary</Title>
        </View>

        <View style = {styles.subTitleContainer}>
            <Text style = {styles.subTitle}>Your order details are below</Text>
        </View>

        <View style = {styles.itemsContainer}>

            <Text style = {styles.item}>Repair Times</Text>
            <Text style = {styles.subItem}> {props.repairTime}</Text>



            
            <Text style = {styles.item}>Services</Text>
            {props.services.map((item) =>{
                if (item.value){
                    return (
                        <Text key={item.id} style = {styles.subItem}>
                            {item.name}
                            </Text>
                    );
                }
            })}  
               
 

                        
<Text style = {styles.item}>Add Ons:</Text>


            <Text style = {styles.subItem}> {props.newsletter ? "News Letter" : ""}</Text>

            <Text style = {styles.subItem}> {props.rentalMembership ? "Membership" : ""}</Text>




        </View>

        <View style = {styles.subTitleContainer}>
            <Text style={styles.subTitle}>
                Subtotal: ${props.price.toFixed(2)}
            </Text>

            <Text style={styles.subTitle}>
                Sales Tax: ${(props.price *0.06).toFixed(2)} {" "}
            </Text>

            <Text style={styles.subTitle}>
                Total: ${(props.price + props.price * 0.06).toFixed(2)}
            </Text>
        </View>


        <View style = {styles.buttonContainer}>
            <NavButton onPress={props.onNext}> Return Home</NavButton>
      </View>
      </View> 
        </LinearGradient>


    );
  }
  
  export default OrderScreen;
  
  const styles = StyleSheet.create({
    rootContainer: {
      flex: 1,
      alignItems: "center",
      
    },
    titleContainer: {
        marginBottom: 10,
        marginHorizontal: 10,
        paddingVertical: 3,
        paddingHorizontal: 10,
        borderWidth: 2,
        borderRadius: 5,
        borderColor: Colors.primary500,
    },

    subTitleContainer:{
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 10,
        padding: 5,
    },
    subTitle:{
        fontSize: 22,
        fontWeight: "bold",
        textAlign: "center",
        color: Colors.primary500,

    },
    itemsContainer: {
        flex: 3, 
    },
    item:{
        fontSize: 20,
        color: Colors.primary500,
        fontFamily: "extra",
    },
    subItem:{
        textAlign: "center",
        fontSize: 17,
        fontWeight: "bold",
        padding: 3,
        color: Colors.accent300,

    },
  });
  
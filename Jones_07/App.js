import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {useState, useMemo, useCallback} from "react";
import Colors from './constants/colors';
import HomeScreen from './screens/HomeScreen';
import OrderReviewScreen from './screens/OrderReviewScreen';
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from 'expo-font';


export default function App() {

  //This waits till all the fonts load to run the app
const [fontsLoaded, fontError] = useFonts({
  "funnytoys" :require("./assets/fonts/FunnyToysDEMO.otf"),//works
  "dragon" :require("./assets/fonts/DRAGONHUNTER.otf"),//works
  "extra" :require("./assets/fonts/ExtraDays.otf"),//works
});

const onLayoutRootView = useCallback(async () =>{
  if (fontsLoaded || fontError){
    await SplashScreen.hideasync();
  }
}, [fontsLoaded,fontError])

//This keeps the tack of the screen and the price
const [currentScreen, setCurrentScreen] = useState("");
const [currentPrice, setCurrentPrice] = useState(0);

//This is the data needed to run the form 
const repairTimeRadioButtons = useMemo(
  () => [
    {
      id: "0",
      label: "Standard",
      value: "Standard",
      price: 0,
      borderColor: Colors.primary500,
      color: Colors.primary500,
    },
    {
      id: "1",
      label: "Expedited",
      value: "Expedited",
      price: 50,
      borderColor: Colors.primary500,
      color: Colors.primary500,
    },
    {
      id: "2",
      label: "Next Day",
      value: "Next Day",
      price: 100,
      borderColor: Colors.primary500,
      color: Colors.primary500,
    },
  ],
  []
);

const [repairTimeId, setRepairTimeId] = useState(0);
const [services, setServices] = useState([
  { id: 0, name: "Basic Tune-Up", value: false, price: 50 },
  { id: 1, name: "Comprehensive Tune-Up", value: false, price: 75 },
  { id: 2, name: "Flat Tire Repair", value: false, price: 20 },
  { id: 3, name: "Brake Servicing", value: false, price: 50 },
  { id: 4, name: "Gear Servicing", value: false, price: 40 },
  { id: 5, name: "Chain Servicing", value: false, price: 15 },
  { id: 6, name: "Frame Repair", value: false, price: 35 },
  { id: 7, name: "Safety Check", value: false, price: 25 },
  { id: 8, name: "Accessory Install", value: false, price: 10 },
]);

const [newsletter, setNewsletter] = useState(false);
const [rentalMembership, setRentalMembership] = useState(false);

//This get the service handle from the form 
function setServiceHandler(id){
  setServices((prevService) =>
    prevService.map((item) => 
      item.id === id ? {...item, value: !item.value} : item
    )
  );
}


//This sets the switch for the newletter
function setNewsHandler(){
  setNewsletter((previous) => !previous);
}


//This sets the switch for the membership handle
function setMembershipHandler(){
  setRentalMembership((previous) => !previous);
}


//This is the function for the main screen
function homeScreenHandler(){
  setCurrentPrice(0);
  setCurrentScreen("home");
}

//This gose to the order review screen 
//And calulates the pices there 
function orderReviewHandler(){
  let price = 0;

  //Gose throught the services and gets the ones marked
  for(let i = 0; i <services.length; i++){
    if (services[i].value){
      price = price +services[i].price;
    }
  }


//Adds the memeber ship 
  if (rentalMembership){
    price = price + 100;
  }

//Adds the price form the time 
  price = price + repairTimeRadioButtons[repairTimeId].price;

  //Sets the price
  setCurrentPrice(price);

  //Gose to the review page
  setCurrentScreen("review");
}

//This sets the main screen to be the home screen where the form is 
  //This passes the needed information for the forms 
let screen = (
  <HomeScreen
    repairTimeId = {repairTimeId}
    services = {services}
    newsletter = {newsletter}
    rentalMembership = {rentalMembership}
    repairTimeRadioButtons = {repairTimeRadioButtons}
    setRepairTimeId = {setRepairTimeId}
    onSetService = {setServiceHandler}
    onSetNews = {setNewsHandler}
    onSetMembership = {setMembershipHandler}
    onNext = {orderReviewHandler}
  />
  ); 

  //Check is the screen is for the review
    //Passes needed information for the screen 
  if (currentScreen == "review") {
    screen = (
      <OrderReviewScreen
        repairTime = {repairTimeRadioButtons[repairTimeId].value}
        services = {services}
        
        newsletter = {newsletter}
        rentalMembership = {rentalMembership}
        price = {currentPrice}
        onNext = {homeScreenHandler}
      />
    );
  }

  //if statments that allow for the screen to wait till the fonts load
if (!fontsLoaded && !fontError){
  return null;
}else{
   return (
    <>
      <StatusBar style = "light"/>
      <SafeAreaProvider style = {styles.container}>{screen}</SafeAreaProvider>
    </>
  );
}


 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.accent500,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

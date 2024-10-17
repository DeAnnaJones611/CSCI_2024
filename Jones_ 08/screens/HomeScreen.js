import {ImageBackground, Text, View, StyleSheet, Pressable, ScrollView, Platform, Modal, useWindowDimensions, Button} from "react-native";
import {useState} from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Title from "../componets/Title";
import DateTimePicker from "@react-native-community/datetimepicker";
import WheelPicker from "react-native-wheely";
import NavButton  from "../componets/NavButton";
import Colors from "../constants/colors";   


//This is the home screen
function HomeScreen(){

    //This is the insets used for the screen
    const insets = useSafeAreaInsets();


    //These are the states used to keep track of the user input
    const [checkIn, setCheckIn] = useState(new Date());
    const [showCheckIn, setShowCheckIn] = useState(false);

    //This makes the modal seen
    function showCheckInPicker(){
        setShowCheckIn(true);
    }

    // This makes the modal not sceen
    function hideCheckInPicker(){
        setShowCheckIn(false);
    }

    //When the modal is changed
    function onChangeCheckIn(event, selectDate){
        //Makes the current state as the date selected
        const currentDate = selectDate;

        //The platform is android
        if (Platform.OS === "android") {

            //Runs this function
            hideCheckInPicker(true);
        }

        //Sets the current date to the correct usesate
        setCheckIn(currentDate);
    }

    //These are the states used to keep track of the user input
    const [checkOut, setCheckOut] = useState(new Date());
    const [showCheckOut, setShowCheckOut] = useState(false);

        //This makes the modal seen
    function showCheckOutPicker(){
        setShowCheckOut(true);
    }

    // This makes the modal not sceen
    function hideCheckOutPicker(){
        setShowCheckOut(false);
    }

        //When the modal is changed
    function onChangeCheckOut(event, selectDate){

        //Makes the current state as the date selected
        const currentDate = selectDate;

        //The platform is android
        if (Platform.OS === "android"){


            //Runs this function
            hideCheckOutPicker(true);
        }

        //Sets the current date to the correct usesate
        setCheckOut(currentDate);
    }


    //This is the states used for the guest count
    const guestCounts = [1,2,3,4,5,6,7,8];
    const [numGuests, setNumGuests] = useState(0);
    const [showNumGuest, setShowNumGuests] = useState(false);

    //This shows the modal 
    function showNumGuestPicker(){
        setShowNumGuests(true);
    }

    //This hides the modal
    function hideNumGuestsPicker(){
        setShowNumGuests(false);
    }

    //This make the current Index to the number guest
    function onChangeNumGuests(index){
        setNumGuests(index);
    }


    //This is the states used for the site count
    const siteCounts = [1,2,3,4];
    const [numSites, setNumSites] = useState(0);
    const [showNumSites, setShowNumSites] = useState(false);

        //This shows the modal 
    function showNumSitesPicker(){
        setShowNumSites(true);
    }

        //This hides the modal
    function hideNumSitesPicker(){
        setShowNumSites(false);
    }

        //This make the current Index to the number guest
    function onChangeNumSites(index){
        setNumSites(index);
    }


    //This is the usedate of the results 
    const [results, setResults] = useState("");


    //This creates the result sentecne
    function onReserveHandler(){
        let res = `Check In: \t\t${checkIn.toDateString()}\n`
        res = res + `Check In: \t\t${checkOut.toDateString()}\n`
        res = res + `Check In: \t\t${guestCounts[numGuests]}\n`
        res = res + `Check In: \t\t${siteCounts[numSites]}\n`

        //Makes the result as the use state
        setResults(res);
    }
        
    //Makes the width and height of the Window Dimensions
    const {width, height} = useWindowDimensions();


    //This is the label flex
    const dateLabelFlex = {
        fontSize: width * 0.07
    }


    //This is the text flex
    const dateTextFlex = {
        fontSize: width * 0.05
    }

//This has a background image and color
    //There is a title 
    //Then four areas for the end user to use to pick the date and amount

    //The top two sections is for the date

    //The bottom section is for amount of guest and sites

    //Button that prints results

    //At the bottom the results are printed
    return(
        <ImageBackground
        source = {require("../assets/images/bg.png")}
        style = {styles.rootContainer}
        imageStyle = {styles.backgroundImage}
        >
            <View
            style = {[
                styles.rootContainer,
                {
                    paddingTop: insets. top,
                    paddingBottom: insets.bottom,
                    paddingLeft: insets.left,
                    paddingRight: insets.right,
                },
            ]}
            >
            <ScrollView style = {styles.scrollContainer}>
                <View style = {styles.titleConatiner}>
                    <Title>
                        Camp Castle
                    </Title>
                </View>

            <View style = {styles.rowContainer}>
                <View style = {styles.dateContainer}>
                    <Text style = {[styles.dateLabel, dateLabelFlex]}>Check In: </Text>

                    <Pressable onPress = {showCheckInPicker}>
                        <Text style = {[styles.dateText, dateTextFlex]}>{checkIn.toDateString()}</Text>
                    </Pressable>

                </View>

            </View>  

            <View style = {styles.rowContainer}>
                <View style = {styles.dateContainer}>
                    <Text style = {[styles.dateLabel, dateLabelFlex]}>Check Out: </Text>

                    <Pressable onPress = {showCheckOutPicker}>
                        <Text style = {[styles.dateText, dateTextFlex]}>{checkOut.toDateString()}</Text>
                    </Pressable>

                </View>

            </View> 

            <View>
                {showCheckIn && Platform.OS === "android" &&(
                    <DateTimePicker
                        testID = "dateTimePickerCheckInAndroid"
                        value = {checkIn}
                        mode= {"date"}
                        display ="spinner"
                        onChange= {onChangeCheckIn}
                    />
                )}
                {showCheckIn && Platform.OS === "ios" && (
                    <Modal
                    animationType = "slide"
                    transparent = {true}
                    supportedDirections={["portrait", "landscape"]}
                    >
                        <View style = {styles.centeredModalView}>
                            <View style={styles.modalView}>
                                <DateTimePicker
                                testID = "dateTimePickerCheckInIOS"
                                value={checkIn}
                                mode={"date"}
                                display="spinner"
                                onChange={onChangeCheckIn}
                                />
                                <Button title="Confirm" onPress={hideCheckInPicker}/>
                            </View>
                        </View>
                    </Modal>
                )}


                {showCheckOut && Platform.OS === "android" &&(
                    <DateTimePicker
                        testID = "dateTimePickerCheckOutAndroid"
                        value = {checkOut}
                        mode= {"date"}
                        display ="spinner"
                        onChange= {onChangeCheckOut}
                    />
                )}
                {showCheckOut && Platform.OS === "ios" && (
                    <Modal
                    animationType = "slide"
                    transparent = {true}
                    supportedDirections={["portrait", "landscape"]}
                    >
                        <View style = {styles.centeredModalView}>
                            <View style={styles.modalView}>
                                <DateTimePicker
                                testID = "dateTimePickerCheckOutIOS"
                                value={checkOut}
                                mode={"date"}
                                display="spinner"
                                onChange={onChangeCheckOut}
                                />
                                <Button title="Confirm" onPress={hideCheckOutPicker}/>
                            </View>
                        </View>
                    </Modal>
                )}
            </View> 

            <View style = {styles.rowContainer}>
                <Text style = {[styles.dateLabel, dateLabelFlex]}>Number of Guest: </Text>
                <Pressable
                    onPress = {showNumGuestPicker}
                >
                    <View style={styles.dateContainer}>
                        <Text style={[styles.dateText, dateTextFlex]}>{guestCounts[numGuests]}</Text>
                    </View>
                </Pressable>
                <Modal
                    animationType = "slide"
                    transparent = {true}
                    visible = {showNumGuest}
                    supportedDirections= {["portrait", "landscape"]}
                >
                    <View style={styles.centeredModalView}>
                        <View style = {styles.modalView}>
                        <Text>Enter Number of Guest</Text>
                            <WheelPicker
                                selectedIndex = {numGuests}
                                options = {guestCounts}
                                onChange = {onChangeNumGuests}
                                containerStyle={{width: 200}}
                            />

                        <Button title="Confirm" onPress = {hideNumGuestsPicker}/>
                        
                    </View>
                </View> 
                </Modal>

            </View>


            <View style = {styles.rowContainer}>
                <Text style = {[styles.dateLabel, dateLabelFlex]}>Number of Sites: </Text>
                <Pressable
                    onPress = {showNumSitesPicker}
                >
                    <View style={styles.dateContainer}>
                        <Text style={[styles.dateText, dateTextFlex]}>{siteCounts[numSites]}</Text>
                    </View>
                </Pressable>
                <Modal
                    animationType = "slide"
                    transparent = {true}
                    visible = {showNumSites}
                    supportedDirections= {["portrait", "landscape"]}
                >
                    <View style={styles.centeredModalView}>
                        <View style = {styles.modalView}>
                        <Text>Enter Number of Sites</Text>
                            <WheelPicker
                                selectedIndex = {numSites}
                                options = {siteCounts}
                                onChange = {onChangeNumSites}
                                containerStyle={{width: 200}}
                            />


                        <Button title="Confirm" onPress = {hideNumSitesPicker}/>
                        
                    </View>
                </View> 
                </Modal>

            </View>

            <View style = {styles.buttonContainer}>
                <NavButton onPress={onReserveHandler}>Reserve Now</NavButton>
            </View>

            <View style ={styles.resultContainer}>
                <Text style = {[styles.results, dateLabelFlex]}>{results}</Text>
            </View>
            </ScrollView>

        </View>
        </ImageBackground>

    );
}

export default HomeScreen;


//This is the styling for the page  
const styles = StyleSheet.create({
        rootContainer:{
            flex: 1,
            alignItems: "center",
            backgroundColor: Colors.opacityColor,
            
        },
        backgroundImage:{
            opacity: 0.3
        },
    titleConatiner:{
        padding: 3, 
        marginVertical: 20,
        marginHorizontal: 20,
        borderWidth: 2,
        borderRadius: 5,
        width: 1000,
        maxWidth: "90%",
        borderColor: Colors.primary10,

    },
    scrollContainer: {
        flex: 1,
        width: 3000,
        maxWidth: "100%",
    },
    rowContainer:{
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems:"center",
        paddingBottom: 20,
        marginBottom:20,
        
    },
    dateContainer:{
        padding: 10,
    },
    dateLabel:{
        fontSize:50,
        color: Colors.primary30,
        fontFamily: "dragon",
        padding: 10,
        margin: 5,
        borderTopRightRadius: 10,
         borderBottomLeftRadius: 10,
        textShadowColor: Colors.primary20,
        textShadowOffset: {width:2,height:2},
        textShadowRadius: 2,
        borderWidth: 3,
        borderColor: Colors.primary20
    },
    dateText:{
        fontSize: 20, 
        fontFamily: "young",
        textAlign: "center",
         padding: 10,
         marign: 5,
         backgroundColor: Colors.primary40,
         color: Colors.primary20,
         borderColor: Colors.accent30,
         borderWidth: 3,
    },
    centeredModalView:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
    },
    modalView:{
        margin: 20,
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: Colors.accent10,
        shadowOffset: {width: 3, height: 2},
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        backgroundColor: Colors.accent40,

    },

    buttonContainer:{
        alignItems: "center",
    },

    results:{
        textAlign: "center",
        fontFamily: "show",
        color: Colors.primary20,
        textShadowColor:Colors.accent20,
        textShadowOffset: {width: 2, height: 2},
        textShadowRadius: 2,
        padding: 5,
        borderColor: Colors.primary10,
        borderWidth: 4,
        margin: 10,
    },
});
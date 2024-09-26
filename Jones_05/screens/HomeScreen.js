import {View, StyleSheet, Text, Image, Linking} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Title from "../components/Title";
import NavButton from "../components/NavButton";
import Colors from "../constants/colors";

function HomeScreen(props){
    const insets = useSafeAreaInsets();


    //1:15:23
    return(
        <View
            style = {[
                styles.rootContainer,{
                    paddingTop: insets.top,
                    paddingBottom: insets.bottom,
                    paddingLeft: insets.left,
                    paddingRight: insets.right,
                }

            ]}>

            <View style ={styles.titleContainer}>
                <Title>
                    Olive Garden
                </Title>    
            </View>

            <View style ={styles.imageContainer}>
                <Image style ={styles.imagePic} source = {require("../assets/images/OG.png")}/>
            </View>

            <View style = {styles.inforContainer}>

                <View>
                    <View style ={styles.wordContainer}>
                        <Text style ={styles.wordText} onPress={() => Linking.openURL("tel:8439033630")}>(843) 903-3630</Text>
                    </View>

                    <View style ={styles.wordContainer}>
                        <Text style ={styles.wordText} onPress={() => Linking.openURL("https://maps.app.goo.gl/cj7atPKqFrEAqMea8")}>73 Rodeo Drive, Myrtle Beach, SC 29579</Text>
                    </View>

                    <View style ={styles.wordContainer}>
                        <Text style ={styles.wordText} onPress = {() => Linking.openURL("https://www.olivegarden.com/locations/sc/myrtle-beach/myrtle-beach-near-carolina-forest-and-conway/4452?cmpid=br:og_ag:ie_ch:loc_ca:OGGMB_sn:gmb_gt:myrtle-beach-sc-4452_pl:locurl_rd:1793")}>www.OliveGarden.com</Text>
                    </View>
                </View>
            </View>

            <View style = {styles.buttonContainer}>
                <NavButton onPress = {props.onNext}>View Menu Items</NavButton>
            </View>


        </View>
    )

}

export default HomeScreen;

const styles = StyleSheet.create({
    rootContainer:{
        flex: 1,
        alignItems: "center",
    },

    imageContainer:{
        flex: 2,
        width: 300,
        height: "80%",
        justifyContent: "center",
        alignItems : "center",
        margin: 30,

    },
    imagePic:{
    height: "100%",
	width: "100%",
	borderWidth: 3,
    resizeMode: "stretch",
	borderColor:"#CC7722",
    borderBlockColor: "#F9A603",
    marginTop:10,
    borderRadius:50,
    borderStyle: "dashed",
    },

    inforContainer:{
        flex: 1,
    },

    wordContainer:{
        padding: 10,
        textAlign: "center",
    },
    wordText:{
        fontSize:25,
        textAlign: "center",
        fontFamily: "Vintage",
        color: Colors.accent500,
    },


    buttonContainer:{
        flex: 1,
    },
});
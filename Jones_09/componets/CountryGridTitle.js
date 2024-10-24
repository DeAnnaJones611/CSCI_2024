import { LinearGradient } from "expo-linear-gradient";
import { Platform, Pressable, View, StyleSheet, Text } from "react-native";
import Colors from "../constants/colors";

//This is the country tiles made to diplay the country and go to the vaction spot screen 
function CountryGridTitle(props){
        return(
            <View style = {styles.gridItem}>

                <Pressable
                    style = {({pressed}) => [ 
                        styles.button,
                        pressed ? styles.buttonPressed : null,
                    ]}
                    android_ripple={{color: Colors.primary300, }}
                    onPress = {props.onPress}
                >
                    <LinearGradient
                        colors={[props.color, Colors.accent300]}
                        style={styles.innerContainer}
                    >
                        <Text style={styles.name}>{props.name}</Text>                        
                    </LinearGradient>



                </Pressable>
            </View>
        );
}

export default CountryGridTitle;

const styles = StyleSheet.create({
    gridItem:{
        flex: 1,
        margin: 16,
        height: 150,
        borderRadius: 8,
        elevation: 4,
        backgroundColor: "white",
        // shadowColor: "black",
        shadowOpacity: 0.25,
        shadowOffSet: {width: 0, height: 2},
        shadowRadius: 8,
        overFlow: Platform.OS === "android" ? "hidden" : "visible", //hides android ripple overflow on android only
    },
    button: {
        flex: 1,
    },
    innerContainer:{
        flex: 1,
        padding: 16,
        borderRadius: 8,
        justifyContent: "center",
        alignItem: "center",
    },
    name:{
        textAlign: "center",
        fontSize: 27,
        fontFamily: "juni",
        color: Colors.primary800,
        
    },
});
import {Text, StyleSheet,View, Image}  from "react-native";
import Colors from "../constants/colors";

function MenuItem(props){

    return(
        <View style ={styles.itemContainer}>
            <View style ={styles.itemWordContainer}>
                <View style ={styles.wordContainer}>
                    <Text style ={styles.wordText}>
                        {props.name}
                    </Text>
                </View>

                <View  style ={styles.wordContainer}>
                    <Text style ={styles.wordText}>
                     ${props.price}
                    </Text>
                </View>
            </View>


            <View style = {styles.imageContainer}>
                <Image  style={styles.imagePic} source = {props.image}/>

            </View>
        </View>
    );


    
}

export default MenuItem;

const styles = StyleSheet.create({
    title: {
        fontSize: 60,
        textAlign: "center",
    },

    itemContainer:{
        margin: 10,
        flexDirection: "row",
        flex: 1,
        padding: 5,
        backgroundColor: Colors.primary100,
        borderColor: Colors.accent500,
        borderWidth: 3,
        margin: 10, 
    },
    itemWordContainer:{
        flex: 2,
        margin: 5,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: Colors.accent100,
  
    },
    wordContainer:{
        margin: 5,
    },
    wordText:{
        fontSize:10,
        fontWeight: "bold",
        color: Colors.accent500,
    },

    imageContainer:{
        flex: 5,
        height: "80%",
        width:"80%",
    },
    imagePic:{
        height: 150,
        width: "100%,"
    }

})
import {View, Text, StyleSheet, Image } from "react-native";

//This is the movie componet 

//Each Movie componet has a 
    //Name as the title
    //Image for the main section
    //Rating out of 5
function MovieItem(props){
    return(
        <View style={styles.itemContainer}>
            <View style={styles.titleContainer}>
                <Text style={styles.titleText}>{props.name}</Text>
            </View>

            <View style={styles.imageContainer}>
                <Image  style={styles.imagePic} source = {props.image}/>
            </View>

            <View style={styles.ratingContainer}>
                <Text style={styles.ratingText}> {props.rating} / 5 </Text>
            </View>
        </View>
    )



}

export default MovieItem;

const styles = StyleSheet.create({
    itemContainer:{
        alignItems: "center",
        paddingTop:10,
        margin: 10,
        backgroundColor: "#C4FAF8",
        borderColor:"#FFABAB",
        borderWidth: 5,
        borderBottomRightRadius:90,
        borderTopLeftRadius:90,

    },
    
    titleContainer:{
        flex: 1,
        textAlign: "center",
        margin:5,

    },

    titleText:{
        fontWeight: "bold",
        fontSize:20,
        color: "#4D0F28",
    },

    imageContainer:{
        flex: 2,
        margin: 5,
        padding:10,

    },

    imagePic:{
        height: 250,
        width: 150,
        resizeMode: "stretch",
        borderColor: "#B28DFF",
        borderWidth:5,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 20,

    },

    ratingContainer:{
        flex: 1,
        margin: 5,
        marginBottom:20,
        padding: 5,
        borderBlockColor: "purple",
        borderWidth:4,
        backgroundColor: "#Aff8DB"

    },

    ratingText:{
        fontSize:20,
        fontStyle: "italic",
        color: "#4D0F28",

    },

});
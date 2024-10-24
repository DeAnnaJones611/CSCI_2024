import {useState} from "react";
import { Pressable, StyleSheet, View, Image,Text } from "react-native";
import Colors from "../constants/colors";
import ImageViewModal from "../modal/ImageViewModal";

function VacationItem(props){

    //This is the vaction Item where the user can press and see the picture bigger

        //This is for the modal to be shown
    const [modalIsVisible, setModalIsVisible] = useState(false);

    //This changes the modal to visible 
    function viewImageHandler(){
        setModalIsVisible(true);
    }

    //This changes the modal to not visible 
    function closeImageHandler(){
        setModalIsVisible(false);
    }

    return(
        <View
            style = {[
                styles.itemContainer
            ]}
        >
            <Pressable
                style ={({pressed}) => [
                    styles.button,
                    pressed ? styles.buttonPressed : null,
                ]}

                android_ripple={{color: Colors.primary500}}
                onPress = {viewImageHandler}
            >
                <View style = {styles.rowConainer}>
                    <Image style = {styles.image} source = {{uri: props.imageUrl}}/>
                    <View style = {styles.infoContainer}>
                    <Text style = {styles.name}>{props.name}</Text>
                        <View style ={styles.innerRowContainer}>
                            <Text style = {styles.text}>Price: {props.avgCost}</Text>
                        <Text style = {styles.text}>Rating: {props.rating} / 5 </Text>
                        <Text style = {styles.text}>Founded: {props.foundedYear}</Text>
                        <Text style = {styles.desciption}>{props.desciption}</Text>


                        </View>

                </View>
                </View>

                
            </Pressable>

            <ImageViewModal
                isVisible = {modalIsVisible}
                imageUrl={props.imageUrl}
                onClose = {closeImageHandler}
            />
        </View>
    );
}

export default VacationItem;

const styles = StyleSheet.create({
    rowConainer:{
        height: 200,
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 10,
        borderWidth: 5,
        backgroundColor: Colors.primary500,
        padding: 4,
    },
    image:{
        width: "20%",
        height: "100%",
        resizeMode: "contain",
        borderRadius: 15, 
    },
    itemContainer:{
        padding: 10,
        margin: 5,
        backgroundColor: Colors.accent500
    },
    infoContainer:{
        width: "90%",
        paddingLeft: 5,
        
    },
    name: {
        textAlign: "center",
        padding: 5,
        paddingRight: 30,
        fontSize: 17,
        fontFamily: "juni",
    },
    text:{
        textAlign: "center",
        fontSize:12,
        padding: 2,
    },
    desciption:{
        textAlign: "left",
        fontSize:12,
        padding: 20,
        margin: 5,
    },
});
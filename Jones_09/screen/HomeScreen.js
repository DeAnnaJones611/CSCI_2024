import {View, Text, FlatList} from "react-native";
import {COUNTRY} from "../data/dummy-data";
import CountryGridTitle from "../componets/CountryGridTitle";


function HomeScreen(props){

    //This is the home screen with all the country tiles 

    function renderStateItem(itemData){
            function pressHandler(){
                props.navigation.navigate("VacationOverviewScreen",{
                    vacationId: itemData.item.id,
                });
            }


            //This returns all teh country grid titles 

        return(
            <CountryGridTitle
                name = {itemData.item.name}
                color = {itemData.item.color}
                onPress = {pressHandler}
            />
        );
    }

    //This makes a flatllist for the screen of all the countries
    return (
        <View>
            <FlatList
                data = {COUNTRY}
                keyExtractor={(item) =>{
                    return item.id
                }}  

                renderItem={renderStateItem}
                numColumns={2}
            />
        </View>
    );
}

export default HomeScreen;
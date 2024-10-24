import  {View, Text, FlatList, StyleSheet} from "react-native";
import { useLayoutEffect } from "react";
import { VACATION, COUNTRY } from "../data/dummy-data";
import VacationItem from "../componets/VacationItem";

function VacationOverviewScreen(props){

    //This gets the vactaion iD 
    const vacationId = props.route.params.vacationId;

    //This is the usesd the use effect  to create all the vacation spots for that specific country 
    useLayoutEffect(() =>{
        const state = COUNTRY.find((state) => state.id === vacationId);
        props.navigation.setOptions({ title: state ? state.name : null});

        }, [vacationId, props.navigation]);

        //This filites for all the vaction Ids
        const displayedCampgrounds = VACATION.filter((vacationItem) => {
            return vacationItem.vacationId === vacationId;
        });

        //This renders all the information about that vaction spot
        function renderVacationItem(itemData){
            const vacationItemProps = {
                name: itemData.item.name,
                imageUrl: itemData.item.imageUrl,
                avgCost: itemData.item.avgCost,
                foundedYear: itemData.item.foundedYear,
                rating: itemData.item.rating,
                desciption: itemData.item.desciption,
                listIndex: itemData.index
            }

            return <VacationItem {...vacationItemProps}/>
        }

        //This returns a flat list about all the items 

    return(
        <View style = {styles.container}>
            <FlatList
                data= {displayedCampgrounds}
                keyExtractor={(item) => item.id}
                renderItem={renderVacationItem}
            />
        </View>
    );
}

export default VacationOverviewScreen;

const styles= StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },

});
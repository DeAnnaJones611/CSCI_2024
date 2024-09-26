import {View, StyleSheet,Text, ScrollView, FlatList} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Title from "../components/Title";
import NavButton from "../components/NavButton";
import MenuItem from "../components/MenuItem";
import Colors from "../constants/colors"
function MenuScreen(props){
  //Creates the safeareainsets to be used for the screen
    const insets = useSafeAreaInsets();

    //Data for the appitizer menu Items
    const DATAAPP = [
        {id: '1',
          name: 'Fried Mozzarella',
          image: require("../assets/images/a_fm.png"),
          price: 8.29,
        },
        {id: '2',
          name: 'Calamari',
          image: require("../assets/images/a_c.png"),
          price: 11.79, 
        },
        {id: '3',
          name: 'Bread Sticks',
          image: require("../assets/images/a_bs.png"),
          price: 4.49,
        },
        
      ]


      //Data for the main dish menu items
    const DATAMAIN = [
        {id: '1',
          name: 'Chicken and Shrimp Carbonara',
          image: require("../assets/images/md_csc.png"),
          price: 21.99,
        },
        {id: '2',
          name: 'Shrimp Alfredo',
          image: require("../assets/images/md_sha.png"),
          price: 20.99, 
        },
        {id: '3',
          name: 'Lasagna Classico',
          image: require("../assets/images/md_lc.png"),
          price: 18.29,
        },
        {id: '4',
          name: 'Five Cheese Ziti al Forno',
          image: require("../assets/images/md_fczaf.png"),
          price: 17.99,
        },
        {id: '5',
          name: 'Herb-grilled Salmon',
          image: require("../assets/images/md_hgs.png"),
          price: 21.49,
        },
        
    ]


    //Data for the dessert menu Item
    const DATADESS = [
        {id: '1',
          name: 'Warm Italian Dougnuts',
          image: require("../assets/images/d_wid.png"),
          price: 8.29,
        },
        {id: '2',
          name: 'Strawberry Cream Cake',
          image: require("../assets/images/d_scc.png"),
          price: 9.29, 
        },
        {id: '3',
          name: 'Chocolate Lasagna',
          image: require("../assets/images/d_cl.png"),
         price: 9.29,
        },
      ]

      //Colors to use
      //54301A (brown)
      //E4E1DC (light grey)
      //A8ADOO (Olive green)


//There is a title, scroll view, button

//There are 3 map function
      //For each set of data above
      //The uniquew id is the id and the name
      //So the Scrollview knows what to list in what order

//The button at the bottom goes back to the home screen

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

            <View style = {styles.titleContainer}>
                <Title>
                   Menu
                </Title>    
            </View>

            <View style = {styles.scrollViewContainer}>
            <ScrollView style = {styles.scrollViewItem}>
                <View>
                    <Title> Appetizers</Title>

                    <View style = {styles.ItemContainer}>
                      {DATAAPP.map((app) =>{
                        return(
                          <MenuItem key={app.id + app.name} name={app.name} image ={app.image} price = {app.price}/>
                        );
                      })}
                    </View>
                </View>

                <View>
                    <Title> Main Dish</Title>
                    <View>
                      {DATAMAIN.map((md) =>{
                        return(
                          <MenuItem key={md.id + md.name} name={md.name} image ={md.image} price = {md.price}/>
                        );
                      })}
                      </View>
                </View>

                <View>
                    <Title> Desserts</Title>
                    <View>
                      {DATADESS.map((dess) =>{
                        return(
                          <MenuItem key={dess.id + dess.name} name={dess.name} image ={dess.image} price = {dess.price}/>
                        );
                      })}
                      </View>
                </View>
            </ScrollView>
            </View>
            


            <View style = {styles.buttonContainer}>
                <NavButton onPress = {props.onNext}>Go Home</NavButton>
            </View>

        </View>
    )

}

export default MenuScreen;

const styles = StyleSheet.create({
    rootContainer:{
        flex: 1,
        alignItems: "center",
        backgroundColor: Colors.accent100,

    },
    titleContainer:{
        flex:1,
    },
    scrollViewContainer:{
        flex: 8,
    },
    scrollViewItem:{
        margin:5,
    },
    ItemContainer:{
      fontFamily: "Vintage",
      margin: 2,
    },

    buttonContainer:{
        flex: 2,
    },
});
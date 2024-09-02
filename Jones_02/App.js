import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View,Image,Linking } from 'react-native';

export default function App() {
  return (
   <>
   <StatusBar style= 'light' />
    <SafeAreaView style={styles.container}>

      <View style = {styles.formatting}>
        <View style={styles.imageContainer}>
          <Image style= {styles.image} source = {require("./assets/Images/picture.png")}/>
        </View>

      <View style={styles.infromationContainer}>
        <Text style = {styles.title} >De'Anna Jones</Text>
			  <Text style = {styles.text} onPress= {() =>Linking.openURL("tel: +1 9542405767")}> Phone: 954-240-5767</Text>
			  <Text style = {styles.text} onPress ={() => Linking.openURL("mailto: deannajones611@gmail.com")} > deannajones611@gmail.com</Text>
			  <Text style = {styles.text} onPress={() => Linking.openURL("https://github.com/DeAnnaJones611")}> Github.com </Text>
      </View>

      </View>

    </SafeAreaView>

   </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#FEFBBD"
  },

  imageContainer:{
		flex:1,
    width: 400,
   
  },

  image: {
    height: 300,
		width: "100%",
		resizeMode: "cover",
		borderWidth: 5,
		borderColor:"#311432",

  },
  infromationContainer:{
    flex: 1,
		position: "right",
    borderWidth: 5,
		borderColor:"#311432",
    backgroundColor: "#EEDC83",


  },
  title:{
    fontSize: 30,
    fontWeight: "bold",
    margin: 30,
    marginBottom: 0,
    textAlign: "center",
    backgroundColor: "#FEE135",
    color: "#4C0121",

  },
  text: {
		fontSize: 20,
    padding: 10,
		color: "#710193",
		fontStyle: "italic",

	},
  formatting:{
    flexDirection: "row",
    borderColor: "purple",
    borderWidth: 10,
  }
});

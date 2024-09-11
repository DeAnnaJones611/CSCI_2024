import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { SafeAreaViewBase, StyleSheet, Text, View, Image, Button,  TextInput, Pressable, SafeAreaView, Modal } from 'react-native';

export default function App() {

      //The responses that can be picked 
      const responses = [
        "It is certain",
        "It is decidedly so",
        "Without a doubt",
        "Yes definitely",
        "You may rely on it",
        "As I see it, yes",
        "Most likely",
        "Outlook good",
        "Yes",
        "Signs point to yes",
        "Reply hazy, try again",
        "Ask again later",
        "Better not tell you now",
        "Cannot predict now",
        "Concentrate and ask again",
        "Don't count on it",
        "My reply is no",
        "My sources say no",
        "Outlook not so good",
        "Very doubtful"
      ];


  //This sets the states of the vaibles used throughout the code
      const [userQuestion, setUserQuestion] = useState ("");
      const [userResponse, setUserResponse] = useState("");
      const [modalIsVisible, setModalIsVisible] = useState(false);



      //When the code starts
        //How the phone looks
      function startEightBallHandler(){
        setModalIsVisible(false);
        setUserQuestion("");
        setUserResponse("");
      }

      //Rests the code
      function endEightBallHandler(){
          setModalIsVisible(false);
          setUserQuestion("");
          setUserResponse("");
      }


      function inputQuestionHandler(userQuestion){
          setUserQuestion(userQuestion);
      }
      //Gets the results of the picking
      function getResult(){
          //Shows Modal
          setModalIsVisible(true);

          //Randomly gets the number
          const responseNum = Math.floor(Math.random() * responses.length);

          //Gets the response relating to the number
          const wordReponseResult  = responses[responseNum];
          console.log("Radom" + wordReponseResult);
          console.log("Questions: "+userQuestion)

          //Sets the response as the over All varible
          setUserResponse(wordReponseResult);
          setUserQuestion(userQuestion);
      }
  return (
      <>
        <StatusBar/>

        <SafeAreaView style = {styles.container}>

            <View style = {styles.imageContainer}>
              <Image style = {styles.image} source = {require("./assets/Images/eightBall.png")}/>
            </View> 

          <View style = {styles.titleContainer}>
              <Text style = {styles.title}> Magic 8 Ball</Text>            
          </View>



          <View style = {styles.inputContainer}>

              <Text styles = { styles.text}></Text>
              <TextInput  
                  style = {styles.input}
                  placeholder='What troubles you? :)'
                  onChangeText = {inputQuestionHandler}
                  value = {userQuestion}
              /> 
  
          </View>

 

          <Pressable
                style = {styles.mainButtonContainer}
                android_ripple={{color:""}}
                //style = {({pressed}) => pressed && styles.pressedButton}

                onPress = {getResult}
                >

                  <View style = {styles.resultButton}>
                    <Text style = {styles.resultButtonText}> Gain Wisdom</Text>
                  </View>

          </Pressable>

      <Modal 
      visible = {modalIsVisible}>

    <SafeAreaView style = {styles.modalContainer}>

    <View style = {styles.imageContainer}>
              <Image style = {styles.image} source = {require("./assets/Images/eightBall.png")}/>
            </View> 
          <View style = {styles.titleContainer}>
                <Text style = {styles.title}>Magic 8 Ball</Text>
          </View>

          <View style = {styles.infomationConatiner}>
              <View style = {styles.headerContainer}>
                <Text style = {styles.header}>Question </Text>
              </View>

              <View style = {styles.resultContainer}>
                  <Text style ={styles.result}>{userQuestion}</Text>
              </View>
          </View>

          <View style = {styles.infomationConatiner}>
              <View style = {styles.headerContainer}>
                <Text style = {styles.header}>Wisdom </Text>
              </View>

              <View style = {styles.resultContainer}>
                  <Text style ={styles.result}>{userResponse}</Text>
              </View>
          </View>

                  <Pressable
                style = {styles.mainButtonContainer}
                android_ripple={{color:""}}
                //style = {({pressed}) => pressed && styles.pressedButton}

                onPress = {endEightBallHandler}
                >

                  <View style = {styles.resultButton}>
                    <Text style = {styles.resultButtonText}> Main Screen</Text>
                  </View>

          </Pressable>




    </SafeAreaView>

      </Modal>








        </SafeAreaView>
     </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D7BFDC',
    paddingTop: 50,
  },

  titleContainer:{
    margin: 10,
    flex:2,
    paddingHorizontal: 10,
    padding:10,
    backgroundColor: "#52B2BF",
    borderWidth: 3,
    bordeRadius: 7,	
    borderColor: "#000080",
    justifyContent: "center",
    alignContent: "center",
  },
  title:{	
      fontSize: 60,
      fontWeight: "bold",
      color: "#000080"
      

  },

  imageContainer:{
      margin:20,
      padding: 10,
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      zIndex:-1,
      

  },
  image: {
   height: 120,
		width: 160,
		borderWidth: 3,
    borderColor: "#89CFFF",
    borderRadius: 100,
    zIndex:-1,


  },

  inputContainer:{
      flex: 4,
      height: "80%",
      width: "80%",
      alignItems: "center",
      justifyContent:"center",


  },

  input:{
   // alignItems: "",
      padding: 20,
      borderWidth:3,
      height: "80%",
      width: "90%",
      borderColor: "#B100CD",
      backgroundColor: '#DA8EE7',
      color: '#000080'
      


  },
  mainButtonContainer:{
    flex:1,
    borderColor: "#52B2BF",
    borderWidth: 3,

    //backgroundColor: 
    margin: 20,
    justifyContent:"center",
    alignItems: "center",

  },

  resultButton:{
      height: 70,
      justifyContent: "center",
      color: "#B100CD",
  },

//Modal Styling 
modalContainer:{
  flex:1,
    backgroundColor: '#D7BFDC',
    paddingTop: 50,
  },

  infomationConatiner:{
    flex: 4,
    backgroundColor: '#FFFF00',
    margin: 10,

  },



 headerContainer:{
    height: 40,
    alignItems: "left",
    backgroundColor: '#DA8EE7',
    borderColor: "#B100CD",
    bordeRadius: 7,
    borderWidth:2,
 },

  header:{
    color: '#000080',
    padding: 5,
    fontWeight: "bold",
    fontSize: 20,
  },

 resultContainer:{
  flex:2,
  backgroundColor: '#89CFFF',
    alignItems:"center",
 },
 
 result:{
  color: '#000080',
    fontSize: 30,
    fontStyle: "italic",

 },

});

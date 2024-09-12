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

      //Sets User input
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

          //Sets the response as the over All varible
          setUserResponse(wordReponseResult);
          setUserQuestion(userQuestion);
      }

      //This changes the response if the user enters a question or not
        //By default there is response 
      let wisdomResponse = (
        <Text style ={styles.result}>{userResponse}</Text>
      );

      //Checking if nothing has been entered into the text box
        //Asking the user to input a question
      if (userQuestion === ""){
        wisdomResponse = (<Text style ={styles.result}>Please ask a question for insight. </Text>);
      }

  
      
  return (
      <>
        <StatusBar/>

        <SafeAreaView style = {styles.container}>

          <View style = {styles.titleContainer}>
              <Text style = {styles.title}> Magic 8 Ball</Text>

          </View>
          
          <View style = {styles.centerItems}> 
          <View style = {styles.imageContainer}>
              <Image style = {styles.image} source = {require("./assets/Images/eightBall_new.png")}/>
          </View>

          <View style = {styles.inputContainer}>
              <TextInput  
                  style = {styles.input}
                  placeholder='What troubles you? :)'
                  onChangeText = {inputQuestionHandler}
                  value = {userQuestion}
              />
          </View>

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
                  {wisdomResponse}
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
    backgroundColor: '#FFC594',
    paddingTop: 50,
  
   
  },

  titleContainer:{
      flex:2,
    backgroundColor: "#F9E075",
    paddingHorizontal: 10,
    borderWidth: 5,
    borderBlockColor: "#F9A603",
    justifyContent: "center",
    alignItems:"center",
    padding:10,
    margin:10,

  },
  title:{	
      fontSize: 60,
      fontWeight: "bold",

  },

  imageContainer:{
      flex: 2,
      width: "60%",
      height: "60%",
      justifyContent: "center",
      alignItems : "center",
      margin: 30,
  },
  image: {
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

  inputContainer:{
      flex: 4,
      height: "80%",
      width: "80%",
      alignItems: "center",
      padding:20,
  },

  input:{
   // alignItems: "",
      margin:10,
      padding: 20,
      borderWidth:3,
      height: "80%",
      width: "90%",
      borderColor: "#F9E075",
      backgroundColor: "#F9A603",
      textAlign:"center",
      fontWeight: "bold",

  },

  centerItems:{
    flex: 8,
    justifyContent: "center",
    alignItems: "center",

  },
  mainButtonContainer:{
    flex:1,
    backgroundColor: "#F9E075",
    borderColor: "#F9A603",
    borderWidth: 3,

    margin: 20,
    justifyContent:"center",
    alignItems: "center",
    fontStyle: "italic",

  },

  resultButtonText:{
    fontStyle: "italic",
    fontSize: 20,

  },
  resultButton:{
      height: 70,
      justifyContent: "center",
  },

//Modal Styling 
modalContainer:{
  flex:1,
    backgroundColor: '#FFC594',
    paddingTop: 50,
  },

  infomationConatiner:{
    flex: 4,
    margin: 10,
    flexDirection: "row",
    padding: 20,

  },

 headerContainer:{
    height: 40,
    alignItems: "left",
    backgroundColor: '#FEE135',
    borderColor: "#CC7722",
    bordeRadius: 7,
    borderWidth:2,
    marginRight: 5,


 },

  header:{
    padding: 5,
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
    
  },

 resultContainer:{
  flex:2,
  alignItems:"center",
  borderWidth: 5,
  backgroundColor: "#EFB261",
  borderBlockColor: "#F9A603",

 },
 
 result:{
    fontSize: 30,
    fontStyle: "italic",

 },

});

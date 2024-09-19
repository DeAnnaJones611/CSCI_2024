import { StatusBar } from 'expo-status-bar';
import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import MovieItem from './componets/MovieItem';

//This is the data that is sent to create the componets
  const DATA = [
    {id: '1',
      name: 'American Ultra',
      image: require("./assets/Image/AmericanUltra.png"),
      rating: 3.5,
    },
    {id: '2',
      name: 'Book of Life',
      image: require("./assets/Image/BookOfLife.png"),
      rating: 3, 
    },
    {id: '3',
      name: 'Fall Guy',
      image: require("./assets/Image/FallGuy.png"),
      rating: 4,
    },
    {id: '4',
      name: 'Hamilton',
      image: require("./assets/Image/Hamilton.png"),
      rating: 4.2,
    },
    {id: '5',
      name: 'Me Before You',
      image: require("./assets/Image/MeBeforeYou.png"),
      rating: 3,
    },
    {id: '6',
      name: 'Deadpool and Wolverine',
      image: require("./assets/Image/DeadpoolandWolverine.png"),
      rating: 4.5,
    },
    {id: '7',
      name: 'Tangled',
      image: require("./assets/Image/Tangled.png"),
      rating: 3,
    },
    {id: '8',
      name: '     My Neighbor Totoro',
      image: require("./assets/Image/MyNeighborTotoro.png"),
      rating: 4,
    },
    {id: '9',
      name: 'Mulan',
      image: require("./assets/Image/Mulan.png"),
      rating: 3,
    },
    {id: '10',
      name: 'Beetlejuice',
      image: require("./assets/Image/BeetleJuice.png"),
      rating: 4.1,
    },
  ]

export default function App() {
//The top section is a title

//The flatlist is where the componets are compiled and shown
  return (
<>
<StatusBar style = "dark"/>
<SafeAreaView style={styles.rootContainer}>
    <View style={styles.titleContainer}>
      <Text style={styles.titleText}>
        Movie Rating 
      </Text>
    </View >

    <View style={styles.listContainer}>
      <FlatList
      data = {DATA}
      renderItem  = {({item}) => <MovieItem name={item.name} image ={item.image} rating = {item.rating}/>}
      keyExtractor = {item => item.id}
      />

    </View>
</SafeAreaView>
</>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    padding: 80,
    paddingTop: 90,
    backgroundColor: "#FBE4FF",
  },

  titleContainer:{ 
    alignItems: 'center',
    margin: 30,
    padding: 10,
    backgroundColor: "#4D0F28"
  },

  titleText:{
    fontSize:30,
    fontWeight: "bold",
    color: "#B28DFF"
  },
});

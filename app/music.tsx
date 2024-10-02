import React from 'react';
import { Text, View, StyleSheet, Image,FlatList } from 'react-native';
import FootBar from '@/components/FootBar';
import { useLocalSearchParams } from 'expo-router';



// const Item = ({ artist }) => (
//   <View >
//     <View>
//     <Text style={styles.text}>{artist.songName} Song name</Text>
//     <Text style={styles.text}>{artist.name}</Text>
//     </View>

//   </View>


// );


const Music = () => {

  const{name,songName}=useLocalSearchParams()
  
  return (
    <>
      <View style={styles.container}>
        <View style={styles.box1}>
           <Image
            style={styles.image}
            source={{
              uri: 'https://media.istockphoto.com/id/479993472/vector/marching-band-silhouette-full-lineup.jpg?s=612x612&w=0&k=20&c=ywffT1qf0neNPbGjakZEcSVibrd_1rzP-xMOciqUtns='
            }}
          />
        </View>
        <View>
          <Text style={styles.text}>{songName}</Text>
          <Text style={styles.text}>{name}</Text>
        </View>
        <View>

        </View>
        
      </View>

      
      {/* <FlatList
        data={artist}
        renderItem={({ item }) => <Item artist={item} />}
        keyExtractor={item => item.id}
      /> */}
      <FootBar />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box1: {
    marginBottom: 20,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    
  },
  text:{
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
    marginTop: 5,
    color: '#333'
  }
});

export default Music;

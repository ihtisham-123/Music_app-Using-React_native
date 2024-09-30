import React from 'react'
import { StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { Text, View } from '@/components/Themed';
import Ionicons from '@expo/vector-icons/Ionicons';


const Item = ({ artist }) => (
  <View style={styles.box}>
    <View>
      <Text style={styles.name}>{artist.name}</Text>
      <Text style={styles.name}>{artist.songName}</Text>

    </View>
    <View>
      <TouchableOpacity>
        <Ionicons  name="play" size={32} color="green" />
      </TouchableOpacity>
    </View>


  </View>

);


const ArtistComponent = ({ artist }) => {
  console.log(artist)

  return (



    <View style={styles.container}>
      <Text style={styles.title}>HomePage</Text>

      <FlatList
        data={artist}
        renderItem={({ item }) => <Item artist={item} />}
        keyExtractor={item => item.id}
      />

    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey'

  },
  box: {
    backgroundColor: 'black',
    color: 'white',
    borderColor: 'white',
    borderWidth: 1,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    


  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  name: {
    padding: 10,
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
  },




});


export default ArtistComponent
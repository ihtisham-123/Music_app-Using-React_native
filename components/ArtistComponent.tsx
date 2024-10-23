import React, { useState } from 'react';
import { StyleSheet, FlatList, TouchableOpacity, Text, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import FootBar from './FootBar';
import { Link } from 'expo-router';
import ToggleHeart from './toggleHeart';

// Item component to display artist information
const Item = ({ artist }) => {
  return (
    <View style={styles.box}>
      <View>
        <Text style={styles.name}>{artist.name}</Text>
        <Text style={styles.name}>{artist.songName}</Text>
      </View>
      <View>
        <TouchableOpacity>
          <Link
            href={{
              pathname: '/music',
              params: { ...artist },
            }}
          >
            <Ionicons name="play" size={32} color="green" />
          </Link>
        </TouchableOpacity>
        <ToggleHeart/>
      </View>
    </View>
  );
};

// Main component to display a list of artists
const ArtistComponent = ({ artist }) => {
  console.log(artist);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>HomePage</Text>

      <FlatList
        data={artist}
        renderItem={({ item }) => <Item artist={item} />}
        keyExtractor={(item) => item.id}
      />

      <FootBar />
    </View>
  );
};

// Styles for the component
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
  },
  box: {
    backgroundColor: 'black',
    color: 'white',
    borderColor: 'white',
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
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

export default ArtistComponent;

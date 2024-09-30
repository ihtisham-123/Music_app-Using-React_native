import React from 'react';
import { View, StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import Search from '@/app/search';

const FootBar = () => {

  return (
    <View style={styles.container}>

      <TouchableOpacity>
        <Link href={'/'} >
          <Ionicons style={styles.icon} name="home-sharp" size={32} color="green" />
        </Link>

      </TouchableOpacity>

      <TouchableOpacity>
        <Link href={'search'}  >
          <Ionicons style={styles.icon} name="search" size={32} color="green" />
        </Link>
      </TouchableOpacity>

      <TouchableOpacity>
        <Link href={'music'} >
          <Ionicons style={styles.icon} name="disc" size={32} color="green" />
        </Link>
      </TouchableOpacity>

      <TouchableOpacity>
        <Link href={'profile'} >
          <Ionicons style={styles.icon} name="person" size={32} color="green" />
        </Link>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',  // Align items in a row
    justifyContent: 'space-between',  // Space the items evenly across the container
    alignItems: 'center',  // Vertically center the icons
    paddingHorizontal: 20, // Add padding on sides
    paddingVertical: 10,  // Add vertical padding
    backgroundColor: '#f8f8f8',  // Optional background color
  },
  icon: {
    alignSelf: 'center',
    paddingHorizontal: 50,
    margin: 10,
    // backgroundColor:'black',
  }
});

export default FootBar;

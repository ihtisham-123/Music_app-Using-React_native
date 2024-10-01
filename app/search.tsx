import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { TextInput, View, StyleSheet } from 'react-native';
import FootBar from '@/components/FootBar';

const Search = () => {
  const [text, onChangeText] = React.useState('');

  return (
    <View style={styles.container}>
      
        <View style={styles.box}>
          <Ionicons style={styles.icon} name="search" size={32} color="grey" />
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
            placeholder="Search song"
            placeholderTextColor="grey"
          />
        </View>
      


      <View >
        <FootBar />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: 'grey',
    justifyContent: 'space-between',
    
  },
  box: {
    flexDirection: 'row',
    borderColor: 'gray',
    borderWidth: 1,
    alignItems: 'center',
    margin: 20,
    paddingHorizontal: 10,
    borderRadius: 40,
    backgroundColor: '#2c2c2c',
    width: '90%',  // Make sure the box doesn't stretch out of the screen
  },
  input: {
    flex: 1,  // Take up the remaining space after the icon
    height: 40,
    color: 'white',
    fontSize: 16,
    marginLeft: 10,  // Add some space between the icon and input
  },
  icon: {
    marginRight: 10,
  },

});

export default Search;

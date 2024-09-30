import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import { TextInput, View, StyleSheet } from 'react-native';

const Search = () => {
  const [text, onChangeText] = React.useState('');

  return (
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
  );
}

const styles = StyleSheet.create({
  box: {
    flexDirection: 'row',
    borderColor: 'gray',
    borderWidth: 1,
    alignItems: 'center',
    margin: 20,
    paddingHorizontal: 10,  // Add some padding to the inside of the box
    borderRadius: 40,
    backgroundColor: '#2c2c2c',  // Optional background color
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
  }
});

export default Search;

import FootBar from '@/components/FootBar'
import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const Music = () => {
  return (
    <>
    <View style={styles.container}>
      <View>
        <Text>Music Page</Text>
      </View>

      <View>
        <FootBar />
      </View>

    </View>
    </>
    
  )
}


const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',

    justifyContent: 'space-between',
  },

})
export default Music
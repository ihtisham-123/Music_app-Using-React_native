import FootBar from '@/components/FootBar'
import React from 'react'
import { Text, View, StyleSheet ,TouchableOpacity} from 'react-native'
import { Ionicons } from '@expo/vector-icons'
const profile= () => {
  return (
   
    <View style={styles.container}>
      <View style={styles.track}>
        <Text>Liked Track</Text>
        <TouchableOpacity >

        <Ionicons
        name={'arrow-down'}
        size={32}
        color="green"
      />
        </TouchableOpacity>

      </View>

      <View>
        <FootBar />
      </View>

    </View>
  
    
  )
}


const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',

    justifyContent: 'space-between',
  },
  track:{
    flexDirection:"row",
    justifyContent:"space-between",
    padding:10
  }

})
export default profile


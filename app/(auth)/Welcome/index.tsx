import React from 'react'
import { Dimensions, ImageBackground, StyleSheet, Text, View } from 'react-native'
import backImage from '../../../assets/images/background.jpg'
const Index = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={backImage} style={styles.background} />
      <Text style={{color:'red'}}>Indexdsadsa</Text>
    </View>
  )
}

export default Index;
export const styles = StyleSheet.create({
  background: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  container: {
    flex: 1,
  
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2000,
  },
});

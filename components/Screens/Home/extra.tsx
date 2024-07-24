import Pic from '@assets/images/background.jpg'
import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
const Extra = () => {
    const bound =()=>{
        console.log('lkdsaa');
        // router.replace('SignUp');

    }

  return (
    <View>
      <Text>extra</Text>
      <TouchableOpacity onPress={bound}  >
        <Text>Test Only</Text>
        <Image source={Pic} />
      </TouchableOpacity>
    </View>
  )
}

export default Extra
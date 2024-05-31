import { Stack } from 'expo-router'
import React from 'react'
import { SafeAreaView } from 'react-native'

const _layout = () => {
  return (
  <SafeAreaView style={{flex:1}}>
  <Stack screenOptions={{headerShown:false}} />
  </SafeAreaView>
  )
}

export default _layout
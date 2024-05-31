import { Stack } from 'expo-router'
import React from 'react'

const _layout = () => {
  return (
 <Stack>
    <Stack.Screen name='Welcome/index' options={{headerShown:false}} ></Stack.Screen>
 </Stack>
  )
}

export default _layout
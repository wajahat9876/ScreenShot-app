import { selectUser } from '@store/selectors/userSelects'
import { Redirect } from 'expo-router'
import React from 'react'
import { Dimensions, StyleSheet } from 'react-native'
import { useSelector } from 'react-redux'
const Index = () => {
 const {isWelcome}=useSelector(selectUser);
 if(isWelcome){
  return (<Redirect href="/(main)/Home" />)
 }
  return (
  <Redirect href="/(auth)/Welcome" />
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

import { useFocusEffect } from '@react-navigation/native'
import { getRespValue } from '@utils/design/design'
import { CameraView, useCameraPermissions } from 'expo-camera'
import { useRouter } from 'expo-router'
import React, { useState } from 'react'
import { BackHandler, Button, Linking, SafeAreaView, Text, View } from 'react-native'
const Scanner = () => {
  const router= useRouter()
  const [scanned, setScanned]= useState(false)
  console.log('scanner')

   //BackHandler
 useFocusEffect(
  React.useCallback(() => {
    const onBackPress = () => {
      router.replace('/(auth)/Welcome');
      return true; // Prevent default back button behavior
    };
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      onBackPress,
    );
    return () => backHandler.remove();
  }, []),
);
  const [permission, requestPermission]=useCameraPermissions()
if(!permission){
  <View></View>
}
  if(!permission?.granted){
    return(
      <View style={{marginTop:getRespValue(100), alignItems:'center'}}>
        <Text style={{marginBottom:getRespValue(50)}}>You need to grant camra permission</Text>
        <Button onPress={requestPermission} title='Grant Permission' />
      </View>
    )
  }
  const handleScanned=({type,data}:any)=>{
    setScanned(true)
 alert(`Bar code with type ${type} and data ${Linking.openURL(`${data}`)} has been scanned `)
  }

  return (
    <SafeAreaView style={{marginTop:getRespValue(100),alignItems:'center',justifyContent:'center'}}> 
      <Text>Scanner</Text>
      <CameraView style={{width:getRespValue(300),height:getRespValue(300)}} facing='back' barcodeScannerSettings={{barcodeTypes:['qr']}}
      onBarcodeScanned={scanned?undefined:handleScanned}
      
      />
    </SafeAreaView>
  )
}

export default Scanner
import backImg from '@assets/images/3d.png'
import { useIsFocused } from '@react-navigation/native'
import { incrementProgress, setRouteState } from '@store/slices/userSlice'
import { getRespValue } from '@utils/design/design'
import Button from 'components/globals/Button'
import Header from 'components/globals/Header'
import { useRouter } from 'expo-router'
import { AnimatePresence, MotiView } from 'moti'
import React, { useEffect, useRef } from 'react'
import {
  BackHandler,
  ImageBackground,
  StyleSheet,
  ToastAndroid,
  View,
} from 'react-native'
import * as Progress from 'react-native-progress'
import { useDispatch } from 'react-redux'
const Index = () => {
  const router = useRouter()
  const dispatch = useDispatch()
  //double click exit app
  const isFocused = useIsFocused()
  const backPressCountRef = useRef(0)

  useEffect(() => {
    const backHandler = () => {
      if (backPressCountRef.current === 1) {
        BackHandler.exitApp()
      } else {
        backPressCountRef.current += 1
        ToastAndroid.show('Press back again to exit', ToastAndroid.SHORT)
        setTimeout(() => {
          backPressCountRef.current = 0
        }, 2000)
      }
      return true
    }

    if (isFocused) {
      BackHandler.addEventListener('hardwareBackPress', backHandler)
    } else {
      BackHandler.removeEventListener('hardwareBackPress', backHandler)
    }
    return () =>
      BackHandler.removeEventListener('hardwareBackPress', backHandler)
  }, [isFocused])
  return (
    <AnimatePresence exitBeforeEnter={true}>
      <MotiView
        key="welcome"
        from={{
          opacity: 0,
          translateY: 100,
        }}
        animate={{
          opacity: 1,
          translateY: 0,
        }}
        exit={{
          opacity: 0,
          direction: 'rtl',
          translateY: 100,
        }}
        transition={{
          type: 'timing',
          duration: 300,
        }}
        style={{ flex: 1 }}
      >
        <Header title="Welcome" />
        <View style={styles.containers}>
          <ImageBackground source={backImg} style={styles.background} />
          <View style={{ alignContent: 'center', alignItems: 'center' }}>
            <Progress.Bar
              progress={0.2}
              width={300}
              color="#1388E4"
              height={8}
              style={{
                backgroundColor: 'white',
                alignSelf: 'center',
                marginTop: 20,
              }}
            />
            <Button
              buttonStyle={{ marginTop: 300 }}
              title="Welcome"
              onPress={() => {
                router.replace('/(main)/Home')
                dispatch(setRouteState(true))
                dispatch(incrementProgress(20))
              }}
            />
          </View>
        </View>
      </MotiView>
    </AnimatePresence>
  )
}
export default Index
export const styles = StyleSheet.create({
  background: {
    ...StyleSheet.absoluteFillObject,
    width: '100%',
    height: '100%',
    backgroundColor: 'transparent',
    position: 'absolute',
    bottom: 0,
    left: 0,
  },

  contentContainer: {
    paddingTop: getRespValue(100),
    flex: 1,
    alignItems: 'center',
    height: '100%',
    width: '100%',
  },
  Card: {
    alignSelf: 'center',
    backgroundColor: 'white',
    borderRadius: 15,
    height: '50%',
    width: '90%',
    padding: 20,
    shadowColor: 'black',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: 20,
    justifyContent: 'center',
  },
  containers: {
    flex: 1,
    backgroundColor: 'white',
    borderCurve: 'continuous',
    borderWidth: 2,
    borderColor: 'white',
    borderTopRightRadius: getRespValue(35),
    borderTopLeftRadius: getRespValue(35),
    marginTop: -28,
  },
})

import Header from 'components/globals/Header'
import { ResizeMode, Video } from 'expo-av'
import React, { useState } from 'react'
import { Button, StyleSheet, View } from 'react-native'
const ChatBot = () => {
  const video = React.useRef(null)
  const [muted, setmuted] = useState(true)
  const [status, setStatus] = React.useState({})
  const playerButton = React.useRef(null)
  return (
    <Header title="Video">
      <View style={{ justifyContent: 'center' }}>
        <Video
          ref={video}
          style={styles.video}
          source={{
            uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
          }}
          useNativeControls
          resizeMode={ResizeMode.CONTAIN}
          shouldPlay={true}
          isMuted={muted}
          onPlaybackStatusUpdate={(status) => setStatus(() => status)}
        />
        <View>
          <Button
            ref={playerButton}
            title={muted ? 'Unmute' : 'Mute'}
            onPress={() => setmuted(!muted)}
          />
          {/* <Button
          title="Play fro 5s"
          onPress={() =>
            video.current && video.current.playFromPositionAsync(5000)
          }
        /> */}
        </View>
      </View>
    </Header>
  )
}

export default ChatBot
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
  },
  video: {
    height: 380,
    width: '98%',
    alignSelf: 'center',
  },
  buttons: {
    display: 'flex',
    width: 500,
    flexDirection: 'row',
    padding: 0,
    margin: 0,
    justifyContent: 'flex-start',
    marginLeft: 200,
  },
  spacing: {
    marginRight: 16,
  },
})

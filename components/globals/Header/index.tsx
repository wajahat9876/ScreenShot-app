import { getRespValue } from '@utils/design/design'
import { MultiStepFormProps } from 'hooks/useMultiStepForm'
import React, { memo } from 'react'
import { StatusBar, Text, View } from 'react-native'

interface props extends MultiStepFormProps {
  title: string
  onPress?: () => void
  children?: React.ReactNode
}
const Header: React.FC<props> = ({ title, children }) => {
  // const { title, onPress } = props
  return (
    <View
      style={{
        paddingHorizontal: getRespValue(20),
        paddingTop: getRespValue(90),
        backgroundColor: '#8A34FA',
        paddingBottom: 50,
      }}
    >
      <StatusBar barStyle={'light-content'} />
      <Text
        style={{
          fontSize: 20,
          color: 'white',
          fontWeight: 'bold',
          alignSelf: 'center',
          textAlign: 'center',
          marginBottom: 10,
        }}
      >
        {title}
      </Text>
      {children}
    </View>
  )
}

export default memo(Header)

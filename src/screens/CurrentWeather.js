/* eslint-disable no-undef */
import React from 'react'
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ImageBackground
} from 'react-native'
import { Feather } from '@expo/vector-icons'
import RowText from '../components/RowText'

const CurrentWeather = () => {
  const {
    wrapper,
    container,
    temp,
    feels,
    highLowWrapper,
    highlow,
    bodyWrapper,
    description,
    message,
    image
  } = styles
  return (
    <SafeAreaView style={wrapper}>
      <ImageBackground
        source={require('../../assets/Current.jpg')}
        style={image}
      >
        <View style={container}>
          <Feather name="sun" size={100} color="black" />
          <Text style={temp}>6</Text>
          <Text style={feels}>Feels Like 5</Text>
          <RowText
            messageOne={'High: 8'}
            messageTwo={'Low: 6'}
            containerStyles={highLowWrapper}
            messageOneStyles={highlow}
            messageTwoStyles={highlow}
          />
        </View>
        <RowText
          messageOne={'Its Sunny'}
          messageTwo={'Its perfect t-shirt weather'}
          containerStyles={bodyWrapper}
          messageOneStyles={description}
          messageTwoStyles={message}
        />
      </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  wrapper: {
    backgroundColor: 'beige',
    flex: 1
  },
  temp: {
    color: 'black',
    fontSize: 48,
    marginTop: 15
  },
  feels: {
    color: 'black',
    fontSize: 30
  },
  highlow: {
    color: 'black',
    fontSize: 20
  },
  highLowWrapper: {
    flexDirection: 'row',
    gap: 15
  },
  bodyWrapper: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingLeft: 25,
    marginBottom: 40
  },
  description: {
    fontSize: 36
  },
  message: {
    fontSize: 30
  },
  image: {
    flex: 1,
    resizeMode: 'cover'
  }
})
export default CurrentWeather

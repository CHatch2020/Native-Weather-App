/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
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
import { weatherType } from '../utils/WeatherType'

const CurrentWeather = ({ weatherData }) => {
  const {
    wrapper,
    container,
    tempStyles,
    feels,
    highLowWrapper,
    highlow,
    bodyWrapper,
    description,
    message,
    image
  } = styles

  const {
    main: { temp, feels_like, temp_max, temp_min },
    weather
  } = weatherData

  const weatherCondition = weather[0].main
  return (
    <SafeAreaView
      style={[
        wrapper,
        { backgroundColor: weatherType[weatherCondition].backgroundColor }
      ]}
    >
      <ImageBackground
        source={require('../../assets/Current.jpg')}
        style={image}
      >
        <View style={container}>
          <Feather
            name={weatherType[weatherCondition].icon}
            size={100}
            color="black"
          />
          <Text style={tempStyles}>{`${Math.round(temp)}°`}</Text>
          <Text style={feels}>{`Feels like: ${Math.round(feels_like)}°`}</Text>
          <RowText
            messageOne={`High: ${Math.round(temp_max)}° `}
            messageTwo={`Low: ${Math.round(temp_min)}°`}
            containerStyles={highLowWrapper}
            messageOneStyles={highlow}
            messageTwoStyles={highlow}
          />
        </View>
        <RowText
          messageOne={weather[0].description}
          messageTwo={weatherType[weatherCondition].message}
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
  tempStyles: {
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

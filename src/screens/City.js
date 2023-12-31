/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import React from 'react'
import {
  SafeAreaView,
  Text,
  StyleSheet,
  ImageBackground,
  View
} from 'react-native'
import IconText from '../components/IconText'
import moment from 'moment'

const City = ({ weatherData }) => {
  const {
    container,
    cityName,
    cityText,
    countryName,
    popWrapper,
    popText,
    riseSetWrapper,
    riseSetText,
    image,
    rowLayout,
    group
  } = styles

  const { name, country, population, sunrise, sunset } = weatherData
  return (
    <SafeAreaView style={container}>
      <ImageBackground source={require('../../assets/City.jpg')} style={image}>
        <Text style={[cityName, cityText]}>{name}</Text>
        <Text style={[countryName, cityText]}>{country}</Text>

        <View style={[popWrapper, rowLayout]}>
          <IconText
            iconName={'user'}
            iconColor={'beige'}
            bodyText={`Population: ${population}`}
            bodyTextStyles={popText}
          />
        </View>
        <View style={group}>
          <View style={[riseSetWrapper, rowLayout]}>
            <IconText
              iconName={'sunrise'}
              iconColor={'white'}
              bodyText={moment(sunrise).format('hh:mm a')}
              bodyTextStyles={riseSetText}
            />
            <IconText
              iconName={'sunset'}
              iconColor={'white'}
              bodyText={moment(sunset).format('hh:mm a')}
              bodyTextStyles={riseSetText}
            />
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    flex: 1,
    resizeMode: 'cover'
  },
  cityName: {
    fontSize: 35
  },
  countryName: {
    fontSize: 30
  },
  cityText: {
    justifyContent: 'center',
    alignSelf: 'center',
    fontWeight: 'bold',
    color: 'white'
  },
  popWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  popText: {
    fontSize: 25,
    marginLeft: 7.5,
    color: 'beige',
  },
  riseSetWrapper: {
    justifyContent: 'space-around',
    marginTop: 30
  },
  riseSetText: {
    fontSize: 20,
    color: 'white'
  },
  rowLayout: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  group: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 30
  }
})
export default City

import {View, Text, Image,} from 'react-native';
import React from 'react';
import Button from '../components/welcomebutton.js';

const Welcome = ({navigation}: {navigation: any}) => {
  return (
    //just a black screen with white text
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFF0',
      }}>
      <Image
        source={require('../assets/logos/shrunk.png')}
        style={{
          width: '60%',
          height: '60%',
          resizeMode: 'contain',
          marginBottom: 150,
        }}
      />

      <Text
        style={{
          color: 'black',
          fontSize: 28,
          fontWeight: 'bold',
        }}>
        Welcome to Shrunk
      </Text>

      <Text
        style={{
          color: 'black',
          fontSize: 18,
          textAlign: 'center',
          marginHorizontal: 20,
        }}>
        Be aware of shrinkflation
      </Text>

      <View
        style={{
          flex: 1,
          justifyContent: 'flex-end',
          alignItems: 'stretch',
          width: '90%',
        }}>
        <Button
          title="Get Started"
          onPress={() => navigation.navigate('Main')}
          style={{
            marginBottom: 20,
            paddingVertical: 12,
            paddingHorizontal: 25,
          }}
        />
      </View>
    </View>
  );
};

export default Welcome;

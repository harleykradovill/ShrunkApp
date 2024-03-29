import {View, Image} from 'react-native';
import React from 'react';
import Button from '../components/mainbutton.js';
import AsyncStorage from "@react-native-async-storage/async-storage";

const Welcome = ({navigation}: {navigation: any}) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
      }}>
      <Image
        source={require('../assets/logos/shrunk.png')}
        style={{
          width: '60%',
          height: '60%',
          resizeMode: 'contain',
        }}
      />

      <View
        style={{
          flex: 1,
          justifyContent: 'flex-end',
          alignItems: 'stretch',
          width: '90%',
        }}>
        <Button
          title="Get Started"
          onPress={() => navigation.navigate('TabNavigator', {screen: 'Scan'})}
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

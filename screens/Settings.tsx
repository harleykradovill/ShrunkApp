import {View, Text} from 'react-native';
import React from 'react';
import COLORS from '../constants/colors';
import Button2 from '../components/settingspagebutton';

const Settings = () => {
  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: COLORS.white,
    }}>
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-start',
          marginTop: 20,
          alignItems: 'stretch',
          width: '90%',
        }}>

        <Text style={{
          fontSize: 22,
          textAlign: 'left',
          color: COLORS.shrunkgreen,
          fontFamily: 'Poppins-Bold',
          marginBottom: 10,
        }}>
          Settings
        </Text>

        <Button2
          title="Application Settings"
          style={{
            marginBottom: 5,
            paddingVertical: 12,
            paddingHorizontal: 25,
          }}
        />

        <Button2
          title="About Shrunk"
          style={{
            marginBottom: 5,
            paddingVertical: 12,
            paddingHorizontal: 25,
          }}
        />

        <Button2
          title="Help and Feedback"
          style={{
            marginBottom: 5,
            paddingVertical: 12,
            paddingHorizontal: 25,
          }}
        />

        <Button2
          title="Terms of Service"
          style={{
            marginBottom: 5,
            paddingVertical: 12,
            paddingHorizontal: 25,
          }}
        />

        <Button2
          title="Privacy Policy"
          style={{
            marginBottom: 5,
            paddingVertical: 12,
            paddingHorizontal: 25,
          }}
        />

        <Button2
          title="Delete App Data"
          style={{
            marginBottom: 5,
            paddingVertical: 12,
            paddingHorizontal: 25,
          }}
        />

      </View>

      <View style = {{
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 20,
      }}>
        <Text style = {{
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          fontFamily: 'Poppins-Regular',
          marginBottom: -3,
        }}>
          Created by Harley Kradovill
        </Text>

        <Text style={{
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          fontFamily: 'Poppins-Regular',
          marginBottom: -3,
        }}>
          Using React Native
        </Text>
      </View>
    </View>
  );
};
export default Settings;

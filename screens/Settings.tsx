import {View, Text} from 'react-native';
import React from 'react';
import COLORS from '../constants/colors';
import Button from '../components/settingsbutton';
import Button2 from '../components/settingsbutton2';

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
          marginTop: 70,
          alignItems: 'stretch',
          width: '90%',
        }}>
        <Text style = {{
          color: COLORS.shrunkgreen,
        }}>
          Application Settings
        </Text>

        <Button
          title="Language"
          subtitle="English (US)"
          style={{
            marginBottom: 10,
            paddingVertical: 12,
            paddingHorizontal: 25,
          }}
        />

        <Text style = {{
          color: COLORS.shrunkgreen,
        }}>
          About Shrunk
        </Text>

        <Button
          title="App Version"
          subtitle="0.0.1"
          style={{
            marginBottom: 10,
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
        }}>
          Created by Harley Kradovill
        </Text>

        <Text style={{
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
        }}>
          Using Native React
        </Text>
      </View>
    </View>
  );
};
export default Settings;

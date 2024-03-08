import {View, Text} from 'react-native';
import React from 'react';
import COLORS from '../constants/colors';
import { Entypo } from '@expo/vector-icons';

const History = () => {
  return (
    <View style={{
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center',
      backgroundColor: COLORS.shrunkgreen,
    }}>
      <View style={{
        backgroundColor: COLORS.white,
        height: '80%',
        width: '100%',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
      }}>
        <Text style={{
          fontSize: 20,
          textAlign: 'left',
          marginTop: 25,
          marginLeft: 25,
          color: COLORS.shrunkgreen,
          fontFamily: 'Poppins-Bold',
        }}>
          History
        </Text>

        <Entypo name="cog" size={24} color="#B00020" />

      </View>

    </View>
  );
};
export default History;

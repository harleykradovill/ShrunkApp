import {View, Text} from 'react-native';
import React from 'react';
import COLORS from '../constants/colors';

const History = () => {
  return (
    <View style={{
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'stretch',
      backgroundColor: COLORS.white,
    }}>
      <Text style={{
        fontSize: 22,
        textAlign: 'left',
        marginTop: 20,
        marginLeft: 20,
        color: COLORS.shrunkgreen,
        fontFamily: 'Poppins-Bold',
      }}>
        History
      </Text>
    </View>
  );
};
export default History;

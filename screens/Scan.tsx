import { View, Button, StyleSheet, Text, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import COLORS from "../constants/colors";
import Icon from 'react-native-vector-icons/Ionicons';

const Scan = () => {
  return (
   <View style={{
     flex: 1,
     justifyContent: 'center',
     alignItems: 'center',
     backgroundColor: COLORS.black,
   }}>
     <Icon name='scan-outline' size={95} color={COLORS.white} />
   </View>
  );
};
export default Scan;

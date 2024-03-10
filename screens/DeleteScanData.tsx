import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import COLORS from "../constants/colors";
import Button from '../components/mainbutton.js';
import Icon from 'react-native-vector-icons/Ionicons';

const DeleteScanData = () => {
  return (
   <View style={{
     flex: 1,
     alignItems: 'center',
      justifyContent: 'flex-end',
     backgroundColor: COLORS.white,
     width: '100%',
   }}>

     <View style={{
       width: '90%',
       alignItems: 'center',
       justifyContent: 'center',
     }}>
       <Text style={{
          fontSize: 16,
          textAlign: 'center',
          color: COLORS.black,
          fontFamily: 'Poppins-Regular',
          marginBottom: 10,

       }}>
          The following operation will delete all scan history from your device. This action cannot be undone.
       </Text>
     </View>

     <View style={{
       width: '90%',
     }}>
       <Button
         title="Delete all scan history"
         buttonColor={COLORS.error}
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
export default DeleteScanData;

import { View, Button, StyleSheet, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import COLORS from "../constants/colors";
import { CameraView, useCameraPermissions } from 'expo-camera/next';
import { useState } from 'react';

const Scan = () => {
  const [facing, setFacing] = useState('back');
  const [permission, requestPermission] = useCameraPermissions();
  if (permission === 'denied') {
    return (
      <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.white,
      }}>
        <Text>Camera permission is required to use this feature.</Text>
        <TouchableOpacity
          onPress={requestPermission}
          style={{
            padding: 10,
            backgroundColor: COLORS.black,
            borderRadius: 5,
            marginTop: 10,
          }}>
          <Text style={{ color: COLORS.white }}>Request Permission</Text>
        </TouchableOpacity>
      </View>
    );
  }
  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: COLORS.white,
    }} />
  );
};
export default Scan;

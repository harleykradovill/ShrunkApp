import { View, Button, StyleSheet, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import COLORS from "../constants/colors";
import { CameraView, useCameraPermissions } from 'expo-camera/next';
import { useState } from 'react';

const Scan = () => {
  const [facing, setFacing] = useState('back');
  const [permission, requestPermission] = useCameraPermissions();

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

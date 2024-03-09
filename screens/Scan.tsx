import { View, Button, StyleSheet, Text, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import COLORS from "../constants/colors";
import { BarCodeScanner } from 'expo-barcode-scanner';

const Scan = () => {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [scanned, setScanned] = useState(false);
  const [text, setText] = useState('Not yet scanned');
  const askForCameraPermission = () => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }

  useEffect(() => {
    askForCameraPermission();
  }, []);

  return (
   <View style={{
     flex: 1,
     justifyContent: 'center',
     alignItems: 'center',
     backgroundColor: COLORS.black,
   }} />
  );
};
export default Scan;

import { View, Button, StyleSheet, Text, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import COLORS from "../constants/colors";
import { BarCodeScanner } from 'expo-barcode-scanner';

const Scan = () => {
  const [scanned, setScanned] = useState(false);

  const handleBarCodeScanned = ({ type, data }: any) => {
    setScanned(true);
    //alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  };

  return (
//    <View style={{
//      flex: 1,
//      justifyContent: 'center',
//      alignItems: 'center',
//      backgroundColor: COLORS.white,
//    }} />

    <View>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
    </View>
  );
};
export default Scan;

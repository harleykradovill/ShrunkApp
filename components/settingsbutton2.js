import { Text, TouchableOpacity, StyleSheet, View, Image } from 'react-native';
import React from 'react';
import COLORS from '../constants/colors';

const Button2 = (props) => {
    const textColor = props.filled ? COLORS.black : COLORS.black;

    return (
      <TouchableOpacity
        style={{
            backgroundColor: COLORS.white,
            ...styles.button,
            ...props.style,
            paddingLeft: 0,
        }}
        onPress={props.onPress}
      >
        <Text style={{ fontSize: 18, ... { color: textColor } }}>{props.title}</Text>
      </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        paddingBottom: 16,
        paddingVertical: 10,
        color: COLORS.blue,
        borderRadius: 0,
        width: '100%',
    },
});
export default Button2;

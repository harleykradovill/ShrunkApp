import { Text, TouchableOpacity, StyleSheet, View, Image } from 'react-native';
import React from 'react';
import COLORS from '../constants/colors';
import { Ionicons } from '@expo/vector-icons';

const Button2 = (props) => {
    const textColor = props.filled ? COLORS.black : COLORS.black;

    return (
      <TouchableOpacity
        style={{
            backgroundColor: COLORS.white,
            ...styles.button,
            ...props.style,
            paddingLeft: 0,
            paddingRight: 0,
            borderBottomWidth: 1,
            borderBottomColor: COLORS.cgray,
        }}
        onPress={props.onPress}
      >
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <View>
            <Text style={{ fontSize: 16, fontFamily: 'Poppins-Regular', ... { color: textColor } }}>{props.title}</Text>
          </View>
          <View>
            <Ionicons name="chevron-forward" size={24} color="black" />
          </View>
        </View>
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
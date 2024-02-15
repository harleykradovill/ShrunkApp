import { Text, TouchableOpacity, StyleSheet, View, Image } from 'react-native';
import React from 'react';
import COLORS from '../constants/colors';

const Button = (props) => {
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
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
              <View>
                  <Text style={{ fontSize: 14, textAlign: 'left', color: '#999' }}>{props.title}</Text>
                  <Text style={{ fontSize: 18, textAlign: 'left', color: COLORS.black }}>{props.subtitle}</Text>
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
export default Button;

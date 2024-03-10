import { Text, TouchableOpacity, StyleSheet, View, Image } from 'react-native';
import React from 'react';
import COLORS from '../constants/colors';
import Icon from 'react-native-vector-icons/Ionicons';

const Button2 = (props) => {
    const textColor = props.filled ? COLORS.black : COLORS.black;

    let iconName = "chevron-forward";

    if (props.title === "Delete App Data") {
      iconName = "trash";
    } else if (props.title === "Terms of Service") {
      iconName = "";
    } else if (props.title === "Privacy Policy") {
      iconName = "";
    }

    return (
      <TouchableOpacity
        style={{
            backgroundColor: COLORS.white,
            ...styles.button,
            ...props.style,
            paddingLeft: 0,
            paddingRight: 0,
            borderBottomWidth: 1,
            borderBottomColor: '#dddddd',
        }}
        onPress={props.onPress}
      >
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <View>
            <Text style={{ fontSize: 16, fontFamily: 'Poppins-Regular', ... { color: textColor } }}>{props.title}</Text>
          </View>
          <View>
            {iconName !== "" && <Icon name={iconName} size={18} color={COLORS.shrunkgreen} />}
          </View>
        </View>
      </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        paddingBottom: 16,
        paddingTop: 16,
        color: COLORS.blue,
        borderRadius: 0,
        width: '100%',
    },
});
export default Button2;

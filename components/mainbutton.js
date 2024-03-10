import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import COLORS from '../constants/colors'

const Button = (props) => {
    const textColor = props.filled ? COLORS.white : COLORS.white;

    return (
        <TouchableOpacity
            style={{
                ...styles.button,
                ...{ backgroundColor: props.buttonColor },
                ...props.style,
            }}
            onPress={props.onPress}
        >
            <Text style={{ fontSize: 16, fontFamily: "Poppins-Regular", marginTop: 5, ... { color: textColor } }}>{props.title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        paddingBottom: 16,
        paddingVertical: 10,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    }
})
export default Button

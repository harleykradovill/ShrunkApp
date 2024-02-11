import {View, Text, Image} from 'react-native';
import React from 'react';
import Button from "../components/welcomebutton";


const Main = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFFFF0' }}>


            <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'stretch', width: "90%" }}>
                <Button
                    title="Get Started"
                    style={{
                        marginBottom: 20,
                        paddingVertical: 12,
                        paddingHorizontal: 25,
                    }}
                />
            </View>
        </View>
    )
}
export default Main

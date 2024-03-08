import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Welcome, Scan, History, Settings} from './screens';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import COLORS from './constants/colors';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
import { Ionicons } from '@expo/vector-icons';

// Bottom Tab Navigation
const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        //handle icons
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (focused) {
            color = COLORS.shrunkgreen;
          } else {
            color = COLORS.black;
          }
          size = 30;
          if (route.name === 'Scan') {
            iconName = focused ? 'scan' : 'scan';
          } else if (route.name === 'History') {
            iconName = focused ? 'time' : 'time';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'settings' : 'settings';
          }
          return <Ionicons name={iconName as any} size={size} color={color} />;
        },

        tabBarActiveTintColor: COLORS.shrunkgreen,
        tabBarInactiveTintColor: COLORS.black,
        headerShown:false,
        headerTransparent:true,
        headerTintColor: COLORS.black,
        tabBarActiveBackgroundColor: COLORS.white,
        tabBarInactiveBackgroundColor: COLORS.white,
        tabBarLabelStyle: {
          fontSize: 12,
          marginBottom: 5,
          fontFamily: 'Poppins-Regular',
        },
        tabBarStyle: {
          height: 60,
        },
      })}>

      <Tab.Screen name="History" component={History} />
      <Tab.Screen name="Scan" component={Scan} options={{
        headerShown: false,
      }}/>
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
};


//Start app in Welcome screen
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TabNavigator">
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="TabNavigator"
          component={TabNavigator}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

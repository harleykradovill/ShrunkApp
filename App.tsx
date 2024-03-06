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
      screenOptions={{
        tabBarActiveTintColor: COLORS.shrunkgreen,
        tabBarInactiveTintColor: COLORS.black,
        headerShown:true,
        headerTransparent:true,
        headerTintColor: COLORS.black,
        tabBarActiveBackgroundColor: COLORS.tabbarbackground,
        tabBarInactiveBackgroundColor: COLORS.tabbarbackground,
        tabBarLabelStyle: {
          fontSize: 12,
          marginBottom: 5,
          fontFamily: 'Poppins-Regular',
        },
        tabBarStyle: {
          height: 60,
          borderColor: COLORS.tabbarborder,
        },
      }}>
      <Tab.Screen name="Scan" component={Scan} options={{
        headerShown: false,
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="scan" color={color} size={size} />
        ),
      }}/>
      <Tab.Screen name="History" component={History} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
};


//Start app in Welcome screen
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
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

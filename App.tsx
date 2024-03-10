import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Welcome, Scan, History, Settings} from './screens';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import COLORS from './constants/colors';
import 'react-native-gesture-handler';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
import Icon from 'react-native-vector-icons/Ionicons';

// Bottom Tab Navigation
const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: COLORS.shrunkgreen,
        tabBarInactiveTintColor: COLORS.black,
        headerShown:false,
        headerTransparent:true,
        headerTintColor: COLORS.black,
        tabBarActiveBackgroundColor: COLORS.white,
        tabBarInactiveBackgroundColor: COLORS.white,
        tabBarLabelStyle: {
          fontSize: 12,
          marginTop: -8,
          marginBottom: 8,
          fontFamily: 'Poppins-Regular',
        },
        tabBarStyle: {
          height: '9%',
        },
        tabBarIcon: ({ focused }) => {
          let iconName = "";

          if (route.name === 'History') {
            iconName = focused ? 'time' : 'time-outline';
          } else if (route.name === 'Scan') {
            iconName = focused ? 'scan' : 'scan-outline';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'settings' : 'settings-outline';
          }
          return <Icon name={iconName} size={24} color={focused ? COLORS.shrunkgreen : COLORS.black} />;
        },
      })}>

      <Tab.Screen name="History" component={History} options={{
      }}/>
      <Tab.Screen name="Scan" component={Scan} options={{
        headerShown: false,
      }}/>
      <Tab.Screen name="Settings" component={Settings} options={{
      }}/>
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

import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreens/HomeScreen';
import DiningScreen from '../screens/DiningScreens/DiningScreen';
import AdminScreen from '../screens/AdminScreens/AdminScreen';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Tab = createBottomTabNavigator();

const MainTabNavigator = () => (
  <Tab.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <Tab.Screen
      component={HomeScreen}
      name="Home"
      options={{
        tabBarLabel: 'Home',
        // eslint-disable-next-line react/no-unstable-nested-components
        tabBarIcon: ({ color, size }) => (
          <Icon name="home" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      component={DiningScreen}
      name="Dining"
      options={{
        tabBarLabel: 'Dining',
        // eslint-disable-next-line react/no-unstable-nested-components
        tabBarIcon: ({ color, size }) => (
          <Icon name="local-dining" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      component={HomeScreen}
      name="Orders"
      options={{
        tabBarLabel: 'orders',
        // eslint-disable-next-line react/no-unstable-nested-components
        tabBarIcon: ({ color, size }) => (
          <Icon name="delivery-dining" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      component={AdminScreen}
      name="Admin"
      options={{
        tabBarLabel: 'Profile',
        // eslint-disable-next-line react/no-unstable-nested-components
        tabBarIcon: ({ color, size }) => (
          <Icon name="account-circle" color={color} size={size} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default MainTabNavigator;

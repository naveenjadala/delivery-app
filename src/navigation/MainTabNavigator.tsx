import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreens/HomeScreen';
import DiningScreen from '../screens/DiningScreens/DiningScreen';
import AdminScreen from '../screens/AdminScreens/AdminScreen';

const Tab = createBottomTabNavigator();

const MainTabNavigator = () => (
  <Tab.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <Tab.Screen component={HomeScreen} name="Home" />
    <Tab.Screen component={DiningScreen} name="Dining" />
    <Tab.Screen component={HomeScreen} name="Orders" />
    <Tab.Screen component={AdminScreen} name="Admin" />
  </Tab.Navigator>
);

export default MainTabNavigator;

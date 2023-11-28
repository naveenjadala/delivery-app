import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/AuthScreens/LoginScreen';
import SignUpScreen from '../screens/AuthScreens/SignupScreen';
import AuthScreen from '../screens/AuthScreens/AuthScreen';
import { AuthStackNavProps } from './NavTypes';
import ForgotPassword from '../screens/AuthScreens/ForgotPassword';

const Stack = createNativeStackNavigator<AuthStackNavProps>();

const AuthStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="AuthScreen" component={AuthScreen} />
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="SignUp" component={SignUpScreen} />
    <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
  </Stack.Navigator>
);

export default AuthStack;

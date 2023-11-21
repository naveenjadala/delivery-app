import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './AuthStack';
import MainTabNavigator from './MainTabNavigator';
import { AuthContext } from '../screens/AuthScreens/AuthContext';

const AppNavigator = () => {
  const { token } = useContext(AuthContext);
  return (
    <NavigationContainer>
      {token ? <MainTabNavigator /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default AppNavigator;

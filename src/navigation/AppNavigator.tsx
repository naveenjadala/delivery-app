import React, { useContext, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './AuthStack';
import MainTabNavigator from './MainTabNavigator';
import { AuthContext, AuthProvider } from '../screens/AuthScreens/AuthContext';

const AppNavigator = () => {
    const { token } = useContext(AuthContext);
    console.log(token, "tokkk");

    return (
        <NavigationContainer>
            {token ? <MainTabNavigator /> : <AuthStack />}
        </NavigationContainer>
    );
};

export default AppNavigator;

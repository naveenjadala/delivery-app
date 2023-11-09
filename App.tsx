/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useContext, useEffect} from 'react';
import AppNavigator from './src/navigation/AppNavigator';
import SplashScreen from 'react-native-splash-screen';
import {AuthContext, AuthProvider} from './src/screens/AuthScreens/AuthContext';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  const {token} = useContext(AuthContext);
  console.log(token);

  return (
    <AuthProvider>
      <AppNavigator />
    </AuthProvider>
  );
};

export default App;

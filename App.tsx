/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import AppNavigator from './src/navigation/AppNavigator';
import SplashScreen from 'react-native-splash-screen';
import { AuthProvider } from './src/screens/AuthScreens/AuthContext';
import { PaperProvider } from 'react-native-paper';
import { Provider } from 'react-redux';
import { store } from './src/Redux/store';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
      <AuthProvider>
        <PaperProvider>
          <AppNavigator />
        </PaperProvider>
      </AuthProvider>
    </Provider>
  );
};

export default App;

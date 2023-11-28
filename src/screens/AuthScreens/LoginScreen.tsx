import React, { useContext, useEffect, useRef } from 'react';
import {
  Animated,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { login } from '../../services/api';
import { Formik } from 'formik';
import { AuthContext } from './AuthContext';
import SubmitBtn from '../../components/Buttons/SubmitBtn';
import CustomeFormikTextInput from '../../components/TextInputs/CustomeFormikTextInput';
import { GrayShade, secondaryColor } from '../../assets/color';
import CustomeHeader from '../../components/Headers/CustomeHeader';
import { useNavigation } from '@react-navigation/native';
import { dynamicFontSize } from '../../utils/DynamicStylingUtils';
import { LoginScreenNavigationProps } from '../../navigation/NavTypes';
import RegisterTxt from '../../components/common/RegisterTxt';

type loginProps = {
  email: string;
  password: string;
};

const LoginScreen = () => {
  const navigation = useNavigation<LoginScreenNavigationProps>();
  const ScaleValue = useRef(new Animated.Value(0)).current;
  const { setToken } = useContext(AuthContext);

  const loginApiCall = async (values: loginProps) => {
    try {
      let data = JSON.stringify({
        email: values.email,
        password: values.password,
      });
      const logindata = await login('loginApi', data);
      if (logindata.status === 'success') {
        setToken(logindata.token);
      }
    } catch (error: any) {
      console.error('Error will login', error);
    }
  };

  const startAnimation = () => {
    Animated.timing(ScaleValue, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    startAnimation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1, margin: 30 }}
        keyboardShouldPersistTaps="handled">
        <CustomeHeader
          iconName={'chevron-left'}
          onPress={() => navigation.goBack()}
        />
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.container}>
          <Text
            style={{
              fontSize: dynamicFontSize(23),
              marginVertical: 10,
              textAlign: 'left',
              alignSelf: 'flex-start',
              color: secondaryColor,
            }}>
            {'Welcome back! Glad \n to see you, Again!'}
          </Text>
          <Formik
            initialValues={{
              email: '',
              password: '',
            }}
            onSubmit={values => loginApiCall(values)}>
            {({ handleChange, handleSubmit, values }) => (
              <View style={styles.formContainer}>
                <CustomeFormikTextInput
                  placeholder="Email Address"
                  keyboardType="email-address"
                  onChangeText={handleChange('email')}
                  value={values.email}
                />

                <CustomeFormikTextInput
                  secureTextEntry
                  placeholder="Password"
                  onChangeText={handleChange('password')}
                  value={values.password}
                />

                <TouchableOpacity
                  onPress={() => navigation.navigate('ForgotPassword')}>
                  <Text style={{ ...styles.forgotPassSty }}>
                    Forgot Password?
                  </Text>
                </TouchableOpacity>

                <Animated.View
                  style={{ marginVertical: 20, opacity: ScaleValue }}>
                  <SubmitBtn lable="Login" onPress={() => handleSubmit()} />
                </Animated.View>
              </View>
            )}
          </Formik>
        </KeyboardAvoidingView>
      </ScrollView>
      <View>
        <RegisterTxt
          content={'Don’t have an account?'}
          redirectionTxt={'Register Now'}
          onPress={() => navigation.replace('SignUp')}
        />
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  formContainer: {
    marginTop: 20,
    width: '100%',
  },
  forgotPassSty: {
    color: GrayShade,
    fontSize: 14,
    fontFamily: 'Urbanist',
    fontWeight: '600',
    alignSelf: 'flex-end',
  },
});

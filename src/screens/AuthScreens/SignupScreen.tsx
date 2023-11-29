import {
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from 'react-native';
import React, { useContext } from 'react';
import { Formik } from 'formik';
import SubmitBtn from '../../components/Buttons/SubmitBtn';
import { signUp } from '../../services/api';
import { AuthContext } from './AuthContext';
import CustomeFormikTextInput from '../../components/TextInputs/CustomeFormikTextInput';
import CustomeHeader from '../../components/Headers/CustomeHeader';
import { useNavigation } from '@react-navigation/native';
import { LoginScreenNavigationProps } from '../../navigation/NavTypes';
import { dynamicFontSize } from '../../utils/DynamicStylingUtils';
import { secondaryColor } from '../../assets/color';
import RegisterTxt from '../../components/common/RegisterTxt';
import validationSchma from '../../utils/ValidationSchema';

type signUpProps = {
  username: string;
  email: string;
  password: string;
};

const SignupScreen = () => {
  const navigation = useNavigation<LoginScreenNavigationProps>();
  const { setToken } = useContext(AuthContext);

  const signUpApi = async (values: signUpProps) => {
    try {
      let data = JSON.stringify({
        username: values.username,
        email: values.email,
        password: values.password,
      });
      const signUpData = await signUp('SIGNUP', data);
      if (signUpData.status === 'success') {
        setToken(signUpData.token);
      }
    } catch (error) {
      console.error('Error will login', error);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1, margin: 30 }}
        keyboardShouldPersistTaps="handled">
        <CustomeHeader
          iconName={'chevron-left'}
          onPress={() => navigation.goBack()}
        />
        <KeyboardAvoidingView style={{ flex: 1 }}>
          <Text
            style={{
              fontSize: dynamicFontSize(23),
              marginVertical: 10,
              textAlign: 'left',
              alignSelf: 'flex-start',
              color: secondaryColor,
            }}>
            {'Hello! Register to get started'}
          </Text>
          <Formik
            initialValues={{ email: '', password: '', username: '' }}
            validationSchema={validationSchma.SignUpValidationSchema}
            onSubmit={values => signUpApi(values)}>
            {({
              handleChange,
              values,
              handleSubmit,
              handleBlur,
              touched,
              errors,
            }) => (
              <View
                style={{ width: '100%', alignSelf: 'center', marginTop: 10 }}>
                <CustomeFormikTextInput
                  placeholder="User Name"
                  keyboardType="default"
                  onChangeText={handleChange('username')}
                  value={values.username}
                  onBlur={handleBlur('username')}
                />
                {touched.username && errors.username && (
                  <Text style={{ color: 'red' }}>{errors.username}</Text>
                )}

                <CustomeFormikTextInput
                  placeholder="Email Address"
                  keyboardType="email-address"
                  onChangeText={handleChange('email')}
                  value={values.email}
                  onBlur={handleBlur('email')}
                />
                {touched.email && errors.email && (
                  <Text style={{ color: 'red' }}>{errors.email}</Text>
                )}
                <CustomeFormikTextInput
                  secureTextEntry
                  placeholder="Password"
                  onChangeText={handleChange('password')}
                  value={values.password}
                  onBlur={handleBlur('password')}
                />
                {touched.password && errors.password && (
                  <Text style={{ color: 'red' }}>{errors.password}</Text>
                )}
                <View style={{ marginVertical: 20 }}>
                  <SubmitBtn lable="SignUp" onPress={() => handleSubmit()} />
                </View>
              </View>
            )}
          </Formik>
        </KeyboardAvoidingView>
      </ScrollView>
      <View>
        <RegisterTxt
          content={'Already have an account? '}
          redirectionTxt={'Login Now'}
          onPress={() => navigation.replace('Login')}
        />
      </View>
    </SafeAreaView>
  );
};

export default SignupScreen;

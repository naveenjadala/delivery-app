import { KeyboardAvoidingView, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useContext } from 'react'
import { Formik } from 'formik';
import SubmitBtn from '../../components/Buttons/SubmitBtn';
import { handleTextInput } from 'react-native-formik';
import { signUp } from '../../services/api';
import { AuthContext, AuthProvider } from './AuthContext';
import CustomeFormikTextInput from '../../components/TextInputs/CustomeFormikTextInput';

type Props = {}

type signUpProps = {
  username: string,
  email: string,
  password: string
}

const SignupScreen = (props: Props) => {
  const { setToken } = useContext(AuthContext);

  const signUpApi = async (values: signUpProps) => {
    try {
      let data = JSON.stringify({
        username: values.username,
        email: values.email,
        password: values.password
      })
      const signUpData = await signUp('SIGNUP', data);
      if (signUpData.status === 'success') {
        setToken(signUpData.token);
      }
    } catch (error) {
      console.error("Error will login", error);
    }
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <KeyboardAvoidingView style={{ flex: 1 }}>
          <Formik initialValues={{ email: '', password: '', username: '' }}
            onSubmit={(values) => signUpApi(values)}>
            {({ handleChange, values, handleSubmit }) => (
              <View style={{ width: '80%', alignSelf: 'center', marginTop: 10 }}>
                <CustomeFormikTextInput
                  placeholder='User Name'
                  keyboardType='default'
                  onChangeText={handleChange('username')}
                  value={values.username} />
                <CustomeFormikTextInput
                  placeholder='Email Address'
                  keyboardType='email-address'
                  onChangeText={handleChange('email')}
                  value={values.email} />
                <CustomeFormikTextInput
                  secureTextEntry
                  placeholder='Password'
                  onChangeText={handleChange('password')}
                  value={values.password} />

                <SubmitBtn lable='SignUp' onPress={() => handleSubmit()} />
              </View>
            )}
          </Formik>
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView >
  )
}

export default SignupScreen

const styles = StyleSheet.create({})
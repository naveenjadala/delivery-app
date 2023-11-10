import React, { useContext, useEffect, useRef, useState } from 'react'
import { Animated, Button, KeyboardAvoidingView, Platform, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { login } from '../../services/api';
import { Formik } from 'formik';
import { primaryColor } from '../../assets/color';
import { dynamicFontSize } from '../../utils/DynamicStylingUtils';
import { AuthContext } from './AuthContext';
import SubmitBtn from '../../components/Buttons/SubmitBtn';
import CustomeFormikTextInput from '../../components/TextInputs/CustomeFormikTextInput';

type loginProps = {
    email: string,
    password: string
}

const LoginScreen = () => {
    const ScaleValue = useRef(new Animated.Value(0)).current;
    const { setToken } = useContext(AuthContext);

    const loginApiCall = async (values: loginProps) => {
        try {
            let data = JSON.stringify({
                email: values.email,
                password: values.password
            });
            const logindata = await login('loginApi', data);
            if (logindata.status === 'success') {
                setToken(logindata.token);
            }
        } catch (error: any) {
            console.error("Error will login", error);
        }
    }

    const startAnimation = () => {
        Animated.timing(ScaleValue, {
            toValue: 1,
            duration: 3000,
            useNativeDriver: true,
        }).start();
    }

    useEffect(() => {
        startAnimation();
    }, []);

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView
                contentContainerStyle={{ flexGrow: 1 }}
                keyboardShouldPersistTaps="handled">
                <KeyboardAvoidingView
                    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                    style={styles.container}>
                    <Formik
                        initialValues={{
                            email: '',
                            password: '',
                        }}
                        onSubmit={values => loginApiCall(values)}>
                        {({ handleChange, handleSubmit, values }) => (

                            <View style={styles.formContainer}>
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

                                <Animated.View style={{ marginVertical: 20, opacity: ScaleValue }}>
                                    <SubmitBtn lable="Login" onPress={() => handleSubmit()} />
                                </Animated.View>
                            </View>
                        )}
                    </Formik>
                </KeyboardAvoidingView>
            </ScrollView>
        </SafeAreaView>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
    },
    formContainer: {
        marginTop: 20,
        width: '80%',
        // alignItems: 'center',
        // alignSelf: 'center',
    },
})
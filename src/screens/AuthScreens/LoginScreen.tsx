import React, { useContext, useEffect, useRef, useState } from 'react'
import { Animated, Button, KeyboardAvoidingView, Platform, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { login } from '../../services/api';
import { storeData } from '../../storage';
import { Formik } from 'formik';
import { primaryColor } from '../../assets/color';
import { dynamicFontSize } from '../../utils/DynamicStylingUtils';
import { useNavigation } from '@react-navigation/native';
import { LoginScreenNavigationProps } from '../../navigation/NavTypes';
import { AuthContext } from './AuthContext';

type loginProps = {
    email: string,
    password: string
}

const LoginScreen = () => {
    const ScaleValue = useRef(new Animated.Value(0)).current;
    const naivigation = useNavigation<LoginScreenNavigationProps>();
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
        <SafeAreaView>
            <ScrollView>
                <KeyboardAvoidingView
                    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                    style={{ flex: 1 }}>
                    <View style={{ margin: 20 }}>
                        <Formik
                            initialValues={{
                                email: '',
                                password: '',
                            }}
                            onSubmit={values => loginApiCall(values)}>
                            {({ handleChange, handleSubmit, values }) => (
                                <View>
                                    <TextInput
                                        placeholder='Email Address'
                                        keyboardType='email-address'
                                        value={values.email}
                                        style={{ borderColor: '#000', borderBottomWidth: 0.5, marginVertical: 15 }}
                                        onChangeText={handleChange('email')} />

                                    <TextInput
                                        textContentType='password'
                                        secureTextEntry
                                        passwordRules={"required: upper; required: lower; required: digit; max-consecutive: 2; minlength: 8;"}
                                        placeholder='Password'
                                        value={values.password}
                                        style={{ borderColor: '#000', borderBottomWidth: 0.5, marginVertical: 15 }}
                                        onChangeText={handleChange('password')} />

                                    <Animated.View style={{ margin: 20, opacity: ScaleValue }}>
                                        <TouchableOpacity style={{ width: '100%', height: 50, backgroundColor: primaryColor, borderRadius: 15, justifyContent: 'center', alignItems: 'center', marginVertical: 20 }}
                                            onPress={() => handleSubmit()}>
                                            <Text style={{ fontSize: dynamicFontSize(14), color: '#fff' }}>Login</Text>
                                        </TouchableOpacity>
                                    </Animated.View>
                                </View>
                            )}
                        </Formik>
                    </View>
                </KeyboardAvoidingView>
            </ScrollView>
        </SafeAreaView>
    )
}

export default LoginScreen

const styles = StyleSheet.create({})
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import CurvedCard from '../../components/cards/CurvedCard'
import { useNavigation } from '@react-navigation/native'
import { LoginScreenNavigationProps } from '../../navigation/NavTypes'
import LoginScreen from './LoginScreen'
import SignupScreen from './SignupScreen'

type Props = {}

const AuthScreen = (props: Props) => {

    const navigation = useNavigation<LoginScreenNavigationProps>();
    const [screenNav, setScreenNav] = useState('Login');

    const handleOnpress = (type: string) => {
        setScreenNav(type);
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <CurvedCard type={screenNav} onPress={handleOnpress} />
            {screenNav === 'Login' ?
                <LoginScreen /> : <SignupScreen />}
        </SafeAreaView>
    )
}

export default AuthScreen

const styles = StyleSheet.create({})
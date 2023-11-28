import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import HeaderTitle from '../../components/common/HeaderTitle';
import SubmitBtn from '../../components/Buttons/SubmitBtn';
import CustomeHeader from '../../components/Headers/CustomeHeader';
import { useNavigation } from '@react-navigation/native';
import { LoginScreenNavigationProps } from '../../navigation/NavTypes';
import { GrayShade } from '../../assets/color';
import CustomeFormikTextInput from '../../components/TextInputs/CustomeFormikTextInput';
import RegisterTxt from '../../components/common/RegisterTxt';

const ForgotPassword = () => {
  const navigation = useNavigation<LoginScreenNavigationProps>();
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
          <View>
            <HeaderTitle title="Forgot Password?" />
            <Text>
              Don't worry! It occurs. Please enter the email address linked with
              your account.
            </Text>
            <View style={{ marginVertical: 20 }}>
              <CustomeFormikTextInput placeholder="Enter your email" />
            </View>

            <SubmitBtn lable="Send Code" />
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
      <View>
        <RegisterTxt
          content={'Remember Password? '}
          redirectionTxt={'Login'}
          onPress={() => navigation.navigate('Login')}
        />
      </View>
    </SafeAreaView>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //   alignItems: 'center',
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

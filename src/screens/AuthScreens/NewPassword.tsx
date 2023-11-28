import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import React from 'react';
import CustomeHeader from '../../components/Headers/CustomeHeader';
import SubHeaderTitle from '../../components/common/SubHeaderTitle';
import HeaderTitle from '../../components/common/HeaderTitle';
import { GrayShade } from '../../assets/color';
import { useNavigation } from '@react-navigation/native';
import { LoginScreenNavigationProps } from '../../navigation/NavTypes';
import CustomeFormikTextInput from '../../components/TextInputs/CustomeFormikTextInput';
import SubmitBtn from '../../components/Buttons/SubmitBtn';

const NewPassword = () => {
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
            <HeaderTitle title="Create new password" />
            <SubHeaderTitle
              title={
                'Your new password must be unique from those previously used.'
              }
            />
            <View style={{ marginVertical: 20 }}>
              <CustomeFormikTextInput placeholder="New Password" />
              <CustomeFormikTextInput placeholder="Confirm Password" />
            </View>
            <SubmitBtn
              lable="Reset Password"
              onPress={() => navigation.navigate('PasswordSuccessScreen')}
            />
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default NewPassword;
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

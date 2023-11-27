import { Button, Text, TextInput, View } from 'react-native';
import React from 'react';
import HeaderTitle from '../../components/common/HeaderTitle';

const ForgotPassword = () => {
  return (
    <View>
      <Text>ForgotPassword</Text>
      <HeaderTitle title="ForgotPassword" />
      <TextInput placeholder="test" />
      <Button title="name" />
      {/* <Text>ForgotPassword</Text> */}
    </View>
  );
};

export default ForgotPassword;

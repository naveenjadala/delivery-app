import { View } from 'react-native';
import React from 'react';
import HeaderTitle from '../../components/common/HeaderTitle';
import SubHeaderTitle from '../../components/common/SubHeaderTitle';
import SubmitBtn from '../../components/Buttons/SubmitBtn';
import { useNavigation } from '@react-navigation/native';
import { LoginScreenNavigationProps } from '../../navigation/NavTypes';
import LottieView from 'lottie-react-native';

const PasswordSuccessScreen = () => {
  const navigation = useNavigation<LoginScreenNavigationProps>();
  return (
    <View
      style={{
        flex: 1,
        margin: 30,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {/* <View style={{ height: '50%', width: '100%' }}> */}
      <LottieView
        source={require('../../assets/Lottie/Success.json')}
        style={{ width: '100%', height: 200 }}
        loop
        autoPlay
      />
      {/* </View> */}
      <HeaderTitle title="Password Changed!" style={{ textAlign: 'center' }} />
      <SubHeaderTitle
        style={{ textAlign: 'center' }}
        title={'Your password has been changed successfully.'}
      />
      <SubmitBtn
        lable="Back to Login"
        onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{ name: 'AuthScreen' }],
          })
        }
      />
    </View>
  );
};

export default PasswordSuccessScreen;

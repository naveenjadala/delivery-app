import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { LoginScreenNavigationProps } from '../../navigation/NavTypes';
import LandingImg from '../../assets/images/landing_img.png';
import SubmitBtn from '../../components/Buttons/SubmitBtn';
import { dynamicFontSize } from '../../utils/DynamicStylingUtils';
import globalStyles from '../../assets/globalStyles';
import RegisterTxt from '../../components/common/RegisterTxt';

const AuthScreen = () => {
  const navigation = useNavigation<LoginScreenNavigationProps>();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground
        style={{ height: '100%', width: '100%' }}
        source={LandingImg}>
        <View style={{ ...styles.subContainer }}>
          <View style={{ marginVertical: 20 }}>
            {/* <Image
              source={LOGO}
              resizeMode="contain"
              style={{ ...styles.imageSty }}
            /> */}
            <Text style={{ ...styles.titleSty }}>Fruzz Food</Text>
          </View>
          <SubmitBtn
            lable="Login"
            onPress={() => navigation.navigate('Login')}
          />
          <SubmitBtn
            lable="Register"
            btnCustomSty={{ ...globalStyles.borderBtnSty }}
            txtCustomeSty={{ color: '#000' }}
            onPress={() => navigation.navigate('SignUp')}
          />
        </View>
        <View>
          <RegisterTxt
            redirectionTxt={'Continue as a guest'}
            onPress={() => navigation.replace('SignUp')}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default AuthScreen;

const styles = StyleSheet.create({
  subContainer: {
    justifyContent: 'flex-end',
    flex: 1,
    marginBottom: 0,
    margin: 20,
  },
  gustTxtSty: {
    color: '#35C2C1',
    fontSize: dynamicFontSize(12),
    fontFamily: 'Urbanist',
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 10,
    textDecorationLine: 'underline',
  },
  imageSty: {
    width: 100,
    height: 100,
    alignSelf: 'center',
  },
  titleSty: {
    textAlign: 'center',
    fontSize: dynamicFontSize(18),
  },
});

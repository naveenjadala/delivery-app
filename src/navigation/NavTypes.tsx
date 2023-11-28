import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type AuthStackNavProps = {
  AuthScreen: undefined;
  Login: undefined;
  SignUp: undefined;
  ForgotPassword: undefined;
  NewPassword: undefined;
  PasswordSuccessScreen: undefined;
};

export type LoginScreenNavigationProps = NativeStackNavigationProp<
  AuthStackNavProps,
  'AuthScreen'
>;

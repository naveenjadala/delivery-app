import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import React from 'react';
import { primaryColor } from '../../assets/color';

interface RegistationtextProps extends TouchableOpacityProps {
  content?: string;
  redirectionTxt: string;
}

const RegisterTxt: React.FC<RegistationtextProps> = ({
  content,
  redirectionTxt,
  ...props
}) => {
  return (
    <TouchableOpacity style={{ ...styles.container }} {...props}>
      <Text>
        {content}{' '}
        <Text style={{ ...styles.redirectSty }}>{redirectionTxt}</Text>
      </Text>
    </TouchableOpacity>
  );
};

export default RegisterTxt;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    margin: 20,
  },
  redirectSty: {
    color: primaryColor,
    textDecorationLine: 'underline',
    fontWeight: '500',
  },
});

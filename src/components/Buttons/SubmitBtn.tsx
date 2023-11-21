import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import React from 'react';
import { primaryColor } from '../../assets/color';
import { dynamicFontSize } from '../../utils/DynamicStylingUtils';

interface ButtonProps extends TouchableOpacityProps {
  lable: string;
}

const SubmitBtn: React.FC<ButtonProps> = ({ lable, ...props }) => {
  return (
    <>
      <TouchableOpacity style={{ ...styles.btnSty }} {...props}>
        <Text style={{ ...styles.lableSty }}>test{lable}</Text>
      </TouchableOpacity>
    </>
  );
};

export default SubmitBtn;

const styles = StyleSheet.create({
  btnSty: {
    width: '100%',
    height: 50,
    backgroundColor: primaryColor,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  lableSty: {
    fontSize: dynamicFontSize(14),
    color: '#fff',
  },
});

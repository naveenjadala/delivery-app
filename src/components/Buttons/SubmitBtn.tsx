import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import React from 'react';
import { dynamicFontSize } from '../../utils/DynamicStylingUtils';

interface ButtonProps extends TouchableOpacityProps {
  lable: string;
  btnCustomSty?: {};
  txtCustomeSty?: {};
}

const SubmitBtn: React.FC<ButtonProps> = ({
  lable,
  btnCustomSty,
  txtCustomeSty,
  ...props
}) => {
  return (
    <>
      <TouchableOpacity
        style={{ ...styles.btnSty, ...btnCustomSty }}
        {...props}>
        <Text style={{ ...styles.lableSty, ...txtCustomeSty }}>{lable}</Text>
      </TouchableOpacity>
    </>
  );
};

export default SubmitBtn;

const styles = StyleSheet.create({
  btnSty: {
    width: '100%',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    backgroundColor: 'black',
    borderRadius: 10,
  },
  lableSty: {
    fontSize: dynamicFontSize(14),
    color: '#fff',
  },
});

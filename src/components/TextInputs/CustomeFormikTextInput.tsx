import { StyleSheet, TextInput, TextInputProps } from 'react-native';
import React from 'react';
import { textBgColor } from '../../assets/color';
interface CustomeTextInputProps extends TextInputProps {
  //add props if needed
}

const CustomeFormikTextInput: React.FC<CustomeTextInputProps> = ({
  ...props
}) => {
  return (
    <>
      <TextInput {...props} style={{ ...styles.inputSty }} />
    </>
  );
};

export default CustomeFormikTextInput;

const styles = StyleSheet.create({
  inputSty: {
    height: 55,
    borderColor: '#000',
    borderWidth: 0.5,
    marginVertical: 15,
    borderRadius: 8,
    backgroundColor: textBgColor,
    padding: 10,
  },
});

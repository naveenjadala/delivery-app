import { StyleSheet, Text, View, TextInput, TextInputProps } from 'react-native';
import React from 'react';

interface CustomeTextInputProps extends TextInputProps {
  //add props if needed
}

const CustomeFormikTextInput: React.FC<CustomeTextInputProps> = ({ ...props }) => {
    return (
        <TextInput
            {...props}
            style={{ ...styles.inputSty }}
        />
    );
};

export default CustomeFormikTextInput;

const styles = StyleSheet.create({
    inputSty: {
        borderColor: '#000',
        borderBottomWidth: 0.5,
        marginVertical: 15,
    },
});

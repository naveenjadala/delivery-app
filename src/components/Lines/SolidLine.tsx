import React from 'react';
import { View, StyleSheet } from 'react-native';
import { primaryColor } from '../../assets/color';

const SolidLine: React.FC = () => {
  return <View style={styles.line} />;
};

const styles = StyleSheet.create({
  line: {
    height: 2,
    backgroundColor: primaryColor,
    width: '130%', 
    borderRadius: 10,
  },
});

export default SolidLine;

import { StyleSheet, Text } from 'react-native';
import React from 'react';
import { dynamicFontSize } from '../../utils/DynamicStylingUtils';
import { secondaryColor } from '../../assets/color';

interface titleProps {
  title: string;
}

const HeaderTitle: React.FC<titleProps> = ({ title }) => {
  return <Text style={{ ...styles.headerSty }}>{title}</Text>;
};

export default HeaderTitle;

const styles = StyleSheet.create({
  headerSty: {
    fontSize: dynamicFontSize(23),
    marginVertical: 10,
    textAlign: 'left',
    alignSelf: 'flex-start',
    color: secondaryColor,
  },
});

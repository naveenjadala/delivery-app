import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { dynamicFontSize } from '../../utils/DynamicStylingUtils';
import { subHeadingColor } from '../../assets/color';

interface subheadingProps {
  title: string;
  style?: object;
}

const SubHeaderTitle: React.FC<subheadingProps> = ({ title, style }) => {
  return <Text style={{ ...styles.headerSty, ...style }}>{title}</Text>;
};

export default SubHeaderTitle;

const styles = StyleSheet.create({
  headerSty: {
    fontSize: dynamicFontSize(12),
    marginVertical: 10,
    textAlign: 'left',
    // alignSelf: 'flex-start',
    color: subHeadingColor,
  },
});

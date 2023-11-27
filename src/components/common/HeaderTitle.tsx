import { Text, View } from 'react-native';
import React from 'react';

interface titleProps {
  title: string;
}

const HeaderTitle: React.FC<titleProps> = ({ title }) => {
  return (
    <View>
      <Text testID="testHeading">{title}</Text>
      <Text testID="testHeading1">test</Text>
    </View>
  );
};

export default HeaderTitle;

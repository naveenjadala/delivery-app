import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { dynamicFontSize } from '../../utils/DynamicStylingUtils';

interface headerProps extends TouchableOpacityProps {
  iconName: string;
  title?: null | string;
}

const CustomeHeader: React.FC<headerProps> = ({
  iconName,
  title,
  ...props
}) => {
  return (
    <View style={{ ...styles.container }}>
      <TouchableOpacity style={{ ...styles.backBtnSty }} {...props}>
        <Icon name={iconName} size={20} color="#000" />
      </TouchableOpacity>
      {title && (
        <View style={{ ...styles.titleContainer }}>
          <Text style={{ ...styles.titleSty }}>{title}</Text>
        </View>
      )}
    </View>
  );
};

export default CustomeHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 60,
    alignItems: 'center',
  },
  backBtnSty: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    height: 40,
    width: 40,
    borderColor: '#000',
    // alignSelf: 'center',
    // alignItems: 'flex-'
  },
  titleContainer: {
    position: 'absolute',
    right: 0,
    left: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleSty: {
    fontSize: dynamicFontSize(14),
  },
});

import {
  Animated,
  Easing,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import SolidLine from '../Lines/SolidLine';
import {dynamicFontSize} from '../../utils/DynamicStylingUtils';
import LOGO from '../../assets/images/logo.png';
import type {EasingFunction} from 'react-native';

interface CardProps {
  type: string;
  onPress: (type: string) => void;
}

interface buttonProps {
  type: string;
  onPress: (type: string) => void;
  title: string;
}

const AuthButtonsComponent: React.FC<buttonProps> = ({
  type,
  onPress,
  title,
}) => {
  return (
    <TouchableOpacity
      style={{alignItems: 'center'}}
      onPress={() => onPress(title)}>
      <Text style={{padding: 10, fontSize: dynamicFontSize(14)}}>{title}</Text>
      {type === title && <SolidLine />}
    </TouchableOpacity>
  );
};

const CurvedCard: React.FC<CardProps> = ({type, onPress}) => {
  const logoAnimate = new Animated.Value(0);

  const animateLogo = (easing: EasingFunction) => {
    logoAnimate.setValue(0);
    Animated.timing(logoAnimate, {
      toValue: 1,
      easing,
      duration: 4000,
      useNativeDriver: true,
    }).start();
  };

  animateLogo(Easing.in(Easing.bounce));
  // useEffect(() => {  }, [])
  const size = logoAnimate.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 80],
  });

  return (
    <View style={{...styles.cardSty}}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          height: '80%',
        }}>
        <Animated.Image
          source={LOGO}
          style={{width: '40%', opacity: logoAnimate}}
        />
      </View>
      <View style={{...styles.tabSty}}>
        <AuthButtonsComponent type={type} onPress={onPress} title="Login" />
        <AuthButtonsComponent type={type} onPress={onPress} title="SignUp" />
      </View>
    </View>
  );
};

export default CurvedCard;

const styles = StyleSheet.create({
  cardSty: {
    height: 300,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 3,
    backgroundColor: 'white',
  },
  tabSty: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
  },
});

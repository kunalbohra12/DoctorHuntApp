import { ImageBackground, Text } from 'react-native';
import React, { useEffect } from 'react';
import styles from './SplashStyle';
import images from '../../HelperFiles/Images';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import LottieView from 'lottie-react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
const SplashScreen = () => {
  const navigation = useNavigation<NavigationProp<any>>();
  useEffect(() => {
    const timer = setTimeout(async () => {
      const isLogin = await AsyncStorage.getItem('userData');
      if(isLogin){
        navigation.navigate('BottomTabBarScreen');
      }else{
      navigation.navigate('LoginScreen');
      }
    }, 2000);
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <ImageBackground source={images.GRADIENT_BG} style={styles.gradientContainer}>
      <LottieView
        style={[styles.lottie]}
        source={require('../../assets/json/Frame.json')}
        autoPlay
        loop={true}
        resizeMode={'cover'}
      />
      <Text style={styles.title}>Doctor Hunt</Text>
    </ImageBackground>
  );
};
export default SplashScreen;

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 *
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnboardingScreen from './src/Screens/Onboarding/OnboardingScreen';
// import BottomTabBarScreen from './src/TabBar/TabNavigator';
import SettingsScreen from './src/Screens/Settings/SettingsScreen';
import FindDoctorScreen from './src/Screens/FindDoctor/FindDoctorScreen';
import SplashScreen from './src/Screens/Splash/SplashScreen';
import LoginScreen from './src/Screens/Login/LoginScreen';
import SignUpScreen from './src/Screens/SignUp/SignUpScreen';
import BottomTabBarScreen from './src/TabBar/TabNavigator';
import ForgotPasswordComponent from './src/Components/ForgotPassword/ForgotPasswordComponent';
import ResetPasswordComponent from './src/Components/ResetPassword/ResetPasswordComponent';
import MapScreen from './src/Screens/MapScreen/MapScreen';
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen name="SignUpScreen" options={{ headerShown: false }} component={SignUpScreen} />
        <Stack.Screen name="LoginScreen" options={{ headerShown: false }} component={LoginScreen} />
        <Stack.Screen name="SplashScreen" options={{ headerShown: false }} component={SplashScreen} />
        <Stack.Screen name="OnboardingScreen" options={{ headerShown: false }} component={OnboardingScreen} />
        <Stack.Screen name="SettingsScreen" options={{ headerShown: false }} component={SettingsScreen} />
        <Stack.Screen name="FindDoctorScreen" options={{ headerShown: false }} component={FindDoctorScreen} />
        <Stack.Screen name="BottomTabBarScreen" options={{ headerShown: false }} component={BottomTabBarScreen} />
        <Stack.Screen name="ForgotPasswordComponent" options={{ headerShown: false }} component={ForgotPasswordComponent} />
        <Stack.Screen name="ResetPasswordComponent" options={{ headerShown: false }} component={ResetPasswordComponent} />
        <Stack.Screen name="MapScreen" options={{ headerShown: false }} component={MapScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

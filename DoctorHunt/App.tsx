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
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginScreen">
      <Stack.Screen name="LoginScreen" options={{ headerShown: false }} component={LoginScreen} />
        <Stack.Screen name="SplashScreen" options={{ headerShown: false }} component={SplashScreen} />
        <Stack.Screen name="OnboardingScreen" options={{ headerShown: false }} component={OnboardingScreen} />
        <Stack.Screen name="SettingsScreen" options={{ headerShown: false }} component={SettingsScreen} />
        <Stack.Screen name="FindDoctorScreen" options={{ headerShown: false }} component={FindDoctorScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

import { View, Text, ImageBackground, Image, TextInput, Pressable, TouchableOpacity, Alert } from 'react-native';
import React, { useState } from 'react';
import styles from './LoginscreenStyle';
import images from '../../HelperFiles/Images';
import colors from '../../HelperFiles/Colors';
import ButtonComponent from '../../Components/ButtonComponent';
import GlobalStyles from '../../HelperFiles/GlobalStyles';
import { useNavigation } from '@react-navigation/native';
import ForgotPasswordComponent from '../../Components/ForgotPassword/ForgotPasswordComponent';
import ResetPasswordComponent from '../../Components/ResetPassword/ResetPasswordComponent';
import { LoginRequest } from '../../HelperFiles/api/AuthApiService';
const LoginScreen = () => {
    const [isVisible, setIsVisible] = useState(false);
    const navigation = useNavigation();
    const [isForgotModalVisible, setIsForgotModalVisible] = useState(false);
    const [isResetModalVisible, setIsResetModalVisible] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleModalVisibility = () => {
        setIsForgotModalVisible(false);
        setIsResetModalVisible(true);
    };
    const handleLogin = async () => {
        try {
            const response = await LoginRequest({
                email: email, password: password,
            });
            if (response.data != null || response.success == true) {
                console.log('Login Success:', response);
            } else {
                console.log('Login Failed:', response.message);
                Alert.alert('Message', response.message);
            }
        } catch (error) {
            console.error('Login Failed:', error);
        }
    };
    return (
        <ImageBackground source={images.GRADIENT_BG} style={styles.container}>
            <View style={styles.topContainer}>
                <Text style={styles.title}>Welcome back</Text>
                <Text style={styles.subTitle}>You can search course, apply course and find
                    scholarship for abroad studies</Text>
            </View>
            <View style={styles.buttonContainer}>
                <View style={styles.btnStyle}>
                    <Image source={images.GOOGLE_ICON} style={styles.btnIcon} />
                    <Text style={styles.btnTitle}>Google</Text>
                </View>
                <View style={styles.btnStyle}>
                    <Image source={images.FACEBOOK_ICON} style={styles.btnIcon} />
                    <Text style={styles.btnTitle}>Facebook</Text>
                </View>
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="email"
                    placeholderTextColor={colors.VIOLET}
                    style={styles.input}
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                />
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    secureTextEntry={isVisible}
                    placeholder="password"
                    placeholderTextColor={colors.VIOLET}
                    style={styles.input}
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                />
                <Pressable onPress={() => setIsVisible(!isVisible)}>
                    <Image style={styles.btnIcon} source={isVisible ? images.VISIBILITY_OFF : images.SECURE_ICON} />
                </Pressable>
            </View>
            <View style={styles.bottomBtnContainer}>
                <ButtonComponent
                    onPress={handleLogin}
                    title="Login"
                    buttonStyle={GlobalStyles.btnStyle}
                    textStyle={GlobalStyles.btnTxtStyle}
                />
            </View>
            <TouchableOpacity onPress={() => setIsForgotModalVisible(true)}>
                <Text style={styles.highlightTxt}>Forgot password</Text>
            </TouchableOpacity>
            <ForgotPasswordComponent
                visible={isForgotModalVisible}
                onClose={() => setIsForgotModalVisible(false)}
                onContinue={handleModalVisibility}
            />
            <ResetPasswordComponent
                visible={isResetModalVisible}
                onClose={() => setIsResetModalVisible(false)}
            />
            <View style={styles.bottomContainer}>
                <Text style={styles.bottomTxt}>Don’t have an account? </Text>
                <Pressable onPress={() => navigation.navigate('SignUpScreen')}>
                    <Text style={styles.mediumTxt}>Join us</Text>
                </Pressable>
            </View>
        </ImageBackground>

    );
};
export default LoginScreen;

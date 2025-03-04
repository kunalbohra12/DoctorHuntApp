import { View, Text, ImageBackground, Image, TextInput, Pressable,CheckBox, Alert } from 'react-native';
import React, { useState } from 'react';
import images from '../../HelperFiles/Images';
import styles from './SignUpScreenStyle';
import ButtonComponent from '../../Components/ButtonComponent';
import GlobalStyles from '../../HelperFiles/GlobalStyles';
import colors from '../../HelperFiles/Colors';
import { useNavigation } from '@react-navigation/native';
import { SignUpRequest } from '../../HelperFiles/api/AuthApiService';

const SignUpScreen = () => {
    const navigation = useNavigation();
    const [isSelected, setIsSelected] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleRegister = async () => {
        try {
            const response = await SignUpRequest({
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
                <Text style={styles.title}>Join us to start searching</Text>
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
                <TextInput placeholder="name" placeholderTextColor={colors.VIOLET} style={styles.input} />
            </View>
            <View style={styles.inputContainer}>
                <TextInput placeholder="email" placeholderTextColor={colors.VIOLET} style={styles.input} />
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                secureTextEntry={true}
                onChangeText={(text)=>setPassword(text)}
                 placeholder="password"
                 placeholderTextColor={colors.VIOLET}
                 style={styles.input}
                value={password}
                   />
                <Image style={styles.btnIcon} source={images.VISIBILITY_OFF} />
            </View>
            {/* <View style={styles.checkboxContainer}>
                <CheckBox
                    value={isSelected}
                    onValueChange={setSelection}
                    style={styles.checkbox}
                />
                <Text style={styles.label}>I agree with the Terms of Service & Privacy Policy</Text>
            </View> */}
            <View style={styles.btnContainer}>
                <ButtonComponent
                    onPress={handleRegister}
                    title="Sign Up"
                    buttonStyle={GlobalStyles.btnStyle}
                    textStyle={GlobalStyles.btnTxtStyle}
                />
            </View>
            <View style={styles.bottomContainer}>
                <Text style={styles.bottomTxt}>Have an account?</Text>
                <Pressable onPress={() => navigation.navigate('LoginScreen')}>
                    <Text style={styles.highlightTxt}>Log In</Text>
                </Pressable>
            </View>
        </ImageBackground>
    );
};

export default SignUpScreen;

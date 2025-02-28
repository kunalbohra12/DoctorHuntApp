import { View, Text, ImageBackground, Image, TextInput } from 'react-native';
import React from 'react';
import styles from './LoginscreenStyle';
import images from '../../HelperFiles/Images';
import colors from '../../HelperFiles/Colors';
import ButtonComponent from '../../Components/ButtonComponent';
import GlobalStyles from '../../HelperFiles/GlobalStyles';
import MaterialIcons from '@react-native-vector-icons/material-icons';
const LoginScreen = () => {
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
                <TextInput placeholder="email" placeholderTextColor={colors.VIOLET} style={styles.input} />
            </View>
            <View style={styles.inputContainer}>
                <TextInput secureTextEntry={true} placeholder="password" placeholderTextColor={colors.VIOLET} style={styles.input} />
                <Image style={styles.btnIcon} source={images.LIKE_ICON} />
                <MaterialIcons name="visibility" color="#ff0000" size={20} />
            </View>
            <ButtonComponent
                title="Book Now"
                onPress={() => console.log('Button Pressed')}
                buttonStyle={GlobalStyles.btnStyle}
                textStyle={GlobalStyles.btnTxtStyle}
            />
        </ImageBackground>
    );
};

export default LoginScreen;

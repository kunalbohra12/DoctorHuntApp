import React from 'react';
import { View, ImageBackground, StatusBar, Image, Text } from 'react-native';
import styles from './TestScreenStyle';
import GlobalStyles from '../../HelperFiles/GlobalStyles';
import colors from '../../HelperFiles/Colors';
import CustomHeaderComponent from '../../Components/CustomHeader/CustomHeaderComponent';
import images from '../../HelperFiles/Images';
import ButtonComponent from '../../Components/ButtonComponent';
import { NavigationProp, useNavigation } from '@react-navigation/native';
const TestScreen = () => {
    const navigation = useNavigation<NavigationProp<any>>();
    return (
        <View style={styles.container}>
            <StatusBar
                barStyle="dark-content"
                backgroundColor={colors.TRANSPARENT}
                hidden={true}
            />
            <ImageBackground source={images.GRADIENT_BG} style={GlobalStyles.gradientBG}>
                <CustomHeaderComponent title={'Diagonstics Tests'} />
                <View style={styles.mainContainer}>
                    <View style={styles.overlayView}>
                        <Image source={images.LAB_BG} style={styles.bgImage} />
                    </View>
                    <Text style={styles.title}>You haven’t booked any tests yet</Text>
                    <Text style={styles.subTitle}>You haven’t booked any tests yet</Text>
                    <ButtonComponent
                        title="Book Now"
                        onPress={() => navigation.navigate('DiagonsticsTestScreen')}
                        buttonStyle={{
                            width: 270,
                            height: 40, alignItems: 'center', justifyContent: 'center', marginTop: 30
                        }}
                        textStyle={GlobalStyles.btnTxtStyle}
                    />
                </View>
            </ImageBackground>
        </View>
    );
};

export default TestScreen;

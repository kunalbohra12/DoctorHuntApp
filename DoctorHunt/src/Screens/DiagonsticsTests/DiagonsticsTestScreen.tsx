import { View, Text, StatusBar, ImageBackground, ScrollView } from 'react-native';
import React from 'react';
import GlobalStyles from '../../HelperFiles/GlobalStyles';
import CustomHeaderComponent from '../../Components/CustomHeader/CustomHeaderComponent';
import colors from '../../HelperFiles/Colors';
import images from '../../HelperFiles/Images';
import styles from './DiagonsticsTestScreenStyle';
import TestListsComponent from '../../Components/TestsList/TestsListComponent';
import CheckUpListComponent from '../../Components/CheckUpList/CheckUpListComponent';
const DiagonsticsTestScreen = () => {
    return (
        <View style={[GlobalStyles.gradientBG]}>
            <StatusBar
                barStyle="dark-content"
                backgroundColor={colors.TRANSPARENT}
                hidden={true}
            />
            <ImageBackground source={images.GRADIENT_BG} style={GlobalStyles.gradientBG}>
            <CustomHeaderComponent title={'Diagonstics Tests'} />
                <ScrollView style={[GlobalStyles.gradientBG]} showsVerticalScrollIndicator={false}>
                    <View style={styles.container}>
                        <Text style={styles.title}>Get Full body health checkups
                            from the comfort of your home.</Text>
                        <Text style={styles.subTitle}>Upto 45% off + get 10% healthcash back</Text>
                            <TestListsComponent />
                        <CheckUpListComponent />
                    </View>
                </ScrollView>
            </ImageBackground>
        </View>
    );
};

export default DiagonsticsTestScreen;

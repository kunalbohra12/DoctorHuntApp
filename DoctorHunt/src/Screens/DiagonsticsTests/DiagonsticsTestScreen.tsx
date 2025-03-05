import { View, Text, StatusBar, ImageBackground, FlatList, Image } from 'react-native';
import React from 'react';
import GlobalStyles from '../../HelperFiles/GlobalStyles';
import CustomHeaderComponent from '../../Components/CustomHeader/CustomHeaderComponent';
import colors from '../../HelperFiles/Colors';
import images from '../../HelperFiles/Images';
import styles from './DiagonsticsTestScreenStyle';
import LinearGradient from 'react-native-linear-gradient';
const DiagonsticsTestScreen = () => {
    const DATA = [
        { id: '1', image: images.TEETH_ICON, gradient: ['#2753F3', '#765AFC'] },
        { id: '2', image: images.TEETH_ICON, gradient: ['#0EBE7E', '#07D9AD']},
        { id: '3', image: images.TEETH_ICON, gradient: ['#FE7F44', '#FFCF68'] },
        { id: '4', image: images.TEETH_ICON, gradient: ['#FF484C', '#FF6C60'] },
    ];
    const renderItem = ({item}:any) => {
        return(
            <LinearGradient colors={item.gradient} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={[styles.gridItemContainer]}>
                    <Image source={item.image} style={styles.icon} />
            </LinearGradient>
        );
    };
    return (
        <View style={[GlobalStyles.gradientBG]}>
            <StatusBar
                barStyle="dark-content"
                backgroundColor={colors.TRANSPARENT}
                hidden={true}
            />
            <ImageBackground source={images.GRADIENT_BG} style={GlobalStyles.gradientBG}>
                <CustomHeaderComponent title={'Diagonstics Tests'} />
                <View style={styles.container}>
                    <Text style={styles.title}>Get Full body health checkups
                        from the comfort of your home.</Text>
                    <Text style={styles.subTitle}>Upto 45% off + get 10% healthcash back</Text>
                </View>
                <FlatList
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={(item, index) => index.toString()}
                    numColumns={3}
                />
            </ImageBackground>
        </View>
    );
};

export default DiagonsticsTestScreen;
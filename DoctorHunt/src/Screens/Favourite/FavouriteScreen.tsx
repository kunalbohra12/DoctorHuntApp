import { Image, ImageBackground, StatusBar,TextInput, View } from 'react-native';
import React from 'react';
import CustomHeaderComponent from '../../Components/CustomHeader/CustomHeaderComponent';
import images from '../../HelperFiles/Images';
import GlobalStyles from '../../HelperFiles/GlobalStyles';
import colors from '../../HelperFiles/Colors';
import styles from '../FindDoctor/FindDoctorScreenStyle';
import DoctorDataListComponent from '../../Components/DoctorDataList/DoctorDataListComponent';
const FavouriteDoctorScreen = () => {
    return (
      <View style={[GlobalStyles.gradientBG]}>
      <StatusBar
          barStyle="dark-content"
          backgroundColor={colors.TRANSPARENT}
          hidden={true}
      />
      <ImageBackground source={images.GRADIENT_BG} style={GlobalStyles.gradientBG}>
          <CustomHeaderComponent title={'Doctors'}/>
          <View style={GlobalStyles.searchBar}>
              <Image source={images.SEARCH_ICON} style={styles.logo} />
              <TextInput style={styles.searchInput} placeholder="Search.." placeholderTextColor={colors.LIGHT_VIOLET}/>
              <Image source={images.CROSS_ICON} style={styles.logo} />
          </View>
      </ImageBackground>
  </View>
    );
};

export default FavouriteDoctorScreen;

import { Image, ImageBackground, StatusBar,TextInput,useEffect, View } from 'react-native';
import React from 'react';
import CustomHeaderComponent from '../../Components/CustomHeader/CustomHeaderComponent';
import images from '../../HelperFiles/Images';
import GlobalStyles from '../../HelperFiles/GlobalStyles';
import colors from '../../HelperFiles/Colors';
import styles from '../FindDoctor/FindDoctorScreenStyle';
import DoctorDataListComponent from '../../Components/DoctorDataList/DoctorDataListComponent';
const FindDoctorScreen = () => {
    const [loading,setLoading] = useState(false);
    const getUserData = async () => {
        try {
            const response = await LoginRequest();
            if (response.data != null) {
                // console.log('email is', email);
                // console.log('password is', password);
                if (response.success) {
                    setLoading(false);
                    console.log('users Success:', response);
                } else {
                    console.log('users Data MisMatched:', response);
                }
            } else {
                console.log('users api Failed', response.message);
            }
        } catch (error) {
            console.error('users Failed:', error);
        }
    };
    useEffect( () => {

    },[]);
    return (
        <View style={[GlobalStyles.gradientBG]}>
            <StatusBar
                barStyle="dark-content"
                backgroundColor={colors.TRANSPARENT}
                hidden={true}
            />
            <ImageBackground source={images.GRADIENT_BG} style={GlobalStyles.gradientBG}>
                <CustomHeaderComponent title={'Find Doctors'}/>
                <View style={GlobalStyles.searchBar}>
                    <Image source={images.SEARCH_ICON} style={styles.logo} />
                    <TextInput style={styles.searchInput} placeholder="Search.." placeholderTextColor={colors.LIGHT_VIOLET}/>
                    <Image source={images.CROSS_ICON} style={styles.logo} />
                </View>
                <DoctorDataListComponent/>
            </ImageBackground>
        </View>
    );
};

export default FindDoctorScreen;

import { View, Text, Image, FlatList } from 'react-native';
import React from 'react';
import styles from './RatedDoctorListStyle';
import images from '../../HelperFiles/Images';
import colors from '../../HelperFiles/Colors';

const RatedDoctorsListComponent = () => {
    const DATA = [
        { id: '1', img: images.ONBOARD_BG, title: 'Dr. Pediatrician', subTitle: 'Medicine Specialist' },
        { id: '2', img: images.ONBOARD_BG, title: 'Dr. Fillerup Grab', subTitle: 'Medicine Specialist' },
        { id: '3', img: images.ONBOARD_BG, title: 'Dr. Fillerup Grab', subTitle: 'Medicine Specialist' },
        { id: '4', img: images.ONBOARD_BG, title: 'Dr. Fillerup Grab', subTitle: 'Medicine Specialist' },
        { id: '5', img: images.ONBOARD_BG, title: 'Dr. Fillerup Grab', subTitle: 'Medicine Specialist' },
        { id: '6', img: images.ONBOARD_BG, title: 'Dr. Fillerup Grab', subTitle: 'Medicine Specialist' },
        { id: '7', img: images.ONBOARD_BG, title: 'Dr. Fillerup Grab', subTitle: 'Medicine Specialist' },
        { id: '8', img: images.ONBOARD_BG, title: 'Dr. Fillerup Grab', subTitle: 'Medicine Specialist' },
        { id: '9', img: images.ONBOARD_BG, title: 'Dr. Fillerup Grab', subTitle: 'Medicine Specialist' },
        { id: '10', img: images.ONBOARD_BG, title: 'Dr. Fillerup Grab', subTitle: 'Medicine Specialist' },

    ];
    const renderItem = ({ item }: any) => {
        return (
            <View style={styles.itemContainer}>
                <View style={styles.imageContainer}>
                    <Image source={images.DOCTOR_IMAGE} style={styles.itemImage} />
                </View>
                <View style={styles.itemSubContainer}>
                    <View style={styles.setSpacing}>
                        <Text style={styles.title}>{item.title}</Text>
                        <Image source={images.LIKE_ICON} tintColor={colors.RED} style={styles.icon} />
                    </View>
                    <Text style={styles.subTitle}>{item.subTitle}</Text>
                    <View style={styles.setSpacing}>
                        <View style={styles.subRatedContainer}>
                            <Image source={images.UNRATED_ICON} tintColor={colors.YELLOW} style={styles.rateIcon} />
                            <Image source={images.UNRATED_ICON} tintColor={colors.YELLOW} style={styles.rateIcon} />
                            <Image source={images.UNRATED_ICON} tintColor={colors.YELLOW} style={styles.rateIcon} />
                            <Image source={images.UNRATED_ICON} tintColor={colors.YELLOW} style={styles.rateIcon} />
                        </View>
                        <Text style={styles.boldTxt}>2.8 <Text style={styles.regularTxt}>(2821 views)</Text></Text>
                    </View>
                </View>
            </View>
        );
    };
    return (
        <View style={styles.listContainer}>
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                horizontal={false}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    );
};

export default RatedDoctorsListComponent;

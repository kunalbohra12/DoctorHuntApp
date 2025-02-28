/* eslint-disable react-native/no-inline-styles */
import { View, Image, FlatList, Text } from 'react-native';
import React from 'react';
import styles from './DoctorDataListStyle';
import images from '../../HelperFiles/Images';
import colors from '../../HelperFiles/Colors';
import GlobalStyles from '../../HelperFiles/GlobalStyles';
import ButtonComponent from '../ButtonComponent';

const DoctorDataListComponent = () => {
    const DATA = [
        { id: '1', img: images.ONBOARD_BG, title: 'Dr. Fillerup Grab', subTitle: 'Tooths Dentist' },
        { id: '2', img: images.ONBOARD_BG, title: 'Dr. Fillerup Grab', subTitle: 'Tooths Dentist' },
        { id: '3', img: images.ONBOARD_BG, title: 'Dr. Fillerup Grab', subTitle: 'Tooths Dentist' },
        { id: '4', img: images.ONBOARD_BG, title: 'Dr. Fillerup Grab', subTitle: 'Tooths Dentist' },
        { id: '5', img: images.ONBOARD_BG, title: 'Dr. Fillerup Grab', subTitle: 'Tooths Dentist' },

    ];
    const renderItem = ({ item }: any) => {
        return (
            <View style={styles.itemContainer}>
                <View style={styles.itemTopContainer}>
                    <Image source={images.PERSON} style={styles.imageContainer} />
                    <View style={styles.itemContentContainer}>
                        <Text style={styles.itemTitle}>{item.title}</Text>
                        <Text style={styles.itemSubTitle}>{item.subTitle}</Text>
                        <View style={styles.itemSubContainer}>
                            <View style={styles.roundedView} />
                            <Text style={styles.lightText}>87%</Text>
                            <View style={styles.roundedView} />
                            <Text style={styles.lightText}>69 Patient Stories</Text>
                        </View>
                    </View>
                    <Image source={images.LIKE_ICON} tintColor={colors.RED} style={styles.icon} />
                </View>
                <View style={styles.itemBottomContainer}>
                    <View style={styles.itemBottomSubContainer}>
                        <Text style={styles.highlightTxt}>Next Available </Text>
                        <Text style={styles.regularTxt}>10:00 AM <Text>tomorrow</Text></Text>
                    </View>
                        <ButtonComponent
                            title="Book Now"
                            onPress={() => console.log('Button Pressed')}
                            buttonStyle={{ width: 112,
                                height: 38, marginBottom: 0,alignItems:'center',justifyContent:'center'}}
                            textStyle={GlobalStyles.btnTxtStyle}
                        />
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

export default DoctorDataListComponent;

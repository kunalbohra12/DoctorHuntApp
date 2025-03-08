import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import images from '../../HelperFiles/Images';
import styles from './CheckUpListComponentStyle';
const CheckUpListComponent = () => {
    const DATA = [
        { id: '1', img: images.ONBOARD_BG, title: 'Advanced Young Indian Health Checkup', subTitle: 'Ideal for individuals aged 21-40 years' },
        { id: '2', img: images.ONBOARD_BG, title: 'Advanced Young Indian Health Checkup', subTitle: 'Ideal for individuals aged 21-40 years' },
        { id: '3', img: images.ONBOARD_BG, title: 'Advanced Young Indian Health Checkup', subTitle: 'Ideal for individuals aged 21-40 years' },
        { id: '4', img: images.ONBOARD_BG, title: 'Advanced Young Indian Health Checkup', subTitle: 'Ideal for individuals aged 21-40 years' },
        { id: '5', img: images.ONBOARD_BG, title: 'Advanced Young Indian Health Checkup', subTitle: 'Ideal for individuals aged 21-40 years' },

    ];
    const renderUI = ({ item }: any) => {
        return (
            <View style={styles.itemContainer}>
                <View style={styles.itemSubContainer}>
                    <Text style={styles.itemTitle}>{item.title}</Text>
                    <Text style={styles.itemSubTitle}>{item.title}</Text>
                    <TouchableOpacity style={styles.btnContainer}>
                        <Text style={styles.btnTxt}>69 Tests included</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.imgContainer}>
                    <Image source={images.TEST_BG} style={styles.image} />
                </View>
                <View style={styles.bottomContainer}>
                    <View style={styles.bottomSubContainer}>
                        <View style={styles.topContainer}>
                            <Text style={styles.boldTxt}>$ 358</Text>
                            <Text style={styles.mediumTxt}>$ 330</Text>
                            <Text style={styles.highlightTxt}>35% OFF</Text>
                        </View>
                        <Text style={styles.bottomTxt}>+ 10% Health cashback T&C</Text>
                    </View>
                    <TouchableOpacity style={styles.buttonItem}>
                        <Text style={styles.btnTitle}>Book Now</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    };
    return (
        <View style={styles.listContainer}>
            <FlatList
                data={DATA}
                renderItem={renderUI}
                keyExtractor={(item) => item.id}
                horizontal={false}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
};

export default CheckUpListComponent;

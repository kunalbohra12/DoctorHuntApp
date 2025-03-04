import { View, Modal, Alert, Text, TextInput } from 'react-native';
import React, { useState } from 'react';
import styles from '../ForgotPassword/ForgotPasswordStyle';
import colors from '../../HelperFiles/Colors';
import ButtonComponent from '../ButtonComponent';
import GlobalStyles from '../../HelperFiles/GlobalStyles';

const OtpComponent = () => {
  const [isModalVisible, setIsModalVisible] = useState(true);

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isModalVisible}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
        setIsModalVisible(!isModalVisible);
      }}
    >
      <View style={styles.modalBackground}>
        <View style={styles.modalContainer}>
          <Text style={styles.label}>Enter 4 Digits Code</Text>
          <Text style={styles.subLabel}>
          Enter the 4 digits code that you received on
          your email.
          </Text>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="email"
              placeholderTextColor={colors.VIOLET}
              style={styles.input}
            />
          </View>
          <ButtonComponent
            // onPress={()=> navigation.navigate('')}
            title="Continue"
            onPress={() => console.log('Button Pressed')}
            buttonStyle={GlobalStyles.btnStyle}
            textStyle={GlobalStyles.btnTxtStyle}
          />
        </View>
      </View>
    </Modal>
  );
};

export default OtpComponent;

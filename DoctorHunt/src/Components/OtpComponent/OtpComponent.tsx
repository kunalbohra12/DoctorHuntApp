import { View, Modal, Alert, Text } from 'react-native';
import React, { useState } from 'react';
import styles from './OtpComponentStyle';
import ButtonComponent from '../ButtonComponent';
import GlobalStyles from '../../HelperFiles/GlobalStyles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { VerifyOtp } from '../../HelperFiles/api/AuthApiService';
import { OtpInput } from 'react-native-otp-entry';
import colors from '../../HelperFiles/Colors';
const OtpComponent = ({ isVisible }: any) => {
  const [isModalVisible, setIsModalVisible] = useState(true);
  // const [loading,setLoading] = useState(false);
  const otpVerify = async () => {
    try {
      const userData = await AsyncStorage.getItem('userData');
      const registerData = JSON.parse(userData);
      const response = await VerifyOtp({ email: registerData.email, otp: registerData.otp, password: registerData.password });
      if (response.data || response.success) {
        console.log('otp Response', response);
      } else {
        console.log('Otp not Verified', response);
      }
    } catch (error) {
      console.error('Verify Otp Failed:', error);
    }
  };
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
        setIsModalVisible(!isModalVisible);
      }}>
      <View style={styles.modalBackground}>
        <View style={styles.modalContainer}>
          <Text style={styles.label}>Enter 4 Digits Code</Text>
          <Text style={styles.subLabel}>
            Enter the 4 digits code that you received on
            your email.
          </Text>
          <View style={styles.inputContainer}>
            <OtpInput
              numberOfDigits={4}
              autoFocus={false}
              focusColor={colors.LIGHT_GREEN}
              onTextChange={(text) => console.log(text)}
              theme={{
                pinCodeContainerStyle: styles.pincodeContainer,
              }}
            />
          </View>
          <ButtonComponent
            onPress={otpVerify}
            title="Continue"
            buttonStyle={GlobalStyles.btnStyle}
            textStyle={GlobalStyles.btnTxtStyle}
          />
        </View>
      </View>
    </Modal>
  );
};
export default OtpComponent;

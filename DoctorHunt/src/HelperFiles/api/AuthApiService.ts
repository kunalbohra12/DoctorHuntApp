import { makeRequest } from './ApiClient';
import API_ENDPOINTS from './Endpoint';
interface LoginType {
  email: string;
  password: string;
  // firebaseToken: string;

}
interface SignUpType {
  email: string;
  password?: string;
  // firebaseToken: string;
}
interface VerifyOtpType {
  email: string;
  otp: string;
  password: string;
}
interface ApiResponse<T> {
  token(token: any): import('@react-native-async-storage/async-storage/lib/typescript/types').CallbackWithResult<string> | undefined;
  success: boolean;
  data: T;
  message?: string;
}

const LoginRequest = async (body: LoginType): Promise<ApiResponse<any>> =>
  await makeRequest('POST', API_ENDPOINTS.LOGIN, body);

const SignUpRequest = async (body: SignUpType): Promise<ApiResponse<any>> =>
  await makeRequest('POST', API_ENDPOINTS.REGISTER, body);

const VerifyOtp = async (body: VerifyOtpType): Promise<ApiResponse<any>> =>
  await makeRequest('POST', API_ENDPOINTS.VERIFY_OTP, body);


export {
  LoginRequest,
  SignUpRequest,
  VerifyOtp,
};



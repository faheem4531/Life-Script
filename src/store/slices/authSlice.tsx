import {
  ChangePassword,
  ForgetPassword,
  LoginData,
  SignupData,
  UpdatePasswordData,
  UserData,
  VerifyEmail,
} from "@/interface/authInterface";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  changePasswordApi,
  facebookLoginApi,
  facebookSignupApi,
  forgetPasswordApi,
  googleLoginApi,
  googleSignupApi,
  loginApi,
  signupApi,
  updatePasswordApi,
  verifyEmailApi,
} from "../api/authApi";

const initialState = {
  user: {} as UserData,
};

export const changePassword = createAsyncThunk<UserData, ChangePassword>(
  "user/verify-email",
  async (data) => {
    try {
      const response = await changePasswordApi(data);
      return response;
    } catch (error: any) {
      throw new Error(error.props);
    }
  }
);

export const forgetPassword = createAsyncThunk<UserData, ForgetPassword>(
  "user/verify-email",
  async (data) => {
    try {
      const response = await forgetPasswordApi(data);
      return response;
    } catch (error: any) {
      throw new Error(error.props);
    }
  }
);

export const verifyEmail = createAsyncThunk<UserData, VerifyEmail>(
  "user/verify-email",
  async (data) => {
    try {
      const response = await verifyEmailApi(data);
      return response;
    } catch (error: any) {
      throw new Error(error.props);
    }
  }
);

export const login = createAsyncThunk<UserData, LoginData>(
  "auth/login",
  async (data) => {
    try {
      const response = await loginApi(data);
      return response;
    } catch (error: any) {
      throw new Error(error.props);
    }
  }
);

export const googleLogin = createAsyncThunk<UserData, any>(
  "auth/googleLogin",
  async (data: { credential: string }) => {
    try {
      const response = await googleLoginApi(data);
      return response;
    } catch (error: any) {
      throw new Error(error.props);
    }
  }
);

export const googleSignup = createAsyncThunk<UserData, any>(
  "auth/googleSignup",
  async (data: { credential: string }) => {
    try {
      const response = await googleSignupApi(data);
      return response;
    } catch (error: any) {
      throw new Error(error.props);
    }
  }
);

export const facebookLogin = createAsyncThunk<UserData, any>(
  "auth/facebookLogin",
  async (data: { credential: string }) => {
    try {
      const response = await facebookLoginApi(data);
      return response;
    } catch (error: any) {
      throw new Error(error.props);
    }
  }
);

export const facebookSignup = createAsyncThunk<UserData, any>(
  "auth/facebookSignup",
  async (data: { credential: string }) => {
    try {
      const response = await facebookSignupApi(data);
      return response;
    } catch (error: any) {
      throw new Error(error.props);
    }
  }
);

export const signup = createAsyncThunk<UserData, SignupData>(
  "auth/signup",
  async (data) => {
    try {
      const response = await signupApi(data);
      return response;
    } catch (error: any) {
      throw new Error(error.props);
    }
  }
);

export const updatePassword = createAsyncThunk<UserData, UpdatePasswordData>(
  "auth/changePassword",
  async (data) => {
    try {
      const response = await updatePasswordApi(data);
      return response;
    } catch (error: any) {
      throw new Error(error);
    }
  }
);

export const logout = () => {
  localStorage.clear();
  // signOut();
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      state.user = action.payload;
    });
  },
});

export const {} = authSlice.actions;

export const selectUser = (state: { auth: { user: UserData } }) =>
  state.auth.user;
//   export const selectUser = (state: { auth: AuthState }) => state.auth.user;

export default authSlice.reducer;

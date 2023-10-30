import {
  LoginData,
  SignupData,
  UpdatePasswordData,
  UserData,
} from "@/interface/authInterface";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { signOut } from "next-auth/react";
import { loginApi, signupApi, updatePasswordApi } from "../api/authApi";

const initialState = {
  user: {} as UserData,
};

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
  signOut();
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

import {
  LoginData,
  UpdatePasswordData,
  UserData,
} from "@/interface/authInterface";
import api from "@/services/api";

export async function loginApi(data: LoginData) {
  try {
    const res = await api.post("user/login", data);
    const { accessToken, data: userData } = res.data as {
      accessToken: string;
      data: UserData;
    };

    localStorage.setItem("token", accessToken);
    localStorage.setItem("username", userData.email);
    localStorage.setItem("userId", userData.userId);
    localStorage.setItem("userEmail", userData.email);

    return userData;
  } catch (error: any) {
    throw new Error(error.response?.data?.error);
  }
}

export async function updatePasswordApi(data: UpdatePasswordData) {
  try {
    const id = data.id;
    delete data.id;
    const res = await api.post(`user/resetPassword/${id}`, data);
    return res.data.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.error);
  }
}

export async function signupApi(data: {
  email: string;
  password: string;
  username: string;
}) {
  try {
    const res = await api.post("user/signup", data);
    const { accessToken, data: userData } = res.data as {
      accessToken: string;
      data: UserData;
    };

    localStorage.setItem("token", accessToken);
    localStorage.setItem("username", userData.email);
    localStorage.setItem("userId", userData.userId);
    localStorage.setItem("userEmail", userData.email);

    return userData;
  } catch (error: any) {
    throw new Error(error.response?.data?.error);
  }
}

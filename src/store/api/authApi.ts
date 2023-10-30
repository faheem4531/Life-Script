import {
  LoginData,
  SignupData,
  UpdatePasswordData,
} from "@/interface/authInterface";
import api from "@/services/api";
import Error from "next/error";

export async function loginApi(data: LoginData) {
  try {
    const res = await api.post("/auth/login", data);

    localStorage.setItem("token", res.token);
    localStorage.setItem("username", res.data.name);
    localStorage.setItem("userId", res.data._id);
    localStorage.setItem("userEmail", res.data.email);

    return res.data;
  } catch (error: any) {
    if (typeof error?.response?.data?.message === "object") {
      const errors = error?.response?.data?.message?.message;
      throw new Error(errors ? errors[0] : "Failed to Sign in");
    } else {
      throw new Error(error.response?.data?.message);
    }
  }
}

export async function updatePasswordApi(data: UpdatePasswordData) {
  try {
    const id = data.id;
    delete data.id;
    const res = await api.post(`user/resetPassword/${id}`, data);
    return res.data.data;
  } catch (error: any) {
    if (typeof error?.response?.data?.message === "object") {
      const errors = error?.response?.data?.message?.message;
      throw new Error(errors ? errors[0] : "Failed to log in");
    } else {
      throw new Error(error.response?.data?.message);
    }
  }
}

export async function signupApi(data: SignupData) {
  try {
    const res = await api.post("/auth/", data);
    return res.data;
  } catch (error: any) {
    if (typeof error?.response?.data?.message === "object") {
      const errors = error?.response?.data?.message?.message;
      throw new Error(errors ? errors[0] : "Failed to Sign up");
    } else {
      throw new Error(error.response?.data?.message);
    }
  }
}

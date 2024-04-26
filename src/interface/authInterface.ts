// interfaces.ts
export interface UserData {
  email: string;
  username: string;
  userId: string;
}

export interface LoginData {
  email: string;
  password: string;
}

export interface UpdatePasswordData {
  id?: number;
  password: string;
}

export interface SignupData {
  email: string;
  name: string;
}

export interface VerifyEmail {
  email: string;
  otp: string;
  password: string;
  confirmPassword: string;
}

export interface ForgetPass {
  email: string;
  type: string;
}

export interface ChangePassword {
  password: string;
  confirmPassword?: string;
  email: string;
  otp: string;
}

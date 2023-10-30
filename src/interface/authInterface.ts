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
  password: string;
  name: string;
}

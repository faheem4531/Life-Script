import { UserData } from "@/interface/authInterface";
import { chatWithgpt } from "@/interface/chatInterface";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { chatApi } from "../api/chatApi";
const initialState = {
  chats: [],
};

export const gptChat = createAsyncThunk<UserData, chatWithgpt>(
  "chat/gpt-chat",
  async (data: any) => {
    try {
      const response = await chatApi(data);
      return response;
    } catch (error: any) {
      throw new Error(error.props);
    }
  }
);

export const authSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // builder.addCase(login.fulfilled, (state, action) => {
    //   state.user = action.payload;
    // });
  },
});

export const {} = authSlice.actions;

export const selectUser = (state: { chat: any }) => state.chat.chats;

export default authSlice.reducer;

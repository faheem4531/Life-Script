import { UserData } from "@/interface/authInterface";
import { chatWithgpt } from "@/interface/chatInterface";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { chatApi, createChapterApi, getChaptersApi } from "../api/chatApi";
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

export const createChapter = createAsyncThunk<UserData, any>(
  "chat/create-chapter",
  async (data: { title: string }) => {
    try {
      const response = await createChapterApi(data);
      return response;
    } catch (error: any) {
      throw new Error(error.props);
    }
  }
);

export const getChapters = createAsyncThunk<UserData, void>(
  "chat/get-chapter",
  async () => {
    try {
      const response = await getChaptersApi();
      return response;
    } catch (error: any) {
      throw new Error(error.props);
    }
  }
);

export const getChapterbyId = createAsyncThunk<UserData, { id: string }>(
  "chat/get-chapterbyId",
  async (data: { id: string }) => {
    try {
      const response = await getChapterbyId(data);
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

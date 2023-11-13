import { UserData } from "@/interface/authInterface";
import { chatWithgpt } from "@/interface/chatInterface";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  chatApi,
  createChapterApi,
  createQuestionApi,
  getChapterbyIdApi,
  getChaptersApi,
  getQuestionbyIdApi,
  getQuestionsApi,
  updateChapterApi,
} from "../api/chatApi";

interface State {
  chats: any[];
  chapters: any[];
  questions: any[];
  chapter: any;
}

const initialState: State = {
  chats: [],
  chapters: [],
  questions: [],
  chapter: {},
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

export const updateChapter = createAsyncThunk<UserData, any>(
  "chat/update-chapter",
  async (data: { title: string; id: string }) => {
    try {
      const response = await updateChapterApi(data);
      return response;
    } catch (error: any) {
      throw new Error(error.props);
    }
  }
);

export const getChapters = createAsyncThunk<any[], void>(
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
  async (data: { id: any }) => {
    try {
      const response = await getChapterbyIdApi(data);
      return response;
    } catch (error: any) {
      throw new Error(error.props);
    }
  }
);

export const createQuestion = createAsyncThunk<UserData, any>(
  "chat/create-question",
  async (data: { text: string; chapter: string }) => {
    try {
      const response = await createQuestionApi(data);
      return response;
    } catch (error: any) {
      throw new Error(error.props);
    }
  }
);

export const getQuestions = createAsyncThunk<any[], void>(
  "chat/get-question",
  async () => {
    try {
      const response = await getQuestionsApi();
      return response;
    } catch (error: any) {
      throw new Error(error.props);
    }
  }
);

export const getQuestionbyId = createAsyncThunk<UserData, { id: string }>(
  "chat/get-questionbyId",
  async (data: { id: string }) => {
    try {
      const response = await getQuestionbyIdApi(data);
      return response;
    } catch (error: any) {
      throw new Error(error.props);
    }
  }
);

export const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getChapters.fulfilled, (state, action) => {
      state.chats = action.payload;
      state.chapters = action.payload;
    });
    builder.addCase(getChapterbyId.fulfilled, (state, action) => {
      state.chapter = action.payload;
    });
  },
});

export const {} = chatSlice.actions;

export const selectChat = (state: { chat: any }) => state.chat.chats;
export const selectAllChapters = (state: { chat: any }) => state.chat.chapters;
export const selectChapter = (state: { chat: any }) => state.chat.chapter;

export default chatSlice.reducer;

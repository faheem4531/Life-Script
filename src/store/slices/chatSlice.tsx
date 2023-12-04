import { UserData } from "@/interface/authInterface";
import { chatWithgpt } from "@/interface/chatInterface";
import {
  createAsyncThunk,
  createSelector,
  createSlice,
} from "@reduxjs/toolkit";
import {
  bookTitleApi,
  chapterResponseApi,
  chatApi,
  cloneTemplateApi,
  compiledChapterApi,
  createChapterApi,
  createQuestionApi,
  deleteChapterApi,
  deleteQuestionApi,
  getAnswerbyIdApi,
  getBookTitleApi,
  getChapterbyIdApi,
  getChaptersApi,
  getQuestionbyIdApi,
  getQuestionsApi,
  getTemplatesApi,
  isTemplateClonedApi,
  narrativeFusionApi,
  saveAnswerApi,
  simpleChapterApi,
  updateChapterApi,
  updateQuestionApi,
  uploadAudioApi,
  uploadImageApi,
} from "../api/chatApi";

interface State {
  chats: any[];
  chapters: any[];
  questions: any[];
  templates: any[];
  chapter: any;
  chapterLoading: any;
}

const initialState: State = {
  chats: [],
  chapters: [],
  questions: [],
  templates: [],
  chapter: {},
  chapterLoading: "",
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

export const compiledChapter = createAsyncThunk<UserData, any>(
  "chat/compiled-chapter",
  async (data: { id: string }) => {
    try {
      const response = await compiledChapterApi(data);
      return response;
    } catch (error: any) {
      throw new Error(error.props);
    }
  }
);

export const simpleChapter = createAsyncThunk<UserData, any>(
  "chat/simple-chapter",
  async (data: { chapterId: string }) => {
    try {
      const response = await simpleChapterApi(data);
      return response;
    } catch (error: any) {
      throw new Error(error.props);
    }
  }
);

export const uploadImage = createAsyncThunk<UserData, any>(
  "chat/upload-image",
  async (data) => {
    try {
      const response = await uploadImageApi(data);
      return response;
    } catch (error: any) {
      throw new Error(error.props);
    }
  }
);

export const uploadAudio = createAsyncThunk<UserData, any>(
  "chat/upload-audio",
  async (data) => {
    try {
      const response = await uploadAudioApi(data);
      return response;
    } catch (error: any) {
      throw new Error(error.props);
    }
  }
);

export const chapterResponse = createAsyncThunk<UserData, any>(
  "chat/chapter-response",
  async (data: { chapterId: string }) => {
    try {
      const response = await chapterResponseApi(data);
      return response;
    } catch (error: any) {
      throw new Error(error.props);
    }
  }
);

export const saveAnswer = createAsyncThunk<UserData, any>(
  "chat/save-answer",
  async (data: any) => {
    try {
      const response = await saveAnswerApi(data);
      return response;
    } catch (error: any) {
      throw new Error(error.props);
    }
  }
);

export const narrativeFusion = createAsyncThunk<UserData, any>(
  "chat/narrative-fusion",
  async (data: any) => {
    try {
      const response = await narrativeFusionApi(data);
      return response;
    } catch (error: any) {
      throw new Error(error.props);
    }
  }
);

export const bookTitle = createAsyncThunk<UserData, any>(
  "chat/book-title",
  async (data: { title: string }) => {
    try {
      const response = await bookTitleApi(data);
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

export const getAnswerbyId = createAsyncThunk<UserData, any>(
  "chat/get-answer",
  async (data: { id: string }) => {
    try {
      const response = await getAnswerbyIdApi(data);
      return response;
    } catch (error: any) {
      throw new Error(error.props);
    }
  }
);

export const deleteSelectedChapter = createAsyncThunk<UserData, any>(
  "chat/delete-chapter",
  async (data: { id: string }) => {
    try {
      const response = await deleteChapterApi(data);
      return response;
    } catch (error: any) {
      throw new Error(error.props);
    }
  }
);

export const deleteQuestion = createAsyncThunk<UserData, any>(
  "chat/delete-question",
  async (data: { id: string }) => {
    try {
      const response = await deleteQuestionApi(data);
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

export const getBookTitle = createAsyncThunk<any[], void>(
  "chat/get-bookTitle",
  async () => {
    try {
      const response = await getBookTitleApi();
      return response;
    } catch (error: any) {
      throw new Error(error.props);
    }
  }
);

export const getTemplates = createAsyncThunk<any[], void>(
  "chat/get-templates",
  async () => {
    try {
      const response = await getTemplatesApi();
      return response;
    } catch (error: any) {
      throw new Error(error.props);
    }
  }
);

export const cloneTemplate = createAsyncThunk<UserData, { id: string }>(
  "chat/get-template",
  async (data: { id: string }) => {
    try {
      const response = await cloneTemplateApi(data);
      return response;
    } catch (error: any) {
      throw new Error(error.props);
    }
  }
);

export const isTemplateCloned = createAsyncThunk<UserData, { id: string }>(
  "chat/cloned-template",
  async (data: { id: string }) => {
    try {
      const response = await isTemplateClonedApi(data);
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

export const updateQuestion = createAsyncThunk<UserData, any>(
  "chat/update-question",
  async (data: {
    text: string;
    id: string;
    chapter: string;
    status?: string; // Make the status parameter optional
  }) => {
    try {
      // Provide a default value if status is not provided
      const statusValue = data.status || "Progress";

      const response = await updateQuestionApi({
        ...data,
        status: statusValue,
      });
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
    builder.addCase(getTemplates.fulfilled, (state, action) => {
      state.templates = action.payload;
    });
    builder.addCase(chapterResponse.fulfilled, (state, action) => {
      state.chapterLoading = "loaded";
    });
  },
});

export const {} = chatSlice.actions;

export const selectChat = (state: { chat: any }) => state.chat.chats;
export const selectAllChapters = (state: { chat: any }) => state.chat.chapters;
export const selectChapter = (state: { chat: any }) => state.chat.chapter;
export const selectTemplates = (state: { chat: any }) => state.chat.templates;
export const isChapterLoaded = (state: { chat: any }) =>
  state.chat.chapterLoading;
export const selectTemplateById = (templateId: string) =>
  createSelector(selectTemplates, (templates) => {
    // Find the template in the array based on the provided id
    return templates.find((template) => template.id === templateId);
  });

export default chatSlice.reducer;

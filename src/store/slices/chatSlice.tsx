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
  getChapterNotificationsApi,
  getChapterbyIdApi,
  getChaptersApi,
  getQuestionbyIdApi,
  getQuestionsApi,
  getTemplatesApi,
  isTemplateClonedApi,
  narrativeFusionApi,
  readNotificationApi,
  saveAnswerApi,
  simpleChapterApi,
  stripPaymentApi,
  updateChapterApi,
  updateChapterResponseApi,
  updateQuestionApi,
  uploadAudioApi,
  getBookCoverApi,
  uploadImageApi,
  bookCoverApi,
  updateBookCoverApi
} from "../api/chatApi";

interface State {
  chats: any[];
  chapters: any[];
  questions: any[];
  templates: any[];
  notifications: any[];
  coverData: any[];
  chapter: any;
  chapterLoading: any;
}

const initialState: State = {
  chats: [],
  chapters: [],
  questions: [],
  templates: [],
  notifications: [],
  coverData: [],
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

export const stripePayment = createAsyncThunk<UserData, any>(
  "chat/stripe-payment",
  async (data: any) => {
    try {
      const response = await stripPaymentApi(data);
      return response;
    } catch (error: any) {
      throw new Error(error.props);
    }
  }
);

export const getChapterNotifications = createAsyncThunk<any[], void>(
  "chat/chapter-notifications",
  async () => {
    try {
      const response = await getChapterNotificationsApi();
      return response;
    } catch (error: any) {
      throw new Error(error.props);
    }
  }
);

export const updateChapterResponse = createAsyncThunk<UserData, any>(
  "chat/update-chapter-response",
  async (data: { id: string; userText: string; openaiChapterText: string }) => {
    try {
      const response = await updateChapterResponseApi(data);
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

export const bookCover = createAsyncThunk<UserData, any>(
  "chat/book-cover",
  async (data: { 
    CoverNumber: string,   
    title: string,
    subTitle: string,
    byLine: string,
    color:string,
    image:string
  }) => {
    try {
      const response = await bookCoverApi(data);
      return response;
    } catch (error: any) {
      throw new Error(error.props);
    }
  }
);

export const updateBookCover = createAsyncThunk<UserData, any>(
  "chat/book-cover-update",
  async (data: {   
    id: string, 
    CoverNumber: string,
    title: string,
    subTitle: string,
    byLine: string,
    color:string,
    image:string
  }) => {
    try {
      const response = await updateBookCoverApi(data);
      return response;
    } catch (error: any) {
      throw new Error(error.props);
    }
  }
);

export const getBookCover = createAsyncThunk<any[], void>(
  "chat/getBook-cover",
  async () => {
    try {
      const response = await getBookCoverApi();
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

export const readNotification = createAsyncThunk<UserData, any>(
  "chat/read-notification",
  async (data: { id: string; isRead: boolean }) => {
    try {
      const response = await readNotificationApi(data);
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

export const cloneTemplate = createAsyncThunk<UserData, any>(
  "chat/get-template",
  async (data: { id: string; ids: any }) => {
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
    builder.addCase(getChapterNotifications.fulfilled, (state, action) => {
      state.notifications = action.payload;
    });
    builder.addCase(getBookCover.fulfilled, (state, action) => {
      state.coverData = action.payload;
    });
    builder.addCase(narrativeFusion.pending, (state, action) => {
      state.chapterLoading = "not-loaded";
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
    builder.addCase(simpleChapter.fulfilled, (state, action) => {
      state.chapterLoading = "loaded";
    });
  },
});

export const {} = chatSlice.actions;

export const selectChat = (state: { chat: any }) => state.chat.chats;
export const selectCoverData = (state: { chat: any }) => state.chat.coverData;
export const selectChapterNotification = (state: { chat: any }) =>
  state.chat.notifications;
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

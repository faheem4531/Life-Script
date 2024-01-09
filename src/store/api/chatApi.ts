import api from "@/services/api";
import axios from "axios";
import Error from "next/error";

export async function chatApi(data: any) {
  try {
    const res = await api.post("/users/gpt", data);
    return res;
  } catch (error: any) {
    if (typeof error?.response?.data?.message === "object") {
      const errors = error?.response?.data?.message?.message;
      throw new Error(errors ? errors[0] : "Failed");
    } else {
      throw new Error(error.response?.data?.message);
    }
  }
}

export async function createtocApi(data: any) {
  try {
    const res = await api.post("/table-content/", data);
    return res;
  } catch (error: any) {
    if (typeof error?.response?.data?.message === "object") {
      const errors = error?.response?.data?.message?.message;
      throw new Error(errors ? errors[0] : "Failed");
    } else {
      throw new Error(error.response?.data?.message);
    }
  }
}

export async function getTocApi() {
  try {
    const res = await api.get("/table-content/");
    return res;
  } catch (error: any) {
    if (typeof error?.response?.data?.message === "object") {
      const errors = error?.response?.data?.message?.message;
      throw new Error(errors ? errors[0] : "Failed");
    } else {
      throw new Error(error.response?.data?.message);
    }
  }
}

export async function narrativeFusionApi(data: any) {
  try {
    const res = await api.post("/users/generate-narative-fusion", data);
    return res;
  } catch (error: any) {
    if (typeof error?.response?.data?.message === "object") {
      const errors = error?.response?.data?.message?.message;
      throw new Error(errors ? errors[0] : "Failed");
    } else {
      throw new Error(error.response?.data?.message);
    }
  }
}

export async function openaiQuestionApi(data: {
  chapterId: string;
  flag: string;
  id: string;
}) {
  try {
    const res = await api.post(`questions/pushQuestion/${data.chapterId}`, {
      flag: data.flag,
      id: data.id,
    });
    return res;
  } catch (error: any) {
    if (typeof error?.response?.data?.message === "object") {
      const errors = error?.response?.data?.message?.message;
      throw new Error(errors ? errors[0] : "Failed");
    } else {
      throw new Error(error.response?.data?.message);
    }
  }
}

export async function getOpenaiQuestionApi(data: {
  chapterId: string;
  questionId: string;
}) {
  try {
    const res = await api.get(`questions/openAiQuestion/${data.chapterId}/${data.questionId}`);
    return res;
  } catch (error: any) {
    if (typeof error?.response?.data?.message === "object") {
      const errors = error?.response?.data?.message?.message;
      throw new Error(errors ? errors[0] : "Failed");
    } else {
      throw new Error(error.response?.data?.message);
    }
  }
}

export async function bookCoverApi(data: {    
  title: string,
  coverNumber: string,
  subTitle: string,
  byLine: string,
  color:string,
  image:string
}) {
  try {
    const res = await api.post("/book-cover", data);
    return res;
  } catch (error: any) {
    if (typeof error?.response?.data?.message === "object") {
      const errors = error?.response?.data?.message?.message;
      throw new Error(errors ? errors[0] : "Failed");
    } else {
      throw new Error(error.response?.data?.message);
    }
  }
}
export async function updateBookCoverApi(data: {   
  id: string, 
  CoverNumber: string,
  title: string,
  subTitle: string,
  byLine: string,
  color:string,
  image:string
}) {
  try {
    const payload = {
      title: data.title,
      subTitle: data.subTitle,
      byLine: data.byLine,
      color: data.color,
      image: data.image,
      coverNumber: data.CoverNumber,
    };
    const res = await api.patch(`/book-cover/${data.id}`, payload);
    return res;
  } catch (error: any) {
    if (typeof error?.response?.data?.message === "object") {
      const errors = error?.response?.data?.message?.message;
      throw new Error(errors ? errors[0] : "Failed");
    } else {
      throw new Error(error.response?.data?.message);
    }
  }
}


export async function getBookCoverApi() {
  try {
    const res = await api.get("/book-cover");
    return res;
  } catch (error: any) {
    if (typeof error?.response?.data?.message === "object") {
      const errors = error?.response?.data?.message?.message;
      throw new Error(errors ? errors[0] : "Failed");
    } else {
      throw new Error(error.response?.data?.message);
    }
  }
}

export async function getTreeDataApi() {
  try {
    const res = await api.get("family-module");
    return res;
  } catch (error: any) {
    if (typeof error?.response?.data?.message === "object") {
      const errors = error?.response?.data?.message?.message;
      throw new Error(errors ? errors[0] : "Failed");
    } else {
      throw new Error(error.response?.data?.message);
    }
  }
}

export async function updatePartnerApi(data: {
  spouseDied?: string;
  spouseBorn?: string;
  spouseLocation?: string;
  spouseName?: string;
  spouseGender?: string;
  spouseImage?: string;
  died?: string;
  born?: string;
  location?: string;
  name?: string;
  gender?: string;
  image?: string;
  nodeId?: string;
}) {
  try {
    const{nodeId, ...newData} = data;
    const res = await api.patch(`family-module/${data.nodeId}/update-couple`, newData);
    return res;
  } catch (error: any) {
    if (typeof error?.response?.data?.message === "object") {
      const errors = error?.response?.data?.message?.message;
      throw new Error(errors ? errors[0] : "Failed");
    } else {
      throw new Error(error.response?.data?.message);
    }
  }
}

export async function addChildApi(data: {
  spouseDied?: string;
  spouseBorn?: string;
  spouseLocation?: string;
  spouseName?: string;
  spouseGender?: string;
  spouseImage?: string;
  died?: string;
  born?: string;
  location?: string;
  name?: string;
  gender?: string;
  image?: string;
  nodeId?: string;
}) {
  try {
    const{nodeId, ...newData} = data;
    const res = await api.post(`family-module/${data.nodeId}/add-child`, newData);
    return res;
  } catch (error: any) {
    if (typeof error?.response?.data?.message === "object") {
      const errors = error?.response?.data?.message?.message;
      throw new Error(errors ? errors[0] : "Failed");
    } else {
      throw new Error(error.response?.data?.message);
    }
  }
}

export async function addParentApi(data: {
  spouseDied?: string;
  spouseBorn?: string;
  spouseLocation?: string;
  spouseName?: string;
  spouseGender?: string;
  spouseImage?: string;
  died?: string;
  born?: string;
  location?: string;
  name?: string;
  gender?: string;
  image?: string;
}) {
  try {
    const res = await api.post("family-module/add-father", data);
    return res;
  } catch (error: any) {
    if (typeof error?.response?.data?.message === "object") {
      const errors = error?.response?.data?.message?.message;
      throw new Error(errors ? errors[0] : "Failed");
    } else {
      throw new Error(error.response?.data?.message);
    }
  }
}

export async function updateChapterResponseApi(data: {
  id: string;
  userText: string;
  openaiChapterText: string;
}) {
  try {
    const res = await api.put(`chapter-compile/${data.id}`, {
      userText: data.userText,
      openaiChapterText: data.openaiChapterText,
    });
    return res;
  } catch (error: any) {
    if (typeof error?.response?.data?.message === "object") {
      const errors = error?.response?.data?.message?.message;
      throw new Error(errors ? errors[0] : "Failed");
    } else {
      throw new Error(error.response?.data?.message);
    }
  }
}

// /users/ceilmop - answers;
export async function chapterResponseApi(data: { chapterId: string }) {
  try {
    const res = await api.post("/users/compile-answers", data);
    return res;
  } catch (error: any) {
    if (typeof error?.response?.data?.message === "object") {
      const errors = error?.response?.data?.message?.message;
      throw new Error(errors ? errors[0] : "Failed");
    } else {
      throw new Error(error.response?.data?.message);
    }
  }
}

export async function customerSupportApi(data: { subject: string, description: string }) {
  try {
    const res = await api.post("/users/support", data);
    return res;
  } catch (error: any) {
    if (typeof error?.response?.data?.message === "object") {
      const errors = error?.response?.data?.message?.message;
      throw new Error(errors ? errors[0] : "Failed");
    } else {
      throw new Error(error.response?.data?.message);
    }
  }
}

export async function uploadImageApi(data) {
  try {
    const res = await api.post("/users/upload-image", data);
    return res;
  } catch (error: any) {
    if (typeof error?.response?.data?.message === "object") {
      const errors = error?.response?.data?.message?.message;
      throw new Error(errors ? errors[0] : "Failed");
    } else {
      throw new Error(error.response?.data?.message);
    }
  }
}

export async function uploadAudioApi(data) {
  try {
    const res = await api.post("/questions/speech-to-text", data);
    return res;
  } catch (error: any) {
    if (typeof error?.response?.data?.message === "object") {
      const errors = error?.response?.data?.message?.message;
      throw new Error(errors ? errors[0] : "Failed");
    } else {
      throw new Error(error.response?.data?.message);
    }
  }
}

export async function saveAnswerApi(data: any) {
  try {
    const res = await api.post("/users/save-answer", data);
    return res;
  } catch (error: any) {
    if (typeof error?.response?.data?.message === "object") {
      const errors = error?.response?.data?.message?.message;
      throw new Error(errors ? errors[0] : "Failed");
    } else {
      throw new Error(error.response?.data?.message);
    }
  }
}

export async function getChapterNotificationsApi() {
  try {
    const token = localStorage.getItem('token');
    const headers = {
      Authorization: `Bearer ${token}`,
      acceptinternalaccess: "acceptinternalaccess",
      'Content-Type': 'application/json',
    };
    const res = await axios.get("https://api.thelifescript.com/notification", {headers});
    return res.data;
  } catch (error: any) {
    if (typeof error?.response?.data?.message === "object") {
      const errors = error?.response?.data?.message?.message;
      throw new Error(errors ? errors[0] : "Failed");
    } else {
      throw new Error(error.response?.data?.message);
    }
  }
}
export async function readNotificationApi(data: {
  id: string;
  isRead: boolean;
}) {
  try {
    const res = await api.patch(`/notification/${data.id}`, {
      isRead: data.isRead,
    });
    return res;
  } catch (error: any) {
    if (typeof error?.response?.data?.message === "object") {
      const errors = error?.response?.data?.message?.message;
      throw new Error(errors ? errors[0] : "Failed");
    } else {
      throw new Error(error.response?.data?.message);
    }
  }
}

export async function stripPaymentApi(data: any) {
  try {
    const token = localStorage.getItem('token');
    const headers = {
      Authorization: `Bearer ${token}`,
      acceptinternalaccess: "acceptinternalaccess",
      'Content-Type': 'application/json',
    };
    const res = await axios.post("https://api.thelifescript.com/users/stripe/payment", data, {headers});
    return res.data;
  } catch (error: any) {
    if (typeof error?.response?.data?.message === "object") {
      const errors = error?.response?.data?.message?.message;
      throw new Error(errors ? errors[0] : "Failed");
    } else {
      throw new Error(error.response?.data?.message);
    }
  }
}

export async function bookTitleApi(data: { title: string }) {
  try {
    const token = localStorage.getItem('token');
    const headers = {
      Authorization: `Bearer ${token}`,
      acceptinternalaccess: "acceptinternalaccess",
      'Content-Type': 'application/json',
    };
    const res = await axios.post("https://api.thelifescript.com/book", data, {headers});
    return res;
  } catch (error: any) {
    if (typeof error?.response?.data?.message === "object") {
      const errors = error?.response?.data?.message?.message;
      throw new Error(errors ? errors[0] : "Failed");
    } else {
      throw new Error(error.response?.data?.message);
    }
  }
}

export async function getBookTitleApi() {
  try {
    const token = localStorage.getItem('token');
    const headers = {
      Authorization: `Bearer ${token}`,
      acceptinternalaccess: "acceptinternalaccess",
      'Content-Type': 'application/json',
    };
    const res = await axios.get("https://api.thelifescript.com/book", {headers});
    return res.data;
  } catch (error: any) {
    if (typeof error?.response?.data?.message === "object") {
      const errors = error?.response?.data?.message?.message;
      throw new Error(errors ? errors[0] : "Failed");
    } else {
      throw new Error(error.response?.data?.message);
    }
  }
}

export async function createChapterApi(data: { title: string }) {
  try {
    const res = await api.post("/chapters", data);
    return res;
  } catch (error: any) {
    if (typeof error?.response?.data?.message === "object") {
      const errors = error?.response?.data?.message?.message;
      throw new Error(errors ? errors[0] : "Failed");
    } else {
      throw new Error(error.response?.data?.message);
    }
  }
}

export async function deleteChapterApi(data: { id: string }) {
  try {
    const res = await api.delete(`/chapters/${data?.id}`);
    return res;
  } catch (error: any) {
    if (typeof error?.response?.data?.message === "object") {
      const errors = error?.response?.data?.message?.message;
      throw new Error(errors ? errors[0] : "Failed");
    } else {
      throw new Error(error.response?.data?.message);
    }
  }
}

export async function updateChapterApi(data: { title: string; id: string }) {
  try {
    const updateData = { title: data.title };
    const res = await api.patch(`/chapters/${data.id}`, updateData);
    return res;
  } catch (error: any) {
    if (typeof error?.response?.data?.message === "object") {
      const errors = error?.response?.data?.message?.message;
      throw new Error(errors ? errors[0] : "Failed");
    } else {
      throw new Error(error.response?.data?.message);
    }
  }
}

export async function getAnswerbyIdApi(data: { id: string }) {
  try {
    const res = await api.get(`/user-answer/${data.id}`);
    return res;
  } catch (error: any) {
    if (typeof error?.response?.data?.message === "object") {
      const errors = error?.response?.data?.message?.message;
      throw new Error(errors ? errors[0] : "Failed");
    } else {
      throw new Error(error.response?.data?.message);
    }
  }
}

export async function getHourApi() {
  try {
    const res = await api.get("/user-answer/anserCount");
    return res;
  } catch (error: any) {
    if (typeof error?.response?.data?.message === "object") {
      const errors = error?.response?.data?.message?.message;
      throw new Error(errors ? errors[0] : "Failed");
    } else {
      throw new Error(error.response?.data?.message);
    }
  }
}

export async function getAnswersApi() {
  try {
    const res = await api.get("/user-answer");
    return res;
  } catch (error: any) {
    if (typeof error?.response?.data?.message === "object") {
      const errors = error?.response?.data?.message?.message;
      throw new Error(errors ? errors[0] : "Failed");
    } else {
      throw new Error(error.response?.data?.message);
    }
  }
}

export async function getChaptersApi() {
  try {
    const res = await api.get("chapters");
    return res;
  } catch (error: any) {
    if (typeof error?.response?.data?.message === "object") {
      const errors = error?.response?.data?.message?.message;
      throw new Error(errors ? errors[0] : "Failed");
    } else {
      throw new Error(error.response?.data?.message);
    }
  }
}

export async function getTemplatesApi() {
  try {
    const res = await api.get("/default-chapter");
    return res;
  } catch (error: any) {
    if (typeof error?.response?.data?.message === "object") {
      const errors = error?.response?.data?.message?.message;
      throw new Error(errors ? errors[0] : "Failed");
    } else {
      throw new Error(error.response?.data?.message);
    }
  }
}

export async function cloneTemplateApi(data: { id: string; ids: any }) {
  try {
    const res = await api.get(
      `/chapters/cloneChapter/${data.id}?questionIds=${data.ids}`
    );
    return res;
  } catch (error: any) {
    if (typeof error?.response?.data?.message === "object") {
      const errors = error?.response?.data?.message?.message;
      throw new Error(errors ? errors[0] : "Failed");
    } else {
      throw new Error(error.response?.data?.message);
    }
  }
}

export async function isTemplateClonedApi(data: { id: string }) {
  try {
    const res = await api.get(`/chapters/is-cloned/${data.id}`);
    return res;
  } catch (error: any) {
    if (typeof error?.response?.data?.message === "object") {
      const errors = error?.response?.data?.message?.message;
      throw new Error(errors ? errors[0] : "Failed");
    } else {
      throw new Error(error.response?.data?.message);
    }
  }
}
export async function compiledChapterApi(data: { id: string }) {
  try {
    const res = await api.get(`/chapter-compile/${data.id}`);
    return res;
  } catch (error: any) {
    if (typeof error?.response?.data?.message === "object") {
      const errors = error?.response?.data?.message?.message;
      throw new Error(errors ? errors[0] : "Failed");
    } else {
      throw new Error(error.response?.data?.message);
    }
  }
}

export async function getChapterbyIdApi(data: { id: any }) {
  try {
    const res = await api.get(`/chapters/${data.id}`);
    return res;
  } catch (error: any) {
    if (typeof error?.response?.data?.message === "object") {
      const errors = error?.response?.data?.message?.message;
      throw new Error(errors ? errors[0] : "Failed");
    } else {
      throw new Error(error.response?.data?.message);
    }
  }
}

export async function createQuestionApi(data: {
  text: string;
  chapter: string;
}) {
  try {
    const res = await api.post("/questions", data);
    return res;
  } catch (error: any) {
    if (typeof error?.response?.data?.message === "object") {
      const errors = error?.response?.data?.message?.message;
      throw new Error(errors ? errors[0] : "Failed");
    } else {
      throw new Error(error.response?.data?.message);
    }
  }
}
export async function simpleChapterApi(data: { chapterId: string }) {
  try {
    const res = await api.post(
      "/users/compile-answers-without-narative-fusion",
      data
    );
    return res;
  } catch (error: any) {
    if (typeof error?.response?.data?.message === "object") {
      const errors = error?.response?.data?.message?.message;
      throw new Error(errors ? errors[0] : "Failed");
    } else {
      throw new Error(error.response?.data?.message);
    }
  }
}

export async function updateQuestionApi(data: {
  text: string;
  id: string;
  chapter: string;
  status: string;
}) {
  try {
    const res = await api.patch(`/questions/${data.id}`, {
      text: data.text,
      chapter: data.chapter,
      status: data.status,
    });
    return res;
  } catch (error: any) {
    if (typeof error?.response?.data?.message === "object") {
      const errors = error?.response?.data?.message?.message;
      throw new Error(errors ? errors[0] : "Failed");
    } else {
      throw new Error(error.response?.data?.message);
    }
  }
}

export async function deleteQuestionApi(data: { id: string }) {
  try {
    const res = await api.delete(`/questions/${data?.id}`);
    return res;
  } catch (error: any) {
    if (typeof error?.response?.data?.message === "object") {
      const errors = error?.response?.data?.message?.message;
      throw new Error(errors ? errors[0] : "Failed");
    } else {
      throw new Error(error.response?.data?.message);
    }
  }
}

export async function getQuestionbyIdApi(data: { id: string }) {
  try {
    const res = await api.get(`/questions/${data.id}`);
    return res;
  } catch (error: any) {
    if (typeof error?.response?.data?.message === "object") {
      const errors = error?.response?.data?.message?.message;
      throw new Error(errors ? errors[0] : "Failed");
    } else {
      throw new Error(error.response?.data?.message);
    }
  }
}

export async function getQuestionsApi() {
  try {
    const res = await api.get("/questions");
    return res;
  } catch (error: any) {
    if (typeof error?.response?.data?.message === "object") {
      const errors = error?.response?.data?.message?.message;
      throw new Error(errors ? errors[0] : "Failed");
    } else {
      throw new Error(error.response?.data?.message);
    }
  }
}

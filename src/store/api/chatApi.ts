import api from "@/services/api";
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

export async function bookTitleApi(data: { title: string }) {
  try {
    const res = await api.post("/book", data);
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
    const res = await api.get("/book");
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

export async function cloneTemplateApi(data: { id: string }) {
  try {
    const res = await api.get(`/chapters/cloneChapter/${data.id}`);
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

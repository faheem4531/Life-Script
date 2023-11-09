import api from "@/services/api";
import Error from "next/error";

export async function chatApi(data: any) {
  try {
    const res = await api.post("/users/gpt", data);
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

export async function getChaptersApi() {
  try {
    const res = await api.get("/chapters");
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

export async function getChapterbyIdApi(data: { id: string }) {
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

import { images } from "@/utils/assetsUrl";
const { bookCovers } = images;
const { cover1, cover2, cover3 } = bookCovers

import {
  createBasicArray,
  createPremiumArray,
  createStandardArray,
} from "../stripeFlowObjects";

export const purchaseBooks = {
  Basic: cover3,
  Standard: cover1,
  Premium: cover2,
};

export const categoryArrayMapping = {
  Basic: createBasicArray,
  Standard: createStandardArray,
  Premium: createPremiumArray,
};

const baseURL_Prod = "https://api.thelifescript.com";
const baseURL_Dev = "http://localhost:8000";

export const currentBaseUrl = baseURL_Prod;

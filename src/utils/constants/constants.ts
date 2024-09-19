import grandmaBookImage from "../../../public/grandmaBookImage.svg";
import premiumBookImage from "../../../public/premiumBookImage.svg";
import standardBookImage from "../../../public/standardBookImage.svg";

import {
  createBasicArray,
  createPremiumArray,
  createStandardArray,
} from "../stripeFlowObjects";

export const imageMapping = {
  Basic: grandmaBookImage,
  Standard: standardBookImage,
  Premium: premiumBookImage,
};

export const categoryArrayMapping = {
  Basic: createBasicArray,
  Standard: createStandardArray,
  Premium: createPremiumArray,
};

const baseURL_Prod = "https://api.thelifescript.com";
const baseURL_Dev = "http://localhost:8000";

export const currentBaseUrl = baseURL_Prod;

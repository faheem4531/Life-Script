import grandmaBookImage from "../../../public/grandmaBookImage.svg";
import premiumBookImage from "../../../public/premiumBookImage.svg";
import standardBookImage from "../../../public/standardBookImage.svg";

import { BasicArray, PremiumArray, StandardArray } from "../stripeFlowObjects";

export const imageMapping = {
    Basic: grandmaBookImage,
    Standard: standardBookImage,
    Premium: premiumBookImage,
  };

  export const categoryArrayMapping = {
    Basic: BasicArray,
    Standard: StandardArray,
    Premium: PremiumArray,
  };

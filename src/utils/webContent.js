import Arthur from "@/__webAssets/webp/testimonials/lifescript-customer-review-arthur-thompson.webp";
import Carlos from "@/__webAssets/webp/testimonials/lifescript-customer-review-carlos-martinez.webp";
import Derek from "@/__webAssets/webp/testimonials/lifescript-customer-review-derek-lee.webp";
import Eleanor from "@/__webAssets/webp/testimonials/lifescript-customer-review-eleanor-rodriguez.webp";
import George from "@/__webAssets/webp/testimonials/lifescript-customer-review-george-watkins.webp";
import Lilly from "@/__webAssets/webp/testimonials/lifescript-customer-review-lilly-thompson.webp";
import Linda from "@/__webAssets/webp/testimonials/lifescript-customer-review-linda-morris.webp";
import Margaret from "@/__webAssets/webp/testimonials/lifescript-customer-review-margaret-campbell.webp";
import Rachel from "@/__webAssets/webp/testimonials/lifescript-customer-review-rachel-nguyen.webp";

import StoryWorthy from "@/__webAssets/pngs/storyworth-alternative-logo.png";
import LifeScriptLogo from "@/__webAssets/svgs/lifescript-life-story-book-logo.svg";

import AssistedEditing from "@/__webAssets/gif/assisted-editing-demo-animation.webp";
import AutoPhoto from "@/__webAssets/gif/Auto-photo-improvement-demo-animation.webp";
import FamilyTree from "@/__webAssets/gif/family-tree-feature-demo-animation.webp";
import FormattingFeatures from "@/__webAssets/gif/formatting-features-demo-animation.webp";
import Narrative from "@/__webAssets/gif/narrative-fusion-demo-animation.webp";
import VoiceToText from "@/__webAssets/gif/voice-to-text-feature-demo-animation.webp";

import { icons, images } from "./assetsUrl";
const { whyLifeScriptIcons } = icons;
const { bookCovers } = images;

export const UseStoryWorthAlternativeQs = (t) => [
  {
    qs: "How much does Storyworth cost?",
    ans: "Storyworth costs $99 for 12 months of access, which includes a black-and-white book. To upgrade to a full-color book, there is an additional fee of $40 for up to 300 pages or $60 for 300 to 480 pages. For orders outside the US, additional delivery charges apply.",
    panel: "panel1",
    isexpanded: false,
  },
  {
    qs: "How much does an additional book from Storyworth cost?",
    ans: "An additional black-and-white book from Storyworth costs $39, while a full-color book costs $79 for up to 300 pages or $99 for 300 to 480 pages. Shipping costs are not included.",
    panel: "panel2",
    isexpanded: false,
  },
  {
    qs: "Are Storyworth questions personalised?",
    ans: "No, Storyworth questions are not personalised. The questions are sent regularly via email in random order and are not tailored to individual experiences.",
    panel: "panel3",
    isexpanded: false,
  },
  {
    qs: "What are the best Storyworth alternatives?",
    ans: "The best alternatives to Storyworth are LifeScript, Storii, Alifeuntold, Remento, Meminto, Mylifeinabook and other.",
    panel: "panel4",
    isexpanded: false,
  },
  {
    qs: "Is Storyworth available in other languages?",
    ans: "No, Storyworth is available only in English. If you are looking for a Storyworth alternative for Spanish speakers - LifeScript is available in Spanish.",
    panel: "panel6",
    isexpanded: false,
  },
  {
    qs: "Does my father have to pay extra if I gift him Storyworth?",
    ans: "Yes, if your father wants a full-color book, he will need to pay an additional $40–$60, and unfortunately, you can't prepay this fee. If he's located outside the US, he will also have to pay extra for delivery.",
    panel: "panel7",
    isexpanded: false,
  },
  {
    qs: "What kind of customer support does Storyworth offer?",
    ans: "Yes, only via email while LifeScript offers live chat support, email support and tutorial videos.",
    panel: "panel8",
    isexpanded: false,
  },
  {
    qs: "Are there Storyworth alternatives in Australia,the UK or Canada?",
    ans: "People often search for Storyworth alternatives in Australia, the UK, and Canada due to high shipping fees outside the US. LifeScript is the only alternative that offers free international delivery.",
    panel: "panel5",
    isexpanded: false,
  },
];

export const useHomeTestimonials = (t) => [
  {
    profile: Arthur,
    name: t("landingPage.testimonialSection.testimonial1.name"),
    age: t("landingPage.testimonialSection.testimonial1.age"),
    location: t("landingPage.testimonialSection.testimonial1.location"),
    details: t("landingPage.testimonialSection.testimonial1.details"),
  },
  {
    profile: Eleanor,
    name: t("landingPage.testimonialSection.testimonial2.name"),
    age: t("landingPage.testimonialSection.testimonial2.age"),
    location: t("landingPage.testimonialSection.testimonial2.location"),
    details: t("landingPage.testimonialSection.testimonial2.details"),
  },
  {
    profile: Margaret,
    name: t("landingPage.testimonialSection.testimonial3.name"),
    age: t("landingPage.testimonialSection.testimonial3.age"),
    location: t("landingPage.testimonialSection.testimonial3.location"),
    details: t("landingPage.testimonialSection.testimonial3.details"),
  },
  {
    profile: George,
    name: t("landingPage.testimonialSection.testimonial4.name"),
    age: t("landingPage.testimonialSection.testimonial4.age"),
    location: t("landingPage.testimonialSection.testimonial4.location"),
    details: t("landingPage.testimonialSection.testimonial4.details"),
  },
  {
    profile: Linda,
    name: t("landingPage.testimonialSection.testimonial5.name"),
    age: t("landingPage.testimonialSection.testimonial5.age"),
    location: t("landingPage.testimonialSection.testimonial5.location"),
    details: t("landingPage.testimonialSection.testimonial5.details"),
  },
  {
    profile: Derek,
    name: t("landingPage.testimonialSection.testimonial6.name"),
    age: t("landingPage.testimonialSection.testimonial6.age"),
    location: t("landingPage.testimonialSection.testimonial6.location"),
    details: t("landingPage.testimonialSection.testimonial6.details"),
  },
  {
    profile: Lilly,
    name: t("landingPage.testimonialSection.testimonial7.name"),
    age: t("landingPage.testimonialSection.testimonial7.age"),
    location: t("landingPage.testimonialSection.testimonial7.location"),
    details: t("landingPage.testimonialSection.testimonial7.details"),
  },
  {
    profile: Carlos,
    name: t("landingPage.testimonialSection.testimonial8.name"),
    age: t("landingPage.testimonialSection.testimonial8.age"),
    location: t("landingPage.testimonialSection.testimonial8.location"),
    details: t("landingPage.testimonialSection.testimonial8.details"),
  },
  {
    profile: Rachel,
    name: t("landingPage.testimonialSection.testimonial9.name"),
    age: t("landingPage.testimonialSection.testimonial9.age"),
    location: t("landingPage.testimonialSection.testimonial9.location"),
    details: t("landingPage.testimonialSection.testimonial9.details"),
  },
];

export const useWhyLifeScript = (t) => [
  {
    heading: "Less effort and time spent",
    points: [
      "Autoediting and Proofreading saves 3 to 4 weeks",
      "Automatic photo improvement for printing purposes",
    ],
    image: whyLifeScriptIcons.timer,
    alt: "Icon representing less effort and time spent using LifeScript, the best Storyworth alternative with auto-editing and photo improvement features.",
    ImgTitle:
      "Less effort and time spent with LifeScript - Storyworth alternative",
  },
  {
    heading: "No hidden costs",
    points: [
      "Full-color hardcover book included in price",
      "Free international delivery included in price",
    ],
    image: whyLifeScriptIcons.cost,
    alt: "Icon showing no hidden costs with LifeScript, a Storyworth alternative offering full-color hardcover books and free delivery.",
    ImgTitle: " No hidden costs with LifeScript - Storyworth alternative",
  },
  {
    heading: "More support",
    points: [
      "Live chat support during business hours",
      "Easy step-by-step tutorial videos",
    ],
    image: whyLifeScriptIcons.support,
    alt: "Icon indicating more support with LifeScript, a Storyworth alternative providing live chat and step-by-step tutorials.",
    ImgTitle: " Enhanced support with LifeScript - Storyworth alternative",
  },
  {
    heading: "More personalized",
    points: [
      "More personalized questions for a tailored experience",
      "Family Tree included at the end of your book",
    ],
    image: whyLifeScriptIcons.tree,
    alt: "Icon for more personalized experience with LifeScript, the best alternative to Storyworth, offering tailored questions and family tree inclusion.",
    ImgTitle:
      "Personalized experience with LifeScript - Storyworth alternative",
  },

  {
    heading: "More custom and professional book",
    points: [
      "Q&A format or chapters format",
      "More book cover designs to choose from",
      "Formatting features for customization",
    ],
    image: whyLifeScriptIcons.tree,
    alt: "Icon for more custom and professional books with LifeScript, a Storyworth alternative providing various book cover designs and formats.",
    ImgTitle:
      "Custom and professional book options - LifeScript as a Storyworth alternative",
  },
  {
    heading: "More secure",
    points: ["Latest security standards to keep your stories private."],
    image: whyLifeScriptIcons.secure,
    alt: " Icon indicating more support with LifeScript, a Storyworth alternative providing live chat and step-by-step tutorials.",
    ImgTitle: " Enhanced support with LifeScript - Storyworth alternative",
  },
];

export const useSuggestedQuestions = (t) => [
  "What's a lesson you learned the hard way?",
  "What is one thing people would never guess about you?",
  "If money was no object, what would you do all day?",
  "What was the most breathtaking place you've ever visited?",
  "What are your ingredients for happiness?",
  "When you think of the word ‘home,’ which place comes to mind?",
  "How did you meet your significant other?",
  "What is the best job and the worst job you ever had?",
  "What qualities do you value most in a friend?",
  "What is your earliest memory?",
];

export const useOurBookCoverforAlternative = (t) => [
  {
    coverImage: bookCovers.cover1,
    alt: "Book cover with an elderly couple on a swing, highlighting LifeScript’s appeal as a Storyworth alternative.",
    title: "Grandparents book cover - LifeScript as a Storyworth alternative",
  },
  {
    coverImage: bookCovers.cover2,
    alt: "Full-picture life story book cover featuring a family by a lake, exemplifying LifeScript as the best Storyworth alternative.",
    title: "Full-picture book cover - LifeScript as a Storyworth alternative",
  },
  {
    coverImage: bookCovers.cover3,
    alt: "Book cover featuring an elderly couple celebrating grandma's birthday, showcasing LifeScript as a unique Storyworth alternative.",
    title: " Birthday gift book cover - LifeScript vs. Storyworth",
  },
  {
    coverImage: bookCovers.cover4,
    alt: "Book cover design with grandparents enjoying nature, demonstrating LifeScript as a top alternative to Storyworth.",
    title: "Grandparents book cover - LifeScript vs. Storyworth",
  },
  {
    coverImage: bookCovers.cover5,
    alt: "Memoir book cover with author’s photo, customizable with LifeScript, a leading Storyworth alternative.",
    title: "Memoir book cover - LifeScript as a Storyworth alternative",
  },
  {
    coverImage: bookCovers.cover6,
    alt: "Minimalistic autobiography book cover design, demonstrating LifeScript as a top Storyworth alternative.",
    title: "Minimalistic book cover - LifeScript vs. Storyworth",
  },
];

export const useWorkingDetails = (t) => [
  {
    no: "01",
    title: t("landingPage.howItWorks.step1.title"),
    discription: t("landingPage.howItWorks.step1.description"),
  },
  {
    no: "02",
    title: t("landingPage.howItWorks.step2.title"),
    discription: t("landingPage.howItWorks.step2.description"),
  },
  {
    no: "03",
    title: t("landingPage.howItWorks.step3.title"),
    discription: t("landingPage.howItWorks.step3.description"),
  },
  {
    no: "04",
    title: t("landingPage.howItWorks.step4.title"),
    discription: t("landingPage.howItWorks.step4.description"),
  },
];

export const usePricingComparison = (t) => [
  {
    header: t("pricingSection.bookDetails.pricingDetailObject1.header"),
    bgColor: "#E1683B",
    data: [
      t("pricingSection.bookDetails.pricingDetailObject1.data.freeTrial"),
      t("pricingSection.bookDetails.pricingDetailObject1.data.lifetimeAccess"),
      t(
        "pricingSection.bookDetails.pricingDetailObject1.data.noAdditionalCost"
      ),
      t(
        "pricingSection.bookDetails.pricingDetailObject1.data.priceForAdditional"
      ),
      t("pricingSection.bookDetails.pricingDetailObject1.data.freeShipping"),
      t(
        "pricingSection.bookDetails.pricingDetailObject1.data.languageSupported"
      ),
      t("pricingSection.bookDetails.pricingDetailObject1.data.bookPageLimit"),
      t(
        "pricingSection.bookDetails.pricingDetailObject1.data.unlimitedPhotoUploads"
      ),
      t("pricingSection.bookDetails.pricingDetailObject1.data.videoTutorials"),
    ],
  },
  {
    logo: LifeScriptLogo,
    alt: t("pricingSection.bookDetails.additionalDetails.alt"),
    title: t("pricingSection.bookDetails.additionalDetails.title"),
    bgColor: "#30422E",
    data: [
      t("pricingSection.bookDetails.additionalDetails.data.yes"),
      t("pricingSection.bookDetails.additionalDetails.data.yesFor139"),
      t("pricingSection.bookDetails.additionalDetails.data.yes"),
      t("pricingSection.bookDetails.additionalDetails.data.priceForAdditional"),
      t("pricingSection.bookDetails.additionalDetails.data.yes"),
      t("pricingSection.bookDetails.additionalDetails.data.languagesSupported"),
      t("pricingSection.bookDetails.additionalDetails.data.pageLimit"),
      t(
        "pricingSection.bookDetails.additionalDetails.data.unlimitedPhotoUploads"
      ),
      t("pricingSection.bookDetails.additionalDetails.data.videoTutorials"),
    ],
  },
  {
    logo: StoryWorthy,
    alt: t("pricingSection.bookDetails.additionalDetails2.alt"),
    title: t("pricingSection.bookDetails.additionalDetails2.title"),
    bgColor: "#15372F",
    sCase: true,
    data: [
      t("pricingSection.bookDetails.additionalDetails2.data.no"),
      t("pricingSection.bookDetails.additionalDetails2.data.priceFor139"),
      t(
        "pricingSection.bookDetails.additionalDetails2.data.priceForFullColorBook"
      ),
      t(
        "pricingSection.bookDetails.additionalDetails2.data.priceForAdditionalBook"
      ),
      t(
        "pricingSection.bookDetails.additionalDetails2.data.noShippingOutsideUS"
      ),
      t("pricingSection.bookDetails.additionalDetails2.data.languageSupported"),
      t("pricingSection.bookDetails.additionalDetails2.data.bookPageLimit"),
      t(
        "pricingSection.bookDetails.additionalDetails2.data.unlimitedPhotoUploads"
      ),
      t("pricingSection.bookDetails.additionalDetails2.data.noVideoTutorials"),
    ],
  },
];

export const useFeaturesComparison = (t) => [
  {
    header: t("pricingSection.featureComparison.featuresDetails.header"),
    bgColor: "#E1683B",
    data: [
      t(
        "pricingSection.featureComparison.featuresDetails.data.questionAnswerFormat"
      ),
      t(
        "pricingSection.featureComparison.featuresDetails.data.narrativeFusionFormat"
      ),
      t(
        "pricingSection.featureComparison.featuresDetails.data.formattingFeatures"
      ),
      t(
        "pricingSection.featureComparison.featuresDetails.data.assistedEditing"
      ),
      t("pricingSection.featureComparison.featuresDetails.data.voiceToText"),
      t("pricingSection.featureComparison.featuresDetails.data.familyTree"),
      t(
        "pricingSection.featureComparison.featuresDetails.data.autoPhotoImprovement"
      ),
      t(
        "pricingSection.featureComparison.featuresDetails.data.mobileTabletFriendly"
      ),
    ],
  },
  {
    logo: LifeScriptLogo,
    alt: t("pricingSection.featureComparison.featuresDetails2.alt"),
    title: t("pricingSection.featureComparison.featuresDetails2.title"),
    bgColor: "#30422E",
    data: [
      t("pricingSection.featureComparison.featuresDetails2.data.yes"),
      t(
        "pricingSection.featureComparison.featuresDetails2.data.yesInStandardPremium"
      ),
      t("pricingSection.featureComparison.featuresDetails2.data.yes"),
      t("pricingSection.featureComparison.featuresDetails2.data.yes"),
      t(
        "pricingSection.featureComparison.featuresDetails2.data.yesInStandardPremium"
      ),
      t(
        "pricingSection.featureComparison.featuresDetails2.data.yesInStandardPremium"
      ),
      t("pricingSection.featureComparison.featuresDetails2.data.yes"),
      t("pricingSection.featureComparison.featuresDetails2.data.yes"),
    ],
  },
  {
    logo: StoryWorthy,
    alt: t("pricingSection.featureComparison.featuresDetails3.alt"),
    title: t("pricingSection.featureComparison.featuresDetails3.title"),
    bgColor: "#15372F",
    data: [
      t("pricingSection.featureComparison.featuresDetails3.data.yes"),
      t("pricingSection.featureComparison.featuresDetails3.data.no"),
      t("pricingSection.featureComparison.featuresDetails3.data.no"),
      t("pricingSection.featureComparison.featuresDetails3.data.no"),
      t("pricingSection.featureComparison.featuresDetails3.data.no"),
      t("pricingSection.featureComparison.featuresDetails3.data.no"),
      t("pricingSection.featureComparison.featuresDetails3.data.no"),
      t("pricingSection.featureComparison.featuresDetails3.data.yes"),
    ],
  },
];

export const useAlternativeFeaturesGif = (t) => [
  {
    panel: "panel1",
    timer: 11000,
    heading: "landingPage.featureSection.accordion1.heading",
    description: "landingPage.featureSection.accordion1.description",
    imageSrc: Narrative,
    alt: "Narrative fusion demo animation showing the simplicity of LifeScript, the top Storyworth alternative.",
    imgTitle: "LifeScript narrative fusion demo as a Storyworth alternative",
  },
  {
    panel: "panel2",
    timer: 6000,
    heading: "landingPage.featureSection.accordion2.heading",
    description: "landingPage.featureSection.accordion2.description",
    imageSrc: AssistedEditing,
    alt: "Assisted editing demo showing advanced spelling and grammar check features in LifeScript, a leading Storyworth alternative.",
    imgTitle: " Assisted editing demo - LifeScript vs. Storyworth",
  },
  {
    panel: "panel3",
    timer: 10700,
    heading: "landingPage.featureSection.accordion3.heading",
    description: "landingPage.featureSection.accordion3.description",
    imageSrc: VoiceToText,
    alt: " Voice-to-text feature demo highlighting LifeScript’s ability to convert spoken words to text, making it a superior Storyworth alternative.",
    imgTitle:
      "Voice-to-text demo - LifeScript as the best Storyworth alternative",
  },
  {
    panel: "panel4",
    timer: 10700,
    heading: "landingPage.featureSection.accordion4.heading",
    description: "landingPage.featureSection.accordion4.description",
    imageSrc: FamilyTree,
    alt: "Family tree feature demo illustrating how LifeScript visualizes generational connections, a unique Storyworth alternative feature.",
    imgTitle: "Family tree demo - LifeScript as a Storyworth alternative",
  },
  {
    panel: "panel5",
    timer: 5000,
    heading: "landingPage.featureSection.accordion5.heading",
    description: "landingPage.featureSection.accordion5.description",
    imageSrc: FormattingFeatures,
    alt: "Formatting features demo showcasing LifeScript’s customizable text options, setting it apart as a top Storyworth alternative.",
    imgTitle: " Formatting features demo - LifeScript vs. Storyworth",
  },
  {
    panel: "panel6",
    timer: 7600,
    heading: "landingPage.featureSection.accordion6.heading",
    description: "landingPage.featureSection.accordion6.description",
    imageSrc: AutoPhoto,
    alt: "Auto photo improvement demo showing LifeScript’s image enhancement capabilities, making it the best Storyworth alternative.",
    imgTitle:
      " Auto photo enhancement demo - LifeScript as a Storyworth alternative",
  },
];

export const faqQA = (t) => [
  {
    question: t("faqsSections.question1.question"),
    answer: t("faqsSections.question1.answer"),
  },
  {
    question: t("faqsSections.question2.question"),
    answer: t("faqsSections.question2.answer"),
  },
  {
    question: t("faqsSections.question3.question"),
    answer: t("faqsSections.question3.answer"),
  },
  {
    question: t("faqsSections.question4.question"),
    answer: t("faqsSections.question4.answer"),
  },
  {
    question: t("faqsSections.question5.question"),
    answer: t("faqsSections.question5.answer"),
  },
  {
    question: t("faqsSections.question6.question"),
    answer: t("faqsSections.question6.answer"),
  },
  {
    question: t("faqsSections.question7.question"),
    answer: t("faqsSections.question7.answer"),
  },
  {
    question: t("faqsSections.question8.question"),
    answer: t("faqsSections.question8.answer"),
  },
  {
    question: t("faqsSections.question9.question"),
    answer: t("faqsSections.question9.answer"),
  },
  {
    question: t("faqsSections.question10.question"),
    answer: t("faqsSections.question10.answer"),
  },
  {
    question: t("faqsSections.question11.question"),
    answer: t("faqsSections.question11.answer"),
  },
  {
    question: t("faqsSections.question12.question"),
    answer: t("faqsSections.question12.answer"),
  },
  {
    question: t("faqsSections.question13.question"),
    answer: t("faqsSections.question13.answer"),
  },
  {
    question: t("faqsSections.question14.question"),
    answer: t("faqsSections.question14.answer"),
  },
  {
    question: t("faqsSections.question15.question"),
    answer: t("faqsSections.question15.answer"),
  },
  {
    question: t("faqsSections.question16.question"),
    answer: t("faqsSections.question16.answer"),
  },
];

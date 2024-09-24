import NextLink from "next/link";

import AssistedEditing from "@/__webAssets/gifs/assisted-editing-demo-animation.gif";
import AutoPhoto from "@/__webAssets/gifs/Auto-photo-improvement-demo-animation.gif";
import FamilyTree from "@/__webAssets/gifs/family-tree-feature-demo-animation.gif";
import FormattingFeatures from "@/__webAssets/gifs/formatting-features-demo-animation.gif";
import Narrative from "@/__webAssets/gifs/narrative-fusion-demo-animation.gif";
import VoiceToText from "@/__webAssets/gifs/voice-to-text-feature-demo-animation.gif";

import Diversity from "@/__webAssets/svgs/values/diversity.svg";
import Empathy from "@/__webAssets/svgs/values/empathy.svg";
import Family from "@/__webAssets/svgs/values/family.svg";
import Growth from "@/__webAssets/svgs/values/growth.svg";
import Inspiration from "@/__webAssets/svgs/values/inspiration.svg";
import Power from "@/__webAssets/svgs/values/power.svg";

import Check from "@/__webAssets/svgs/check-square.svg";
import LifeScriptLogo from "@/__webAssets/svgs/lifescript-life-story-book-logo.svg";

import { icons, images } from "./assetsUrl";
const { whyLifeScriptIcons, other, featuresLogos, testimonial } = icons;
const { bookCovers, homeHeroImages, storyTelling, others, sliderImages } =
  images;

export const UseAlternativeQA = (t) => [
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
    profile: testimonial.Arthur,
    name: t("landingPage.testimonialSection.testimonial1.name"),
    age: t("landingPage.testimonialSection.testimonial1.age"),
    location: t("landingPage.testimonialSection.testimonial1.location"),
    details: t("landingPage.testimonialSection.testimonial1.details"),
  },
  {
    profile: testimonial.Eleanor,
    name: t("landingPage.testimonialSection.testimonial2.name"),
    age: t("landingPage.testimonialSection.testimonial2.age"),
    location: t("landingPage.testimonialSection.testimonial2.location"),
    details: t("landingPage.testimonialSection.testimonial2.details"),
  },
  {
    profile: testimonial.Margaret,
    name: t("landingPage.testimonialSection.testimonial3.name"),
    age: t("landingPage.testimonialSection.testimonial3.age"),
    location: t("landingPage.testimonialSection.testimonial3.location"),
    details: t("landingPage.testimonialSection.testimonial3.details"),
  },
  {
    profile: testimonial.George,
    name: t("landingPage.testimonialSection.testimonial4.name"),
    age: t("landingPage.testimonialSection.testimonial4.age"),
    location: t("landingPage.testimonialSection.testimonial4.location"),
    details: t("landingPage.testimonialSection.testimonial4.details"),
  },
  {
    profile: testimonial.Linda,
    name: t("landingPage.testimonialSection.testimonial5.name"),
    age: t("landingPage.testimonialSection.testimonial5.age"),
    location: t("landingPage.testimonialSection.testimonial5.location"),
    details: t("landingPage.testimonialSection.testimonial5.details"),
  },
  {
    profile: testimonial.Derek,
    name: t("landingPage.testimonialSection.testimonial6.name"),
    age: t("landingPage.testimonialSection.testimonial6.age"),
    location: t("landingPage.testimonialSection.testimonial6.location"),
    details: t("landingPage.testimonialSection.testimonial6.details"),
  },
  {
    profile: testimonial.Lilly,
    name: t("landingPage.testimonialSection.testimonial7.name"),
    age: t("landingPage.testimonialSection.testimonial7.age"),
    location: t("landingPage.testimonialSection.testimonial7.location"),
    details: t("landingPage.testimonialSection.testimonial7.details"),
  },
  {
    profile: testimonial.Carlos,
    name: t("landingPage.testimonialSection.testimonial8.name"),
    age: t("landingPage.testimonialSection.testimonial8.age"),
    location: t("landingPage.testimonialSection.testimonial8.location"),
    details: t("landingPage.testimonialSection.testimonial8.details"),
  },
  {
    profile: testimonial.Rachel,
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
    heading: "Better support",
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
    image: whyLifeScriptIcons.book,
    alt: "Icon for more custom and professional books with LifeScript, a Storyworth alternative providing various book cover designs and formats.",
    ImgTitle:
      "Custom and professional book options - LifeScript as a Storyworth alternative",
  },
  {
    heading: "Better Security",
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
    logo: other.storyWorthLogo,
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
    logo: other.storyWorthLogo,
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

export const useFaqQA = (t) => [
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

export const useHomeHero = () => [
  {
    src: homeHeroImages.img1,
    alt: "Mom with dad and their two daughters having fun on the beach with stories about their lifes - LifeScript",
    className: "image1",
    width: 260,
    height: 290,
  },
  {
    src: homeHeroImages.img2,
    alt: "Children dancing and having fun with bubbles on a vintage photograph - LifeScript",
    className: "image3",
    width: 275,
    height: 330,
  },
  {
    src: homeHeroImages.img3,
    alt: "childhood memories with a vintage photograph of a kid having a laugh with a small kitten - LifeScript",
    className: "image2",
    width: 225,
    height: 245,
  },
  {
    src: homeHeroImages.img4,
    alt: "Grandma and Grandpa eating ice cream and having fun reflecting on their life journey - LifeScript",
    className: "image4",
    width: 322,
    height: 290,
  },
  {
    src: homeHeroImages.book,
    alt: "An old opened autobiography book - LifeScript",
    className: "bookImg",
    width: 870,
    height: 380,
  },
];

export const useBookCoverHome = () => [
  {
    coverImage: bookCovers.cover1,
    alt: "A book cover design with an old man celebrating anniversary with his wife on a swing - LifeScript",
    title: "Half picture-half title book cover design",
  },
  {
    coverImage: bookCovers.cover2,
    alt: "A full book cover picture design of a life story book with family standing in front of a lake - LifeScript",
    title: "Full-picture book cover design",
  },
  {
    coverImage: bookCovers.cover3,
    alt: "A book cover design with an old couple celebrating grandma birthday - LifeScript",
    title: "Full-picture book cover design",
  },
  {
    coverImage: bookCovers.cover4,
    alt: "A book cover design with a couple in the forest enjoying the sun and playing around - LifeScript",
    title: "Side picture book cover design",
  },
  {
    coverImage: bookCovers.cover5,
    alt: "Memoir book cover design with small picture of author and customizable text - LifeScript",
    title: "Memoir book cover design",
  },
  {
    coverImage: bookCovers.cover6,
    alt: "Simplistic design of autobiography book cover with minimalistic elements that you can customize - LifeScript",
    title: "Simplistic design of autobiography book cover",
  },
];

export const useStoryTelling = (t) => [
  {
    heading: t("landingPage.storyTelling.story1.heading"),
    content: t("landingPage.storyTelling.story1.content"),
    image: storyTelling.image1,
    alt: t("landingPage.storyTelling.story1.alt"),
    title: t("landingPage.storyTelling.story1.title"),
    direction: t("landingPage.storyTelling.story1.direction"),
  },
  {
    heading: t("landingPage.storyTelling.story2.heading"),
    content: t("landingPage.storyTelling.story2.content"),
    image: storyTelling.image2,
    alt: t("landingPage.storyTelling.story2.alt"),
    title: t("landingPage.storyTelling.story2.title"),
    direction: t("landingPage.storyTelling.story2.direction"),
  },
  {
    heading: t("landingPage.storyTelling.story3.heading"),
    content: t("landingPage.storyTelling.story3.content"),
    image: storyTelling.image3,
    alt: t("landingPage.storyTelling.story3.alt"),
    title: t("landingPage.storyTelling.story3.title"),
    direction: t("landingPage.storyTelling.story3.direction"),
  },
  {
    heading: t("landingPage.storyTelling.story4.heading"),
    content: t("landingPage.storyTelling.story4.content"),
    image: storyTelling.image4,
    alt: t("landingPage.storyTelling.story4.alt"),
    title: t("landingPage.storyTelling.story4.title"),
    direction: t("landingPage.storyTelling.story4.direction"),
  },
];

export const useHomeQA = (t) => [
  {
    qs: t("landingPage.questionSection.question1.qs"),
    ans: t("landingPage.questionSection.question1.ans"),
    panel: "panel1",
    isexpanded: false,
  },
  {
    qs: t("landingPage.questionSection.question2.qs"),
    ans: t("landingPage.questionSection.question2.ans"),
    panel: "panel2",
    isexpanded: false,
  },
  {
    qs: t("landingPage.questionSection.question3.qs"),
    ans: t("landingPage.questionSection.question3.ans"),
    panel: "panel3",
    isexpanded: false,
  },
  {
    qs: t("landingPage.questionSection.question4.qs"),
    ans: t("landingPage.questionSection.question4.ans"),
    panel: "panel4",
    isexpanded: false,
  },
  {
    qs: t("landingPage.questionSection.question5.qs"),
    ans: t("landingPage.questionSection.question5.ans"),
    panel: "panel5",
    isexpanded: false,
  },
  {
    qs: t("landingPage.questionSection.question6.qs"),
    ans: t("landingPage.questionSection.question6.ans"),
    panel: "panel6",
    isexpanded: false,
  },
  {
    qs: t("landingPage.questionSection.question7.qs"),
    ans: t("landingPage.questionSection.question7.ans"),
    panel: "panel7",
    isexpanded: false,
  },
  {
    qs: t("landingPage.questionSection.question8.qs"),
    ans: t("landingPage.questionSection.question8.ans"),
    panel: "panel8",
    isexpanded: false,
  },
];

export const useHomeFeaturesGif = (t) => [
  {
    panel: "panel1",
    timer: 11000,
    heading: "landingPage.featureSection.accordion1.heading",
    description: "landingPage.featureSection.accordion1.description",
    imageSrc: Narrative,
    alt: "Narrative fusion feature demo animation showing how it works - LifeScript",
    imgTitle: "Narrative Fusion demo animation",
  },
  {
    panel: "panel2",
    timer: 6000,
    heading: "landingPage.featureSection.accordion2.heading",
    description: "landingPage.featureSection.accordion2.description",
    imageSrc: AssistedEditing,
    alt: "Assisted Editing feature demo animation showing how the spelling and grammar check works - LifeScript",
    imgTitle: "Assisted Editing demo animation",
  },
  {
    panel: "panel3",
    timer: 10700,
    heading: "landingPage.featureSection.accordion3.heading",
    description: "landingPage.featureSection.accordion3.description",
    imageSrc: VoiceToText,
    alt: "Voice-to-text feature demo animation showing how your recorded words translate into written text - LifeScript",
    imgTitle: "Voice-to-text demo animation",
  },
  {
    panel: "panel4",
    timer: 10700,
    heading: "landingPage.featureSection.accordion4.heading",
    description: "landingPage.featureSection.accordion4.description",
    imageSrc: FamilyTree,
    alt: "Family Tree feature demo animation showing how your family members visualize across generations - LifeScript",
    imgTitle: "Family tree demo animation",
  },
  {
    panel: "panel5",
    timer: 5000,
    heading: "landingPage.featureSection.accordion5.heading",
    description: "landingPage.featureSection.accordion5.description",
    imageSrc: FormattingFeatures,
    alt: "Formatting Features demo animation showing how you can use bold, italics and other formatting - LifeScript",
    imgTitle: "Formatting features demo animation",
  },
  {
    panel: "panel6",
    timer: 7600,
    heading: "landingPage.featureSection.accordion6.heading",
    description: "landingPage.featureSection.accordion6.description",
    imageSrc: AutoPhoto,
    alt: "Auto photo improvement demo animation showing how once you upload image we upscale and fit - LifeScript",
    imgTitle: "Auto photo improvement feature demo animation",
  },
];

export const usePricingCardDetails = (t) => [
  {
    id: "basic",
    category: t("landingPage.pricingSection.category1"),
    price: "$139",
    card: "1",
  },
  {
    id: "standard",
    category: t("landingPage.pricingSection.category2"),
    price: "$179",
    card: "2",
  },
  {
    id: "primium",
    category: t("landingPage.pricingSection.category3"),
    price: "$239",
    card: "3",
  },
];

export const useHomeSuggestions = (t) => {
  const imageData = {
    src: others.homeSuggestion,
    alt: "A collage of a dad with kids and a grandpa sitting on top of life story books packaged as a gift - LifeScript",
    title: "Family collage photo",
  };
  const content = [
    {
      title: t("landingPage.perfectSection.content1.title"),
      subTitle: t("landingPage.perfectSection.content1.subTitle"),
    },
    {
      title: t("landingPage.perfectSection.content2.title"),
      subTitle: t("landingPage.perfectSection.content2.subTitle"),
    },
    {
      title: t("landingPage.perfectSection.content3.title"),
      subTitle: t("landingPage.perfectSection.content3.subTitle"),
    },
    {
      title: t("landingPage.perfectSection.content4.title"),
      subTitle: t("landingPage.perfectSection.content4.subTitle"),
    },
  ];

  return { imageData, content };
};

export const useAboutUsValueData = (t) => [
  {
    title: t("aboutSection.ourValues.valueData1.title"),
    detail: t("aboutSection.ourValues.valueData1.detail"),
    icon: Power,
  },
  {
    title: t("aboutSection.ourValues.valueData2.title"),
    detail: t("aboutSection.ourValues.valueData2.detail"),
    icon: Family,
  },
  {
    title: t("aboutSection.ourValues.valueData3.title"),
    detail: t("aboutSection.ourValues.valueData3.detail"),
    icon: Growth,
  },

  {
    title: t("aboutSection.ourValues.valueData4.title"),
    detail: t("aboutSection.ourValues.valueData4.detail"),
    icon: Inspiration,
  },
  {
    title: t("aboutSection.ourValues.valueData5.title"),
    detail: t("aboutSection.ourValues.valueData5.detail"),
    icon: Empathy,
  },
  {
    title: t("aboutSection.ourValues.valueData6.title"),
    detail: t("aboutSection.ourValues.valueData6.detail"),
    icon: Diversity,
  },
];

export const useFeaturesData = (t) => [
  {
    logo: featuresLogos.narrative,
    altLogo:
      "An icon of a lightbulb over a book that represents narrative fusion feature for assembling answers - LifeScript",
    titleLogo: "Narrative fusion feature icon",
    gif: Narrative,
    alt: "Narrative fusion feature demo animation showing how it works - LifeScript",
    title: "Narrative Fusion demo animation",
    heading: t("featurePage.Section1.heading"),
    details: t("featurePage.Section1.details"),
    flex: "row",
  },
  {
    logo: featuresLogos.assistedEditing,
    altLogo:
      "An icon of a pen over a book that represents assisted editing feature for automatic corrections - LifeScript",
    titleLogo: "Assisted editing feature icon",
    gif: AssistedEditing,
    alt: "Assisted Editing feature demo animation showing how the spelling and grammar check works - LifeScript",
    title: "Assisted Editing demo animation",
    heading: t("featurePage.Section2.heading"),
    details: t("featurePage.Section2.details"),
    flex: "row-reverse",
    bg: true,
  },
  {
    logo: featuresLogos.voiceToText,
    altLogo:
      "An icon of a microphone and window of text over it that represents recording memories via speech - LifeScript",
    titleLogo: "Voice-to-text feature icon",
    gif: VoiceToText,
    alt: "Voice-to-text feature demo animation showing how your recorded words translate into written text - LifeScript",
    title: "Voice-to-text demo animation",
    heading: t("featurePage.Section3.heading"),
    details: t("featurePage.Section3.details"),
    flex: "row",
  },
  {
    logo: featuresLogos.familyTree,
    altLogo:
      "An icon of people connected between each other that represents visualizing family ancestry - LifeScript",
    titleLogo: "Family tree feature icon",
    gif: FamilyTree,
    alt: "Family Tree feature demo animation showing how your family members visualize across generations - LifeScript",
    title: "Family tree demo animation",
    heading: t("featurePage.Section4.heading"),
    details: t("featurePage.Section4.details"),
    flex: "row-reverse",
    bg: true,
  },

  {
    logo: featuresLogos.formatting,
    altLogo:
      "An icon of paper with text on it that represents various formatting options - LifeScript",
    titleLogo: "Formatting features icon",
    gif: FormattingFeatures,
    alt: "Formatting Features demo animation showing how you can use bold, italics and other formatting - LifeScript",
    title: "Formatting features demo animation",
    heading: t("featurePage.Section5.heading"),
    details: t("featurePage.Section5.details"),
    flex: "row",
  },
  {
    logo: featuresLogos.autoPhoto,
    altLogo:
      "An icon of a picture with mountain landscape that represents photo upscaling and autofitting - LifeScript",
    titleLogo: "Auto photo improvement feature icon",
    gif: AutoPhoto,
    alt: "Auto photo improvement demo animation showing how once you upload image we upscale and fit - LifeScript",
    title: "Auto photo improvement feature demo animation",
    heading: t("featurePage.Section6.heading"),
    details: t("featurePage.Section6.details"),
    flex: "row-reverse",
    button: true,
    bg: "half",
  },
];

export const usePricingWorkingData = (t) => [
  {
    icon: Check,
    title: t("pricingSection.pointsArray1.title"),
    discription: t("pricingSection.pointsArray1.description"),
  },
  {
    icon: Check,
    title: t("pricingSection.pointsArray2.title"),
    discription: t("pricingSection.pointsArray2.description"),
  },
  {
    icon: Check,
    title: t("pricingSection.pointsArray3.title"),
    discription: t("pricingSection.pointsArray3.description"),
  },
];

export const useRetiredMenSuggestions = (t) => {
  const imageData = {
    src: others.homeSuggestion,
    alt: "A heartfelt retirement gift for men featuring multi-generational family moments, symbolizing the importance of life stories and wisdom passed down - LifeScript",
    title:
      "Retirement gift for men featuring family moments and life stories - LifeScript",
  };
  const content = [
    {
      title: "Celebrate his life story",
      subTitle:
        "Retirement isn’t just an end—it’s a celebration of his entire life’s journey. Give him the opportunity to capture his legacy in his own words, creating a keepsake that honors his achievements and preserves his wisdom for years to come.",
    },
    {
      title: "Share his story and wisdom",
      subTitle:
        "Every man has a story worth telling. Help him share the triumphs, challenges, and life lessons that have shaped him. This is his chance to inspire and guide his family with the wisdom he’s gained over a lifetime.",
    },
    {
      title: "Connect with his family",
      subTitle:
        "His stories are the threads that weave the fabric of family. Uncover memories that have never been shared, bringing loved ones closer and ensuring his voice is heard for generations.",
    },
    {
      title: "Reflect on his life’s journey",
      subTitle:
        "Retirement is a time for reflection. Dive deep into the moments that defined his path, finding joy in the details that might have been forgotten. This is more than a gift—it’s a journey through his past.",
    },
  ];

  return { imageData, content };
};

export const useRetiredMenTestimonials = (t) => [
  {
    name: "Michael S.",
    details:
      "It’s been so meaningful to reflect on my life and share my memories with my family through LifeScript. I’ve enjoyed telling my grandkids about my past, something I might never have done in such a structured way. My grandkids gifted me this for my retirement, and it feels great knowing they want to learn about my early years.",
  },
  {
    name: "Thomas C.",
    details:
      "LifeScript has turned into a fantastic retirement hobby. It’s heartwarming to reflect on my experiences and share them with my family. The hardcover book will be a lasting reminder of my journey, and I’m so glad my children thought of giving me this gift.",
  },
  {
    name: "Edward L.",
    details:
      "My daughter gave me LifeScript as a retirement gift, and I didn’t expect to enjoy it so much. It’s like going on a journey through my own life. I’ve been able to share stories that I’d almost forgotten about, and now they're preserved forever.",
  },
  {
    name: "Kevin J.",
    details:
      "This experience with LifeScript has been a lot of fun. I love documenting our family's stories so future generations can read them and feel a connection to our past. It feels like I'm keeping the memories of those who came before me alive, showing that their lives mattered.",
  },
  {
    name: "George P.",
    details:
      "I was hesitant at first when my wife gifted me LifeScript, but it has turned into one of the most rewarding experiences. I’ve been able to recount my life's adventures and leave a lasting legacy for my grandkids. The weekly questions really help keep me engaged.",
  },
  {
    name: "Henry K.",
    details:
      "I never thought I'd be writing a book, but LifeScript has made it possible. My daughter bought this for my retirement, and it's given me a chance to share my memories, which are now beautifully bound in a book that my family can cherish forever.",
  },
];

export const useRetiredMenQA = (t) => [
  {
    qs: "What is included in each plan?",
    ans: "Lifetime access to our platform, full-color hardcover book and free delivery.",
    panel: "panel1",
    isexpanded: false,
  },
  {
    qs: "Can I gift LifeScript as a retirement gift for dad and how does that work?",
    ans: "Absolutely, LifeScript is a thoughtful retirement gift for men by guiding them to share their life stories and memories through a simple, engaging platform. You simply provide his email and choose the date when you’d like the gift to be sent. Once the gift email is sent to your loved one, you'll also receive another confirmation to let you know it's been delivered.",
    panel: "panel2",
    isexpanded: false,
  },
  {
    qs: "Is LifeScript a good last-minute retirement gift idea for dads?",
    ans: "LifeScript is a perfect last-minute gift for dads! You can purchase it even the night before his special day, and the gift email will be sent early in the morning on your selected date.",
    panel: "panel3",
    isexpanded: false,
  },
  {
    qs: "If now isn’t the perfect time for this gift, can I set a reminder so you’ll notify me when the right time to gift approaches?",
    ans: "Yes, you can! Complete the form below, and we'll send you a reminder as your loved one's special day approaches.",
    panel: "panel4",
    isexpanded: false,
  },
  {
    qs: "Is international shipping available and how much does it cost?",
    ans: "We ship internationally and provide delivery tracking. Oh, and it’s free.",
    panel: "panel5",
    isexpanded: false,
  },
  {
    qs: "How can I ensure his book and information remain private?",
    ans: (
      <>
        We take{" "}
        <NextLink href="/privacy-policy" passHref>
          <span style={{ color: "#30422E", fontFamily: "Avenir8" }}>
            privacy
          </span>
        </NextLink>{" "}
        very seriously. We use advanced security technologies and encryption
        methods to protect his personal stories and information, ensuring they
        remain completely private.
      </>
    ),
    panel: "panel6",
    isexpanded: false,
  },
  {
    qs: "Can I purchase extra books?",
    ans: "Yes, additional full-color hardcover books are available for 39$ each.",
    panel: "panel7",
    isexpanded: false,
  },
  {
    qs: "Do you have any tutorials or instructions on how to use the platform and create my book?",
    ans: "Yes! We offer comprehensive video tutorials that provide step-by-step instructions on how to use the platform, create, edit, and order your book. Additionally, our friendly support team is available via chat and email to assist with any questions you may have.",
    panel: "panel8",
    isexpanded: false,
  },
];

export const useRetiredMenFeaturesGif = (t) => [
  {
    panel: "panel1",
    timer: 11000,
    heading: "landingPage.featureSection.accordion1.heading",
    description: "landingPage.featureSection.accordion1.description",
    imageSrc: Narrative,
    alt: "Demo animation showing how easy is LifeScript as retirement gift for dads",
    imgTitle:
      "Demo animation showing how easy is LifeScript as retirement gift for dads",
  },
  {
    panel: "panel2",
    timer: 6000,
    heading: "landingPage.featureSection.accordion2.heading",
    description: "landingPage.featureSection.accordion2.description",
    imageSrc: AssistedEditing,
    alt: "Assisted editing feature demo animation showing how the spelling and grammar check works, perfect for creating memorable retirement gifts for men",
    imgTitle: "Assisted editing demo for creating retirement gift books",
  },
  {
    panel: "panel3",
    timer: 10700,
    heading: "landingPage.featureSection.accordion3.heading",
    description: "landingPage.featureSection.accordion3.description",
    imageSrc: VoiceToText,
    alt: "Voice-to-text feature demo animation showing how your recorded words translate into written text, making it a thoughtful gift idea for men retiring - LifeScript.",
    imgTitle: "Voice-to-text demo for retirement gift creation",
  },
  {
    panel: "panel4",
    timer: 10700,
    heading: "landingPage.featureSection.accordion4.heading",
    description: "landingPage.featureSection.accordion4.description",
    imageSrc: FamilyTree,
    alt: "Family tree feature demo animation illustrating how family members visualize across generations, ideal for a personalized retirement gift for dads - LifeScript.",
    imgTitle: "Family tree demo for creating a retirement gift",
  },
  {
    panel: "panel5",
    timer: 5000,
    heading: "landingPage.featureSection.accordion5.heading",
    description: "landingPage.featureSection.accordion5.description",
    imageSrc: FormattingFeatures,
    alt: "Formatting features demo animation showcasing bold, italics, and other styles, enhancing the personal touch for retirement gift books for men - LifeScript.",
    imgTitle: "Formatting features demo for retirement gift books",
  },
  {
    panel: "panel6",
    timer: 7600,
    heading: "landingPage.featureSection.accordion6.heading",
    description: "landingPage.featureSection.accordion6.description",
    imageSrc: AutoPhoto,
    alt: "Auto photo improvement demo animation showing how uploaded images are upscaled and fitted, perfect for creating high-quality retirement gifts for men - LifeScript.",
    imgTitle: "Auto photo enhancement for retirement gift books",
  },
];

export const useOurBookCoverforRetiredMen = (t) => [
  {
    coverImage: bookCovers.cover1,
    alt: "Book cover showing an elderly man on a swing with an elderly woman, perfect for retirement gift ideas for men - LifeScript.",
    title: "Grandparents on swing book cover for retirement gifts",
  },
  {
    coverImage: bookCovers.cover2,
    alt: "Full-picture life story book cover featuring a family by a lake, ideal for gifts for retired men - LifeScript.",
    title: "Full-picture family life story book cover for retirement gifts",
  },
  {
    coverImage: bookCovers.cover3,
    alt: "Book cover featuring an elderly couple celebrating grandma's birthday, a thoughtful retirement gift for dad - LifeScript.",
    title: "Birthday celebration book cover for retirement gifts",
  },
  {
    coverImage: bookCovers.cover4,
    alt: "Book cover with a couple enjoying the sun in a forest, a heartwarming retirement gift for dad - LifeScript.",
    title: "Grandparents enjoying nature book cover for retirement gifts",
  },
  {
    coverImage: bookCovers.cover5,
    alt: "Memoir book cover with author’s photo, customizable for the best retirement gift for a man - LifeScript.",
    title: "Customizable memoir book cover for retirement gifts",
  },
  {
    coverImage: bookCovers.cover6,
    alt: "Minimalistic autobiography book cover design, perfect for a personalized retirement gift for dad - LifeScript..",
    title: "Minimalistic autobiography book cover for retirement gifts",
  },
];

export const useRetiredWomenSuggestions = (t) => {
  const imageData = {
    src: others.homeSuggestionWomen,
    alt: " A touching moment between grandmother and granddaughter, symbolizing a thoughtful retirement gift for women to share their life stories - LifeScript.",
    title: "Grandmother and granddaughter moment - Retirement gift for women",
  };
  const content = [
    {
      title: "Celebrate the journey so far",
      subTitle:
        "Retirement isn’t the end—it’s a chance to look back and celebrate everything she’s accomplished. This gift lets her share her stories, capturing the moments and milestones that made her who she is today.",
    },
    {
      title: "Share stories that matter",
      subTitle:
        "She has stories that deserve to be told—the highs, the lows, the lessons learned. This is her chance to put them into words, creating something her family can hold on to and learn from for years to come.",
    },
    {
      title: "Reconnect with family",
      subTitle:
        "Her stories are the threads that weave the fabric of family. Uncover memories that have never been shared, bringing loved ones closer and ensuring her voice is heard for generations.",
    },
    {
      title: "Reflect on life’s moments",
      subTitle:
        "Retirement is the perfect time to look back on the moments that shaped her. This isn’t just a gift—it’s a way to relive the laughter, the love, and the journey that made her life truly special.",
    },
  ];

  return { imageData, content };
};

export const useRetiredWomenTestimonials = (t) => [
  {
    name: "Mary F.",
    details:
      "I was a bit skeptical at first, but this gift has honestly turned out to be such a special part of my retirement. My daughter thought I’d enjoy documenting my life, and she was right! I didn’t expect to have so many stories to tell. Now, I’m writing down things I haven’t thought of in years, and my grandkids are loving it. They’re asking for more stories!",
  },
  {
    name: "Ellen G.",
    details:
      "My granddaughter gave me this as a retirement gift, and honestly, I didn’t think I’d use it much. But once I got started, I couldn’t stop! It’s made me reflect on all the phases of my life. Some memories brought tears, others laughter, but all of them are now part of my LifeScript. It’s a beautiful way to share my story with my family.",
  },
  {
    name: "Nancy P.",
    details:
      "This was a lovely surprise! I never considered myself a storyteller, but LifeScript helped me put my thoughts in order. It’s been fun remembering all the old stories, and I even discovered things about myself along the way. My daughter gave me this for retirement, and it’s honestly been one of the most thoughtful gifts I’ve ever received.",
  },
  {
    name: "Betty H.",
    details:
      "LifeScript has been a wonderful journey for me. My son gave this to me as a retirement gift, and it’s allowed me to share parts of my life I might not have ever talked about. It’s not always easy to sit down and write, but the prompts really helped. I never thought I'd have my own book, and now I do. It’s truly special.",
  },
  {
    name: "Judith C.",
    details:
      "My family thought this would be a nice retirement gift for me, and I’ve been enjoying it more than I expected. I wasn’t sure I had much to write about, but turns out, I had plenty of stories to share! The questions really helped me think about parts of my life I hadn’t thought of in ages. Now my kids and grandkids will have this forever, and that makes me happy.",
  },
  {
    name: "Ann W.",
    details:
      "Honestly, I didn’t think I’d have the patience for this, but LifeScript has been really fun. My daughter got it for me, and it’s been such a unique way to spend time during my retirement. I’ve been able to document all the little moments in my life, and now my story is all there in one beautiful book. My grandkids love hearing my stories, and that’s the best part for me.",
  },
];

export const useOurBookCoverforRetiredWomen = (t) => [
  {
    coverImage: bookCovers.cover1,
    alt: "Book cover showing an elderly couple on a swing, perfect for retirement gift ideas for women - LifeScript.",
    title: "Grandparents on swing book cover for women’s retirement gifts",
  },
  {
    coverImage: bookCovers.cover2,
    alt: "Full-picture life story book cover featuring a family, ideal for retirement gift ideas for women - LifeScript.",
    title: "Full-picture family book cover for women’s retirement gifts",
  },
  {
    coverImage: bookCovers.cover3,
    alt: "Book cover featuring an elderly couple celebrating grandma’s birthday, a thoughtful retirement gift for women - LifeScript.",
    title: "Birthday celebration book cover as retirement gift for woman",
  },
  {
    coverImage: bookCovers.cover4,
    alt: "Book cover with a couple enjoying the sun in a forest, a heartwarming retirement gift for women - LifeScript.",
    title:
      "Grandparents enjoying nature book cover for women’s retirement gifts",
  },
  {
    coverImage: bookCovers.cover5,
    alt: "Memoir book cover with author’s photo, customizable for the best retirement gift for a woman - LifeScript.",
    title: "Customizable memoir book cover for women’s retirement gifts",
  },
  {
    coverImage: bookCovers.cover6,
    alt: "Minimalistic autobiography book cover design, perfect for a personalized retirement gift for women - LifeScript.",
    title: "Minimalistic book cover for women’s retirement gifts",
  },
];

export const useRetiredWomenFeaturesGif = (t) => [
  {
    panel: "panel1",
    timer: 11000,
    heading: "landingPage.featureSection.accordion1.heading",
    description: "landingPage.featureSection.accordion1.description",
    imageSrc: Narrative,
    alt: "Demo animation showing how easy LifeScript is to use as a retirement gift for women.",
    imgTitle:
      "Demo animation showing how LifeScript works as a retirement gift for women",
  },
  {
    panel: "panel2",
    timer: 6000,
    heading: "landingPage.featureSection.accordion2.heading",
    description: "landingPage.featureSection.accordion2.description",
    imageSrc: AssistedEditing,
    alt: "Assisted editing feature demo animation showing how spelling and grammar checks work, perfect for creating memorable retirement gifts for women.",
    imgTitle:
      "Assisted editing demo for creating women’s retirement gift books",
  },
  {
    panel: "panel3",
    timer: 10700,
    heading: "landingPage.featureSection.accordion3.heading",
    description: "landingPage.featureSection.accordion3.description",
    imageSrc: VoiceToText,
    alt: "Voice-to-text feature demo showing how your recorded words translate into written text, making it a thoughtful gift idea for women retiring - LifeScript.",
    imgTitle: "Voice-to-text demo for women’s retirement gift creation",
  },
  {
    panel: "panel4",
    timer: 10700,
    heading: "landingPage.featureSection.accordion4.heading",
    description: "landingPage.featureSection.accordion4.description",
    imageSrc: FamilyTree,
    alt: "Family tree feature demo animation illustrating how family members visualize across generations, ideal for a personalized retirement gift for women - LifeScript.",
    imgTitle: "Family tree demo for creating women’s retirement gifts",
  },
  {
    panel: "panel5",
    timer: 5000,
    heading: "landingPage.featureSection.accordion5.heading",
    description: "landingPage.featureSection.accordion5.description",
    imageSrc: FormattingFeatures,
    alt: "Formatting features demo showcasing bold, italics, and other customization options, perfect for creating personalized retirement gifts for women - LifeScript.",
    imgTitle: "Formatting features demo for women’s retirement gift books",
  },
  {
    panel: "panel6",
    timer: 7600,
    heading: "landingPage.featureSection.accordion6.heading",
    description: "landingPage.featureSection.accordion6.description",
    imageSrc: AutoPhoto,
    alt: "Auto photo improvement demo animation showing how uploaded images are enhanced and fitted, perfect for high-quality retirement gifts for women - LifeScript.",
    imgTitle:
      "Auto photo improvement for creating women’s retirement gift books",
  },
];

export const useRetiredWomenQA = (t) => [
  {
    qs: "What is included in each plan?",
    ans: "Lifetime access to our platform, full-color hardcover book and free delivery.",
    panel: "panel1",
    isexpanded: false,
  },
  {
    qs: "Can I gift LifeScript as a retirement gift for mom and how does that work?",
    ans: "Absolutely, LifeScript is among the best retirement gifts for women by guiding them to share their life stories and memories through a simple, engaging platform. You simply provide her email and choose the date when you’d like the gift to be sent. Once the gift email is sent to your loved one, you'll also receive another confirmation to let you know it's been delivered.",
    panel: "panel2",
    isexpanded: false,
  },
  {
    qs: "Is LifeScript a good last-minute retirement gift idea for women?",
    ans: "LifeScript is a perfect last-minute gift for moms! You can purchase it even the night before her special day, and the gift email will be sent early in the morning on your selected date.",
    panel: "panel3",
    isexpanded: false,
  },
  {
    qs: "If now isn’t the perfect time for this gift, can I set a reminder so you’ll notify me when the right time to gift approaches?",
    ans: "Yes, you can! Complete the form below, and we'll send you a reminder as your loved one's special day approaches.",
    panel: "panel4",
    isexpanded: false,
  },
  {
    qs: "Is international shipping available and how much does it cost?",
    ans: "We ship internationally and provide delivery tracking. Oh, and it’s free.",
    panel: "panel5",
    isexpanded: false,
  },
  {
    qs: "How can I ensure her book and information remain private?",
    ans: (
      <>
        We take{" "}
        <NextLink href="/privacy-policy" passHref>
          <span style={{ color: "#30422E", fontFamily: "Avenir8" }}>
            privacy
          </span>
        </NextLink>{" "}
        very seriously. We use advanced security technologies and encryption
        methods to protect her personal stories and information, ensuring they
        remain completely private.
      </>
    ),
    panel: "panel6",
    isexpanded: false,
  },
  {
    qs: "Can I purchase extra books?",
    ans: "Yes, additional full-color hardcover books are available for 39$ each.",
    panel: "panel7",
    isexpanded: false,
  },
  {
    qs: "Do you have any tutorials or instructions on how to use the platform and create my book?",
    ans: "Yes! We offer comprehensive video tutorials that provide step-by-step instructions on how to use the platform, create, edit, and order your book. Additionally, our friendly support team is available via chat and email to assist with any questions you may have.",
    panel: "panel8",
    isexpanded: false,
  },
];

export const useCarouselSliderImages = [
  {
    path: sliderImages.motherHiking,
    alt: "Parent and Child Hiking for a Memoir Book Journey",
    title: "A parent carrying a child while hiking through a forest, reflecting the journey of preserving memories and stories in a memoir book.",
  },
  {
    path: sliderImages.readingBook,
    alt: "Woman Enjoying Reading a Memoir Book",
    title: "A woman drinking tea while reading a book by the window, representing reflection and the personal connection of reading a memoir.",
  },
  {
    path: sliderImages.grandFather,
    alt: "Grandfather standing with walking stick while child climbs a hill during an outdoor adventure, symbolizing shared memories in a lifestory book.",
    title: "Grandpa and Child Hiking Together for LifeStory Creation",
  },
];

export const useChristmasMomSuggestions = (t) => {
  const imageData = {
    src: others.homeSuggestion,
    alt: "A touching moment between daughter and mom, symbolizing a special Christmas gift for moms to capture their life stories - LifeScript.",
    title:
      "Daughter and mom special moment - Christmas gift for mom",
  };
  const content = [
    {
      title: "Celebrate her life story",
      subTitle:
        "Christmas is a time for reflection, and what could be more meaningful than a gift that celebrates the journey she's traveled? Help her create a beautiful keepsake that honors her life story, filled with memories, achievements, and the moments that made her who she is today.",
    },
    {
      title: "Share stories and wisdom",
      subTitle:
        "Moms have a lifetime of wisdom and stories worth passing down. This Christmas, offer her the chance to preserve those moments and share them with family. Her life lessons, cherished memories, and unique experiences can become a lasting legacy for generations to come.",
    },
    {
      title: "Connect with family",
      subTitle:
        "Her stories are the threads that weave the fabric of family. Uncover memories that have never been shared, bringing loved ones closer and ensuring her voice is heard for generations.",
    },
    {
      title: "Reflect on life’s journey",
      subTitle:
        "Give her the chance to look back on her journey, reliving the moments that shaped her. This is more than just a gift—it's an opportunity for her to reflect, to celebrate her life, and to share those priceless memories with the ones she loves most.",
    },
  ];

  return { imageData, content };
};

export const useChrismasMomTestimonials = (t) => [
  {
    name: "Sarah K.",
    details:
      "I was looking for something unique to gift my mom for Christmas, and LifeScript turned out to be the perfect choice. She’s been reminiscing about her childhood and family stories, and now all those memories are in a beautifully bound book. It’s something that will be treasured for generations to come. Best gift I’ve ever given!",
  },
  {
    name: "Emily R.",
    details:
      "I gave my mom LifeScript for Christmas, and it’s been so special watching her fill it out. She’s been sharing stories I’ve never heard before, and I can tell how much it means to her to pass them down. It’s not just a book—it’s our family’s history in her own words. Such a heartfelt gift.",
  },
  {
    name: "Jenna S.",
    details:
      "This was a Christmas gift for my mom, and she’s absolutely loving it. She’s been working on her LifeScript for a few weeks now, and every time we talk, she tells me about a new memory she’s writing down. It’s such a thoughtful way to capture the essence of who she is, and I know it’ll be cherished for years.",
  },
  {
    name: "Clara D.",
    details:
      "I was so excited to give my mom LifeScript this Christmas! She’s always been a storyteller, and now all her stories are being captured in one place. It’s brought us closer, hearing about her life experiences, and the fact that it’s all going into a book makes it even more special. A perfect gift for moms who love to reflect on their past.",
  },
  {
    name: "Rebecca T.",
    details:
      "Christmas shopping for my mom has always been a challenge, but LifeScript was such a great find. It’s given her the chance to share all her stories, from her childhood to raising us. I didn’t expect it to be so meaningful for her, but she’s pouring her heart into it. It’s the kind of gift that keeps giving, and I know our whole family will treasure it.",
  },
  {
    name: "Laura M.",
    details:
      "My mom is usually so hard to shop for, but this year I gave her LifeScript for Christmas, and she’s been thrilled. She’s always enjoyed looking back on the memories, and now she gets to organize them into a beautiful book. Every time we talk, she shares a new story she’s written down. It’s truly a gift that connects generations.",
  },
];

export const useOurBookCoverforChristmasMom = (t) => [
  {
    coverImage: bookCovers.cover1,
    alt: "Book cover showing an elderly couple on a swing, perfect for Christmas gift ideas for moms - LifeScript.",
    title: "Grandparents on swing book cover for moms’ Christmas gifts",
  },
  {
    coverImage: bookCovers.cover2,
    alt: "Full-picture life story book cover featuring a family, ideal for Christmas gift ideas for moms - LifeScript",
    title: "Full-picture family book cover for moms’ Christmas gifts",
  },
  {
    coverImage: bookCovers.cover3,
    alt: "Book cover featuring an elderly couple celebrating grandma’s birthday, a thoughtful Christmas gift for moms - LifeScript.",
    title: " Birthday celebration book cover as Christmas gift for mom",
  },
  {
    coverImage: bookCovers.cover4,
    alt: "Book cover with a couple enjoying the sun in a forest, a heartwarming Christmas gift for moms - LifeScript.",
    title: "Grandparents enjoying nature book cover for moms’ Christmas gifts",
  },
  {
    coverImage: bookCovers.cover5,
    alt: "Memoir book cover with author’s photo, customizable for the best Christmas gift for mom - LifeScript.",
    title: "Customizable memoir book cover for moms’ Christmas gifts",
  },
  {
    coverImage: bookCovers.cover6,
    alt: "Minimalistic autobiography book cover design, perfect for a personalized Christmas gift for moms - LifeScript.",
    title: "Minimalistic book cover for moms’ Christmas gifts",
  },
];
import NextLink from "next/link";

import AssistedEditing from "@/__webAssets/gifs/assisted-editing-demo-animation.gif";
import AutoPhoto from "@/__webAssets/gifs/Auto-photo-improvement-demo-animation.gif";
import FamilyTree from "@/__webAssets/gifs/family-tree-feature-demo-animation.gif";
import FormattingFeatures from "@/__webAssets/gifs/formatting-features-demo-animation.gif";
import Narrative from "@/__webAssets/gifs/narrative-fusion-demo-animation.gif";
import VoiceToText from "@/__webAssets/gifs/voice-to-text-feature-demo-animation.gif";

import { icons, images } from "./assetsUrl";

const { whyLifeScriptIcons, other, featuresLogos, testimonial } = icons;
const { bookCovers, homeHeroImages, storyTelling, others, sliderImages } =
  images;

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

// Gifts for grandma
export const useGrandmaGiftSuggestions = (t) => {
  const imageData = {
    src: others.grandmaGiftHeroImg,
    alt: " A happy moment between granddaughter and grandma, symbolizing a personalized gift for grandma to preserve her life stories - LifeScript.",
    title:
      "Grandma and granddaughter happy moment - personalized gifts for grandma",
  };
  const content = [
    {
      title: "Celebrate her journey so far",
      subTitle:
        "LifeScript is one of the most thoughtful gifts for grandma, offering her the chance to look back and celebrate everything she’s achieved. It helps her capture those special moments and milestones that shaped her into the amazing person she is today.",
    },
    {
      title: "Share stories that matter",
      subTitle:
        "Your grandma’s life is filled with stories—tales of triumphs, challenges, and lessons learned. LifeScript gives her the perfect platform to share these memories, creating a meaningful legacy that your family will cherish for generations.",
    },
    {
      title: "Reconnect with family",
      subTitle:
        "Her stories are the threads that weave the fabric of your family’s history. With LifeScript, she can revisit those memories and uncover moments that have long been forgotten. It’s a gift that brings loved ones closer and ensures her voice will continue to be heard.",
    },
    {
      title: "Reflect on life’s moments",
      subTitle:
        "She has lived a life rich in experiences, love, and laughter. Giving her the opportunity to reflect on those moments is thoughtful way to show that you care. With LifeScript, she’ll relive her most treasured memories and turn them into a lasting keepsake for your family to hold close.",
    },
  ];

  return { imageData, content };
};

export const useGrandmaGiftQA = (t) => [
  {
    qs: "What is included in each plan?",
    ans: "Each plan gives you lifetime access to our platform, a beautifully printed full-color hardcover book, and free delivery. It’s the perfect way to create a timeless gift for your grandma, capturing her most cherished memories.",
    panel: "panel1",
    isexpanded: false,
  },
  {
    qs: "Can I gift LifeScript to my grandma? How does it work?",
    ans: "Absolutely! LifeScript is one of the most thoughtful and personalized gifts for grandma. You simply provide her email and select a date for the gift email to be sent. Once it’s delivered, you’ll receive a confirmation, ensuring the gift has been received. It’s an easy and meaningful way to show you care.",
    panel: "panel2",
    isexpanded: false,
  },
  {
    qs: "Is LifeScript a good last-minute gift for grandma?",
    ans: "Yes, LifeScript is an excellent last-minute gift for grandma. Even if you purchase it the night before a special occasion, the gift email will be delivered first thing the next morning. It’s a thoughtful, personalized gift that feels intimate, even when time is short.",
    panel: "panel3",
    isexpanded: false,
  },
  {
    qs: "Are there tutorials or instructions to help her create the book?",
    ans: "Yes, we offer detailed video tutorials that guide her through every step of the process, from creating and editing to ordering your book. And if she ever needs help, our dedicated support team is available via chat and email.",
    panel: "panel4",
    isexpanded: false,
  },
  {
    qs: "Can I order extra books?",
    ans: "Yes, you can purchase additional full-color hardcover books for $39 each. It’s a beautiful and affordable way to share your grandma’s stories with other family members.",
    panel: "panel5",
    isexpanded: false,
  },
  {
    qs: "How can I ensure my grandma’s stories stay private?",
    ans: (
      <>
        We understand the importance of{" "}
        <NextLink href="/privacy-policy" passHref>
          <span style={{ color: "#30422E", fontFamily: "Avenir8" }}>
            privacy.
          </span>
        </NextLink>{" "}
        Your grandma’s stories are protected with advanced security technologies and encryption, ensuring that her personal memories remain completely private and secure.
      </>
    ),
    panel: "panel6",
    isexpanded: false,
  },
  {
    qs: "Can I set a reminder if now isn’t the right time for this gift?",
    ans: "Yes, additional full-color hardcover books are available for 39$ each.",
    panel: "panel7",
    isexpanded: false,
  },
  {
    qs: "Do you offer international shipping? How much does it cost?",
    ans: "Of course! You can easily set a reminder, and we’ll notify you when the time is perfect to get your gift for grandma.",
    panel: "panel8",
    isexpanded: false,
  },
];

export const useGrandmaGiftTestimonials = (t) => [
  {
    name: "Olivia S.",
    details: (
      <>
        Finding a meaningful personalized gift for grandma has always been
        tough, but{" "}
        <span style={{ fontFamily: "Avenir8" }}>
          LifeScript was a game changer.{" "}
        </span>
        It’s a way to share her life stories with us, and she’s absolutely
        loving it. Every time I visit, she’s eager to show me what she’s been
        writing. It’s like I’m getting to know her all over again. It’s not just
        a gift for grandma—it’s a treasure for the whole family.
      </>
    ),
  },
  {
    name: "Tony W.",
    details: (
      <>
        I gave my grandma LifeScript for her birthday, and it’s honestly the
        best gift I’ve ever given her. She’s been so excited to fill it with
        stories about her life. Seeing{" "}
        <span style={{ fontFamily: "Avenir8" }}>
          her face light up when she talks about her memories{" "}
        </span>
        has been such a joy. It’s a truly personal gift for grandma, and I can
        already tell this book is going to be passed down through generations.
        If you’re looking for grandma gifts that really mean something, this is
        it.
      </>
    ),
  },
  {
    name: "Chloe D.",
    details: (
      <>
        LifeScript was the perfect gift for my grandma. She’s been wanting to
        write down her stories for a while, and this gave her the perfect
        opportunity. It’s more than just a gift —it’s a way for her to preserve
        her memories for all of us. She’s been sharing things we never knew
        about her childhood and family, and now we have it all in one beautiful
        book. This was the{" "}
        <span style={{ fontFamily: "Avenir8" }}>
          best grandma gift I could have ever found.
        </span>
      </>
    ),
  },
  {
    name: "Chris H.",
    details: (
      <>
        For Christmas, I wanted to find a meaningful gift for my grandma, and
        LifeScript was perfect. She’s been using it to write down her life
        stories, and it’s been such a bonding experience for all of us. I
        couldn’t recommend it enough if you’re looking for something{" "}
        <span style={{ fontFamily: "Avenir8" }}>thoughtful and special.</span>
      </>
    ),
  },
  {
    name: "Lucy T.",
    details: (
      <>
        I didn’t know what to get my grandma, but LifeScript turned out to be exactly what she needed. She’s been having so much fun sharing stories from her past and organizing them into this beautiful book. It’s truly a personalized gift for grandma, and the best part is that{" "}
        <span style={{ fontFamily: "Avenir8" }}>it’s something we’ll all treasure forever. </span>
      </>
    ),
  },
  {
    name: "Emily J.",
    details: (
      <>
        We gave LifeScript as a gift for grandma, and she absolutely loved it. She’s always been the storyteller in the family, and now she gets to put all those stories into one place. This has become something really special for all of us. She’s writing down stories I’ve never heard before, and{" "}
        <span style={{ fontFamily: "Avenir8" }}>it’s made us all feel so much closer to her.</span>
        Best grandma gift we’ve ever given!
      </>
    ),
  },
];

export const useGrandmaGiftFeaturesGif = (t) => [
  {
    panel: "panel1",
    timer: 11000,
    heading: "landingPage.featureSection.accordion1.heading",
    description: "Turns her answers into beautifully written chapters with a single click. No writing experience needed.",
    imageSrc: Narrative,
    alt: "Demo animation showing how easy LifeScript is to use as a personalized gift for grandma.",
    imgTitle:
      "Demo animation showing how LifeScript works as a gift for grandma",
  },
  {
    panel: "panel2",
    timer: 6000,
    heading: "landingPage.featureSection.accordion2.heading",
    description: "Automatically edits and proofreads her text with real-time suggestions. No typos anymore.",
    imageSrc: AssistedEditing,
    alt: "Assisted editing feature demo showing how spelling and grammar checks work, perfect for creating memorable grandma gifts.",
    imgTitle: "Assisted editing demo for creating gifts for grandma",
  },
  {
    panel: "panel3",
    timer: 10700,
    heading: "landingPage.featureSection.accordion3.heading",
    description: "Captures your grandma's spoken words, transforming them into written text if she doesn't feel like typing.",
    imageSrc: VoiceToText,
    alt: "Voice-to-text feature demo showing how recorded words translate into text, making it a thoughtful gift for grandma - LifeScript.",
    imgTitle: "Voice-to-text demo for creating personalized grandma gifts",
  },
  {
    panel: "panel4",
    timer: 10700,
    heading: "landingPage.featureSection.accordion4.heading",
    description: "Visually represents her ancestry from parents to distant ancestors at the end of her book.",
    imageSrc: FamilyTree,
    alt: "Family tree feature demo animation illustrating how family members visualize across generations, ideal for a personalized gift for grandma - LifeScript.",
    imgTitle: "Family tree demo for creating gifts for elderly women",
  },
  {
    panel: "panel5",
    timer: 5000,
    heading: "landingPage.featureSection.accordion5.heading",
    description: "Allows her to customize the text, its font, style, size, color, layout and more.",
    imageSrc: FormattingFeatures,
    alt: "Formatting features demo showcasing bold, italics, and other customization options, perfect for creating personalized gifts for grandma - LifeScript.",
    imgTitle: "Formatting features demo for grandma gifts",
  },
  {
    panel: "panel6",
    timer: 7600,
    heading: "landingPage.featureSection.accordion6.heading",
    description: "Automatically adjusts your photos for high-quality printing by managing size, resolution, and more.",
    imageSrc: AutoPhoto,
    alt: "Auto photo improvement demo animation showing how uploaded images are enhanced and fitted, perfect for high-quality gifts for grandma - LifeScript.",
    imgTitle: "Auto photo improvement for creating personalized gifts for grandma",
  },
];

export const useOurBookCoverforGrandmaGift = (t) => [
  {
    coverImage: bookCovers.cover1,
    alt: "Book cover showing an elderly couple on a swing, perfect for gifts for elderly women - LifeScript.",
    title: "Grandparents on swing book cover for gifts for grandma",
  },
  {
    coverImage: bookCovers.cover2,
    alt: "Full-picture life story book cover featuring a family, ideal for grandma gifts - LifeScript.",
    title: "Full-picture family book cover for gifts for grandma",
  },
  {
    coverImage: bookCovers.cover3,
    alt: "Book cover featuring an elderly couple celebrating grandma’s birthday, a thoughtful grandma gift - LifeScript.",
    title: "Birthday celebration book cover as grandma gift",
  },
  {
    coverImage: bookCovers.cover4,
    alt: "Book cover with a couple enjoying the sun in a forest, a heartwarming gift for grandma - LifeScript.",
    title: "Grandparents enjoying nature book cover for grandma gifts",
  },
  {
    coverImage: bookCovers.cover5,
    alt: "Memoir book cover with author’s photo, customizable for the best gift for grandma - LifeScript",
    title: "Customizable memoir book cover for grandma gift",
  },
  {
    coverImage: bookCovers.cover6,
    alt: "Minimalistic autobiography book cover design, perfect for a personalized gift for grandma - LifeScript.",
    title: "Minimalistic book cover for gifts for grandma",
  },
];
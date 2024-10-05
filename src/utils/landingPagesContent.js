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
      title: "Celebrate a lifetime of memories",
      subTitle:
        "Help her honor the big achievements and the small everyday moments that shaped her with a gift that preserves her story for generations to come.",
    },
    {
      title: "Uncover untold stories",
      subTitle:
        "Give your grandma the chance to share the moments she’s never spoken about—the stories that make up the missing pieces of her life’s puzzle.  ",
    },
    {
      title: "Strengthen family bonds",
      subTitle:
        "This is a way for her to share memories that deepen family ties and create lasting connections with loved ones. Her stories connect generations.",
    },
    {
      title: "Reflect on a life well-lived",
      subTitle:
        "A lifetime of experiences deserves to be celebrated. This gift offers her the chance to reflect on the moments that made her the person she is today.",
    },
    {
      title: "Spark meaningful conversations",
      subTitle:
        "This grandma gift opens up conversations you’ve never had before, bringing forgotten memories to life and strengthening your relationship as she shares stories.",
    },
    {
      title: "Make her feel appreciated",
      subTitle:
        "Let her feel valued by showing that you care about her life story. She’ll be proud that her experiences are preserved and worthy of an autobiography book.",
    },
    {
      title: "Leave a lasting legacy",
      subTitle:
        "This book ensures her grandchildren will know her life story, learn from her experiences, and use her wisdom as a compass throughout life.",
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
        Your grandma’s stories are protected with advanced security technologies
        and encryption, ensuring that her personal memories remain completely
        private and secure.
      </>
    ),
    panel: "panel6",
    isexpanded: false,
  },
  {
    qs: "Can I set a reminder if now isn’t the right time for this gift?",
    ans: "Of course! You can easily set a reminder, and we’ll notify you when the time is perfect to get your gift for grandma.",
    panel: "panel7",
    isexpanded: false,
  },
  {
    qs: "Do you offer international shipping? How much does it cost?",
    ans: "Yes, additional full-color hardcover books are available for 39$ each.",
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
        I didn’t know what to get my grandma, but LifeScript turned out to be
        exactly what she needed. She’s been having so much fun sharing stories
        from her past and organizing them into this beautiful book. It’s truly a
        personalized gift for grandma, and the best part is that{" "}
        <span style={{ fontFamily: "Avenir8" }}>
          it’s something we’ll all treasure forever.{" "}
        </span>
      </>
    ),
  },
  {
    name: "Emily J.",
    details: (
      <>
        We gave LifeScript as a gift for grandma, and she absolutely loved it.
        She’s always been the storyteller in the family, and now she gets to put
        all those stories into one place. This has become something really
        special for all of us. She’s writing down stories I’ve never heard
        before, and{" "}
        <span style={{ fontFamily: "Avenir8" }}>
          it’s made us all feel so much closer to her.
        </span>
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
    description:
      "Turns her answers into beautifully written chapters with a single click. No writing experience needed.",
    imageSrc: Narrative,
    alt: "Demo animation showing how easy LifeScript is to use as a personalized gift for grandma.",
    imgTitle:
      "Demo animation showing how LifeScript works as a gift for grandma",
  },
  {
    panel: "panel2",
    timer: 6000,
    heading: "landingPage.featureSection.accordion2.heading",
    description:
      "Automatically edits and proofreads her text with real-time suggestions. No typos anymore.",
    imageSrc: AssistedEditing,
    alt: "Assisted editing feature demo showing how spelling and grammar checks work, perfect for creating memorable grandma gifts.",
    imgTitle: "Assisted editing demo for creating gifts for grandma",
  },
  {
    panel: "panel3",
    timer: 10700,
    heading: "landingPage.featureSection.accordion3.heading",
    description:
      "Captures your grandma's spoken words, transforming them into written text if she doesn't feel like typing.",
    imageSrc: VoiceToText,
    alt: "Voice-to-text feature demo showing how recorded words translate into text, making it a thoughtful gift for grandma - LifeScript.",
    imgTitle: "Voice-to-text demo for creating personalized grandma gifts",
  },
  {
    panel: "panel4",
    timer: 10700,
    heading: "landingPage.featureSection.accordion4.heading",
    description:
      "Visually represents her ancestry from parents to distant ancestors at the end of her book.",
    imageSrc: FamilyTree,
    alt: "Family tree feature demo animation illustrating how family members visualize across generations, ideal for a personalized gift for grandma - LifeScript.",
    imgTitle: "Family tree demo for creating gifts for elderly women",
  },
  {
    panel: "panel5",
    timer: 5000,
    heading: "landingPage.featureSection.accordion5.heading",
    description:
      "Allows her to customize the text, its font, style, size, color, layout and more.",
    imageSrc: FormattingFeatures,
    alt: "Formatting features demo showcasing bold, italics, and other customization options, perfect for creating personalized gifts for grandma - LifeScript.",
    imgTitle: "Formatting features demo for grandma gifts",
  },
  {
    panel: "panel6",
    timer: 7600,
    heading: "landingPage.featureSection.accordion6.heading",
    description:
      "Automatically adjusts your photos for high-quality printing by managing size, resolution, and more.",
    imageSrc: AutoPhoto,
    alt: "Auto photo improvement demo animation showing how uploaded images are enhanced and fitted, perfect for high-quality gifts for grandma - LifeScript.",
    imgTitle:
      "Auto photo improvement for creating personalized gifts for grandma",
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

// Gifts for grandparents
export const useGrandparentsGiftSuggestions = (t) => {
  const imageData = {
    src: others.grandparentsGiftHeroImg,
    alt: "A happy moment between grandpa and grandma, symbolizing a personalized gift for grandparents to preserve their life stories - LifeScript.",
    title:
      "Grandpa and grandma happy moment - personalized gifts for grandparents",
  };
  const content = [
    {
      title: "Celebrate a lifetime of memories",
      subTitle:
        "Help them honor their achievements, whether they’re big milestones or quiet memories that shaped them, with a gift that captures their story for generations.",
    },
    {
      title: "Uncover untold stories",
      subTitle:
        "Give your grandparents the chance to share the moments they’ve never spoken about—the stories that make up the missing pieces of their life’s puzzle.",
    },
    {
      title: "Strengthen family bonds",
      subTitle:
        "This is a way for them to share memories that deepen family ties and create lasting connections with loved ones. Their stories connect generations.",
    },
    {
      title: "Reflect on a life well-lived",
      subTitle:
        "A lifetime of experiences deserves to be celebrated. This gift offers them the chance to reflect on the moments that shaped them into the people they are today.",
    },
    {
      title: "Spark meaningful conversations",
      subTitle:
        "This grandparents gift opens up conversations you’ve never had before, bringing forgotten memories to life and strengthening your relationship as they share stories.",
    },
    {
      title: "Make them feel appreciated",
      subTitle:
        "Let them feel valued by showing that you care about their life story. They’ll feel proud that their experiences are preserved and worthy of an autobiography book.",
    },
    {
      title: "Leave a lasting legacy",
      subTitle:
        "This book ensures their grandchildren will know their life story, learn from their experiences, and use their wisdom as a compass throughout life.",
    },
  ];

  return { imageData, content };
};

export const useGrandparentsGiftQA = (t) => [
  {
    qs: "What is included in each plan?",
    ans: "Each plan provides lifetime access to our platform, a beautifully printed full-color hardcover book, and free delivery.",
    panel: "panel1",
    isexpanded: false,
  },
  {
    qs: "Can I gift LifeScript to my grandparents? How does it work?",
    ans: "Yes! All you need is their email and a date to send the gift. Once it’s delivered, you’ll receive a confirmation. It’s one of the easiest yet most meaningful gifts for grandparents.",
    panel: "panel2",
    isexpanded: false,
  },
  {
    qs: "Is LifeScript a good last-minute gift for grandparents?",
    ans: "Absolutely! It’s one of the best gifts for grandparents, even if you’re short on time. If you purchase it the night before, the gift email will be delivered first thing the next day.",
    panel: "panel3",
    isexpanded: false,
  },
  {
    qs: "Are there any tutorials to help?",
    ans: "Yes! We provide step-by-step video guides to walk them through every stage, and our support team is available via chat or email if they need assistance.",
    panel: "panel4",
    isexpanded: false,
  },
  {
    qs: "Can I order extra books?",
    ans: "Yes, you can order additional hardcover books for $39 each. It’s a wonderful way to share your grandparents’ life story with the whole family.",
    panel: "panel5",
    isexpanded: false,
  },
  {
    qs: " How can I ensure my grandparents' stories stay private?",
    ans: (
      <>
        We take{" "}
        <NextLink href="/privacy-policy" passHref>
          <span style={{ color: "#30422E", fontFamily: "Avenir8" }}>
            privacy.
          </span>
        </NextLink>{" "}
        very seriously. Their stories are protected by advanced security
        measures and encryption, ensuring their memories remain private and
        secure.
      </>
    ),
    panel: "panel6",
    isexpanded: false,
  },
  {
    qs: "Can I set a reminder if I’m not ready to gift it now?",
    ans: "Of course! You can easily set a reminder, and we’ll let you know when it’s the perfect time to give one of the most thoughtful gifts for grandparents.",
    panel: "panel7",
    isexpanded: false,
  },
  {
    qs: "Do you offer international shipping? Is it free?",
    ans: "Yes, we offer free international shipping with tracking. No matter where your grandparents are, shipping is always included.",
    panel: "panel8",
    isexpanded: false,
  },
];

export const useGrandparentsGiftTestimonials = (t) => [
  {
    name: "Liam G",
    details: (
      <>
        Finding the right gift for my grandparents was always a challenge, but
        LifeScript made it so easy. Every time I visit, my grandma can’t wait to
        show me her latest stories. It’s like discovering a whole new side of
        her that I never knew. It’s more than a gift—it’s a{" "}
        <span style={{ fontFamily: "Avenir8" }}>
          treasure for the whole family.
        </span>
      </>
    ),
  },
  {
    name: "Sophia R.",
    details: (
      <>
        I gave my grandparents LifeScript for their anniversary, and honestly,
        it’s{" "}
        <span style={{ fontFamily: "Avenir8" }}>
          the best gift I’ve ever given.{" "}
        </span>
        Watching them light up as they relive old memories has been amazing.
        It’s not just another present, it’s a way to connect with them in a
        whole new way. This book will definitely be passed down for generations.
      </>
    ),
  },
  {
    name: "Ben T.",
    details: (
      <>
        LifeScript turned out to be the perfect gift for my grandparents.
        They’ve been wanting to capture their life stories for a while, and this
        made it so easy.{" "}
        <span style={{ fontFamily: "Avenir8" }}>
          I never knew so much about their childhood and adventures,{" "}
        </span>
        and now we have it all in one place. If you&apos;re looking for
        meaningful gifts for grandparents, this is it.
      </>
    ),
  },
  {
    name: "Maya H.",
    details: (
      <>
        I wanted to give my grandparents something they would really appreciate,
        and LifeScript was perfect. They’ve been having a blast writing down
        their stories, and it’s been such a{" "}
        <span style={{ fontFamily: "Avenir8" }}>
          fun bonding experience for the whole family
        </span>
        If you’re on the hunt for unique gifts for grandparents, trust me, this
        is the one.
      </>
    ),
  },
  {
    name: "Zoe K.",
    details: (
      <>
        I had no clue what to get my grandparents, but LifeScript turned out to
        be exactly what they needed. They’ve had{" "}
        <span style={{ fontFamily: "Avenir8" }}>
          so much fun sharing their life stories
        </span>{" "}
        and organizing them into this book. The best part? It’s something that
        the whole family will always treasure.
      </>
    ),
  },
  {
    name: "Ethan M.",
    details: (
      <>
        We gave LifeScript to our grandparents, and it’s become one of the most
        special things in our family. They’ve been sharing stories we’d never
        heard before, and it’s{" "}
        <span style={{ fontFamily: "Avenir8" }}>
          brought us all so much closer.
        </span>
        Honestly, the best gift we’ve ever given them!
      </>
    ),
  },
];

export const useGrandparentsGiftFeaturesGif = (t) => [
  {
    panel: "panel1",
    timer: 11000,
    heading: "landingPage.featureSection.accordion1.heading",
    description:
      "Transforms their answers into beautifully written chapters with a single click. No writing experience needed.",
    imageSrc: Narrative,
    alt: "Demo animation showing how easy LifeScript is to use as a personalized gift for grandparents.",
    imgTitle:
      "Demo animation showing how LifeScript works as a gift for grandparents",
  },
  {
    panel: "panel2",
    timer: 6000,
    heading: "landingPage.featureSection.accordion2.heading",
    description:
      "Automatically edits and proofreads their text with real-time suggestions. Say goodbye to typos and errors.",
    imageSrc: AssistedEditing,
    alt: " Assisted editing feature demo showing how spelling and grammar checks work, perfect for creating memorable gifts for grandparents.",
    imgTitle: "Assisted editing demo for creating gifts for grandparents",
  },
  {
    panel: "panel3",
    timer: 10700,
    heading: "landingPage.featureSection.accordion3.heading",
    description:
      "Captures your grandparents' spoken words, turning them into written text if they prefer speaking over typing.",
    imageSrc: VoiceToText,
    alt: "Voice-to-text feature demo showing how recorded words translate into text, making it a thoughtful gift for grandparents - LifeScript.",
    imgTitle:
      "Voice-to-text demo for creating personalized gifts for grandparents",
  },
  {
    panel: "panel4",
    timer: 10700,
    heading: "landingPage.featureSection.accordion4.heading",
    description:
      "Visually represents their ancestry—from parents to distant relatives—creating a meaningful family tree at the end of their book.",
    imageSrc: FamilyTree,
    alt: "Family tree feature demo animation illustrating how family members visualize across generations, ideal for a personalized gift for grandparents - LifeScript.",
    imgTitle: "Family tree demo for creating gifts for grandparents",
  },
  {
    panel: "panel5",
    timer: 5000,
    heading: "landingPage.featureSection.accordion5.heading",
    description:
      "Allows them to customize the text, font, style, size, color, layout, and more to personalize their story.",
    imageSrc: FormattingFeatures,
    alt: "Formatting features demo showcasing bold, italics, and other customization options, perfect for creating personalized gifts for grandparents - LifeScript.",
    imgTitle: "Formatting features demo for grandparents gifts",
  },
  {
    panel: "panel6",
    timer: 7600,
    heading: "landingPage.featureSection.accordion6.heading",
    description:
      "Automatically enhances their photos for high-quality printing by adjusting size, resolution, and more.",
    imageSrc: AutoPhoto,
    alt: "Auto photo improvement demo animation showing how uploaded images are enhanced and fitted, perfect for high-quality gifts for grandparents - LifeScript.",
    imgTitle:
      "Auto photo improvement for creating personalized gifts for grandparents",
  },
];

export const useOurBookCoverforGrandparentsGift = (t) => [
  {
    coverImage: bookCovers.cover1,
    alt: "Book cover showing an elderly couple on a swing, perfect for personalized gifts for grandparents - LifeScript.",
    title: "Grandparents on swing book cover for gifts for grandparents",
  },
  {
    coverImage: bookCovers.cover2,
    alt: "Full-picture life story book cover featuring a family, ideal for grandparents gifts - LifeScript.",
    title: "Full-picture family book cover for gifts for grandparents",
  },
  {
    coverImage: bookCovers.cover3,
    alt: "Book cover featuring an elderly couple celebrating grandma’s birthday, a thoughtful gift for grandparents - LifeScript",
    title: "Birthday celebration book cover as a gift for grandparents",
  },
  {
    coverImage: bookCovers.cover4,
    alt: "Book cover with a couple enjoying the sun in a forest, a heartwarming gift for grandparents - LifeScript.",
    title: "Grandparents enjoying nature book cover for grandparents gifts",
  },
  {
    coverImage: bookCovers.cover5,
    alt: "Memoir book cover with author’s photo, customizable for the best gift for grandparents - LifeScript.",
    title: "Customizable memoir book cover for grandparents gift",
  },
  {
    coverImage: bookCovers.cover6,
    alt: "Minimalistic autobiography book cover design, perfect for a personalized gift for grandparents - LifeScript.",
    title: "Minimalistic book cover for gifts for grandparents",
  },
];

// 60th-birthday-gifts-for-men
export const use60thGiftForMenSuggestions = (t) => {
  const imageData = {
    src: others.BirthdayGiftfor60thHeroImg,
    alt: "A daughter giving her father a thoughtful present, an ideal 60th birthday gift idea for men - LifeScript.",
    title: "Daughter giving a personalized 60th birthday gift to father",
  };
  const content = [
    {
      title: "Celebrate a lifetime of memories",
      subTitle:
        "Help him honor his achievements, whether they’re big milestones or quiet memories that shaped him, with a gift that captures his story for generations.",
    },
    {
      title: "Uncover untold stories",
      subTitle:
        "Give him the chance to share the moments he’s never spoken about—the stories that make up the missing pieces of his life’s puzzle.",
    },
    {
      title: "Strengthen family bonds",
      subTitle:
        "This is a way for him to share memories that deepen family ties and create lasting connections with loved ones. His stories connect generations",
    },
    {
      title: "Reflect on a life well-lived",
      subTitle:
        "60 years of experiences deserve to be celebrated. This gift offers him the chance to reflect on the moments that shaped him into the person he is today.",
    },
    {
      title: "Spark meaningful conversations",
      subTitle:
        "This birthday gift opens up conversations you’ve never had before, bringing out forgotten memories and strengthening your relationship along the way.",
    },
    {
      title: "Make him feel appreciated",
      subTitle:
        "Let him feel valued by showing you care about his life story. He’ll feel proud knowing his experiences are preserved in his very own personal autobiography.",
    },
    {
      title: "Leave a lasting legacy",
      subTitle:
        "This birthday gift is a way to ensure his grandchildren and future generations will know his life story and cherish the lessons he’s learned along the way.",
    },
  ];

  return { imageData, content };
};

export const use60thGiftForMenQA = (t) => [
  {
    qs: "What is included in each plan?",
    ans: "Each plan provides lifetime access to our platform, a beautifully printed full-color hardcover book, and free delivery.",
    panel: "panel1",
    isexpanded: false,
  },
  {
    qs: "Can I gift LifeScript to my father? How does it work?",
    ans: "Yes! All you need is their email and a date to send the gift. Once it’s delivered, you’ll receive a confirmation. It’s one of the easiest yet most meaningful 60th birthday gifts for men.",
    panel: "panel2",
    isexpanded: false,
  },
  {
    qs: "Is LifeScript a good last-minute gift for a 60th birthday?",
    ans: "Absolutely! Even in the last-minute, It’s a thoughtful and personalized birthday gift. If you purchase it the night before, the gift email will be delivered first thing the next day.",
    panel: "panel3",
    isexpanded: false,
  },
  {
    qs: "Are there any tutorials to help?",
    ans: "Yes! We provide step-by-step video guides to walk him through every part of the process, from creating to ordering the book. Our support team is also available via chat or email if they need assistance.",
    panel: "panel4",
    isexpanded: false,
  },
  {
    qs: "Can I order extra books?",
    ans: "Yes, you can order additional full-color hardcover books for $39 each. It’s an ideal way to share his life story with family and friends, making the gift even more memorable and thoughtful",
    panel: "panel5",
    isexpanded: false,
  },
  {
    qs: "How can I ensure his stories stay private?",
    ans: (
      <>
        We take{" "}
        <NextLink href="/privacy-policy" passHref>
          <span style={{ color: "#30422E", fontFamily: "Avenir8" }}>
            privacy.
          </span>
        </NextLink>{" "}
        very seriously. His stories are protected by advanced security measures
        and encryption, ensuring his memories remain private and secure.
      </>
    ),
    panel: "panel6",
    isexpanded: false,
  },
  {
    qs: "Can I set a reminder if I’m not ready to gift it now?",
    ans: "Of course! You can easily set a reminder, and we’ll let you know when it’s the perfect time to give one of the most thoughtful birthday gifts.",
    panel: "panel7",
    isexpanded: false,
  },
  {
    qs: "Do you offer international shipping? Is it free?",
    ans: "Yes, we offer free international shipping with tracking. No matter where he is, shipping is always included.",
    panel: "panel8",
    isexpanded: false,
  },
];

export const use60thGiftForMenTestimonials = (t) => [
  {
    name: "Samantha T.",
    details: (
      <>
        For my dad’s 60th birthday, I didn’t want just another typical gift.
        LifeScript turned out to be something special. He’s been reminiscing
        about his past, writing down stories that I’ve never heard before—it’s
        been eye-opening. Honestly,{" "}
        <span style={{ fontFamily: "Avenir8" }}>
          it’s sparked conversations we never had growing up,{" "}
        </span>
        and it’s brought us closer than I expected. He even said he looks
        forward to the questions, which I didn’t see coming!
      </>
    ),
  },
  {
    name: "Natalie B.",
    details: (
      <>
        I got my dad LifeScript for his birthday, and{" "}
        <span style={{ fontFamily: "Avenir8" }}>
          he’s been totally into it!{" "}
        </span>
        He’s not usually the type to sit down and write, but this has been
        different for him. Every now and then, he’ll drop a story I didn’t even
        know about, and it’s made our family dinners so much more fun. Can’t
        believe how well it went over!
      </>
    ),
  },
  {
    name: "Hannah G.",
    details: (
      <>
        I had no clue what to get my dad, but{" "}
        <span style={{ fontFamily: "Avenir8" }}>
          LifeScript turned out to be the perfect idea.{" "}
        </span>
        He’s been using it to write down all these little stories from his
        younger days, and honestly, it’s been great hearing about them. He even
        said it’s one of the best gifts he’s ever gotten! And trust me, he’s a
        tough one to shop for.
      </>
    ),
  },
  {
    name: "Ashley K.",
    details: (
      <>
        I wanted to give my dad something meaningful for his 60th birthday, not
        just a gadget or bottle of whiskey. LifeScript was perfect. He’s been
        diving into his past, writing about everything from his first job to his
        travel adventures. He’s so proud of the stories he’s putting together
        and seeing him this happy fills my heart. This was more than just a
        birthday gift—
        <span style={{ fontFamily: "Avenir8" }}>
          it’s been a whole experience for him.
        </span>
      </>
    ),
  },
  {
    name: "Julia R.",
    details: (
      <>
        Honestly, LifeScript was a gamble, but it paid off. My dad has always
        loved telling stories, but I didn’t think he’d actually sit down and
        write them out. Turns out, he’s really into it. It’s given him a chance
        to reflect on the cool moments in his life, and{" "}
        <span style={{ fontFamily: "Avenir8" }}>
          I’ve learned a ton about him that I never knew.
        </span>{" "}
        Best gift I’ve given him in years.
      </>
    ),
  },
  {
    name: "Tara M.",
    details: (
      <>
        LifeScript was{" "}
        <span style={{ fontFamily: "Avenir8" }}>hands down the best gift</span>I
        could’ve gotten for my dad’s 60th. He’s been loving it—writing down
        everything from his childhood to his career and travels. And it’s been
        fun for me, too, hearing all these stories I never knew. I didn’t expect
        it to have such an impact, but it’s been amazing for both of us
      </>
    ),
  },
];

export const use60thGiftForMenFeaturesGif = (t) => [
  {
    panel: "panel1",
    timer: 11000,
    heading: "landingPage.featureSection.accordion1.heading",
    description:
      "Transforms his answers into beautifully written chapters with a single click. No writing experience needed.",
    imageSrc: Narrative,
    alt: " Demo animation showing how LifeScript is used for personalized 60th birthday gifts for men.",
    imgTitle:
      "Demo animation showing LifeScript as a 60th birthday gift for men",
  },
  {
    panel: "panel2",
    timer: 6000,
    heading: "landingPage.featureSection.accordion2.heading",
    description:
      "Automatically edits and proofreads his text with real-time suggestions. Say goodbye to typos and errors.",
    imageSrc: AssistedEditing,
    alt: "Assisted editing demo showing spelling and grammar checks, ideal for 60th birthday gifts for men.",
    imgTitle: "Assisted editing demo for creating 60th birthday gifts for men",
  },
  {
    panel: "panel3",
    timer: 10700,
    heading: "landingPage.featureSection.accordion3.heading",
    description:
      "Captures his spoken words, turning them into written text if he prefers speaking over typing.",
    imageSrc: VoiceToText,
    alt: "Voice-to-text feature demo illustrating how recordings translate into text, perfect for personalized 60th birthday gifts for men.",
    imgTitle: "Voice-to-text demo for creating 60th birthday gifts for men",
  },
  {
    panel: "panel4",
    timer: 10700,
    heading: "landingPage.featureSection.accordion4.heading",
    description:
      "Visually represents his ancestry—from parents to distant relatives—creating a meaningful family tree at the end of his book.",
    imageSrc: FamilyTree,
    alt: "Family tree demo illustrating how families visualize across generations, perfect for unique 60th birthday gift ideas for men.",
    imgTitle: "Family tree demo for creating 60th birthday gifts for men",
  },
  {
    panel: "panel5",
    timer: 5000,
    heading: "landingPage.featureSection.accordion5.heading",
    description:
      "Allows him to customize the text, font, style, size, color, layout, and more to personalize his life story.",
    imageSrc: FormattingFeatures,
    alt: "Demo showcasing formatting options like bold and italics, ideal for creating personalized 60th birthday gifts for men.",
    imgTitle: "Formatting features demo for men’s 60th birthday gift books",
  },
  {
    panel: "panel6",
    timer: 7600,
    heading: "landingPage.featureSection.accordion6.heading",
    description:
      "Automatically enhances his photos for high-quality printing by adjusting size, resolution, and more.",
    imageSrc: AutoPhoto,
    alt: "Auto photo improvement demo showing how images are enhanced for high-quality 60th birthday gifts for men.",
    imgTitle:
      "Auto photo improvement for creating personalized 60th birthday gifts for men",
  },
];

export const use60thGiftForMenOurBookCover = (t) => [
  {
    coverImage: bookCovers.cover1,
    alt: "Book cover showing an elderly couple, perfect for personalized 60th birthday gifts for men.",
    title:
      "Grandparents enjoying a personalized book - 60th birthday gift for men",
  },
  {
    coverImage: bookCovers.cover2,
    alt: "Full-picture life story book cover featuring a family, perfect for 60th birthday gift ideas for men.",
    title: "Full-picture family book cover for 60th birthday gifts for men",
  },
  {
    coverImage: bookCovers.cover3,
    alt: "Book cover featuring an elderly couple celebrating, a unique 60th birthday gift idea for men.",
    title: "Birthday celebration book cover for 60th birthday gifts for men",
  },
  {
    coverImage: bookCovers.cover4,
    alt: " A couple enjoying the outdoors, symbolizing a heartwarming 60th birthday gift for men.",
    title: "Grandparents enjoying nature - 60th birthday gifts for men",
  },
  {
    coverImage: bookCovers.cover5,
    alt: "Memoir book cover with author’s photo, customizable for the best 60th birthday gifts for men.",
    title: "Customizable memoir book cover for 60th birthday gifts for men",
  },
  {
    coverImage: bookCovers.cover6,
    alt: "Minimalistic autobiography book cover, ideal for a personalized 60th birthday gift for men.",
    title: "Minimalistic book cover for 60th birthday gifts for men",
  },
];

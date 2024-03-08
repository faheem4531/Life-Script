'use client'

import { Box, Typography } from "@mui/material";
import Footer from "@/pages/website/__webComponents/footer/Footer";
import ContactFooter from "@/pages/website/__webComponents/footer/ContactFooter";
import NavBar from "@/pages/website/__webComponents/navBar/NavBar";
import GotQuestions from "@/pages/website/__webComponents/questions/GotQuestions";
import styles from "./Faq.module.css"
import Image from "next/image";

import Points from "@/__webAssets/pngs/qs-points.png"
import Logo from "@/__webAssets/svgs/logo-footer.svg"
import Pricing from "@/pages/website/__webComponents/pricing/Pricing";

const Faqs = () => {

  const QAs = [
    {
      question: "1. What is included in each subscription?",
      answer: "Full year of access to our platform, full-color hardcover printed book and free delivery.",
    },
    {
      question: "2. Can I purchase extra books?",
      answer: "Yes, additional full-color hardcover books are available for 39$ each during or after your subscription period.",
    }, {
      question: "3. Can I gift a subscription and how does that work?",
      answer: "Absolutely, gifting a subscription is an easy, thoughtful and one of the best last-minute presents. You simply provide the email of the fortunate recipient and choose the date when you’d like the gift card to be sent. Once your purchase is complete, you’ll receive a confirmation email with a link to print out a beautiful gift card. You have the flexibility to email it right away, schedule a time when you want us to send it or print it out for a more personal touch.",
    },
    {
      question: "4. How long will it take?",
      answer: "Your book, your pace! Some people finish their book in 2-3 sittings while others prefer to enjoy the process and continually polish their answers for months. However you choose, enjoy revisiting your unique memories!",
    },
    {
      question: "5. Is international shipping available and how much does it cost?",
      answer: "We ship internationally and provide delivery tracking. Oh, and it’s free.",
    },
    {
      question: "6. Is Lifescript available in other languages?",
      answer: "Yes, it is also available in Spanish, and we are excited to expand to more languages soon. We believe that everyones deserves to have their story told regardless of their language.",
    },
    {
      question: "7. What is your refund policy?",
      answer: "If you are not entirely satisfied with your Lifescript experience, we offer an easy, no-questions-asked refund within 30 days of purchase, as long as no books have been printed. Your happiness is our highest priority.",
    },
    {
      question: "8. What customization options are available for my book?",
      answer: "The exterior consists of durable, premium A5 size cover (148mm x 210mm or 5.83in x 8.27in) with professional, customizable designs. On the inside, enjoy premium 80p paper and tailor the text to your preference - font, size, bold, italics, underline and more.",
    },
    {
      question: "9. Can I add photos?",
      answer: "Yes, we encourage adding as many photos as you like. You don’t have to worry about photo quality as we automatically upscale and fit your photos within printing requirements!",
    },
    {
      question: "10. How can I ensure my book and information remain private?",
      answer: "Your privacy is our top priority. We use the latest security technologies to protect your personal stories and information.",
    },
    {
      question: "11. What happens when my subscription ends?",
      answer: "You will receive a reminder a month before the subscription ends. You will have a chance to complete your stories and order your book. If needed, we offer an additional month for free or to renew the subscription for another year.",
    },
    {
      question: "12. Is there a word or page limit to my stories?",
      answer: "There is a 600 page limit but in practice books are around 100-150 pages.",
    },
    {
      question: "13. Can I specify when the gift email is sent to my recipient?",
      answer: "There is a 600 page liYes, you will be able to choose the date that the gift email is sent when you purchase the gift subscription. Gift emails are sent in the early morning on the chosen date.mit but in practice books are around 100-150 pages.",
    },
    {
      question: "14. Can I add or edit questions?",
      answer: "You can do both whenever you want until you order the physical book.",
    },
    {
      question: "15. How long does book delivery take?",
      answer: "It usually takes 10-15 business days.",
    },
    {
      question: "16. Can I customize the frequency of questions I receive?",
      answer: "Yes, you have full control over how often you receive questions.",
    },
  ]

  return (
    <Box sx={{ padding: "200px 260px 150px 150px" }}>
      <Box sx={{ borderBottom: "1px solid #E1683B", paddingBottom: "35px" }}>
        <Typography sx={{ fontSize: "60px", fontWeight: 500, fontFamily: "Besley !important" }}>FAQs</Typography>
        <Typography sx={{ fontSize: "16px", fontWeight: 500 }}>Frequently Asked Questions.</Typography>
        <Typography sx={{ fontSize: "16px", fontWeight: 500 }}>Here are some common questions about Lifescript.</Typography>
      </Box>
      <Box sx={{ margin: "120px 0 0 0", display: "flex", position: "relative" }}>
        <Image src={Points} alt="img" className={styles.qsPoints} />

        <Box>
          {QAs.map((item, index) => <QuestionNo
            key={index}
            qs={item.question}
            ans={item.answer}
          />)}
        </Box>
      </Box>
    </Box>
  )
}

export default Faqs;

function QuestionNo({ qs, ans }) {
  return (
    <Box sx={{ margin: " 0 0 70px 60px", maxWidth: "800px" }}>
      <Typography sx={{ fontSize: "24px", fontWeight: 500, fontFamily: "Besley !important" }}>{qs}</Typography>
      <Typography sx={{ fontSize: "16px", padding: "20px 0 0 30px" }}>{ans}</Typography>
    </Box>
  )
}
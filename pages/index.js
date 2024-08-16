import Head from "next/head";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import ChatbotIntro from "@/components/ChatBotIntro";

export default function Home() {
  return (
    <>
      <Head>
        <title>VitalityAI - A new approach to medical technology</title>
        <meta
          name="description"
          content="VitalityAI - Medical technology for the future"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <HeroSection />
      <ChatbotIntro />
    </>
  );
}

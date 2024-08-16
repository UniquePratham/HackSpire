import Head from "next/head";
import dynamic from "next/dynamic";
const Navbar = dynamic(() => import("@/components/Navbar"), {
  ssr: false,
});
const HeroSection = dynamic(() => import("@/components/HeroSection"), {
  ssr: false,
});
const ChatbotIntro = dynamic(() => import("@/components/ChatBotIntro"), {
  ssr: false,
});

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

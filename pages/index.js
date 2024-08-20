import Head from "next/head";
import dynamic from "next/dynamic";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
const Navbar = dynamic(() => import("@/components/Navbar"), {
  ssr: false,
});
const HeroSection = dynamic(() => import("@/components/HeroSection"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FAQ />
      <Footer />
    </>
  );
}

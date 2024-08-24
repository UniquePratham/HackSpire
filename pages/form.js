import Head from "next/head";
import dynamic from "next/dynamic";
import Footer from "@/components/Footer";
const Navbar = dynamic(() => import("@/components/Navbar"), {
  ssr: false,
});
const Form = dynamic(() => import("@/components/Form"), {
  ssr: false,
});

export default function Form() {
  return (
    <>
      <Navbar />
      <Form />
      <Footer />
    </>
  );
}

import { ChakraProvider } from "@chakra-ui/react";
import Head from "next/head";
export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Head>
        <title>MediMap - A new approach to medical technology</title>
        <meta
          name="description"
          content="MediMap - Medical technology for the future"
        />
        <link rel="icon" href="/icon.png" />
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

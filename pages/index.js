import Head from "next/head";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Gratis App</title>
        <meta name="description" content="Gratis Frontend Task" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  );
}

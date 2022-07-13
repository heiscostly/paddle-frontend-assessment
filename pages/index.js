import Head from "next/head";
import Counter from "../components/Counter/Counter";
import Forms from "../components/EmailForms/Forms";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Gratis App</title>
        <meta name="description" content="Gratis Frontend Task" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Counter />
        <Forms />
      </main>
    </div>
  );
}

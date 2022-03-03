import Head from "next/head";
import Image from "next/image";
import HomeLanding from "../components/Home/HomeLanding";
import MainLayout from "../components/Layout/MainLayout";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Infoware Ecommerce</title>
        <meta name="description" content="this is a ecommerce site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout>
        <section className=" pt-24 lg:pt-20  lg:max-w-screen-xl xl:mx-auto  xl:max-w-screen-2xl">
          <HomeLanding />
        </section>
      </MainLayout>
    </div>
  );
}

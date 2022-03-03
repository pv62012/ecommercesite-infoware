import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import HomeLanding from "../components/Home/HomeLanding";
import HomeProductList from "../components/Home/HomeProductList";
import MainLayout from "../components/Layout/MainLayout";
import { getAllProducts } from "../urlConstants/productUrlConstants";

export default function Home({ productData }) {
  return (
    <div>
      <Head>
        <title>Infoware Ecommerce</title>
        <meta name="description" content="this is a ecommerce site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout>
        <section className=" pt-16 lg:pt-20  lg:max-w-screen-xl xl:mx-auto  xl:max-w-screen-2xl">
          <HomeLanding />
        </section>
        <section className="  px-5 mt-20 md:px-10 lg:mt-36 lg:px-28 lg:max-w-screen-xl xl:mx-auto  xl:max-w-screen-2xl">
          <HomeProductList productData={productData} />
        </section>
      </MainLayout>
    </div>
  );
}

export async function getStaticProps({ req, res }) {
  const { data, error } = await axios.get(getAllProducts);

  if (data) {
    return {
      props: {
        productData: JSON.stringify(data),
      },
    };
  } else {
    console.log(error);
    return {
      props: {
        productData: null,
      },
    };
  }
}

import { Rating } from "@mui/material";
import axios from "axios";

import Head from "next/head";
import Image from "next/image";
import React from "react";
import CurrencyFormatter from "../../components/helper/CurrencyFormatter";
import MainLayout from "../../components/Layout/MainLayout";
import {
  ProductAddButton,
  BuyNowButton,
} from "../../components/Product/styles/ProductDetailsStyles";
import {
  getAllProducts,
  getSingleProduct,
} from "../../urlConstants/productUrlConstants";

const product_details = ({ productData }) => {
  const details = JSON.parse(productData);
  return (
    <div>
      <Head>
        <title>{details?.title}</title>
      </Head>
      <MainLayout>
        <main className=" md:flex px-5 mt-20 md:px-10 lg:mt-36 lg:px-28 lg:max-w-screen-xl xl:mx-auto  xl:max-w-screen-2xl">
          <section className=" md:flex-[40%] lg:flex-[35%]">
            <div className="relative h-96 md:h-[500px]">
              <Image
                layout="fill"
                className="object-contain"
                src={details?.image}
                alt={details?.title}
              />
            </div>
            <div className="flex justify-between">
              <ProductAddButton>Add to cart</ProductAddButton>
              <ProductAddButton>Buy Now</ProductAddButton>
            </div>
          </section>
          <section className="mt-10 text-[#595959] md:pl-10 md:flex-[60%]">
            <div className="text-[#242424]">
              <h1 className="text-xl font-semibold tracking-wider lg:text-3xl">
                {details?.title}
              </h1>
            </div>
            <div className="mt-5 flex justify-between md:justify-start ">
              <Rating
                name="read-only"
                value={details?.rating?.rate}
                precision={0.5}
                readOnly
              />{" "}
              <p className="ml-5">{details?.rating?.count} Ratings</p>
            </div>
            <div className="text-[#242424] text-xl my-5 font-semibold lg:text-2xl">
              <CurrencyFormatter price={details?.price} />
            </div>
            <hr />
            <div className="mt-5">
              <h3 className="text-[#242424] font-semibold lg:text-xl">
                Description
              </h3>
              <p className="text-base lg:text-lg">{details?.description}</p>
            </div>
            <div className="flex justify-between md:hidden">
              <ProductAddButton>Add to cart</ProductAddButton>
              <ProductAddButton>Buy Now</ProductAddButton>
            </div>
          </section>
        </main>
      </MainLayout>
    </div>
  );
};

export default product_details;

export async function getStaticPaths() {
  const { data, error } = await axios.get(getAllProducts);

  // Get the paths we want to pre-render based on posts
  const paths = data.map((data) => ({
    params: { id: data.id.toString() },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: blocking } will server-render pages
  // on-demand if the path doesn't exist.
  return { paths, fallback: false };
}

export async function getStaticProps(ctx) {
  const id = ctx.params.id;
  const { data, error } = await axios.get(getSingleProduct(id));

  if (data) {
    return {
      props: {
        productData: JSON.stringify(data),
      },
      revalidate: 20,
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

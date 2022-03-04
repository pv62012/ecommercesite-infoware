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

import { motion } from "framer-motion";

let easing = [0.6, -0.05, 0.01, 0.99];

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const fadeInUp = {
  y: 0,
  opacity: 1,
  transition: {
    duration: 0.6,
    ease: easing,
  },
};

const product_details = ({ productData }) => {
  const details = JSON.parse(productData);
  return (
    <motion.div initial="initial" animate="animate" exit={{ opacity: 0 }}>
      <Head>
        <title>{details?.title}</title>
      </Head>
      <MainLayout>
        <main className=" md:flex px-5 mt-20 md:px-10 lg:mt-36 lg:px-28 lg:max-w-screen-xl xl:mx-auto  xl:max-w-screen-2xl">
          <section className=" overflow-hidden md:flex-[40%] lg:flex-[35%]">
            <motion.div
              whileInView={{ x: 0, opacity: 1 }}
              initial={{ x: 200, opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.2 }}
              className="relative h-96 md:h-[500px]"
            >
              <Image
                layout="fill"
                className="object-contain"
                src={details?.image}
                alt={details?.title}
              />
            </motion.div>
            <motion.div
              initial={{
                y: 60,
                opacity: 0,
                transition: { duration: 0.6, ease: easing },
              }}
              whileInView={fadeInUp}
              className="flex justify-between"
            >
              <ProductAddButton>Add to cart</ProductAddButton>
              <ProductAddButton>Buy Now</ProductAddButton>
            </motion.div>
          </section>
          <motion.section
            whileInView={stagger}
            className="mt-10 text-[#595959] md:pl-10 md:flex-[60%]"
          >
            <motion.div
              initial={{
                y: 60,
                opacity: 0,
                transition: { duration: 0.6, ease: easing },
              }}
              whileInView={fadeInUp}
              className="text-[#242424]"
            >
              <h1 className="text-xl font-semibold tracking-wider lg:text-3xl">
                {details?.title}
              </h1>
            </motion.div>
            <motion.div
              initial={{
                y: 60,
                opacity: 0,
                transition: { duration: 0.6, ease: easing },
              }}
              whileInView={fadeInUp}
              className="mt-5 flex justify-between md:justify-start "
            >
              <Rating
                name="read-only"
                value={details?.rating?.rate}
                precision={0.5}
                readOnly
              />{" "}
              <p className="ml-5">{details?.rating?.count} Ratings</p>
            </motion.div>
            <motion.div
              initial={{
                y: 60,
                opacity: 0,
                transition: { duration: 0.6, ease: easing },
              }}
              whileInView={fadeInUp}
              className="text-[#242424] text-xl my-5 font-semibold lg:text-2xl"
            >
              <CurrencyFormatter price={details?.price} />
            </motion.div>
            <hr />
            <motion.div
              initial={{
                y: 60,
                opacity: 0,
                transition: { duration: 0.6, ease: easing },
              }}
              whileInView={fadeInUp}
              className="mt-5"
            >
              <h3 className="text-[#242424] font-semibold lg:text-xl">
                Description
              </h3>
              <p className="text-base lg:text-lg">{details?.description}</p>
            </motion.div>
            <motion.div
              initial={{
                y: 60,
                opacity: 0,
                transition: { duration: 0.6, ease: easing },
              }}
              whileInView={fadeInUp}
              className="flex justify-between md:hidden"
            >
              <ProductAddButton>Add to cart</ProductAddButton>
              <ProductAddButton>Buy Now</ProductAddButton>
            </motion.div>
          </motion.section>
        </main>
      </MainLayout>
    </motion.div>
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

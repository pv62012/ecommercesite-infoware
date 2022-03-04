import Image from "next/image";
import React from "react";
import Rating from "@mui/material/Rating";
import CurrencyFormatter from "../helper/CurrencyFormatter";
import Link from "next/link";
import { useInView } from "react-intersection-observer";

import { motion } from "framer-motion";

let easing = [0.6, -0.05, 0.01, 0.99];

const ProductCard = ({ id, image, title, price, rating }) => {
  const [titleRef, titleInView] = useInView({
    triggerOnce: true,
  });

  // const fadeInUp = {
  //   animate:
  // };
  return (
    <Link href={`/product_details/${id}`}>
      <motion.div
        ref={titleRef}
        initial={{
          y: 60,
          opacity: 0,
          transition: { duration: 0.6, ease: easing },
        }}
        animate={
          titleInView && {
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.6,
              ease: easing,
            },
          }
        }
        transition={{ duration: 0.5 }}
        className=" cursor-pointer shadow-md rounded-lg max-w-xs"
      >
        <section className="relative h-72  rounded-t-lg">
          <Image
            layout="fill"
            className="object-contain rounded-t-lg"
            src={image}
            alt={title}
          />
        </section>
        <section className=" px-4 py-5 text-[#242424] font-medium">
          <h3>{title}</h3>
          <div className="flex mt-3 justify-between text-[#595959]">
            <p>
              <CurrencyFormatter price={price} />
            </p>
            <Rating
              name="read-only"
              value={rating?.rate}
              precision={0.5}
              readOnly
            />
          </div>
        </section>
      </motion.div>
    </Link>
  );
};

export default ProductCard;

import Image from "next/image";
import React from "react";
import Rating from "@mui/material/Rating";
import CurrencyFormatter from "../helper/CurrencyFormatter";
import Link from "next/link";

const ProductCard = ({ id, image, title, price, rating }) => {
  return (
    <Link href={`/product_details/${id}`}>
      <div className=" cursor-pointer shadow-md rounded-lg max-w-xs">
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
      </div>
    </Link>
  );
};

export default ProductCard;

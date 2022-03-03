import React from "react";
import ProductCard from "../Product/ProductCard";

const HomeProductList = ({ productData }) => {
  return (
    <div>
      <section>
        <h2 className=" uppercase text-xl font-medium lg:font-semibold lg:text-2xl">
          Latest Product
        </h2>
      </section>
      <section className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-y-10 sm:gap-y-28 sm:gap-x-3 md:grid-cols-3 lg:gap-x-5  lg:grid-cols-4">
        {productData &&
          JSON.parse(productData)?.map(
            ({ id, title, price, image, rating }) => (
              <div key={id} className="">
                <ProductCard
                  image={image}
                  title={title}
                  price={price}
                  rating={rating}
                  id={id}
                />
              </div>
            )
          )}
      </section>
    </div>
  );
};

export default HomeProductList;

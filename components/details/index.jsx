import React, { useState } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import Product from "./ImageSlider";
import TitleDetails from "./TitleDetails";
import CarouselDetails from "./CarouselDetails";

const DetailsPage = ({ product }) => {
  const hotels = product.subProducts;
  console.log("hotelsCarousel",hotels)

  return (
    <div className=" w-full">
      <div className="">
        <Product product={product} rowID1="1" />
        {hotels.map((h, index) => {
          return (
            <div key={index}>
              <CarouselDetails h={h} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DetailsPage;

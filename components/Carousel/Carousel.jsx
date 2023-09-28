import React, { useState } from "react";

import CarouselItem from "./CarouselItem";
import CarouselIndicator from "./CarouselIndicator";

import { IoIosArrowBack } from "react-icons/io";
import { Box, Rating } from "@mui/material";

export default function Carousel({ width, height, items, product }) {
  const prod = product.reviews;
  const [activeIndex, setActiveIndex] = useState(0);

  const reviewName = prod.map((r) => r.reviewBy);
  console.log("reviewName", reviewName);

  function handleNextItemBtn() {
    setActiveIndex((prev) => {
      return prev + 1 < prod.length ? prev + 1 : prev;
    });
  }

  function handlePrevItemBtn() {
    setActiveIndex((prev) => {
      return prev - 1 >= 0 ? prev - 1 : prev;
    });
  }

  return (
    <div className="carousel-container">
      {activeIndex > 0 && (
        <button
          className="carousel-btn-switch-card-left carousel-btn-switch-card"
          onClick={handlePrevItemBtn}
        >
          <IoIosArrowBack />
        </button>
      )}
      {product.reviews?.map((item, index) => (
        <CarouselItem key={index} index={index} activeIndex={activeIndex}>
          <div className=" shadow-xl bg-slate-100 mt-4 p-1">
            {/* {
            product.review.map((r, index) =>(
              r.fit
            ))
          } */}
            {item.images.length === 0 && (
              <div className=" flex place-content-center">
                <img
                  src="https://th.bing.com/th/id/OIP.SxuyKL-Ca-_bXp1TC4c4-gHaF3?pid=ImgDet&rs=1"
                  alt=""
                  className=" w-[69px] h-16 rounded-full "
                />
              </div>
            )}

            {item.images.map((imgs, i) => (
              <div className=" place-content-center justify-center flex">
                {imgs.url && (
                  <img
                    src={imgs.url}
                    alt=""
                    className=" w-16 h-16 rounded-full"
                  />
                )}
              </div>
            ))}
            <div className=" w-full place-content-center flex p-2 ">
              <h2 className=" bg-gray-400 w-20 rounded-lg">
                {item.reviewBy.name.slice(0, 2)}***
                {name.slice(name.length - 1, name.length)}
              </h2>
            </div>
            <span className=" text-black">
              {item.review.length > 20
                ? `${item.review.substring(0, 20)}...`
                : item.review}
            </span>
            <div className=" p-2">
              <Box
                sx={{
                  "& > legend": { mt: 2 },
                  display: "flex",
                  marginLeft: "",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Rating
                  name="half-rating-read"
                  defaultValue={2.5}
                  precision={0.5}
                  readOnly
                  value={item.rating}
                  sx={{ alignItems: "center" }}
                />
              </Box>
            </div>
          </div>
        </CarouselItem>
      ))}

      {activeIndex < prod.length - 1 && (
        <button
          className="carousel-btn-switch-card-right carousel-btn-switch-card"
          onClick={handleNextItemBtn}
        >
          <IoIosArrowBack
            style={{
              transform: "rotate(180deg)",
            }}
          />
        </button>
      )}

      <CarouselIndicator
        activeIndex={activeIndex}
        length={prod.length}
        onSetActiveIndex={(activeIndex) => {
          setActiveIndex(activeIndex);
        }}
      />
    </div>
  );
}

import React, { Fragment, useState } from "react";
import closeIcon from "../assets/icon-close-white.svg";
import prevIcon from "../assets/icon-previous.svg";
import nextIcon from "../assets/icon-next.svg";
import { data } from "../constants/images.js";
import { AiOutlineClose } from "react-icons/ai";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import Link from "next/link";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { hotelData } from "@/data/Hotel";
import BasicRating from "./RatingHotel";
import { Box, Rating, Typography } from "@mui/material";
import { BiMapPin } from "react-icons/bi";
import SlideRow from "./SlideRow";
import Facilities from "./Facilities";
import ListHotels from "./ListHotels";
import { useRouter } from "next/router";

const Product = ({ rowID1, rowID2,productReview }) => {
  // console.log("produk details img",product)
  const router = useRouter()
  
  // const prods = {...product}
  // console.log("prods",prods)

  // const subProds = product.subProducts;
  // console.log("subProds",subProds)

  // const detailsimg = subProds.map((imgs)=>(imgs.images))
  // console.log("detailsimg",detailsimg)

  // const imgsdetails = detailsimg.map((i)=>(i.url))
  // console.log("imgsdetails",imgsdetails);
  
  // let producttest = product.toArray;

  // console.log("hotelsData",hotelData)


  const hotels = [...hotelData];
  console.log("hotels", hotels);
  const maping = hotels.map((p) => p.img);
  const produk = [...maping[0]];
  console.log("produk: ", produk);
  const ratings = hotels.map((r) => r.reviews);
  const bintang = ratings[0];
  console.log("bintang: ", bintang.length);
  const totalRating = bintang.length;
  console.log("rating: ", ratings);
  const review = bintang.map((v) => v.rating);
  // const bintang = [...review[0]];
  // console.log("bintang: ", bintang);
  console.log("review: ", review);
  const sum = review.reduce((partialSum, a) => partialSum + a, 0);
  const divider = sum / totalRating;
  console.log("divider: ", divider);
  // console.log(sum); // 6
  // const products = [...data];
  // console.log("products", products);
  const [value, setValue] = useState(0);
  const [modal, setModal] = useState(true);
  const largeImage = produk[value].largeImg;

  console.log("largeImage: ", largeImage);

  const num = [1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5];
  console.log("num: ", num);
  const [fitur, setFitur] = useState(num);
  console.log(" fitur: ", fitur);

  const toggleModal = () => {
    setModal((prev) => !prev);
  };

  const goBack = () => {
    value === 0 ? setValue(0) : setValue((prev) => prev - 1);
  };

  const goForward = () => {
    value === produk.length - 1
      ? setValue(produk.length - 1)
      : setValue((prev) => prev + 1);
  };
  const sliderLeft = () => {
    var slider = document.getElementById("slider" + rowID1);
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const sliderRight = () => {
    var slider = document.getElementById("slider" + rowID1);
    slider.scrollLeft = slider.scrollLeft + 500;
  };
  const swiperLeft = () => {
    var slider = document.getElementById("slider" + rowID2);
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const swiperRight = () => {
    var slider = document.getElementById("slider" + rowID2);
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <main id="home" className=" py-24">
      <div className="main-wrapper flex flex-col md:flex-row  md:py-[50px] relative w-full place-content-center">
        <div className="image md:basis-1/2 md:flex md:flex-col md:justify-between">
          <div className="">
            {hotels.map((hotel, i) => (
              <div className="">
                <div>{hotel.name}</div>
                <div className=" flex flex-row gap-2 mb-2">
                  <div className=" absolute  bg-blue-500 p-1 rounded-lg text-center text-sm text-white">
                    {hotel.model}
                  </div>
                  <Box
                    sx={{
                      "& > legend": { mt: 2 },
                      display: "flex",
                      marginLeft: "40px",
                    }}
                  >
                    <Rating
                      name="half-rating-read"
                      defaultValue={2.5}
                      precision={0.5}
                      readOnly
                      value={divider}
                      sx={{ alignItems: "center" }}
                    />
                  </Box>
                  <div
                    className={`${
                      divider >= fitur[0] && divider <= fitur[4]
                        ? "bg-red-600"
                        : divider >= fitur[4] && divider <= fitur[6]
                        ? "bg-yellow-600"
                        : divider >= fitur[6] && divider >= fitur[8]
                        ? "bg-green-600"
                        : ""
                    } rounded-xl p-1 text-white`}
                  >
                    {divider >= fitur[0] && divider <= fitur[4] && "Bad"}
                    {divider >= fitur[4] && divider <= fitur[6] && "Good"}
                    {divider >= fitur[6] && divider >= fitur[8] && "Excellent"}
                  </div>
                </div>
                <div className=" flex text-sm gap-2 text-gray-500">
                  <span>
                    <BiMapPin />
                  </span>
                  {hotel.address}
                </div>
                <div>
                  <SlideRow product={productReview} />
                </div>
                <div>
                  <Facilities />
                </div>
              </div>
            ))}
          </div>
          <div className="hidden md:block large-image">
            <img
              onClick={toggleModal}
              className="object-cover cursor-pointer rounded-xl w-full h-[400px]"
              src={largeImage}
              alt="snekers-photo"
            />
          </div>
          <div className="md:hidden large-image">
            <img
              onClick={goBack}
              className="bg-white rounded-full p-4 absolute top-[15%] left-6 cursor-pointer"
              src={prevIcon}
              alt="go-back"
            />
            <img
              className="w-[100%] h-[300px] object-cover"
              src={largeImage}
              alt="snekers-photo"
            />
            <img
              onClick={goForward}
              className="bg-white rounded-full p-4 absolute top-[15%] left-[82%] cursor-pointer"
              src={nextIcon}
              alt="go-forward"
            />
          </div>
          <div className="relative flex items-center group w-full place-content-center ">
            <MdChevronLeft
              onClick={sliderLeft}
              className="bg-white left-0 rounded-full relative opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block "
              size={40}
            />
            <div
              id={"slider" + rowID1}
              className="w-[400px] h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
            >
              {data?.map((item, idx) => (
                <div
                  className=" inline-block cursor-pointer relative p-2"
                  key={idx}
                >
                  <img
                    className=" w-[200px] h-36 block"
                    src={item?.smallImg}
                    // alt={item.name}
                    onClick={() => setValue(idx)}
                  />
                </div>
              ))}
            </div>
            <MdChevronRight
              onClick={sliderRight}
              className="bg-white right-0 rounded-full relative opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
              size={40}
            />
          </div>
        </div>

        <div
          className={`${
            modal ? "hidden" : "hidden md:block"
          } absolute -top-[20%] right-0 -bottom-[20%] left-0 bg-lightBlack`}
        >
          <div
            className={
              "basis-1/2 flex flex-col justify-between absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]"
            }
          >
            <div className="large-image">
              <img
                className="w-[900px] h-[600px] rounded-xl cursor-pointer"
                src={largeImage}
                alt="snekers-photo"
              />
              <img
                onClick={toggleModal}
                className="w-[30px] h-[30px] absolute -top-8 left-[95%] transition-all cursor-pointer hover:scale-125 rounded-full"
                src="https://th.bing.com/th/id/OIP.FRK0SH0pLfUY_JOQa3xZQwHaHZ?pid=ImgDet&rs=1"
                alt="close-icon"
              />
              <span
                onClick={goBack}
                className="bg-white p-4 rounded-full absolute top-[36%] -translate-x-[20px] cursor-pointer transition-all hover:scale-150 "
              >
                <MdChevronLeft className=" h-5 w-5" />
              </span>
              <span
                onClick={goForward}
                className="bg-white p-4 rounded-full absolute top-[36%] left-[95%] cursor-pointer transition-all hover:scale-150"
              >
                <MdChevronRight className=" h-5 w-5" />
              </span>
            </div>
            <div className="relative flex items-center group w-full place-content-center ">
              <MdChevronLeft
                onClick={swiperLeft}
                className="bg-white left-0 rounded-full relative opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block "
                size={40}
              />
              <div
                id={"slider" + rowID2}
                className="w-[400px] h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
              >
                {data?.map((item, idx) => (
                  <div
                    className=" inline-block cursor-pointer relative p-2"
                    key={idx}
                  >
                    <img
                      className=" w-[200px] h-36 block"
                      src={item?.smallImg}
                      // alt={item.name}
                      onClick={() => setValue(idx)}
                    />
                  </div>
                ))}
              </div>
              <MdChevronRight
                onClick={swiperRight}
                className="bg-white right-0 rounded-full relative opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
                size={40}
              />
            </div>
          </div>
        </div>
      </div>
            {/* <ListHotels product={product}/> */}
            
      {/* {hotels.map((hotel, i) => (
        <Fragment key={i}>
          <div>
          </div>
        </Fragment>
      ))} */}
      {/* <span>hello</span> */}
    </main>
  );
};

export default Product;

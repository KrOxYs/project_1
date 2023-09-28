import React, { Fragment, useState } from "react";
import prevIcon from "../assets/icon-previous.svg";
import nextIcon from "../assets/icon-next.svg";
import { data } from "../constants/images.js";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { AiOutlinePlus } from "react-icons/ai";
import Example from "./ImgDialog";
import LoadMore from "./LoadMore";

const CarouselDetails = ({ rowID1, rowID2, product, h }) => {
  // const imgs = h.map((h)=>(h.url))
  // console.log("imgs: ", imgs)

  const [value, setValue] = useState(0);
  const [modal, setModal] = useState(true);

  const testImg = h.images;
  console.log("testImg", testImg);
  const imgCar = testImg.map((img) => img.url);
  console.log("imgCar", imgCar);

  const largeImage = testImg[value].url;
  console.log("largeImage", largeImage);

  const toggleModal = () => {
    setModal((prev) => !prev);
  };

  const goBack = () => {
    value === 0 ? setValue(0) : setValue((prev) => prev - 1);
  };

  const goForward = () => {
    value === testImg.length - 1
      ? setValue(testImg.length - 1)
      : setValue((prev) => prev + 1);
  };

  return (
    <div className=" w-[200px]">
      <div className="md:basis-1/2 md:flex md:flex-col">
        <div className=" object-cover h-full ">
          <Example h={h} largeImage={largeImage} />
        </div>
        {/* <div className="md:hidden large-image">
          <img
            onClick={goBack}
            className="bg-white rounded-full p-4 absolute top-[15%] left-6 cursor-pointer"
            src={prevIcon}
            alt="go-back"
          />
          <img
            className="w-[100%] h-[100px] object-cover"
            src={largeImage}
            alt="snekers-photo"
          />
          <img
            onClick={goForward}
            className="bg-white rounded-full p-4 absolute top-[15%] left-[82%] cursor-pointer"
            src={nextIcon}
            alt="go-forward"
          />
        </div> */}
      </div>
      {/* <div
        className={`${
          modal ? "hidden" : "hidden md:block"
        } absolute -top-[20%] right-0 -bottom-[20%] left-0 bg-lightBlack`}
      >
        <div
          className={
            "basis-1/2 flex  absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]"
          }
        >
          <div className="large-image">
            <img
              className="w-[1000px] h-[600px] rounded-xl cursor-pointer"
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
          <div>
            {testImg.map((item, idx) => (
              <div
                className=" inline-block w-[100px] rounded-sm cursor-pointer relative "
                key={idx}
              >
                <img
                  className=" w-[100px] h-36 block"
                  src={item?.url}
                  // alt={item.name}
                  onClick={() => setValue(idx)}
                />
              </div>
            ))}
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default CarouselDetails;

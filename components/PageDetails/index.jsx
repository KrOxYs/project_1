import Link from "next/link";
import { useRouter } from "next/router";
import React, { Fragment } from "react";
import DetailsImg from "./DetailsImg";
import CarouselDetails from "../details/CarouselDetails";
import { TbUsers } from "react-icons/tb";
import { IoBedOutline } from "react-icons/io5";
import { MdNoFood, MdOutlineFreeCancellation } from "react-icons/md";
import { BiWifi } from "react-icons/bi";
import { GrScheduleNew } from "react-icons/gr";
import TestDialog from "./TestDialog";

export default function PageDetails({ product }) {
  const router = useRouter();
  const hotelsPage = product.subProducts;
  console.log("hotelsPage1", hotelsPage);

  return (
    <div id="skills" className=" w-full py-28 flex place-content-center ">
      <div className=" w-[900px] space-y-4 flex flex-col place-content-center justify-center align-middle">
        {product.colors &&
          product.subProducts.map((color, i) => (
            <div className="" key={i}>
              <div className=" flex p-2 mt-5">
                <Link href={`/hotel/${product.slug}?style=${i}`} scroll={false}>
                  <img
                    src={color.color.image}
                    alt=""
                    className={`${
                      i == router.query.style ? " outline-double" : ""
                    }   rounded-full w-6 bg-transparent `}
                  />
                </Link>
                <div className="">
                  {/* <CarouselDetails h={color} /> */}
                  <TestDialog h={color} />
                </div>
                <div className=" w-[600px] h-[200px] bg-white shadow-xl flex flex-col ml-6 rounded-lg ">
                  {color.description_images.map((desc, i) => {
                    return (
                      <div className=" ml-5">
                        <b className=" text-base text">{desc.room}</b>
                        <div className="flex gap-5 text-sm ">
                          <div className=" flex w-40 gap-[6px]">
                            <span>
                              <IoBedOutline className=" h-4 " />
                            </span>
                            {desc.beds}
                          </div>
                          <span className="flex gap-3 text-blue-800 font-semibold">
                            <TbUsers className=" h-5" />
                            {desc.capacity} guest
                          </span>
                        </div>
                        <div class="relative flex mr-6 p-3 items-center">
                          <div class="flex-grow border-t border-gray-400"></div>
                          <div class="flex-grow border-t border-gray-400"></div>
                        </div>
                      </div>
                    );
                  })}
                  <div className=" grid grid-cols-2 space-x-32">
                    <div className=" w-[400px] grid grid-cols-2 text-sm ml-5 h-16 ">
                      <span className="flex text-gray-500 font-medium gap-1">
                        <MdNoFood className=" mt-1 h-5 text-xl " />
                        <p className="flex flex-col place-content-center">
                          Without Breakfast
                        </p>
                      </span>
                      <span className="flex text-green-600 font-medium gap-1">
                        <BiWifi className=" mt-1 h-5 text-xl " />
                        <p className="flex flex-col place-content-center">
                          Free Wifi
                        </p>
                      </span>
                      <span className="flex text-green-600 font-medium gap-1">
                        <MdOutlineFreeCancellation className=" mt-1 h-5 text-xl " />
                        <p className="flex flex-col place-content-center">
                          Free Cancellation
                        </p>
                      </span>
                      <span className="flex text-green-600 font-medium gap-1">
                        <GrScheduleNew className=" mt-1 h-5 text-xl " />
                        <p className="flex flex-col place-content-center">
                          Reschedule
                        </p>
                      </span>
                    </div>
                    <div className=" flex flex-col place-content-center space-y-7">
                      <span className=" flex flex-row justify-center">Rp.{color.priceRoom}</span>
                      <button className=" w-28 text-sm rounded-md bg-orange p-2 justify-end ">Book Now</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
      {/* <div>
        {product.images.map((image, i) => (
          <Fragment key={i}>
            <img src={image.url} alt="" className=" rounded-md h-[50px] w-14" />
          </Fragment>
        ))}
      </div> */}
    </div>
  );
}

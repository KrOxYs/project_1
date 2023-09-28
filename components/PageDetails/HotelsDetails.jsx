import React from "react";
import { MdBalcony, MdCoffeeMaker } from "react-icons/md";
import { TbAirConditioningDisabled, TbUsers } from "react-icons/tb";
import { CgSmartHomeRefrigerator } from "react-icons/cg";
import { RiNewspaperLine } from "react-icons/ri";

export default function HotelsDetails({ h }) {
  console.log("hotelsDetails", h);
  return (
    <div className=" ml-4 space-y-3">
      <div>
        <h2>
          <b>Room Information</b>
          {h.description_images.map((desc) => (
            <div className="flex gap-3 mt-2">
              <span className=" h-5 mt-[3px]">
                <TbUsers className=" fill-blue-800" />
              </span>
              <p>{desc.capacity} guest</p>
            </div>
          ))}
        </h2>
      </div>
      <hr />
      <div>
        <h2>
          <b>Room Feature(s) You May Like</b>
        </h2>
        <div className=" space-y-2 mt-2">
          <div className="flex gap-2">
            <span className="">
              <MdBalcony className=" fill-blue-800 text-2xl" />
            </span>
            <p className=" text-sm p-1">Balcony/Terrace</p>
          </div>
          <div className="flex gap-2">
            <span className=" text-blue-800">
              <CgSmartHomeRefrigerator className=" text-2xl" />
            </span>
            <p className=" text-sm p-1">Refrigator</p>
          </div>
          <div className="flex gap-2">
            <span className="">
              <MdCoffeeMaker className=" fill-blue-800 text-2xl" />
            </span>
            <p className=" text-sm p-1">Coffee/Tea Maker</p>
          </div>
          <div className="flex gap-2">
            <span className="">
              <TbAirConditioningDisabled className=" text-blue-800 text-2xl" />
            </span>
            <p className=" text-sm p-1">Air Conditioner</p>
          </div>
          <div className="flex gap-2">
            <span className="">
              <RiNewspaperLine className=" text-blue-800 text-2xl" />
            </span>
            <p className=" text-sm p-1">Free NewsPaper</p>
          </div>
        </div>
      </div>
      <hr />
      <h2>
        <b>Room Facilities</b>
      </h2>
      <ul className="grid grid-cols-2 list-disc pl-5 ">
        {h.facilities.map((facilitiy, i) => {
          return (
            <li className="place-content-center">
              <p className=" w-28 text-sm">{facilitiy}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

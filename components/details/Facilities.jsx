import React from "react";
import { Tb24Hours, TbAirConditioningDisabled } from "react-icons/tb";
import { RiRestaurantLine } from "react-icons/ri";
import { FaSwimmingPool } from "react-icons/fa";
import { LuParkingSquare } from "react-icons/lu";
import { GiElevator } from "react-icons/gi";
import { AiOutlineWifi } from "react-icons/ai";

export default function Facilities() {
  return (
    <div className="flex gap-7 w-full place-content-center ">
      <div className=" text-center">
        <TbAirConditioningDisabled className=" w-9 h-9 text-blue-600" />
        AC
      </div>
      <div className="">
        <span className="flex flex-row justify-center">
          <RiRestaurantLine className=" w-9 h-9  text-blue-600" />
        </span>
        Restaurant
      </div>
      <div className="">
        <span className="flex flex-row justify-center">
          <FaSwimmingPool className=" w-9 h-9  text-blue-600" />
        </span>
        Swimming Pool
      </div>
      <div className="">
        <span className="flex flex-row justify-center">
          <Tb24Hours className=" w-9 h-9  text-blue-600" />
        </span>
        24-Hours Front Desk
      </div>
      <div className="">
        <span className="flex flex-row justify-center">
          <LuParkingSquare className=" w-9 h-9  text-blue-600" />
        </span>
        Parking
      </div>
      <div className="">
        <span className="flex flex-row justify-center">
          <GiElevator className=" w-9 h-9  text-blue-600" />
        </span>
        Elevator
      </div>
      <div className=" text-center">
        <span className="flex flex-row justify-center">
          <AiOutlineWifi className=" w-9 h-9  text-blue-600" />
        </span>
        Wifi
      </div>
    </div>
  );
}

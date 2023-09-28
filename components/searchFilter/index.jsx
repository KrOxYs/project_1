import React from "react";
import SelectInput from "./Selectinput";
import Link from "next/link";
import { SiGooglemaps } from "react-icons/si";

export default function Filter() {
  return (
    <div className=" bg-green-500 flex flex-col items-center">
      <div className=" bg-white space-y-3 p-4 rounded-xl shadow-md">
        <Link href="">
          <h1>Hotel yang terakhir dilihat</h1>
        </Link>

        <p>Kota yang ingin Dituju</p>
        <div className=" flex flex-row items-center">
          <SiGooglemaps className=" text-2xl absolute text-right" />
          <SelectInput/>
        </div>
      </div>
    </div>
  );
}

import React, { useState } from "react";
import Navbar from "./Navbar";
import CustomizedMenus from "./CustomizedMenus";
import { FaHandshake } from "react-icons/fa";
import { MdFavorite, MdHelp, MdOutlineSecurityUpdate } from "react-icons/md";
import { BsBookmarkCheck } from "react-icons/bs";
import { VscListUnordered } from "react-icons/vsc";

export default function Header() {
  const [show, setShow] = useState(false);
  return (
    <div className="fixed z-20 w-full bg-white shadow-md">
      <div className="flex ml-56 gap-4">
        <div className=" flex flex-col-reverse justify-center">
          <Navbar />
        </div>
        <img
          src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/9/97f3e7a54e9c6987283b78e016664776.svg"
          alt=""
        />
        <div className=" flex flex-col-reverse justify-center text-black">
          <CustomizedMenus text />
        </div>
        <div className="flex gap-2 justify-center hover:bg-slate-600 h-10 w-48 rounded-md mt-3 ">
          <div className=" flex flex-col-reverse justify-center ">
            <FaHandshake />
          </div>
          <p className=" flex flex-col-reverse justify-center">
            Jadi Partner Traveloka
          </p>
        </div>
        <div className="flex gap-2 justify-center hover:bg-slate-600 h-10 w-24 rounded-md mt-3  ">
          <div className=" flex justify-center flex-col">
            <BsBookmarkCheck />
          </div>
          <p className=" flex justify-center flex-col">Simpan</p>
        </div>
        <div className="flex gap-2 justify-center hover:bg-slate-600 h-10 w-32 rounded-md mt-3 ">
          <div className=" flex flex-col-reverse justify-center ">
            <VscListUnordered />
          </div>
          <p className=" flex flex-col-reverse justify-center">Pesanan Saya</p>
        </div>
        <div className=" flex flex-col-reverse justify-center">
          <CustomizedMenus country />
        </div>
        <div className=" flex flex-col-reverse justify-center">
          <CustomizedMenus user />
        </div>
        <div className="flex flex-col-reverse justify-center">
          <button className=" bg-blue-700 h-10 w-16 rounded-md"><p>Daftar</p></button>
        </div>
      </div>
      <div className="flex bg-gray-200">
      <div className=" flex flex-col-reverse justify-center text-black">
          <CustomizedMenus word="Transportasi" />
        </div>
        <div className=" flex flex-col-reverse justify-center text-black">
          <CustomizedMenus word="Tempat Menginap"  />
        </div>
        <div className=" flex flex-col-reverse justify-center text-black">
          <CustomizedMenus word="Aktivitas dan Hiburan"  />
        </div>
        <div className=" flex flex-col-reverse justify-center text-black">
          <CustomizedMenus word="Tagihan dan isi Ulang"  />
        </div>
        
      </div>

    </div>
  );
}

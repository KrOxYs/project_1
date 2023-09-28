import React, { useEffect, useState } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { moviesBg } from "@/data/Carousel";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const Row = ({ title, fetchURL, rowID }) => {
  const [movies, setMovies] = useState([]);

  const slideLeft = () => {
    var slider = document.getElementById("slider" + rowID);
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const slideRight = () => {
    var slider = document.getElementById("slider" + rowID);
    slider.scrollLeft = slider.scrollLeft + 1000;
  };

  return (
    <>
      <h2 className="text-white font-bold md:text-xl p-4">{title}</h2>
      <div className="relative flex items-center group">
        <MdChevronLeft
          onClick={slideLeft}
          className="bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
          size={40}
        />
        <div
          id={"slider" + rowID}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
        >
          <div className="w-[400px] rounded-md inline-block cursor-pointer relative space-y-10 text-left ml-36 transition-shadow">
            <p className=" text-2xl text-white">Cari & booking hotel dengan harga <br /> termurah di sini!</p>
            <p className="">Temukan harga terbaik untuk setiap produk <br /> Traveloka yang Anda butuhkan. Murah di sini!</p><br /><br /><br />
          </div>
          <div className="w-[500px] rounded-md inline-block cursor-pointer relative p-2">
            <img
              className="w-full h-auto block rounded-lg"
              src="https://ik.imagekit.io/tvlk/image/imageResource/2023/05/18/1684397392986-85c4b450db2ca9d73dc59fca8d9b09d5.jpeg?tr=h-230,q-75,w-472"
            />
          </div>
          <div className="w-[500px] rounded-md inline-block cursor-pointer relative p-2">
            <img
              className="w-full h-auto block rounded-lg"
              src="https://ik.imagekit.io/tvlk/image/imageResource/2023/05/18/1684397392986-85c4b450db2ca9d73dc59fca8d9b09d5.jpeg?tr=h-230,q-75,w-472"
            />
          </div>
          <div className="w-[500px] rounded-md inline-block cursor-pointer relative p-2">
            <img
              className="w-full h-auto block rounded-lg"
              src="https://ik.imagekit.io/tvlk/image/imageResource/2023/05/18/1684397392986-85c4b450db2ca9d73dc59fca8d9b09d5.jpeg?tr=h-230,q-75,w-472"
            />
          </div>
          <div className="w-[500px] rounded-md inline-block cursor-pointer relative p-2">
            <img
              className="w-full h-auto block rounded-lg"
              src="https://ik.imagekit.io/tvlk/image/imageResource/2023/05/18/1684397392986-85c4b450db2ca9d73dc59fca8d9b09d5.jpeg?tr=h-230,q-75,w-472"
            />
          </div>
        </div>
        <MdChevronRight
          onClick={slideRight}
          className="bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
          size={40}
        />
      </div>
    </>
  );
};

export default Row;

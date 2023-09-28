import React, { useEffect, useState } from "react";
import { countryData } from "@/data/Country.js";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import Link from "next/link";

const Food = ({ rowID1, products }) => {
  //   console.log(data);
  const [movies, setMovies] = useState([]);
  const [foods, setFoods] = useState(products);
  const [like, setLike] = useState();
  const [active, setActive] = useState(0)

  //   Filter Type burgers/pizza/etc
  const filterType = (city) => {
    setFoods(
      products.filter((item) => {
        console.log(item.city)
        return item.city === city;
      })
    );
  };

  //   Filter by price
  const filterPrice = (price) => {
    setFoods(
      data.filter((item) => {
        return item.price === price;
      })
    );
  };

  const sliderLeft = () => {
    var slider = document.getElementById("slider" + rowID1);
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const sliderRight = () => {
    var slider = document.getElementById("slider" + rowID1);
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <div className="max-w-[1640px] m-auto px-4 py-12">
      <h1 className="text-black-600 font-bold text-2xl ml-[375px] ">
        Most Searched Accommodations
      </h1>

      {/* Filter Row */}
      <div className="flex flex-col lg:flex-row place-content-start ml-[375px]">
        {/* Fliter Type */}
        <div>
          <p className="font-bold text-gray-400">
            Complete your holiday bucket list by staying here
          </p>

          <button
            onClick={() => setFoods(products)}
            className={`${"m-1 rounded-full p-2 w-20 h-10 border-orange-600 hover:bg-orange-600 hover:text-white focus:bg-blue-600 text-black from-current active active:bg-red-700"} `}
          >
            All
          </button>
          <button
            onClick={() => filterType("Jakarta")}
            className={`${"m-1 rounded-full p-2 w-20 h-10 hover:bg-orange-600 hover:text-white text-black"} `}
          >
            Jakarta
          </button>
          <button
            onClick={() => filterType("Bandung")}
            className={`${"m-1 rounded-full p-2 w-20 h-10 hover:bg-orange-600 hover:text-white text-black"} `}
          >
            Bandung
          </button>
        </div>

        {/* Filter Price */}
      </div>

      {/* Display foods */}
      <div className="relative flex items-center group w-full place-content-center ">
        <MdChevronLeft
          onClick={sliderLeft}
          className="bg-white left-0 rounded-full relative opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block "
          size={40}
        />
        <div
          id={"slider" + rowID1}
          className="w-6/12 h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
        >
          {foods.map((item, i) => (
            <div
              className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2"
              key={i}
            >
              <Link href={`/hotel/${item.slug}?style=${active}`}>
                <img
                  className=" w-full h-36 block"
                  src={item?.img}
                  alt={item?.name}
                />
                <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white">
                  <p className="white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center">
                    {item?.name}
                  </p>
                  <p>
                    {like ? (
                      <FaHeart className="absolute top-4 left-4 text-gray-300" />
                    ) : (
                      <FaRegHeart className="absolute top-4 left-4 text-gray-300" />
                    )}
                  </p>
                </div>
              </Link>
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
  );
};

export default Food;

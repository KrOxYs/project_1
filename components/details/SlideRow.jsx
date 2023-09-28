import Image from "next/image";

import card1 from "../../public/card1.svg";
import card2 from "../../public/card2.svg";
import card3 from "../../public/card3.svg";
import card4 from "../../public/card4.svg";
import Carousel from "../Carousel/Carousel";
import { AiOutlineArrowDown } from "react-icons/ai";

// const imagesItems = [
//   <Image className="h-full w-full" src={card1} alt="teste" />,
//   <Image className="h-full w-full" src={card2} alt="teste" />,
//   <Image className="h-full w-full" src={card3} alt="teste" />,
//   <Image className="h-full w-full" src={card4} alt="teste" />,
//   <Image className="h-full w-full" src={card1} alt="teste" />,
// ];
// console.log("imagesItems", imagesItems);

const Home = ({ product }) => {
  console.log("review", product.reviews);
  const imgs = product.reviews.map((img) => img.images);
  const lastimg = imgs.map((p) => p);
  console.log("lastimg", lastimg);
  console.log("imgs", imgs);
  return (
    <div className=" w-full overflow-hidden bg-bg text-white">
      <main className="flex w-full flex-1 flex-row place-content-center items-center justify-center px-20 text-center">
        <Carousel product={product} />
      </main>
      <div className=" w-full text-black flex place-content-center p-3 mb-3 cursor-pointer ">
        <div className="flex w-24 hover:text-blue-600 place-content-centerv rounded-md">
          <h1>See More</h1>
          <span className=" mt-1 ">
            <AiOutlineArrowDown />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Home;

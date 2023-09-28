import { useRouter } from "next/router";
import React from "react";
import CarouselDetails from "./CarouselDetails";

export default function ListHotels({ product }) {
  const router = useRouter();

  const hotels = product.subProducts;
  console.log("hotels", hotels);
  const test = hotels.map((img) => img.images);
  console.log("test", test);
  const sizes = test.map((s) => s.sizes);
  console.log("sizes", sizes);
  // const ukuran = sizes.map((s) => s.qty);
  // console.log("ukuran", ukuran);

  return (
    <div className=" w-full place-content-center text-center align-middle">
      {hotels.map((h, i) => (
        <div key={i}>
          <h3>{h.sku}</h3>
          <p>{h.name}</p>
          <div>
            <CarouselDetails rowID1="3" h={h} />
          </div>
          <span>
            {
              // <div className=" flex gap-5 place-content-center justify-center text-center align-middle">
              //   <img src={h.color.image} alt="" className=" w-20 h-20" />
              //   <span
              //     style={{ background: `${h.color.color}` }}
              //     className="h-[50px]"
              //   >
              //     Color
              //   </span>

              //   {h.images.map((img, i) => (
              //     <>
              //       {/* <CarouselDetails img={img}/> */}
              //       {/* <img key={i} src={img.url} alt="" className=" w-20 h-20" /> */}
              //     </>
              //   ))}

              //   {h.sizes.map((s, i) => (
              //     <div key={i}>
              //       {s.size}
              //       <span>{s.price}</span>
              //     </div>
              //   ))}
              // </div>
            }
          </span>
        </div>
      ))}
    </div>
  );
}

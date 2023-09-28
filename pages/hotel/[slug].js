import PageDetails from "@/components/PageDetails";
import HeaderPage from "@/components/PageDetails/HeaderPage";
import DetailsPage from "@/components/details";
import Header from "@/components/header";
import Product from "@/models/Product";
import db from "@/utils/db";
import Head from "next/head";
import React from "react";
import TextDetail from "../../components/details/ImageSlider";
import HeaderMotion from "@/components/PageDetails/HeaderMotion";
import User from "@/models/User";

export default function hotel({ product }) {
  console.log("product details", product);
  // console.log(server)
  return (
    <div>
      <Head>
        <title>{product.name}</title>
      </Head>
      <Header />
      <div className="">
        {/* <DetailsPage product={product} /> */}
        {/* <HeaderPage/> */}
        <HeaderMotion product={product} />
        {/* <TextDetail rowID1="1" rowID2="2"/>
        <PageDetails product={product}/> */}
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { query } = context;
  const slug = query.slug;
  const style = query.style;
  const size = query.size || 0;
  db.connectDb();
  //------------
  let product = await Product.findOne({ slug })
    .populate({ path: "reviews.reviewBy", model: User })

    .lean();
  console.log("produk", product);
  let subProduct = product.subProducts[style];
  console.log("subProduct==>", subProduct);
  let prices = subProduct.sizes
    .map((s) => {
      return s.price;
    })
    .sort((a, b) => {
      return a - b;
    });
  let newProduct = {
    ...product,
    style,
    images: subProduct.images,
    sizes: subProduct.sizes,
    discount: subProduct.discount,
    priceRoom: subProduct.priceRoom,
    sku: subProduct.sku,
    colors: product.subProducts.map((p) => {
      return p.color;
    }),
    priceRange: subProduct.discount
      ? `From ${(prices[0] - prices[0] / subProduct.discount).toFixed(2)} to ${(
          prices[prices.length - 1] -
          prices[prices.length - 1] / subProduct.discount
        ).toFixed(2)}$`
      : `From ${prices[0]} to ${prices[prices.length - 1]}$`,
    price:
      subProduct.discount > 0
        ? (
            subProduct.sizes[size].price -
            subProduct.sizes[size].price / subProduct.discount
          ).toFixed(2)
        : subProduct.sizes[size].price,
    priceBefore: subProduct.sizes[size].price,
    quantity: subProduct.sizes[size].qty,
    ratings: [
      {
        percentage: calculatePercentage("5"),
      },
      {
        percentage: calculatePercentage("4"),
      },
      {
        percentage: calculatePercentage("3"),
      },
      {
        percentage: calculatePercentage("2"),
      },
      {
        percentage: calculatePercentage("1"),
      },
    ],
    reviews: product.reviews.reverse(),
    allSizes: product.subProducts
      .map((p) => {
        return p.sizes;
      })
      .flat()
      .sort((a, b) => {
        return a.size - b.size;
      })
      .filter(
        (element, index, array) =>
          array.findIndex((el2) => el2.size === element.size) === index
      ),
  };
  function calculatePercentage(num) {
    return (
      (product.reviews.reduce((a, review) => {
        return (
          a +
          (review.rating == Number(num) || review.rating == Number(num) + 0.5)
        );
      }, 0) *
        100) /
      product.reviews.length
    ).toFixed(1);
  }
  db.disconnectDb();
  console.log("product terbaru", product);

  return {
    props: {
      product: JSON.parse(JSON.stringify(newProduct)),
    },
  };
}

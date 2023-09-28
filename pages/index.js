import { Inter } from "next/font/google";
import Header from "@/components/header";
import Head from "next/head";
import Ads from "@/components/Ads";
import Filter from "@/components/searchFilter";
import Food from "@/components/category";
import Product from "@/models/Product";
import db from "@/utils/db";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ products }) {

  const test  = products.map((p)=>(p.slug));
  console.log("test", test);
  console.log("products slug", products.slug)

  console.log("products", products);
  return (
    <div>
      <div>
        <Head>
          <title>HomePage</title>
        </Head>
        <Header />
        <Ads />
        <Filter />
          <Food products={products} />
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  db.connectDb();
  let products = await Product.find().sort({ createdAt: -1 }).lean();
  console.log("first products", products);
  return {
    props: {
      products: JSON.parse(JSON.stringify(products)),
    },
  };
}

import Head from "next/head";
import Banner from "../components/Banner";
import Header from "../components/Header";
import ProductFeed from "../components/ProductFeed";

// react-responsive-carasol
// react-currency-formatter
export default function Home({ products }) {
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Amazon 2.0</title>
      </Head>

      <Header />

      <main className=" pt-24 max-w-screen-2xl mx-auto">
        {/* banner */}
        <Banner />
        {/* Product feed */}
        <ProductFeed products={products} />
      </main>
    </div>
  );
}
export async function getServerSideProps(context) {
  const products = await fetch("https://fakestoreapi.com/products").then(
    (response) => response.json()
  );
  return {
    props: {
      products,
    },
  };
}

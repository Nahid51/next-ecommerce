import { wixClientServer } from "@/lib/wixClientServer";
import CategoryList from "../components/CategoryList";
import ProductList from "../components/ProductList";
import Slider from "../components/Slider";
import { Suspense } from "react";

const HomePage = async () => {
  // const wixClient = await wixClientServer();
  // const res = await wixClient.products.queryProducts().find();
  // console.log(res);

  return (
    <main className=''>
      <div className="slider"><Slider /></div>
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h2 className="mb-4 text-2xl font-semibold">Featured Products</h2>
        <Suspense fallback={"loading"}>
          <ProductList
            categoryId={process.env.FEATURED_PRODUCT_CATEGORY_ID!}
            limit={4}
          />
        </Suspense>
      </div>
      <div className="mt-24">
        <h2 className="mb-4 text-2xl font-semibold px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">Categories</h2>
        <Suspense fallback={"Loading..."}>
          <CategoryList />
        </Suspense>
      </div>
      <div className="my-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h2 className="mb-4 text-2xl font-semibold">New Products</h2>
        <ProductList
          categoryId={process.env.FEATURED_PRODUCT_CATEGORY_ID!}
          limit={4}
        />
      </div>
    </main>
  )
}

export default HomePage;
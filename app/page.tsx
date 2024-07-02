import CategoryList from "../components/CategoryList";
import ProductList from "../components/ProductList";
import Slider from "../components/Slider";

const HomePage = () => {
  return (
    <main className=''>
      <div className="slider"><Slider /></div>
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h2 className="mb-4 text-2xl font-semibold">Featured Products</h2>
        <ProductList />
      </div>
      <div className="mt-24">
        <h2 className="mb-4 text-2xl font-semibold px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">Categories</h2>
        <CategoryList />
      </div>
      <div className="my-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h2 className="mb-4 text-2xl font-semibold">New Products</h2>
        <ProductList />
      </div>
    </main>
  )
}

export default HomePage;
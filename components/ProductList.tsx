import Image from "next/image";
import Link from "next/link";


const ProductList = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-x-8 gap-y-12">
            <Link href="/test" className="w-full flex flex-col gap-y-4">
                <div className=" relative w-full h-80">
                    <Image
                        src="https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=600"
                        alt="image"
                        fill
                        sizes="25vw"
                        className=" absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity ease-in-out duration-500"
                    />
                </div>

                <div className="flex justify-between">
                    <p className=" font-medium">Product Name</p>
                    <p className=" font-medium">$49</p>
                </div>

                <div className=" text-sm text-gray-500">My description</div>

                <button className="w-max rounded-2xl ring-1 ring-ecom text-ecom py-2 px-4 text-xs hover:bg-ecom hover:text-white duration-500">Add to Cart</button>
            </Link>
            <Link href="/test" className="w-full flex flex-col gap-y-4">
                <div className=" relative w-full h-80">
                    <Image
                        src="https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=600"
                        alt="image"
                        fill
                        sizes="25vw"
                        className=" absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity ease-in-out duration-500"
                    />
                </div>

                <div className="flex justify-between">
                    <p className=" font-medium">Product Name</p>
                    <p className=" font-medium">$49</p>
                </div>

                <div className=" text-sm text-gray-500">My description</div>

                <button className="w-max rounded-2xl ring-1 ring-ecom text-ecom py-2 px-4 text-xs hover:bg-ecom hover:text-white duration-500">Add to Cart</button>
            </Link>
            <Link href="/test" className="w-full flex flex-col gap-y-4">
                <div className=" relative w-full h-80">
                    <Image
                        src="https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=600"
                        alt="image"
                        fill
                        sizes="25vw"
                        className=" absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity ease-in-out duration-500"
                    />
                </div>

                <div className="flex justify-between">
                    <p className=" font-medium">Product Name</p>
                    <p className=" font-medium">$49</p>
                </div>

                <div className=" text-sm text-gray-500">My description</div>

                <button className="w-max rounded-2xl ring-1 ring-ecom text-ecom py-2 px-4 text-xs hover:bg-ecom hover:text-white duration-500">Add to Cart</button>
            </Link>
            <Link href="/test" className="w-full flex flex-col gap-y-4">
                <div className=" relative w-full h-80">
                    <Image
                        src="https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=600"
                        alt="image"
                        fill
                        sizes="25vw"
                        className=" absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity ease-in-out duration-500"
                    />
                </div>

                <div className="flex justify-between">
                    <p className=" font-medium">Product Name</p>
                    <p className=" font-medium">$49</p>
                </div>

                <div className=" text-sm text-gray-500">My description</div>

                <button className="w-max rounded-2xl ring-1 ring-ecom text-ecom py-2 px-4 text-xs hover:bg-ecom hover:text-white duration-500">Add to Cart</button>
            </Link>
            <Link href="/test" className="w-full flex flex-col gap-y-4">
                <div className=" relative w-full h-80">
                    <Image
                        src="https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=600"
                        alt="image"
                        fill
                        sizes="25vw"
                        className=" absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity ease-in-out duration-500"
                    />
                </div>

                <div className="flex justify-between">
                    <p className=" font-medium">Product Name</p>
                    <p className=" font-medium">$49</p>
                </div>

                <div className=" text-sm text-gray-500">My description</div>

                <button className="w-max rounded-2xl ring-1 ring-ecom text-ecom py-2 px-4 text-xs hover:bg-ecom hover:text-white duration-500">Add to Cart</button>
            </Link>
        </div>
    )
}

export default ProductList;
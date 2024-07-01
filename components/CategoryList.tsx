import Image from "next/image";
import Link from "next/link";


const CategoryList = () => {
    return (
        <div className="px-4 overflow-scroll scrollbar-hide">
            <div className="flex gap-4 md:gap-8">
                <Link href="/list?cat=test" className=" flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6">
                    <div className=" relative bg-slate-100 w-full h-96">
                        <Image src="https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=600" alt="photo" fill sizes="20vw" className=" object-cover" />
                    </div>
                    <h2 className="mt-8 font-light text-center tracking-wide">Category Name</h2>
                </Link>
                <Link href="/list?cat=test" className=" flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6">
                    <div className=" relative bg-slate-100 w-full h-96">
                        <Image src="https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=600" alt="photo" fill sizes="20vw" className=" object-cover" />
                    </div>
                    <h2 className="mt-8 font-light text-center tracking-wide">Category Name</h2>
                </Link>
                <Link href="/list?cat=test" className=" flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6">
                    <div className=" relative bg-slate-100 w-full h-96">
                        <Image src="https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=600" alt="photo" fill sizes="20vw" className=" object-cover" />
                    </div>
                    <h2 className="mt-8 font-light text-center tracking-wide">Category Name</h2>
                </Link>
                <Link href="/list?cat=test" className=" flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6">
                    <div className=" relative bg-slate-100 w-full h-96">
                        <Image src="https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=600" alt="photo" fill sizes="20vw" className=" object-cover" />
                    </div>
                    <h2 className="mt-8 font-light text-center tracking-wide">Category Name</h2>
                </Link>
                <Link href="/list?cat=test" className=" flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6">
                    <div className=" relative bg-slate-100 w-full h-96">
                        <Image src="https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=600" alt="photo" fill sizes="20vw" className=" object-cover" />
                    </div>
                    <h2 className="mt-8 font-light text-center tracking-wide">Category Name</h2>
                </Link>
                <Link href="/list?cat=test" className=" flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6">
                    <div className=" relative bg-slate-100 w-full h-96">
                        <Image src="https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=600" alt="photo" fill sizes="20vw" className=" object-cover" />
                    </div>
                    <h2 className="mt-8 font-light text-center tracking-wide">Category Name</h2>
                </Link>
                <Link href="/list?cat=test" className=" flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6">
                    <div className=" relative bg-slate-100 w-full h-96">
                        <Image src="https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=600" alt="photo" fill sizes="20vw" className=" object-cover" />
                    </div>
                    <h2 className="mt-8 font-light text-center tracking-wide">Category Name</h2>
                </Link>
                <Link href="/list?cat=test" className=" flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6">
                    <div className=" relative bg-slate-100 w-full h-96">
                        <Image src="https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=600" alt="photo" fill sizes="20vw" className=" object-cover" />
                    </div>
                    <h2 className="mt-8 font-light text-center tracking-wide">Category Name</h2>
                </Link>
            </div>
        </div>
    )
}

export default CategoryList;
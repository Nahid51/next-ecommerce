import { wixClientServer } from "@/lib/wixClientServer";
import Image from "next/image";
import Link from "next/link";

const CategoryList = async () => {
    const wixClient = await wixClientServer();
    const cat = await wixClient.collections.queryCollections().find();

    return (
        <div className="px-4 overflow-scroll scrollbar-hide">
            <div className="flex gap-4 md:gap-8">
                {
                    cat.items.map((cat) => (
                        <Link
                            href={`/list?cat=${cat?.slug}`}
                            className=" flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6"
                            key={cat?._id}
                        >
                            <div className=" relative bg-slate-100 w-full h-96">
                                <Image
                                    src={cat?.media?.mainMedia?.image?.url || "cat.png"}
                                    alt="photo"
                                    fill
                                    sizes="20vw"
                                    className=" object-cover"
                                />
                            </div>
                            <h2 className="mt-8 font-light text-center tracking-wide">
                                {cat?.name}
                            </h2>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

export default CategoryList;
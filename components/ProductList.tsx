import { wixClientServer } from "@/lib/wixClientServer";
import { products } from "@wix/stores";
import Image from "next/image";
import Link from "next/link";
import Pagination from "./Pagination";

const PRODUCT_PER_PAGE = 8;

const ProductList = async ({ categoryId, limit, searchParams }: { categoryId: string; limit?: number; searchParams?: any }) => {

    const wixClient = await wixClientServer();
    const productQuery = wixClient.products
        .queryProducts()
        ?.startsWith("name", searchParams?.name || "")
        ?.eq("collectionIds", categoryId)
        ?.hasSome("productType", searchParams?.type ? [searchParams?.type] : ["physical", "digital"])
        ?.gt("priceData.price", searchParams?.min || 0)
        ?.lt("priceData.price", searchParams?.max || 999999)
        ?.limit(limit || PRODUCT_PER_PAGE)
        ?.skip(
            searchParams?.page
                ? parseInt(searchParams?.page) * (limit || PRODUCT_PER_PAGE)
                : 0
        )

    if (searchParams?.sort) {
        const [sortType, sortBy] = searchParams?.sort?.split(" ");

        if (sortType === "asc") {
            productQuery?.ascending(sortBy);
        }
        if (sortType === "desc") {
            productQuery?.descending(sortBy);
        }
    }

    const res = await productQuery.find();

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-x-8 gap-y-12">
            {
                res?.items?.map((product: products.Product) => (
                    <Link
                        href={"/" + product?.slug}
                        className="w-full flex flex-col gap-y-4"
                        key={product?._id}
                    >
                        <div className=" relative w-full h-80">
                            <Image
                                src={product?.media?.mainMedia?.image?.url || "/product.png"}
                                alt="image"
                                fill
                                sizes="25vw"
                                className=" absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity ease-in-out duration-500"
                            />
                            {product?.media?.items &&
                                <Image
                                    src={product?.media?.items[1]?.image?.url || "/product.png"}
                                    alt="image"
                                    fill
                                    sizes="25vw"
                                    className=" absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity ease-in-out duration-500"
                                />
                            }
                        </div>

                        <div className="flex justify-between">
                            <p className=" font-medium">{product?.name}</p>
                            <p className=" font-medium">{product?.priceData?.currency}{product?.priceData?.price}</p>
                        </div>

                        {
                            product?.additionalInfoSections &&
                            <div
                                className=" text-sm text-gray-500"
                                dangerouslySetInnerHTML={{ __html: product?.additionalInfoSections?.find((section: any) => section?.title === "shortDesc")?.description || "No description" }}
                            ></div>
                        }

                        <button className="w-max rounded-2xl ring-1 ring-ecom text-ecom py-2 px-4 text-xs hover:bg-ecom hover:text-white duration-500">Add to Cart</button>
                    </Link>
                ))
            }
            {
                searchParams?.cat || searchParams?.name ? (
                    <Pagination
                        currentPage={res.currentPage || 0}
                        hasPrev={res.hasPrev()}
                        hasNext={res.hasNext()}
                    />
                ) : null
            }
        </div>
    )
}

export default ProductList;
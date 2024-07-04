"use client"
import Image from "next/image";
import { useState } from "react";

const ProductImage = ({items}: {items: any}) => {
    const [index, setIndex] = useState(0);

    return (
        <div>
            <div className="h-[30rem] relative">
                <Image
                    src={items[index]?.image?.url}
                    alt="product image"
                    fill
                    sizes="50vw"
                    className=" object-cover rounded-md"
                />
            </div>
            <div className="flex items-center justify-between gap-4 mt-8 cursor-pointer">
                {
                    items.map((item: any, i: number) => (
                        <div className=" w-1/4 h-32 relative gap-4 mt-8" key={item?._id} onClick={() => setIndex(i)}>
                            <Image
                                src={item?.image?.url}
                                alt="product image"
                                fill
                                sizes="30vw"
                                className=" object-cover rounded-md"
                            />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default ProductImage;
"use client"
import { useState } from "react";

const Add = ({ productId, variantId, stockNumber }: { productId: string; variantId: string; stockNumber: number }) => {
    const [quantity, setQuantity] = useState(1);

    //temporary
    const stock = 4;

    const handleQuantity = (type: "a" | "r") => {
        if (type === "r" && quantity > 1) {
            setQuantity((prev) => prev - 1);
        }
        if (type === "a" && quantity < stockNumber) {
            setQuantity((prev) => prev + 1);
        }
    };

    return (
        <div className="flex flex-col gap-4">
            <h4 className="font-medium">Choose a Quantity</h4>
            <div className="flex items-center justify-between">
                <div className="flex items-center  gap-4">
                    <div className="bg-gray-100 py-2 px-4 rounded-3xl flex items-center justify-between w-32">
                        <button className="cursor-pointer text-xl" onClick={() => handleQuantity("r")}>-</button>
                        {quantity}
                        <button className="cursor-pointer text-xl" onClick={() => handleQuantity("a")}>+</button>
                    </div>
                    <div className="text-xs">
                        Only <span className="text-orange-500">{stockNumber} items</span> left!<br /> {"Don't"}{""} miss it
                    </div>
                </div>
                <button
                    // onClick={() => addItem(wixClient, productId, variantId, quantity)}
                    // disabled={isLoading}
                    className="w-36 text-sm rounded-3xl ring-1 ring-ecom text-ecom py-2 px-4 hover:bg-ecom hover:text-white disabled:cursor-not-allowed disabled:bg-pink-200 disabled:ring-0 disabled:text-white disabled:ring-none"
                >
                    Add to Cart
                </button>
            </div>
        </div>
    )
}

export default Add;
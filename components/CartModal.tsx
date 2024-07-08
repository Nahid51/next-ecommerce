"use client"
import Image from "next/image";

const CartModal = () => {
    const cartItems = true;

    return (
        <div className="w-max absolute p-2 rounded-md shadow-xl bg-white top-12 right-0 flex flex-col gap-4 z-20">
            {!cartItems ? (
                <div>Cart is empty!</div>
            ) : (
                <>
                    <h2 className="text-xl">Shopping Cart</h2>
                    <div className="flex flex-col gap-8">
                        {/* top */}
                        {/* item list */}
                        <div className="flex gap-4">
                            <Image
                                src="https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=600" alt="product image"
                                width={72}
                                height={96}
                                className=" object-cover rounded-md"
                            />
                            <div className="flex flex-col justify-between w-full">
                                <div className="">
                                    <div className="flex items-center justify-between gap-8">
                                        <h3 className=" font-semibold">Product Name</h3>
                                        <div className="p-1 bg-gray-50 rounded">$49</div>
                                    </div>
                                    <div className="text-sm text-gray-500">available</div>
                                </div>
                                <div className="flex items-center justify-between text-sm mt-4">
                                    <p className="text-gray-500">Qty. 1</p>
                                    <button className="text-blue-500">Remove</button>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <Image
                                src="https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=600" alt="product image"
                                width={72}
                                height={96}
                                className=" object-cover rounded-md"
                            />
                            <div className="flex flex-col justify-between w-full">
                                <div className="">
                                    <div className="flex items-center justify-between gap-8">
                                        <h3 className=" font-semibold">Product Name</h3>
                                        <div className="p-1 bg-gray-50 rounded">$49</div>
                                    </div>
                                    <div className="text-sm text-gray-500">available</div>
                                </div>
                                <div className="flex items-center justify-between text-sm mt-4">
                                    <p className="text-gray-500">Qty. 1</p>
                                    <button className="text-blue-500">Remove</button>
                                </div>
                            </div>
                        </div>


                        {/* bottom */}
                        <div className="">
                            <div className=" flex items-center justify-between font-semibold">
                                <span>Subtotal</span>
                                <span>$98</span>
                            </div>
                            <p className="text-gray-500 text-sm mb-4 mt-2">Shipping and taxes calculated at checkout.</p>
                            <div className="flex items-center justify-between text-sm">
                                <button className="rounded-md py-3 px-4 ring-1 ring-gray-300">View Cart</button>
                                <button className="rounded-md py-3 px-4 bg-black text-white">Checkout</button>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}

export default CartModal;
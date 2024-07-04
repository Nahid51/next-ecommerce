"use client"

import { useContext } from "react";
import { WixClientContext } from "@/context/WixContext";

export const useWixClient = () => {
    return useContext(WixClientContext);
}

// useEffect(() => {
//     const getProducts = async () => {
//         const { items } = await wixClient.products.queryProducts().find();
//         console.log(items);
//     }
//     getProducts();
// }, [wixClient]);
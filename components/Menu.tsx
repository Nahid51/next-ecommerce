"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Menu = () => {
    const [open, setOpen] = useState(false);

    return (
        <div>
            <Image
                src="/menu.png"
                alt="menu"
                width={28}
                height={28}
                className=" cursor-pointer"
                onClick={() => setOpen((prev) => !prev)}
            />
            {
                open && (
                    <div className=" absolute left-0 top-20 bg-black text-white w-full h-[calc(100vh-5rem)] flex flex-col items-center justify-center gap-4 text-xl z-10">
                        <Link href="/">Home</Link>
                        <Link href="/">Shop</Link>
                        <Link href="/">Deals</Link>
                        <Link href="/">About</Link>
                        <Link href="/">Contact</Link>
                        <Link href="/">Logout</Link>
                    </div>
                )
            }
        </div>
    )
}

export default Menu;
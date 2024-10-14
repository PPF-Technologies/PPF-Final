import React from "react";
import logo from "@/assets/logo.png";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="flex items-center bg-transparent fixed w-full ">
      <div className="p-4">
        <Image src={logo} width={150} />
      </div>
      <nav className="flex gap-10 font-semibold w-full justify-center items-center">
        <Link href={"/"}>Home</Link>
        <Link href={"/"}>Products</Link>
        <Link href={"/"}>Gallery</Link>
        <Link href={"/"}>Contact</Link>
        <Link href={"/"}>
          {" "}
          <button className="bg-[#86C5DA] border-2 text-xs font-bold text-white border-[#66B2CA] py-2 px-6 rounded-lg">
            GET QUOTE
          </button>{" "}
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;

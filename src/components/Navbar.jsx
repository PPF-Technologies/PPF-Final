import React from "react";
import logo from "@/assets/logo.png";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="flex items-center bg-transparent fixed w-full ">
      <div className="p-2">
        <Image src={logo} width={150} />
      </div>
      <nav className="flex gap-10 font-semibold w-full justify-center text-gray-700  items-center">
        <Link className="opacity-80 hover:opacity-100 transition-all duration-100-" href={"/"}>
          Home
        </Link>
        <Link className="opacity-80 hover:opacity-100 transition-all duration-100-" href={"/"}>
          Products
        </Link>
        <Link className="opacity-80 hover:opacity-100 transition-all duration-100-" href={"/"}>
          Gallery
        </Link>
        <Link className="opacity-80 hover:opacity-100 transition-all duration-100-" href={"/"}>
          Blogs
        </Link>
        <Link className="opacity-80 hover:opacity-100 transition-all duration-100-" href={"/"}>
          Contact Us
        </Link>
        <Link className="" href={"/"}>
  <button className="bg-gradient-to-r transition-all from-[#86C5DA] to-[#66B2CA] border-2 text-xs font-bold text-white border-[#5EAFC5] py-3 px-8 rounded-lg shadow-md hover:from-[#66B2CA] hover:to-[#4FA1B8] hover:border-[#4FA1B8] focus:ring-4 focus:ring-[#66B2CA]/50 ease-in-out duration-300">
    GET QUOTE
  </button>
</Link>

      </nav>
    </header>
  );
};

export default Navbar;

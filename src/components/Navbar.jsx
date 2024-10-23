import React from "react";
import logo from "@/assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <header className="flex items-center bg-transparent  w-full z-50 px-10">
      <div className="p-2">
        <Image src={logo} width={150} />
      </div>
      <nav className="flex gap-10 font-semibold w-full justify-center text-gray-700  items-center">
        <Link
          className="opacity-80 hover:opacity-100 transition-all duration-100-"
          href={"/"}
        >
          Home
        </Link>
        <Link
          className="opacity-80 hover:opacity-100 transition-all duration-100-"
          href={"/"}
        >
          PPF
        </Link>
        <Link
          className="opacity-80 hover:opacity-100 transition-all duration-100-"
          href={"/"}
        >
          Products
        </Link>
        <Link
          className="opacity-80 hover:opacity-100 transition-all duration-100-"
          href={"/"}
        >
          About Us
        </Link>
        <Link
          className="opacity-80 hover:opacity-100 transition-all duration-100-"
          href={"/"}
        >
          Warranty
        </Link>
        <Link
          className="opacity-80 hover:opacity-100 transition-all duration-100-"
          href={"/"}
        >
          Contact
        </Link>
      </nav>
      <div>
        <Button
          bg={"#FFBB4E"}
          _focus={{ boxShadow: "none", bg: "#FFBB4E" }} // Disable default focus styling
          rounded={"full"}
          fontWeight={500}
          fontSize={"14px"}
          _hover={{ bg: "#FFBB4E" }}
        >
          Get a Quote
        </Button>
      </div>
    </header>
  );
};

export default Navbar;

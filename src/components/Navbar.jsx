"use client";
import React, { useState, useEffect } from "react";
import logo from "@/assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import { Button, IconButton } from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close the mobile menu when scrolling
  useEffect(() => {
    const handleScroll = () => {
      if (isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isOpen]);

  return (
    <header className="flex items-center bg-transparent w-full z-50 px-5 md:px-10 py-3">
      <div className="flex items-center justify-between w-full">
        {/* Logo */}
        <div className="p-2 flex items-center space-x-3">
          <Link href={"/"}>
            <Image src={logo} width={150} alt="logo" />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-10 md:gap-8 font-semibold w-full justify-center text-gray-700 items-center">
          <Link
            className="opacity-80 hover:opacity-100 transition-all duration-100"
            href={"/"}
          >
            Home
          </Link>
         
          <Link
            className="opacity-80 hover:opacity-100 transition-all duration-100"
            href={"/products"}
          >
            Products
          </Link>
          <Link
            className="opacity-80 hover:opacity-100 transition-all duration-100"
            href={"/about"}
          >
            About Us
          </Link>
          {/* <Link
            className="opacity-80 hover:opacity-100 transition-all duration-100"
            href={"/warranty"}
          >
            Warranty
          </Link> */}
          <Link
            className="opacity-80 hover:opacity-100 transition-all duration-100"
            href={"/contact"}
          >
            Contact
          </Link>
        </nav>

        {/* Quote Button for larger screens */}
        <div className="hidden md:block">
          <Link href={'/contact'}>
          <Button
            bg={"#FFBB4E"}
            _focus={{ boxShadow: "none", bg: "#FFBB4E" }}
            rounded={"full"}
            fontWeight={500}
            fontSize={"14px"}
            _hover={{ bg: "#FFBB4E" }}
          >
            Get a Quote
          </Button></Link>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden flex items-center">
          {!isOpen && (
            <IconButton
              icon={<GiHamburgerMenu />}
              onClick={toggleMenu}
              aria-label="Open menu"
              variant="ghost"
              fontSize="24px"
              className="text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            />
          )}
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav
          className={`md:hidden w-full mt-4 border border-gray-100 rounded-lg pt-4 shadow-md fixed top-0 left-0 z-50 transition-transform duration-300 transform ${
            isOpen ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold"></h2>
            <IconButton
              icon={<FaTimes />}
              onClick={toggleMenu}
              aria-label="Close menu"
              variant="ghost"
              fontSize="24px"
              className="text-gray-500 m-2 mr-4 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            />
          </div>
          <ul className="bg-white flex flex-col gap-4 font-medium text-gray-700 pl-6 pb-4">
            <li>
              <Link
                className="block py-2 px-3 rounded hover:bg-gray-100"
                onClick={toggleMenu}
                href={"/"}
              >
                Home
              </Link>
            </li>
            
            <li>
              <Link
                className="block py-2 px-3 rounded hover:bg-gray-100"
                onClick={toggleMenu}
                href={"/products"}
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                className="block py-2 px-3 rounded hover:bg-gray-100"
                onClick={toggleMenu}
                href={"/about"}
              >
                About Us
              </Link>
            </li>
            {/* <li>
              <Link
                className="block py-2 px-3 rounded hover:bg-gray-100"
                onClick={toggleMenu}
                href={"/warranty"}
              >
                Warranty
              </Link>
            </li> */}
            <li>
              <Link
                className="block py-2 px-3 rounded hover:bg-gray-100"
                onClick={toggleMenu}
                href={"/contact"}
              >
                Contact
              </Link>
            </li>
            {/* <li>
              <Button
                bg={"#FFBB4E"}
                _focus={{ boxShadow: "none", bg: "#FFBB4E" }}
                rounded={"full"}
                fontWeight={500}
                fontSize={"14px"}
                _hover={{ bg: "#FFBB4E" }}
                onClick={toggleMenu}
              >
                Get a Quote
              </Button>
            </li> */}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Navbar;

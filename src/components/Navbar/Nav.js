"use client";
import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
// nav data
export const navData = [
  { name: "home", path: "/" },
  { name: "about", path: "#about" },
  { name: "services", path: "#services" },
  { name: "Team", path: "#team" },
  { name: "contact", path: "#contact" },
];
const Nav = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="overflow-x-hidden gradient-bg">
      <nav className="flex flex-col items-center justify-center">
        <div className="flex justify-between items-center px-3 lg:px-0 w-full lg:w-[60%]  ">
          <div>
            {" "}
            <Image
              src={"/logo.png"}
              width={100}
              height={100}
              alt="logo"
              className="w-[100px]  object-cover "
            />{" "}
          </div>
          <ul className="md:flex hidden capitalize text-lg items-center ">
            {navData.map((link, index) => {
              return (
                <li key={index + link.name} className="mx-3">
                  <Link
                    href={link.path}
                    className="scroll-smooth hover:text-blue-700 transition-all duration-75"
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="md:hidden" onClick={() => setShow(!show)}>
            <FaBars size={35} color="white" />
          </div>
        </div>
      </nav>
      <motion.ul
        initial={{ x: "100%" }}
        animate={show ? { x: 0 } : { x: "100%" }}
        transition={{ duration: 0.6 }}
        className="flex md:hidden items-end capitalize h-screen w-[40%] text-md flex-col absolute top-28 z-40 right-0 bg-black py-10 px-5 "
      >
        {navData.map((link, index) => {
          return (
            <li
              key={index + link.name}
              className="my-2 text-white hover:text-blue-700 transition-all duration-75"
              onClick={() => setShow(!show)}
            >
              <Link href={link.path}>{link.name}</Link>
            </li>
          );
        })}
      </motion.ul>
    </div>
  );
};
export default Nav;

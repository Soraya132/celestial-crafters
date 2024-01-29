"use client";
import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link";
// nav data
export const navData = [
  { name: "home", path: "/" },
  { name: "about", path: "#about" },
  { name: "services", path: "#services" },
  { name: "contact", path: "#contact" },
];

const Nav = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="overflow-x-hidden">
      <nav className="flex flex-col items-center justify-center">
        <div className="flex justify-between px-3 lg:px-0  py-5 lg:py-10 w-full lg:w-[60%]  ">
          <div>Celestial Crafters </div>
          <ul className="md:flex hidden capitalize  text-lg text-black items-center">
            {navData.map((link, index) => {
              return (
                <li key={index + link.name} className="mx-3">
                  <Link href={link.path}>{link.name}</Link>
                </li>
              );
            })}
          </ul>
          <div className="md:hidden" onClick={() => setShow(!show)}>
            <FaBars size={35} color="black" />
          </div>
        </div>
      </nav>
      <motion.ul
        initial={{ x: "100%" }}
        animate={show ? { x: 0 } : { x: "100%" }}
        transition={{ duration: 0.6 }}
        className="flex md:hidden items-end capitalize h-screen w-[40%] text-md text-black flex-col fixed top-20 z-40 right-0 bg-black py-10 px-5 "
      >
        {navData.map((link, index) => {
          return (
            <li
              key={index + link.name}
              className="my-2 text-white"
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

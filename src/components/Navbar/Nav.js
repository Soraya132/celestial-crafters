 "use client";
import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
// // nav data
 export const navData = [
  { name: "home", path: "/" },
  { name: "about", path: "#about" },
  { name: "services", path: "#services" },
  { name: "Team", path: "#team" },
  { name: "contact", path: "#contact" },
];
const Nav = () => {
  const [show, setShow] = useState(false);
  const handleToggle = () => {
    setShow(!show);
  };
  return (
    <motion.div 
    initial={{ hieght: "110px" }}
        animate={show ? { height:"auto", } : { height:"110px",overflow:"hidden" }}
        transition={{ duration: 0.4}}
    className={`overflow-x-hidden scrollbar-none`} style={{ background: 'linear-gradient(to right, #f0f0f0, #e1e1e1)' }}>
      <nav className="flex flex-col items-center justify-center">
        <div className="flex items-center px-3 lg:px-0 w-full lg:w-[90%]  justify-between ">
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
            <FaBars size={35} color="black" />
          </div>
        </div>
      </nav>
      <div className="overflow-hidden">
      <motion.ul
        initial={{ y: "-100%" }}
        animate={show ? { y: 0 } : { y: "-100%" }}
        transition={{ duration: 0.3 }}
        className="flex md:hidden items-start capitalize  text-md flex-col  z-40  py-10 px-5 overflow-hidden "
      >
        {navData.map((link, index) => {
          return (
            <li
              key={index + link.name}
              className="my-2 text-black hover:text-blue-700 transition-all duration-75"
              onClick={handleToggle}
            >
              <Link href={link.path}>{link.name}</Link>
            </li>
          );
        })}
      </motion.ul>
      </div>
     
    </motion.div>
  );
};
export default Nav;

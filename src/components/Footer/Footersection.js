import Image from "next/image";
import {socialMedia } from "@/data";
import Link from "next/link";
const Footersection = () => {
  return (
    <footer className=" bg-black py-20 px-10 lg:px-32">
      <div className="flex justify-center items-center gap-10 flex-wrap max-lg:flex-col">
        <div className="flex justify-center items-center w-[195px] h-[195px] bg-white/90 rounded-full">
          <Image
            src={"/logo.png"}
            width={100}
            height={100}
            alt="logo"
            className="w-[150px] object-cover"
          />
        </div>

        <div className="flex flex-col text-center">
          <p className="mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm">
            Where Innovation and Inclusion Converge: Celestial Crafters Tech
            Company
          </p>
          <div className="flex items-center justify-center gap-5 mt-8">
            {socialMedia.map((item,index) => (
              <div
                className="flex justify-center items-center w-12 h-12 bg-white rounded-full"
                key={index + item.info}
              >
                 <Link
              href={item.page}
              target={item.page === '' ? '' : '_blank'}
              
            >
              <div className="text-accent text-3xl hover:text-black">{item.icon}</div>
              
            </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center">
        <div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">
          <Image
            src={"copyright-sign.svg"}
            alt="copyright"
            width={20}
            height={20}
            className="rounded-full m-0"
          />
          <p>Copyright. All rights reserved.</p>
        </div>
        <p className="font-montserrat cursor-pointer">Terms & Conditions</p>
      </div>
    </footer>
  );
};

export default Footersection;

"use client";
import { fadeIn } from "@/variants";
import { MotionDiv } from "@/components/MotionDiv";
import Title from "../common/Title";
import Image from "next/image";
const gallery = [
  "1 (1).jpg",
  "1 (2).jpg",
  "1 (3).jpg",
  "1 (4).jpg",
  "1 (5).jpg",
  "1 (6).jpg",
  "1 (7).jpg",
  "1 (9).jpg",
];
const Aboutsection = () => {
  return (
    <section className="grid text-gray py-20 bg-black min-h-screen" id="about">
      <div className="px-10 md:px-32">
        <Title text="About Us" fontSize="text-4xl" fontWeight="font-[500]" />
      </div>

      <div className="grid lg:grid-cols-2 px-10 md:px-32 md:gap-6">
        <div>
          <MotionDiv
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView="show"
            className="pt-10"
          >
            <p className="pt-10 p text-white/80">
              Welcome to Celestial Crafters Tech Company, a dynamic force in the
              ever-evolving landscape of technology. With a
              global team of 60 professionals, we are united by our commitment
              to shaping the future of technology while championing diversity.
            </p>
            <h1 className="h2 pt-10">Our Unique Culture:</h1>
            <p className="py-1 p text-white/80">
              At the heart of Celestial Crafters is a unique culture that
              celebrates diversity and inclusion. Every individual's voice
              matters, fostering an environment where creativity flourishes, and
              innovation knows no bounds.
            </p>
          </MotionDiv>
        </div>
        <div>
          <MotionDiv
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView="show"
            className="lg:py-10"
          >
            <h1 className="h2 pt-10">Empowering Women in Tech:</h1>
            <p className="py-1 p text-white/80">
              Celestial Crafters is not just a tech company; it's a movement.
              Our commitment to empowering women in tech goes beyond our
              projects; it's a part of our core values.
            </p>
            <h1 className="h2 pt-10">Beyond the Code:</h1>
            <p className="py-1 p text-white/80">
              Success for us is measured beyond lines of code. We actively
              contribute to local economies, provide mentorship, and engage in
              philanthropy.
            </p>
          </MotionDiv>
        </div>
      </div>

      {/* gallery */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 py-10 ">
        {gallery.map((image,index) => {
          return (
            <div key={index}>
              <Image
             src={`/${image}`}
                width={500}
                height={600}
                alt="gallery"
                className="w-full h-[250px] object-cover"
              />   
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Aboutsection;

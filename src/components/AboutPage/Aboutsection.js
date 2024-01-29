"use client";
import { fadeIn } from "@/variants";
import { MotionDiv } from "@/components/MotionDiv";
import Title from "../common/Title";
import TypeAnime from "../common/TypeAnime";
import Image from "next/image";
const Aboutsection = () => {
  return (
    <section className="grid text-gray py-20 bg-black min-h-screen" id="about">
      <div className="grid lg:grid-cols-2 py-20">
        <div>
          <MotionDiv
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView="show"
            className="px-10 py-10"
          >
            <Title
              text="Celestial Crafters"
              fontSize="text-4xl"
              fontWeight="font-[500]"
            >
              <h4 className="text-gray py-1 text-xl text-white/50">
                <TypeAnime />
              </h4>
            </Title>
            <p className="py-1 p text-white/80">
              Greetings! I'm <span className="text-accent">Soraya</span>, a
              passionate MERN stack developer with expertise in Vue.js . My
              journey in the world of web development began with a curiosity to
              bring ideas to life through code.
            </p>
          </MotionDiv>
        </div>
        <div>
          <MotionDiv
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView="show"
            className="px-10 py-10"
          >
           
            <p className="py-1 p text-white/80">
              Greetings! I'm <span className="text-accent">Soraya</span>, a
              passionate MERN stack developer with expertise in Vue.js . My
              journey in the world of web development began with a curiosity to
              bring ideas to life through code.
              Greetings! I'm <span className="text-accent">Soraya</span>, a
              passionate MERN stack developer with expertise in Vue.js . My
              journey in the world of web development began with a curiosity to
              bring ideas to life through code.
            </p>
          </MotionDiv>
        </div>
      </div>

      {/* gallery */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 py-10 ">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((image) => {
          return (
            <div className="">
              <Image
                src={"/about.jpg"}
                width={500}
                height={600}
                className="w-full h-full"
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Aboutsection;

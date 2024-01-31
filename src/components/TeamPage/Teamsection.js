"use client";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles

import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import required modules
import { Keyboard, Scrollbar, Pagination } from "swiper/modules";

import { FaUser, FaEnvelope } from "react-icons/fa";
import Title from "../common/Title";
const Teamsection = () => {
  const teamMembers = [
    {
      id: 1,
      name: "John Doe",
      role: "Founder & CEO",

      bio: "Passionate visionary with a commitment to innovation and excellence.",
    },
    {
      id: 2,
      name: "Jane Smith",
      role: "Lead Developer",

      bio: "Experienced developer with a knack for turning ideas into reality.",
    },
    {
      id: 3,
      name: "Bob Johnson",
      role: "Data Analyst",

      bio: "Analytical thinker skilled in deciphering complex datasets.",
    },
    {
      id: 4,
      name: "Alice Williams",
      role: "Project Manager",

      bio: "Organized and strategic project manager with a focus on delivering successful outcomes.",
    },
    {
      id: 5,
      name: "Alice Williams",
      role: "Project Manager",
      bio: "Alice, our project wizard, ensures everything runs like clockwork.",
    },
  ];

  return (
    <div id="team" className="bg-black">
      <div className="relative z-20 flex flex-col py-20 px-10 lg:px-32">
        <div>
          <Title
            text="Meet Our Exceptional Team"
            fontSize="text-4xl"
            fontWeight="font-[500]"
          />
        </div>
        <div className="w-full">
          <Swiper
            slidesPerView={1}
            centeredSlides={false}
            slidesPerGroupSkip={1}
            grabCursor={true}
            spaceBetween={20}
            keyboard={{
              enabled: true,
            }}
            breakpoints={{
              769: {
                slidesPerView: 2,
                slidesPerGroup: 1,
              },
              900: {
                slidesPerView: 3,
                slidesPerGroup: 1,
              },
              1200: {
                slidesPerView: 3,
                slidesPerGroup: 1,
              },
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Keyboard, Scrollbar, Pagination]}
            className="mySwiper"
          >
            {teamMembers.map((member) => {
              return (
                <SwiperSlide
                  key={member.id}
                  className="grid  md:grid-cols-2 xl:grid-cols-3 py-8 gap-5 rounded-lg h-[250px] overflow-x-hidden overflow-y-hidden "
                >
                  <div
                    key={member.id}
                    className=" h-full px-3 py-5 flex flex-col gap-x-6 border border-accent"
                  >
                    <FaUser className="text-4xl text-accent mb-1" />
                    <h3 className="mb-2 text-lg text-white">{member.name}</h3>
                    <p>{member.role}</p>
                    <p className="leading-normal">{member.bio}</p>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Teamsection;

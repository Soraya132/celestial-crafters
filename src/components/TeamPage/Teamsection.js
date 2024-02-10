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
import Image from "next/image";
const Teamsection = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Serah Muthoni KAMAU",
      role: "Founder & CEO",
      country: "Kenya",
      bio: "Passionate visionary committed to innovation and excellence. Leading the way towards a brighter future.",
      photo: "/sera.jpg"
    },
    {
      id: 2,
      name: "Soraya Haidary",
      role: "CTO",
      country: "Afghanistan",
      bio: "Technology virtuoso leading with innovation and determination. Pioneering advancements in tech with a global perspective.",
      photo: "/soraya.jpeg"
    },
    {
      id: 3,
      name: "Aji Ndidiamaka",
      role: "Supervisor/Executive Assistant",
      country: "Nigeria",
      bio: "Dedicated supervisor and executive assistant. Facilitates smooth operations with efficiency and attention to detail.",
      photo: "/aji.jpg"
    },
    {
      id: 4,
      name: "Alphonsus Chioma Tracy",
      role: "Project Manager",
      country: "Nigeria",
      bio: "Organized and strategic project manager with a relentless focus on delivering successful outcomes. Turning challenges into triumphs with a structured approach.",
      photo: "/tracey.jpg"
    },
    {
      id: 5,
      name: "Esther Wangui Gicheha",
      role: "Data Analyst",
      country: "Kenya",
      bio: "Experienced developer with a talent for transforming concepts into reality. Harnessing the power of data to drive informed decision-making.",
      photo: "/esther.jpeg"
    },
    {
      id: 6,
      name: "Kosisochukwu Benjamin",
      role: "IT Security Specialist",
      country: "Nigeria",
      bio: "Analytical thinker skilled in deciphering complex datasets. Ensuring the fortification of our digital infrastructure with top-notch security measures.",
      photo: "/benjamin.jpg"
    },
   
    {
      id: 7,
      name: "Cassandra Lelei",
      role: "Lead Software Developer",
      country: "Kenya",
      bio: "Creative powerhouse spearheading software development with precision and innovation. Ensures seamless project execution.",
      photo: "/cassandra.jpg"
    },
    {
      id: 8,
      name: "Mary Wanjiru kaberia",
      role: "HR Manager",
      country: "Kenya",
      bio: "Our HR Manager fosters a thriving workplace with efficiency and empathy",
      photo: "/HR.jpg"
    },
    {
      id: 9,
      name: "Emuesiri Ekevwe",
      role: "social media manager",
      country: "Nigeria",
      bio: "Lead our company's social media presence with strategic planning and engaging content creation.",
      photo: "/socail.jpg"
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
           <Swiper>
  {teamMembers.map((member) => (
    <SwiperSlide
      key={member.id}
      className="grid  md:grid-cols-2 xl:grid-cols-3 py-8 gap-5 rounded-lg h-[250px] overflow-x-hidden overflow-y-hidden"
    >
      <div
        key={member.id}
        className="h-full px-3 py-5 flex flex-col gap-x-6 border border-accent"
      >
        {member.photo ? (
          <Image
            src={member.photo} // Assuming member.photo contains the path or URL of the photo
            alt={member.name}
            height={70}
            width={70}
            className="w-[70px] h-[70px] rounded-full mx-auto mb-2 object-cover"
          />
        ) : (
          <FaUser className="text-4xl text-accent  mx-auto mb-2" />
        )}
        <h3 className="mb-2 text-lg text-white">{member.name}</h3>
        <p>{`${member.role} - ${member.country}`}</p>
        <p className="leading-normal">{member.bio}</p>
      </div>
    </SwiperSlide>
  ))}
</Swiper>;
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Teamsection;

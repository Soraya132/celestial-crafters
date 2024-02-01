import { fadeIn } from "@/variants";
import { ParticlesContainer, ProjectsBtn } from "@/components";
import { MotionDiv } from "@/components/MotionDiv";

const Herosection = () => {
  return (
    <div className="flex flex-col w-full min-h-screen relative z-30 about__image items-center justify-center">
    <div className="">
      {/* text */}
      <div className="relative z-20">
        <MotionDiv
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView="show"
          className="flex flex-col h-full gap-6 items-center text-center justify-center pt-10"
        >
          {/* title */}
          <h1 className="h1 mb-0 2xl:text-5xl text-white text-gradient ">
            Celestial Crafters
          </h1>
          {/* subtitle */}
          <h4 className="text-white texl-lg sm:text-3xl 2xl:text-4xl lg:w-[80%]">
          Your Imagination Our Craft
          </h4>
          {/* btn */}
          <div className="flex">
            <ProjectsBtn />
          </div>
        </MotionDiv>
      </div>
      {/* particles */}
      <div className="w-screen h-full absolute right-0 bottom-0">
        <div className=" w-full h-full absolute translate-z-0">
          <ParticlesContainer />
        </div>
      </div>
    </div>
  </div>
  )
}

export default Herosection
import { fadeIn } from "@/variants";
import {Title,ServicesSwiper } from "@/components";
import { MotionDiv,} from "@/components/MotionDiv";

const Servicesection = () => {
  return (
    <div id="services" className="bg-black">
      <div className="relative z-20 flex flex-col py-20 px-10 lg:px-32">
        <div>
          <Title text="Our Services" fontSize="text-4xl" fontWeight="font-[500]"/>
        </div>
        <MotionDiv
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView="show"
          className="w-full"
        >
          <ServicesSwiper />
        </MotionDiv>
      </div>
    </div>
  )
}

export default Servicesection
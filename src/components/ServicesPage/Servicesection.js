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
        <div><h1 className="text-white/60 text-lg py-5">Our major role is ensuring that the product supports user's needs and the company's overall strategy and goals.</h1></div>
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
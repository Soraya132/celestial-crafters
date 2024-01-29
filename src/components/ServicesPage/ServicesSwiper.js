// icons
import { RxArrowRight } from "react-icons/rx";
import {
  FaCode,
  FaDesktop,
  FaDatabase,
  FaServer,
  FaChartLine,
  FaQuestion,
} from "react-icons/fa";
// data
const servicesData = [
  {
    icon: <FaCode />,
    title: "Full-Stack Development",
    description:
      "Crafting robust server-side applications with the MERN stack.",
  },
  {
    icon: <FaDesktop />,
    title: "Responsive Frontend Design",
    description:
      "Creating visually appealing and user-friendly interfaces across devices.",
  },
  {
    icon: <FaDatabase />,
    title: "Custom Web Applications",
    description:
      "Building tailor-made solutions for unique business requirements.",
  },
  {
    icon: <FaServer />,
    title: "API Development and Integration",
    description:
      "Build and integrate RESTful APIs for seamless data communication.",
  },
  {
    icon: <FaChartLine />,
    title: "Performance Optimization",
    description:
      "Identify and address bottlenecks in your application for enhanced performance.",
  },
  {
    icon: <FaQuestion />,
    title: "Consultation and Support",
    description:
      "Receive expert advice on technology choices, architecture decisions, and best practices.",
  },
];
const ServicesSwiper = () => {
  return (
    <div className="grid  md:grid-cols-2 xl:grid-cols-3 py-8 gap-3 ">
        {servicesData.map((service) => {
          return (
            <div >
              <div className=" h-full rounded-lg px-6 py-8 flex flex-col gap-x-6 group justify-center items-center ">
                {/* icon */}
                <div className="text-4xl text-accent mb-4">{service.icon}</div>
                {/* title and description */}
                <div className="mb-8 text-center">
                  <div className="mb-2 text-lg">{service.title}</div>
                  <p className="leading-normal">
                    {service.description}
                  </p>
                </div>
                {/* arrow */}
                <div className="text-xl">
                  <RxArrowRight className=" text-white group-hover:-rotate-45 group-hover:text-accent duration-300" />
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};
export default ServicesSwiper;

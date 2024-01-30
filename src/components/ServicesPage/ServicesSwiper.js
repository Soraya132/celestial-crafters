// icons
import { RxArrowRight } from "react-icons/rx";
import {
  FaCode,
  
  FaProjectDiagram,
  FaDatabase,
  FaShieldAlt ,
  FaChartLine,
  FaQuestion,
} from "react-icons/fa";
// data
const servicesData = [
  {
    icon: <FaCode />,
    title: "Web Development",
    description:"Crafting responsive and user-friendly websites and applications tailored to your unique needs.",
      

  },
  {
    icon: <FaProjectDiagram/>,
    title: "Project Management",
    description:
      `Efficiently plan, execute, and oversee projects from inception to successful completion.`,
  },
  {
    icon: <FaDatabase />,
    title: "Data Analytics",
    description:
     `Transform your data into actionable insights with our data analytics services.`
  },
  {
    icon: <FaShieldAlt />,
    title: "Cybersecurity",
    description:
      `Protect your digital assets with our robust cybersecurity solutions. From threat detection to data encryption.`
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
        {servicesData.map((service,index) => {
          return (
            <div key={index}>
              <div className=" h-full rounded-lg px-6 py-8 flex flex-col gap-x-6 group justify-center items-center ">
                {/* icon */}
                <div className="text-4xl text-accent mb-4">{service.icon}</div>
                {/* title and description */}
                <div className="mb-8 text-center">
                  <div className="mb-2 text-lg text-white">{service.title}</div>
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

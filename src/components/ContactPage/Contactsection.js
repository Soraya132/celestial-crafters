import { ContactInfo } from "@/data";;
import { Title, } from "@/components";
import { fadeIn } from "@/variants";
import Link from "next/link";
import ContactForm from "@/components/ContactPage/ContactForm";
import { MotionDiv } from "@/components/MotionDiv";

const Contactsection = () => {
  return (
    <div className="grid bg-black min-h-screen px-10 lg:px-32 items-center py-20 " id="contact">
    <Title text="Let's connect" fontSize="text-4xl" fontWeight="font-[500]" />
    <section className="grid lg:grid-cols-2 gap-5 relative z-20">
      <MotionDiv
        variants={fadeIn("up", 0.4)}
        initial="hidden"
        whileInView="show"
        className="grid gap-5"
      >
        {ContactInfo.map((item, index) => {
          return (
            <Link
              href={item.page}
              className="get__in_touch group overflow-x-auto no-scrollbar"
              target={item.page === '' ? '' : '_blank'}
              key={index + item.info}
            >
              <div className="text-accent">{item.icon}</div>
              <span className="text-white group-hover:text-accent duration-500">
                {item.info}
              </span>
            </Link>
          );
        })}
      </MotionDiv>
      <MotionDiv
        variants={fadeIn("up", 0.4)}
        initial="hidden"
        whileInView="show"
      >
        <ContactForm/>
      </MotionDiv>
    </section>
  </div>
  )
}

export default Contactsection
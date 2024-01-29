
import Aboutsection from "@/components/AboutPage/Aboutsection";
import Herosection from "@/components/HomePage/Herosection";
import Servicesection from "@/components/ServicesPage/Servicesection";
import Footersection from "@/components/Footer/Footersection";
import Contactsection from "@/components/ContactPage/Contactsection";

function Home() {
  return (
   <div className="overflow-x-hidden">
    <Herosection/>
    <Aboutsection/>
    <Servicesection/>
    <Contactsection/>
    <Footersection/>
   </div>
  );
}
export default Home;

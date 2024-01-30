
import { Herosection,Aboutsection,Servicesection,Teamsection,Contactsection,Footersection } from "@/components";
function Home() {
  return (
   <div className="overflow-x-hidden">
    <Herosection/>
    <Aboutsection/>
    <Servicesection/>
    <Teamsection/>
    <Contactsection/>
    <Footersection/>
   </div>
  );
}
export default Home;

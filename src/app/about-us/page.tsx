import About from "@/components/About/About";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Newsletter from "@/components/Newsletter/Newsletter";

export default function AboutUs() {
  return (
   <div>
    <Navbar />
    <About />
    <Newsletter />
    <Footer />
   </div>
  );
}
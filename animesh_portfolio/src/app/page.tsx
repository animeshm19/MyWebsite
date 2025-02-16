import { Banner } from "@/components/Banner";
import { Features } from "@/components/Features";
import { Hero } from "@/components/Hero";
import { LogoTicker } from "@/components/LogoTicker";
import { Navbar } from "@/components/Navbar";
import { ProductShowcase } from "@/components/ProductShowcase";
import { WorldMap } from "@/components/WorldMap";
import { FAQs } from "@/components/FAQs";
// import { CallToAction } from "@/components/CallToAction";
// import { Footer } from "@/components/Footer";





// transition-all duration-300 hover:scale-110 [border-image:linear-gradient(to_top_right,#001332_82,#002b72_54)_30] cursor-pointer hover:bg-gradient-to-t from-blue-800 via-blue-00 to-blue-00 transition-all duration-300 ease-in-out





export default function Home() {
  return (
    <>
    <Banner />
    <Navbar />
    <Hero />
    <LogoTicker />
    <Features />
    <WorldMap />
    <ProductShowcase />
    <FAQs />
  </>
  );

}

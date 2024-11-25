import { HeroSection } from "@/components/Home/Components/HeroSection";
import TeamSection from "@/components/Home/Components/Team";
import Footer from "@/components/Home/Components/Footer";
import { WhyLinguaTurk } from "@/components/Home/Components/WhyLinguaTurk";
import { PopularCourses } from "@/components/Home/Components/PopularCourses";
import { FAQSection } from "@/components/Home/Components/FAQSection";
import Navbar from "@/components/Home/Components/Navbar";
import { CTASection } from "@/components/Home/Components/CTASection";

export default function Home() {

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">


      <Navbar/>
      <main className="flex-grow">
        <HeroSection/>
        <PopularCourses/>
        <WhyLinguaTurk/>
        <CTASection/>
        <TeamSection/>
        <FAQSection/>
      </main>
      <div className="flex justify-center items-center">
      <Footer />

    </div>
    </div>
  );
}

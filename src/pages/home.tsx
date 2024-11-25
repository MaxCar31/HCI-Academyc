import { HeroSection } from "@/components/sectionsHome/HeroSection";
import TeamSection from "@/components/sectionsHome/Team";
import Footer from "@/components/sectionsHome/Footer";
import { WhyLinguaTurk } from "@/components/sectionsHome/WhyLinguaTurk";
import { PopularCourses } from "@/components/sectionsHome/PopularCourses";
import { FAQSection } from "@/components/sectionsHome/FAQSection";
import Navbar from "@/components/sectionsHome/Navbar";
import { CTASection } from "@/components/sectionsHome/CTASection";

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

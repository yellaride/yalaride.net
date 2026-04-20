import HeroSection from "./components/HeroSection";
import PlatformMarquee from "./components/PlatformMarquee";
import AboutSection from "./components/AboutSection";
import WhyPartner from "./components/WhyPartner";
import OperatorDashboard from "./components/OperatorDashboard";
import HowToStart from "./components/HowToStart";
import ContactSection from "./components/ContactSection";


export default function Home() {
  return (
    <main className="min-h-screen bg-[#080808]">
      <HeroSection />
      <PlatformMarquee />
      <AboutSection />
      <WhyPartner />
      <OperatorDashboard />
      <HowToStart />
      <ContactSection />
    </main>
  );
}

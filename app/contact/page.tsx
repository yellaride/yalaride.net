import Navbar from "../components/Navbar";
import ContactSection from "../components/ContactSection";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar forceWhite />
      <ContactSection />
    </main>
  );
}

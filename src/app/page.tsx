import Navbar from "@/components/navbar";
import LandingPage from "@/components/landing-page";
import ProjectsPage from "@/components/projects-page";
import AboutPage from "@/components/about-page";
import ContactPage from "@/components/contact-page";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full justify-center scroll-smooth">
      <Navbar />
      <LandingPage />
      <ProjectsPage />
      <AboutPage />
      <ContactPage />
      <Footer />
    </div>
  );
}

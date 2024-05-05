import AboutMe from "../AboutMe";
import ContactMe from "../ContactMe";
import Footer from "../Footer";
import HeroSection from "../HeroSection";
import MyPortfolio from "../MyPortfolio";
import MySkills from "../MySkills";
import Honours from "../Honours";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutMe />
      <MySkills />
      <MyPortfolio />
      <Honours />
      <ContactMe />
      <Footer />
    </>
  );
}
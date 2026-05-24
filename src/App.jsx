import { useEffect } from "react";
import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./components/Benefits";
import Capabilities from "./components/Capabilities";
import Collaboration from "./components/Collaboration";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import Roadmap from "./components/Roadmap";
import Services from "./components/Services";

const App = () => {
  // Scroll to the hashed section once the SPA has mounted (deep links + 404 redirect).
  useEffect(() => {
    if (!window.location.hash) return;
    const id = window.location.hash.slice(1);
    requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    });
  }, []);

  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Benefits />
        <Capabilities />
        <Collaboration />
        <Services />
        <Roadmap />
        <Pricing />
        <Footer />
      </div>

      <ButtonGradient />
    </>
  );
};

export default App;

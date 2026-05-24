import { useEffect, useState } from "react";
import { disablePageScroll, enablePageScroll } from "scroll-lock";

import { navigation } from "../constants";
import Button from "./Button";
import MenuSvg from "../assets/svg/MenuSvg";
import { HamburgerMenu } from "./design/Header";
import Modal from "./Modal";
import GetStartedContent from "./GetStartedContent";

const SECTION_IDS = [
  "hero",
  "features",
  "capabilities",
  "how-to-use",
  "roadmap",
  "pricing",
];

const Header = () => {
  const [openNavigation, setOpenNavigation] = useState(false);
  const [getStarted, setGetStarted] = useState(false);
  const [activeHash, setActiveHash] = useState("");

  // Scroll-spy: highlight the nav item for the section currently in view.
  useEffect(() => {
    const els = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      Boolean
    );
    if (!els.length) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveHash("#" + e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = () => {
    if (!openNavigation) return;
    enablePageScroll();
    setOpenNavigation(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${
        openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"
      }`}
    >
      <div className="container flex items-center max-lg:py-4">
        <a
          className="flex items-center w-[12rem] xl:mr-8"
          href="#hero"
          aria-label="techanv.ai"
        >
          <span className="font-code text-xl font-bold tracking-tight text-n-1">
            <span className="text-color-1">&gt;_</span> techanv
            <span className="text-color-1">.ai</span>
          </span>
        </a>

        <nav
          className={`${
            openNavigation ? "flex" : "hidden"
          } fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
        >
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
            {navigation.map((item) => {
              const isActive = item.url === activeHash;
              return (
                <a
                  key={item.id}
                  href={item.url}
                  onClick={handleClick}
                  aria-current={isActive ? "true" : undefined}
                  className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 ${
                    item.onlyMobile ? "lg:hidden" : ""
                  } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${
                    isActive ? "z-2 lg:text-n-1" : "lg:text-n-1/50"
                  } lg:leading-5 lg:hover:text-n-1 xl:px-12`}
                >
                  {item.title}
                </a>
              );
            })}
          </div>

          <HamburgerMenu />
        </nav>

        <Button
          className="hidden lg:flex"
          onClick={() => setGetStarted(true)}
        >
          Start free
        </Button>

        <Button
          className="ml-auto lg:hidden"
          px="px-3"
          aria-label="Menu"
          aria-expanded={openNavigation}
          onClick={toggleNavigation}
        >
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>

      <Modal
        open={getStarted}
        onClose={() => setGetStarted(false)}
        eyebrow="Get started"
        title="Start free with Techanv AI"
      >
        <GetStartedContent />
      </Modal>
    </header>
  );
};

export default Header;

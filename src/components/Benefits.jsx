import { useState } from "react";
import { benefits } from "../constants";
import Heading from "./Heading";
import Section from "./Section";
import Arrow from "../assets/svg/Arrow";
import { GradientLight } from "./design/Benefits";
import ClipPath from "../assets/svg/ClipPath";
import Modal from "./Modal";

const Benefits = () => {
  const [active, setActive] = useState(null);

  return (
    <Section id="features">
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          title="Chat Smarter, Not Harder with techanv"
        />

        <div className="flex flex-wrap gap-10 mb-10">
          {benefits.map((item) => (
            <div
              role="button"
              tabIndex={0}
              onClick={() => setActive(item)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setActive(item);
                }
              }}
              className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] cursor-pointer transition-transform hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-color-1 rounded-[1.5rem] md:max-w-[24rem]"
              style={{
                backgroundImage: `url(${item.backgroundUrl})`,
              }}
              key={item.id}
            >
              <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem]">
                <h5 className="h5 mb-5">{item.title}</h5>
                <p className="body-2 mb-6 text-n-3">{item.text}</p>
                <div className="flex items-center mt-auto">
                  <img
                    src={item.iconUrl}
                    width={48}
                    height={48}
                    alt={item.title}
                  />
                  <p className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider">
                    Explore more
                  </p>
                  <Arrow />
                </div>
              </div>

              {item.light && <GradientLight />}

              <div
                className="absolute inset-0.5 bg-n-8"
                style={{ clipPath: "url(#benefits)" }}
              >
                <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                  {item.imageUrl && (
                    <img
                      src={item.imageUrl}
                      width={380}
                      height={362}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              </div>

              <ClipPath />
            </div>
          ))}
        </div>
      </div>

      <Modal
        open={!!active}
        onClose={() => setActive(null)}
        eyebrow="AI capability"
        title={active?.title}
      >
        <p className="mb-6">{active?.text}</p>
        <a
          href="#pricing"
          onClick={() => setActive(null)}
          className="inline-flex items-center justify-center h-11 px-7 rounded-full bg-color-1 font-code text-xs font-bold uppercase tracking-wider text-n-8 transition-colors hover:bg-color-2"
        >
          Start free
        </a>
      </Modal>
    </Section>
  );
};

export default Benefits;

import { useState } from "react";
import { check } from "../assets";
import { pricing } from "../constants";
import Button from "./Button";
import Modal from "./Modal";
import GetStartedContent from "./GetStartedContent";

const PricingList = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex gap-[1rem] max-lg:flex-wrap">
      {pricing.map((item) => (
        <div
          key={item.id}
          className="w-[19rem] max-lg:w-full h-full px-6 bg-n-8 border border-n-6 rounded-[2rem] lg:w-auto even:py-14 odd:py-8 odd:my-4"
        >
          <h4 className="h4 mb-4 text-color-1">{item.title}</h4>

          <p className="body-2 min-h-[4rem] mb-3 text-n-1/50">
            {item.description}
          </p>

          <div className="flex items-center h-[5.5rem] mb-6">
            {item.price && (
              <>
                <div className="h3">$</div>
                <div className="text-[5.5rem] leading-none font-bold">
                  {item.price}
                </div>
              </>
            )}
          </div>

          {item.price ? (
            <Button className="w-full mb-6" white onClick={() => setOpen(true)}>
              Get started
            </Button>
          ) : (
            <Button
              className="w-full mb-6"
              href="https://techanv.com"
            >
              Contact sales
            </Button>
          )}

          <ul>
            {item.features.map((feature, index) => (
              <li
                key={index}
                className="flex items-start py-5 border-t border-n-6"
              >
                <img src={check} width={24} height={24} alt="Check" />
                <p className="body-2 ml-4">{feature}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        eyebrow="Get started"
        title="Start free with Techanv AI"
      >
        <GetStartedContent />
      </Modal>
    </div>
  );
};

export default PricingList;

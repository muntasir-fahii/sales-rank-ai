import React, { useState } from "react";

import { GoPlus } from "react-icons/go";
import { RxMinus } from "react-icons/rx";

const faqs = [
  {
    question: "Why should I choose Humestic?",
    answer:
      "Bottleneck mice my capacity is full, nor incentivization we need to start advertising on social media, or helicopter view, for what the. Let's put a pin in that we need to build it so that it scales, are there any leftovers in the kitchen?, if you're not hurting you're not winning loop back",
  },
  {
    question: "I like your works, how do we start a project?",
    answer:
      "Yes! We offer a 14-day free trial with full access to all features. No credit card required.",
  },
  {
    question: "What info is required to get a quotation?",
    answer:
      "You can reach our support team 24/7 via live chat, email, or through your dashboard.",
  },
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="lg:py-16 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="flex gap-28">
          <span className=" w-40 font-questrial">
            Frequently asked questions
          </span>
          <h2 className="text-5xl w-[740px] font-questrial">
            Constant collaboration is how we roll. Let's see if we are a good
            fit.
          </h2>
        </div>

        {/* Faqs */}
        <div className=" mx-auto px-4 py-12">
          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className=" border-b border-b-[#CCCCCC] overflow-hidden "
                >
                  <button
                    onClick={() => toggle(index)}
                    className="w-full flex justify-between items-center text-left py-5 hover:bg-gray-50 transition"
                  >
                    <div className="flex items-center justify-center gap-8">
                      <span className="text-[#8B7D4C] font-questrial text-lg font-semibold">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="text-2xl font-questrial text-black">
                        {faq.question}
                      </span>
                    </div>
                    <div className="text-black mt-1">
                      {isOpen ? <RxMinus size={25} /> : <GoPlus size={25} />}
                    </div>
                  </button>
                  {isOpen && (
                    <div className="px-16 pb-5 text-sm font-inter text-[#636363]">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;

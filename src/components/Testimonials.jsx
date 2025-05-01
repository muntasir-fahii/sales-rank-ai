import React, { useState } from "react";
import { IoMdArrowForward, IoMdArrowBack } from "react-icons/io";

const testimonials = [
  {
    name: "Alice Johnson",
    title: "Marketing Lead at BrightIdeas",
    text: "“They thoroughly analyze our industry and target audience, allowing them to develop customized campaigns that effectively reach and engage our customers. Their creative ideas and cutting-edge techniques have helped us stay ahead of the competition.”",
    image: "https://i.pravatar.cc/100?img=32",
  },
  {
    name: "Mark Chen",
    title: "CEO of Basecamp Corp",
    text: "“Their team consistently delivers strategic insights that align perfectly with our brand vision. From concept to execution, every campaign is backed by data and creativity, driving real engagement and measurable results.",
    image: "https://i.pravatar.cc/100?img=12",
  },
  {
    name: "Sophie Lee",
    title: "Product Designer at UXHive",
    text: "“Working with them feels like having an extension of our in-house team. They take the time to understand our goals and deliver fresh, innovative solutions that not only resonate with our audience but also boost our ROI”",
    image: "https://i.pravatar.cc/100?img=45",
  },
  {
    name: "David Kim",
    title: "DevOps Engineer at Cloudify",
    text: "“What sets them apart is their ability to blend analytical thinking with bold creativity. Their campaigns are always tailored, impactful, and timed to perfection—helping us grow our market presence in a highly competitive space”",
    image: "https://i.pravatar.cc/100?img=15",
  },
  {
    name: "Emma Rivera",
    title: "CTO at Innovatech",
    text: "“They bring a rare combination of technical expertise and brand storytelling. Their proactive approach and attention to detail have transformed how we connect with customers across channels.”",
    image: "https://i.pravatar.cc/100?img=22",
  },
];

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const total = testimonials.length;
  const current = testimonials[currentIndex];

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === total - 1 ? 0 : prev + 1));
  };

  const formatIndex = (num) => String(num).padStart(2, "0");

  return (
    <section className="lg:py16 bg-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="flex gap-8 flex-col rounded-xl p-6 sm:p-8 transition-all">
          <p className="text-[#010205] text-xl mb-4">{current.text}</p>
          <div className="flex justify-between items-center">
            <div className="flex gap-6 justify-center ite">
              <div>
                <img
                  src={current.image}
                  alt={current.name}
                  className="w-14 h-14 rounded-full"
                />
              </div>

              <div>
                <h4 className="text-lg font-manrope font-semibold text-[#010205]">
                  {current.name}
                </h4>
                <p className="text-sm text-[#878C91]">{current.title}</p>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-2">
              <button
                onClick={prevSlide}
                className="py-1 px-3 rounded-full hover:bg-[#00245F] hover:text-white transition"
                aria-label="Previous"
              >
                <IoMdArrowBack size={24} />
              </button>

              <span className="text-sm font-medium">
                <span style={{ color: "#00245F" }}>
                  {formatIndex(currentIndex + 1)}
                </span>
                <span style={{ color: "#01020566" }}>
                  {" "}
                  / {formatIndex(total)}
                </span>
              </span>

              <button
                onClick={nextSlide}
                className="py-1 px-3 rounded-full hover:bg-[#00245F] hover:text-white transition"
                aria-label="Next"
              >
                <IoMdArrowForward size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;

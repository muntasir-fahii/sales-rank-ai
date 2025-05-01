import React, { useState, useRef, useEffect } from "react";
import Load from "../assets/Load";

// Icons
import { FaArrowUp } from "react-icons/fa6";
import { TfiReload } from "react-icons/tfi";
import { BiLike, BiDislike } from "react-icons/bi";
import { FiClipboard } from "react-icons/fi";
import { HiOutlineSpeakerWave } from "react-icons/hi2";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { BiSolidMessageSquareDetail } from "react-icons/bi";
import { AiOutlineStock } from "react-icons/ai";
import { PiFilmScriptFill } from "react-icons/pi";

const ChatBox = () => {
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hello! I'm your AI sales coach. How can I help you improve your sales performance today?",
    },
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  const suggestions = [
    "How do I handle objections?",
    "Give me a cold email template",
    "Closing techniques",
    "Negotiation tips",
  ];

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = (e) => {
    e.preventDefault();
    if (input.trim() === "") return;

    const newMessage = { sender: "user", text: input.trim() };
    setMessages([...messages, newMessage]);

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "Thanks for your message!" },
      ]);
    }, 500);

    setInput("");
  };

  const handleSuggestionClick = (text) => {
    const newMessage = { sender: "user", text };
    setMessages([...messages, newMessage]);

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "Here's more info about that!" },
      ]);
    }, 500);
  };

  return (
    <section className="bg-gradient-to-r from-[#103570] to-[#004FCE] px-5 lg:px-0 py-10 lg:py-16 h-full">
      <div className="container mx-auto max-w-6xl flex flex-col gap-10">
        <div className="flex flex-col text-center lg:text-start gap-2">
          <p className="font-questrial text-[#FCE38A] text-base">
            Live AI Coach
          </p>
          <h2 className="text-3xl md:text-5xl text-white font-questrial">
            Take a Suggestion Coaching{" "}
          </h2>
        </div>

        {/* Chat Box */}
        <div className="flex flex-col lg:flex-row h-full items-center gap-6">
          <div className="w-full max-w-2xl bg-white border border-solid border-[#CDCDCD] shadow-lg rounded-lg flex flex-col h-[450px]">
            {/* Header */}
            <div className="bg-white text-[#1B1B1B] px-4 py-3 rounded-t-lg">
              <h2 className="text-lg font-semibold font-manrope">
                AI Sales Coach
              </h2>
            </div>

            {/* Messages */}
            <div
              className="flex-1 overflow-y-auto px-4 py-2 space-y-4 bg-[#F2F3F3]"
              style={{ overscrollBehavior: "contain" }}
            >
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex ${
                    msg.sender === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  {msg.sender === "bot" && (
                    <div className="mr-2">
                      <img
                        src="https://r2.erweima.ai/imgcompressed/compressed_553a5e23bbef42c0204e06f47d98c04b.webp"
                        alt="Bot"
                        className="w-8 h-8 rounded-full"
                      />
                    </div>
                  )}
                  <div
                    className={`px-4 py-2 rounded-lg max-w-[75%] font-lato ${
                      msg.sender === "user"
                        ? "bg-[#00286814] text-right ml-auto"
                        : "bg-white text-left"
                    }`}
                  >
                    <p className="text-sm text-gray-800">{msg.text}</p>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Suggestions */}
            <div className="px-3 py-2 border-t bg-white flex flex-wrap gap-2">
              {suggestions.map((text, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSuggestionClick(text)}
                  className="bg-[#00286814] text-xs text-[#002868] px-3 py-1 rounded-full hover:bg-gray-300 transition"
                >
                  {text}
                </button>
              ))}
            </div>

            {/* Input */}
            <form
              onSubmit={handleSend}
              className="p-3 border-t flex flex-col lg:flex-row gap-2"
            >
              <input
                type="text"
                className="flex-1 font-manrope px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#002868]"
                placeholder="Ask anything you need"
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
              <button
                type="submit"
                className="bg-[#002868] text-white px-4 flex justify-center items-center gap-2 py-2 rounded-lg font-geist hover:bg-black transition"
              >
                Send
                <span>
                  <FaArrowUp />
                </span>
              </button>
            </form>
          </div>

          {/* Icons */}
          <div className="bg-[#F2F3F3] flex lg:flex-col  gap-8 py-4 px-4 rounded-full">
            <span className="text-xl">
              <TfiReload />
            </span>
            <span className="text-xl">
              <BiLike />
            </span>
            <span className="text-xl">
              <BiDislike />
            </span>
            <span className="text-xl">
              <FiClipboard />
            </span>
            <span className="text-xl">
              <HiOutlineSpeakerWave />
            </span>
          </div>

          <div className="flex flex-col h-[450px] px-5 lg:px-0 gap-6">
            <div className="up bg-[#EFEFEF] p-6 rounded-lg flex flex-col gap-4">
              <h3 className="text-2xl font-manrope font-medium">
                Real-time Analysis
              </h3>
              <div className=" bg-white flex flex-col gap-4 p-2 rounded-lg">
                <div className="flex items-center gap-1">
                  <span className="text-[#06B217]">
                    <IoIosCheckmarkCircle />
                  </span>
                  <p className="font-manrope text-base font-medium">
                    Confidence Level
                  </p>
                </div>
                <div className="flex items-center gap-1">
                  <span>
                    <Load />
                  </span>
                  <p className="text-[#6D6D6D] text-xs">60%</p>
                </div>
              </div>
              <div className=" bg-white flex flex-col gap-4 p-2 rounded-lg">
                <div className="flex items-center gap-1">
                  <span className="text-[#002868]">
                    <AiOutlineStock />
                  </span>
                  <p className="font-manrope text-base font-medium">
                    Confidence Level
                  </p>
                </div>
                <div className="flex items-center gap-1">
                  <p className="text-[#909090] text-sm font-lato">
                    85% improvement in objection handling
                  </p>
                </div>
              </div>
            </div>
            <div className="up bg-[#EFEFEF] p-6 rounded-lg flex flex-col gap-4">
              <h3 className="text-2xl font-manrope font-medium">
                Quick Actions
              </h3>

              <div className="flex items-center gap-6">
                <div className=" bg-white flex flex-col gap-2 p-2 rounded-lg w-full">
                  <span className="text-[#002868] text-2xl">
                    <PiFilmScriptFill />
                  </span>
                  <p className="font-manrope text-base text-[#171D25] font-medium">
                    Generate Script
                  </p>
                </div>
                <div className=" bg-white flex flex-col gap-2 p-3 rounded-lg w-full">
                  <span className="text-[#002868] text-2xl">
                    <BiSolidMessageSquareDetail />
                  </span>
                  <p className="font-manrope text-base text-[#171D25] font-medium">
                    Practice Pitch
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChatBox;

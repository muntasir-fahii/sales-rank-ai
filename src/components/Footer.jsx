import Logo2 from "../assets/Logo2";
//icons
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { ImLinkedin2 } from "react-icons/im";
import { BsTelephoneFill } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="py-10 px-5 lg:px-0 lg:py-16">
      <div className="container mx-auto max-w-6xl flex flex-col justify-between gap-10">
        <div className="up bg-gradient-to-r from-[#103570] to-[#004FCE] py-6 lg:py-16 h-full flex flex-col justify-center items-center gap-4 rounded-2xl text-center">
          <div className="flex flex-col gap-2">
            <h3 className=" text-xl lg:text-3xl text-white font-manrope ">
              Ready to Hire Smarter?
            </h3>
            <p className="text-xs font-manrope text-[#B9BDC7]">
              Unlock Exclusive Insights Subscribe to Our Newsletter
            </p>
          </div>
          <button className="bg-[#FCE38A] text-[#00245F] text-xs py-1 lg:py-3 px-2 lg:px-4 rounded-full hover:bg-[#00245F] hover:text-[#FCE38A] transition">
            Join Now
          </button>
        </div>

        <div className="py-6 lg:py-10 bottom flex flex-col lg:flex-row justify-between gap-8">
          <div className="left flex flex-col gap-4">
            <button href="#">
              <div className="flex items-center gap-2">
                <span>
                  <Logo2 />
                </span>
                <h3 className="font-manrope font-semibold text-2xl">Logo</h3>
              </div>
            </button>
            <p className="font-manrope text-sm lg:w-1/2 text-[#335386]">
              SalesRank.AI offers a comprehensive suite of AI-powered solutions
              to help you find expert sales professionals who can elevate every
              aspect of your business. From performance rankings and skill
              verification to industry benchmarking and real-time analytics, we
              provide the insights and tools to optimize your sales strategy and
              drive growth.
            </p>
            <div className="socials flex w-fit gap-2">
              <button className="bg-white rounded-full p-1 text-[#002868] hover:bg-[#002868] hover:text-white transition">
                <FaFacebookF />
              </button>
              <button className="bg-white rounded-full p-1 text-[#002868] hover:bg-[#002868] hover:text-white transition">
                <FaTwitter />
              </button>
              <button className="bg-white rounded-full p-1 text-[#002868] hover:bg-[#002868] hover:text-white transition">
                <ImLinkedin2 />
              </button>
              <button className="bg-white rounded-full p-1 text-[#002868] hover:bg-[#002868] hover:text-white transition">
                <FaInstagram />
              </button>
            </div>
          </div>

          <div className="right grid grid-cols-2 lg:grid-cols-3 justify-between w-full gap-2">
            <div className="flex flex-col gap-2 items-start justify-between">
              <p className="font-manrope font-medium text-base text-[#001C4A]">
                Navigation
              </p>
              <button className="font-manrope text-sm text-[#335386] hover:underline">
                Service
              </button>
              <button className="font-manrope text-sm text-[#335386] hover:underline">
                Agency
              </button>
              <button className="font-manrope text-sm text-[#335386] hover:underline">
                Case Study
              </button>
              <button className="font-manrope text-sm text-[#335386] hover:underline">
                Resource
              </button>
              <button className="font-manrope text-sm text-[#335386] hover:underline">
                Contact
              </button>
            </div>

            <div className="flex flex-col gap-4 items-start justify-between h-fit">
              <p className="font-manrope font-medium text-base text-[#001C4A]">
                Licence
              </p>
              <button className="font-manrope text-sm text-[#335386] hover:underline">
                Privacy Policy
              </button>
              <button className="font-manrope text-sm text-[#335386] hover:underline">
                Copyright
              </button>
              <button className="font-manrope text-sm text-[#335386] hover:underline">
                Email Address
              </button>
            </div>

            <div className="flex flex-col gap-4 items-start justify-between h-fit">
              <p className="font-manrope font-medium text-base text-[#001C4A]">
                Contact
              </p>
              <div className="flex justify-center items-center gap-2">
                <span className="text-[#002868]">
                  <BsTelephoneFill />
                </span>
                <button className="font-manrope text-sm text-[#335386] hover:underline">
                  (406) 555-0120
                </button>
              </div>
              <div className="flex justify-center items-center gap-2">
                <span className="text-[#002868]">
                  <IoMdMail />
                </span>
                <button className="font-manrope text-sm text-[#335386] hover:underline">
                  Hey@boostim.com
                </button>
              </div>
              <div className="flex justify-center  gap-2">
                <span className="text-[#002868]">
                  <FaLocationDot />
                </span>
                <button className="font-manrope text-xs text-[#335386] hover:underline text-left">
                  2972 Westheimer Rd. Santa Ana, Illinois 85486
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

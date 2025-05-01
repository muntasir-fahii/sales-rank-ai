const Courses = () => {
  return (
    <section className="px-5 lg:px-0 py-10 lg:py-16">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col lg:flex-row lg:justify-between items-center gap-4">
            <div className="w-full md:w-[70%] flex flex-col items-center lg:items-start gap-4">
              <h2 className="text-2xl md:text-4xl font-manrope font-semibold">
                Our Courses
              </h2>
              <p className="text-[#59595A] font-manrope font-normal text-base">
                Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam
                eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et.
                Ac cum eget habitasse in velit fringilla feugiat senectus in.
              </p>
            </div>
            <button className="bg-[#002868] text-white px-4  py-2 rounded-lg font-geist hover:bg-black transition">
              View All
            </button>
          </div>

          <div className="flex flex-col lg:flex-row justify-center items-center gap-6">
            {/* Card */}
            <div className="bg-[#F0F0F0] border border-solid border-[#F1F1F3] lg:w-1/2 p-6 flex flex-col gap-6 rounded-lg">
              <div className="w-full h-full rounded-lg">
                <img
                  src="https://res.cloudinary.com/dcgreqowu/image/upload/v1746055024/image_u7eujm.png"
                  alt="card-1"
                  className="w-full h-full"
                />
              </div>

              <div className="flex items-center gap-2 justify-between">
                <div className="flex justify-center gap-2 lg:gap-6">
                  <span className="bg-white text-[#4C4C4D] p-2 rounded-lg font-manrope font-normal text-sm ">
                    4 Weeks
                  </span>
                  <span className="bg-white text-[#4C4C4D] p-2 rounded-lg font-manrope font-normal text-sm ">
                    Beginner
                  </span>
                </div>
                <span className="text-[#262626] text-base font-manrope font-medium">
                  By John Smith
                </span>
              </div>

              <div className="flex flex-col gap-4 justify-center">
                <h3 className="font-manrope text-[#262626] font-semibold text-xl">
                  Web Design Fundamentals
                </h3>
                <p className="text-[#59595A] font-manrope font-normal text-base w-[90%]">
                  Learn the fundamentals of web design, including HTML, CSS, and
                  responsive design principles. Develop the skills to create
                  visually appealing and user-friendly websites.
                </p>
                <button className="bg-[#002868] text-white px-4  py-2 rounded-lg font-geist hover:bg-black transition">
                  Get it Now
                </button>
              </div>
            </div>

            {/* Card */}
            <div className="bg-[#F0F0F0] border border-solid border-[#F1F1F3] lg:w-1/2 p-6 flex flex-col gap-6  rounded-lg">
              <div className="w-full h-full rounded-lg">
                <img
                  src="https://res.cloudinary.com/dcgreqowu/image/upload/v1746055037/image_zfgyzp.png"
                  alt="card-2"
                  className="w-full h-full"
                />
              </div>

              <div className="flex items-center gap-2 justify-between">
                <div className="flex justify-center gap-2 lg:gap-6">
                  <span className="bg-white text-[#4C4C4D] p-2 rounded-lg font-manrope font-normal text-sm ">
                    4 Weeks
                  </span>
                  <span className="bg-white text-[#4C4C4D] p-2 rounded-lg font-manrope font-normal text-sm ">
                    Beginner
                  </span>
                </div>
                <span className="text-[#262626] text-base font-manrope font-medium">
                  By John Smith
                </span>
              </div>

              <div className="flex flex-col gap-4 justify-center">
                <h3 className="font-manrope text-[#262626] font-semibold text-xl">
                  Web Design Fundamentals
                </h3>
                <p className="text-[#59595A] font-manrope font-normal text-base w-[90%]">
                  Learn the fundamentals of web design, including HTML, CSS, and
                  responsive design principles. Develop the skills to create
                  visually appealing and user-friendly websites.
                </p>
                <button className="bg-[#002868] text-white px-4  py-2 rounded-lg font-geist hover:bg-black transition">
                  Get it Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;

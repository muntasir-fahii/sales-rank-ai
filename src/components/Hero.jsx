const Hero = () => {
  return (
    <section className="py-10 px-5 lg:px-0 lg:py-16">
      <div className="container mx-auto max-w-6xl flex flex-col-reverse lg:flex-row items-center justify-center gap-20">
        <div className="w-full md:w-1/2 flex flex-col gap-9 h-full">
          <h1 className="text-5xl text-center md:text-start md:text-7xl font-manrope md:w-[460px]">
            Your AI-Powered Sales Coach
          </h1>
          <div className="grid lg:grid-cols-2 justify-center md:justify-normal md:w-[90%] items-center">
            <img
              src="https://res.cloudinary.com/dcgreqowu/image/upload/v1746034752/image-2_sv631s.png"
              alt="Support"
              className="w-[200px] h-[184px]"
            />
            <p className="text-[#05131DB2] font-manrope text-lg w-72">
              Get real-time coaching, script suggestions, and deal-closing
              strategies powered by advanced AI technology.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex  w-60 items-center gap-4">
              <img
                src="https://res.cloudinary.com/dcgreqowu/image/upload/v1746040524/backup_table_ul8iz6.png"
                alt="backup-table"
                className="w-14 h-14 bg-white p-1 rounded-lg drop-shadow-lg"
              />
              <div className="flex flex-col justify-center">
                <h4 className="text-2xl text-[#00245F] font-manrope font-semibold">
                  2000+
                </h4>
                <p className="font-manrope text-base text-[#05131DB2]">
                  Your protection
                </p>
              </div>
            </div>
            <div className="flex w-60 items-center gap-4">
              <img
                src="https://res.cloudinary.com/dcgreqowu/image/upload/v1746040524/atr_df4psm.png"
                alt="backup-table"
                className="w-14 h-14 bg-white p-1 rounded-lg drop-shadow-lg"
              />
              <div className="flex flex-col justify-center">
                <h4 className="text-2xl text-[#00245F] font-manrope font-semibold">
                  7001+
                </h4>
                <p className="font-manrope text-base text-[#05131DB2]">
                  Provide tailored
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative w-full md:w-1/2 flex justify-end ">
          <img
            src="https://res.cloudinary.com/dcgreqowu/image/upload/v1746034841/image_nmf19t.png"
            alt="Hero"
            className="md:w-[500px] md:h-[500px] lg:w-[90%] lg:h-[95%]"
          />
          <div className="absolute -bottom-10 md:-bottom-1 left-3 lg:-left-10 bg-white drop-shadow-lg p-4 flex flex-col gap-6 rounded-lg max-w-[60%]">
            <div className="flex justify-between">
              <h4 className="text-base lg:text-[32px] text-[#00245F] font-manrope font-semibold">
                721+
              </h4>
              <h4 className="text-base lg:text-[32px] text-[#00245F] font-manrope font-semibold">
                1000+
              </h4>
            </div>
            <h4 className="text-base lg:text-xl text-[#05131D] font-poppins font-semibold">
              Growth is our priority.
            </h4>
            <p className="text-sm lg:text-base text-[#05131DB2]">
              As a full-service business agency, we specialize in helping
              companies of all sizes optimize their operations
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

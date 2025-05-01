const BlurBlob = ({ position }) => {
  const positions = {
    topLeft: "-top-60 -left-10",
    bottomLeft: "bottom-0 left-0",
  };

  return (
    <div
      className={`absolute ${positions[position]} w-[500px] h-[500px] rounded-full pointer-events-none z-[-1]`}
      style={{
        background: "linear-gradient(135deg,  #6797FF 60%,#FF6FB9 40%)",
        filter: "blur(300px)",
      }}
    ></div>
  );
};

export default BlurBlob;
